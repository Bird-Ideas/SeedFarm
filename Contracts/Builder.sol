// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 

import "./SeedToken.sol"; 
import "./ISeedToken.sol"; 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    /**
     * @dev Contract for game handling.
     * Places buildings on map, stakes $ONE tokens and 
     * mints rewards for farmers. Each player has 81 
     * tiles where they can build. Each tile has a timestamp 
     * making each building independent farming unit.  
     */

contract Builder { 

    address public owner; 

    mapping(address => uint8[81]) public map; 
    mapping(address => uint256) public housesCount;  
    mapping(uint => Structure) public structures; 

    mapping(address => bool) public isStaking; 
    mapping(address => uint256) public staked;
    mapping(address => uint256[81]) public stakedTime; 

    ERC20 public ONE; 
    ISeedToken public SEED; 
    
    /**
     * @dev Saves data about structure's price and farming time. 
     */ 
    struct Structure {
        uint256 price; 
        uint256 time;
        uint256 rate; 
    } 
  

    /** 
     * @dev Sets contract address for {ONE} and {SEED} tokens. 
     * 
     * {structures} is initialized with available structures. 
     */

    constructor(
        ERC20 _ONE, 
        ISeedToken _SEED
    ) {
        owner = msg.sender; 

        ONE = _ONE; 
        SEED = _SEED; 

        Structure storage house = structures[1]; 
        house.price = 0.1 ether; 
        house.time = 4 hours; 
        house.rate = 1 ether; 
    }

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
        
        if(isStaking[msg.sender] == false) {
            isStaking[msg.sender] = true;            
        }

        map[msg.sender][_pos] = _sId; 
        housesCount[msg.sender]++; 

        stakedTime[msg.sender][_pos] = block.timestamp; 

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
        staking returns (bool) {

        uint8 currentStruct = map[msg.sender][_pos]; 
        if(currentStruct == 0) return false; 

        withdrawTileYield(_pos, currentStruct); 
        ONE.transfer(msg.sender, structures[currentStruct].price); 

        emit Unstake(msg.sender, structures[currentStruct].price); 
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
        staking returns (bool) {
        
        uint256 reward = calculateReward(_pos, _sId);  
        SEED.mint(msg.sender, reward); 

        emit YieldWithdraw(msg.sender); 

        return true; 
    }
    
    /**
     * @dev Returns amount of yield from a structure. 
     */

     function calculateReward(uint8 _pos, uint8 _sId) public view returns (uint256) {
        uint256 farmingTime = calculateYieldTime(_pos, _sId); 
        uint256 reward = structures[_sId].rate * farmingTime;
        return reward; 
    }

    /**
     * @dev Returns time while structure was accumulating tokens. 
     */

    function calculateYieldTime(uint8 _pos, uint8 _sId) internal view returns (uint256) {
        uint256 end = block.timestamp;
        uint256 yieldTime = end - stakedTime[msg.sender][_pos]; 
        return (yieldTime > structures[_sId].time) ? structures[_sId].time : yieldTime; 
    } 


    /**
     * @dev Returns player's gamemap. 
     */

    function getMap() external view returns (uint8[81] memory) { 
        return map[msg.sender]; 
    }

     /**
     * @dev Returns amount of built houses. 
     */

    function getHouses() external view returns (uint256) {
        return housesCount[msg.sender]; 
    }    

    /**
     * @dev Returns in-game structure.   
     */

    function getStructure(uint _sId) external view returns (Structure memory) {
        return structures[_sId]; 
    }

    /**
     * @dev Returns amount of staked tokens. 
     */

    function getStaked() external view returns (uint256) {
        return staked[msg.sender]; 
    }

    /**
     * @dev Returns time when structure was staked. 
     */

    function getStakedTime(uint8 _pos) external view returns (uint256) {
        return stakedTime[msg.sender][_pos]; 
    }  

    /**
     * @dev Returns boolean whether building finished accumulating
     * tokens or not.  
     */

     function isReadyForWithdraw(uint8 _pos) external view returns (bool) {
         uint8 currentStruct = map[msg.sender][_pos]; 
         if(currentStruct == 0) return false; 
         return (calculateYieldTime(_pos, currentStruct) 
            == structures[currentStruct].time); 
     }

    /**
     * @dev Requires sender to be owner.  
     */

    modifier onlyOwner {
        require(msg.sender == owner, 
        "Can't call owner function"); 
        _; 
    }

    /**
     * @dev Requires 
     */

    modifier priced(uint8 _sId) {
        require(msg.value == structures[_sId].price, 
        "Different value attached");
        _; 
    }

    modifier unique(uint8 _pos, uint8 _sId) {
        require(map[msg.sender][_pos] != _sId,
        "You have already built this and here"); 
        _; 
    }

    modifier staking() {
        require(isStaking[msg.sender] == true, 
        "You can't withdraw if you didn't stake"); 
        _; 
    }


    event Stake(address indexed from, uint256 amount); 
    event Unstake(address indexed from, uint256 amount); 
    event YieldWithdraw(address indexed from); 
}