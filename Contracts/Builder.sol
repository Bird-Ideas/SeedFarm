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

    constructor(ISeedToken _SEED) {
        owner = msg.sender; 

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

        staked[msg.sender] += structures[_sId].price;  
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
        if(currentStruct == 0) revert("Empty tile"); 

        withdrawTileYield(_pos, currentStruct); 
        payable(msg.sender).transfer(structures[currentStruct].price); 

        map[msg.sender][_pos] = 0; 
        housesCount[msg.sender]--; 
        if(housesCount[msg.sender] == 0) {
            isStaking[msg.sender] = false;    
        }

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

        uint8 currentStruct = map[msg.sender][_pos]; 
        if(currentStruct == 0) revert("Empty tile"); 

        uint256 timeStaked = calculateYieldTime(
            stakedTime[msg.sender][_pos], 
            structures[_sId].time
        ); 
        stakedTime[msg.sender][_pos] = 0; 
        
        uint256 reward = calculateReward(
            timeStaked, 
            _sId
        );  
        SEED.mint(msg.sender, reward); 

        emit YieldWithdraw(msg.sender); 

        return true; 
    }

    function pendingYield(uint8 _pos, uint8 _sId) external  
    staking returns (uint256) {
        
    }

    /**
     * @dev Returns time while structure was accumulating tokens. 
     */

    function calculateYieldTime(uint256 start, uint256 bound) public
          returns (uint256) {
        uint256 yieldTime = block.timestamp - start; 
        emit calculatedYield(start, block.timestamp); 
        return (yieldTime > bound) ? bound : yieldTime; 
    } 
    event calculatedYield(uint256 start, uint256 end); 
    /**
     * @dev Returns amount of yield from a structure. 
     */

    function calculateReward(uint256 _stkTime, uint8 _sId) internal 
    view returns (uint256) {
        uint256 reward =  _stkTime * structures[_sId].rate;
        return reward; 
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
     * @dev Returns isStaking mapping. 
     */

    function getIsStaking() external view returns (bool) {
        return isStaking[msg.sender]; 
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

     function isReadyForWithdraw(uint8 _pos) external returns (bool) {
         uint8 currentStruct = map[msg.sender][_pos]; 
         if(currentStruct == 0) revert("Empty tile");  

         return (calculateYieldTime(
            stakedTime[msg.sender][_pos], 
            structures[currentStruct].time
            ) == structures[currentStruct].time); 
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
     * @dev Requires price to be in price mapping. 
     */

    modifier priced(uint8 _sId) {
        require(msg.value == structures[_sId].price, 
        "Different value attached");
        _; 
    }

    /**
     * @dev Requires price to be in price mapping. 
     */

    modifier unique(uint8 _pos, uint8 _sId) {
        require(map[msg.sender][_pos] != _sId,
        "You have already built this and here"); 
        _; 
    }

    /**
     * @dev Requires price to be in price mapping. 
     */

    modifier staking() {
        require(isStaking[msg.sender] == true, 
        "You can't withdraw if you didn't stake"); 
        _; 
    }


    event Stake(address indexed from, uint256 amount); 
    event Unstake(address indexed from, uint256 amount); 
    event YieldWithdraw(address indexed from); 
}