// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol"; 
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "./SeedToken.sol"; 
import "./SeedItem.sol";

    /**
     * @dev Contract for game handling.
     * Places buildings on map, stakes $ONE tokens and 
     * mints rewards for farmers. Each player has 81 
     * tiles where they can build. Each tile has a timestamp 
     * making each building independent farming unit.  
     */

contract Builder { 

    address public _owner; 
    address private _SEED;
    address private _SEEDITEM; 
    address private _receiver;
    address private _treasury;  

    uint8 private _yieldWithdrawFee = 8;
    
    uint256 private _genesisBlock; 

    mapping(uint => Structure) public _structures; 

    mapping(address => Player) public _players; 

    struct Player {
        bool isStaking;
        bool specialCollected; 
        uint8 housesCount; 
        uint8[81] map;  
        uint256 staked; 
        mapping(uint8 => uint256) stakingStart; 
        mapping(uint8 => uint256) lockedUntil;  
    }
    
    /**
     * @dev Saves data about structure's price and farming time. 
     */ 
    struct Structure {
        uint256 price; 
        uint256 time;
        uint256 rate; 
        uint256 lock; 
    } 

    uint8 private special = 200; 
  
    /** 
     * @dev Sets contract address for {ONE} and {SEED} tokens. 
     * 
     * {_structures} is initialized with available structures. 
     */

    constructor(address SEED,
                address SEEDITEM,
                address receiver,
                address treasury) {
        _owner = msg.sender; 

        _SEED = SEED; 
        _SEEDITEM = SEEDITEM; 
        _receiver = receiver; 
         
        _treasury = treasury; 

        _genesisBlock = block.number; 

        Structure storage house = _structures[1]; 
        house.price = 0.1 ether; 
        house.time = 4 hours; 
        house.rate = 1 ether; 
        house.lock = 7 days; 

    }

    // =======================================
    // =========STAKING FUNCTIONS============= 
    // =======================================

    /**
     * @dev Places a new structure on the map and sets up farming. 
     * 
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Stake} event.
     *
     * Requirements:
     *
     * - value attached must be equal to `_sid' price. 
     * - `_sId` at `_pos` must be different from current value.
     */

    function placeStructure(uint8 _pos, uint8 _sId) external 
        priced(_sId) unique(_pos, _sId) payable returns (bool) {
        
        Player storage currentPlayer = _players[msg.sender];  
        if(currentPlayer.isStaking == false) {
            currentPlayer.isStaking = true; 
        }
        currentPlayer.map[_pos] = _sId; 
        currentPlayer.housesCount++; 
        currentPlayer.staked += _structures[_sId].price; 
        currentPlayer.stakingStart[_pos] = block.timestamp; 
        currentPlayer.lockedUntil[_pos] = block.timestamp + _structures[_sId].lock; 
        SeedItem(_SEEDITEM).mint(msg.sender, 1); 

        emit Stake(msg.sender, msg.value);
        return true; 
    }

     /**
     * @dev Removes a structure from the map, stops farming, returns
     * staked tokens.  
     * 
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits an {Unstake} event.
     *
     * Requirements:
     *
     * - sender must have tokens staked. 
     */

    function removeStructure(uint8 _pos) external 
        staking notEmpty(_pos) notSpecial(_pos) returns (bool) {

        Player storage currentPlayer = _players[msg.sender];
        uint8 currentStruct = currentPlayer.map[_pos];  
        
        withdrawTileYield(_pos, currentStruct);
        payable(msg.sender).transfer(_structures[currentStruct].price); 

        currentPlayer.map[_pos] = 0; 
        currentPlayer.housesCount--; 
        currentPlayer.staked -= _structures[currentStruct].price; 
        if(currentPlayer.housesCount == 0) {
            currentPlayer.isStaking = false;     
        }

        emit Unstake(msg.sender, _structures[currentStruct].price); 
        return true; 
    }

    /**
     * @dev Withdraw yield of {Seed} from the structure. 
     * 
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {YieldWithdraw} event.
     *
     * Requirements:
     *
     * - sender must have tokens staked. 
     */

    function withdrawTileYield(uint8 _pos, uint8 _sId) public 
        staking notEmpty(_pos) notSpecial(_pos) returns (bool) {
        
        Player storage currentPlayer = _players[msg.sender];

        uint256 reward = pendingYield(_pos, _sId); 
        currentPlayer.stakingStart[_pos] = block.timestamp; 
        uint256 fee = reward * _yieldWithdrawFee / 100; 
        SeedToken(_SEED).mint(msg.sender, reward - fee); 
        SeedToken(_SEED).mint(_treasury, fee); 

        emit YieldWithdraw(msg.sender, reward, fee); 
        return true; 
    }

    /**
     * @dev Returns amount of tokens accumulated so far. 
     */ 

    function pendingYield(uint8 _pos, uint8 _sId) public   
        staking view returns (uint256) {
        
        uint256 timeStaked = calculateYieldTime(
            _players[msg.sender].stakingStart[_pos], 
            _structures[_sId].time
        ); 
        
        uint256 reward = calculateReward(
            _structures[_sId], 
            timeStaked, 
            _players[msg.sender].specialCollected
        ); 
        return reward; 
    }

    /**
     * @dev Returns time while structure was accumulating tokens. 
     *
     * @notice This function uses block.timestamp! Don't forget
     * about it when testing on a local blockchain!
     */

    function calculateYieldTime(uint256 start, uint256 bound) internal
        view returns (uint256) {
        uint256 yieldTime = block.timestamp - start; 
        return (yieldTime > bound) ? bound : yieldTime; 
    } 
    /**
     * @dev Returns amount of yield from a structure. 
     */  

    function calculateReward(
        Structure memory _struct, 
        uint256 _stkTime, 
        bool isSpecial
        ) internal pure returns (uint256) {
        uint256 reward =  (_stkTime * _struct.rate);
        if(isSpecial == true) {
            reward = reward * 110 / 100; 
        }
        return reward; 
    }

    // =======================================
    // ===========NFT COLLECTING============== 
    // =======================================

    function collectSpecial(address _player, uint8 _pos) external onlyReceiver returns (bool) {
        Player storage man = _players[_player]; 
        man.specialCollected = true; 
        man.map[_pos] = special; 
        return true; 
    }

    // =======================================
    // ===========GAME MANAGEMENT=============
    // =======================================

    /**
     * @dev Adds new game structure
     *
     */
     function addStructure(uint8 _sId, uint256 price, 
        uint256 rate, uint256 time, uint256 lock) external 
        onlyOwner returns (bool) {

        Structure memory newStruct = Structure(price, rate, time, lock); 
        _structures[_sId] = newStruct; 

        return true; 
     }

    /**
     * @dev Returns player's gamemap. 
     */

    function getMap() external view returns (uint8[81] memory) { 
        return _players[msg.sender].map; 
    }

     /**
     * @dev Returns amount of built houses. 
     */

    function getHouses() external view returns (uint256) {
        return _players[msg.sender].housesCount; 
    }    

    /**
     * @dev Returns in-game structure.   
     */

    function getStructure(uint _sId) external view returns (Structure memory) {
        return _structures[_sId]; 
    }

    /**
     * @dev Returns isStaking mapping. 
     */

    function getIsStaking() external view returns (bool) {
        return _players[msg.sender].isStaking; 
    }

    /**
     * @dev Returns amount of staked tokens. 
     */

    function getStaked() external view returns (uint256) {
        return _players[msg.sender].staked; 
    }

    /**
     * @dev Returns time when structure was staked. 
     */

    function getStakedTime(uint8 _pos) external view returns (uint256) {
        return _players[msg.sender].stakingStart[_pos]; 
    }  

    /**
     * @dev Returns boolean whether building finished accumulating
     * tokens or not.  
     */

     function isReadyForWithdraw(uint8 _pos, uint8 _sId) external 
        view notEmpty(_pos) returns (bool) {
        uint256 yieldTime = calculateYieldTime(
            _players[msg.sender].stakingStart[_pos], 
            _structures[_sId].time); 
        return (yieldTime == _structures[_sId].time); 
     }

    /**
     * @dev Requires sender to be owner.  
     */

    modifier onlyOwner {
        require(msg.sender == _owner, 
        "Can't call owner function"); 
        _; 
    }

    /** 
     * @notice 
     */ 

    modifier onlyReceiver { 
        require(msg.sender == _receiver, 
        "Can't call receiver function"); 
        _; 
    }

    /**
     * @dev Requires price to be in price mapping. 
     */

    modifier priced(uint8 _sId) {
        require(msg.value == _structures[_sId].price, 
        "Different value attached");
        _; 
    }

    /**
     * @dev Requires building to differ from placed one. 
     */

    modifier unique(uint8 _pos, uint8 _sId) {
        require(_players[msg.sender].map[_pos] != _sId,
        "You have already built this and here"); 
        _; 
    }

    /**
     * @dev Requires building not to be special. 
     */

    modifier notSpecial(uint8 _pos) {
        require(_players[msg.sender].map[_pos] != special, 
        "You cannot perform actions on special"); 
        _; 
    }

    /**
     * @dev Requires price to be in price mapping. 
     */

    modifier staking() {
        require(_players[msg.sender].isStaking == true, 
        "You can't withdraw if you didn't stake"); 
        _; 
    }

    /** 
     * @dev Requires map position not to be empty
     */ 

    modifier notEmpty(uint8 _pos) {
        require(_players[msg.sender].map[_pos] != 0, 
        "Tile cannot be empty");
        _; 
    }

    /**
     * @dev Requires funds to be withdrawn later than initial lock
     */

    modifier notLocked(uint8 _pos){
        require(block.timestamp > _players[msg.sender].lockedUntil[_pos], 
        "Funds are locked"); 
        _; 
    }
 
    event Stake(address indexed from, uint256 amount); 
    event Unstake(address indexed from, uint256 amount); 
    event YieldWithdraw(address indexed from, uint256 amount, uint256 fee); 
}