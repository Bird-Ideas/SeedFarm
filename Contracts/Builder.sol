// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 

contract Builder { 

    address owner; 

    mapping(uint8 => uint256) public prices; 

    mapping(address => uint8[81]) public maps; 
    mapping(address => uint256) public staked;
    mapping(address => uint256) public housesCount;  

    constructor() {
        prices[1] = 0.1 ether; 
    }

    function setPosition(uint8 _pos, uint8 _bId) external 
        priced(_bId) payable returns (bool) {
        
        require(maps[msg.sender][_pos] != _bId, 
            "Building already placed."); 

        maps[msg.sender][_pos] = _bId; 
        staked[msg.sender] += prices[_bId];
        housesCount[msg.sender]++; 
        return true; 
    }

    
    function getMap() external view returns (uint8[81] memory) { 
        return maps[msg.sender]; 
    }

    function getStaked() external view returns (uint256) {
        return staked[msg.sender]; 
    }

    function getHouses() external view returns (uint256) {
        return housesCount[msg.sender]; 
    }

/*
    modifier onlyOwner {
        require(msg.sender == owner); 
        _; 
    }
*/ 

    modifier priced(uint8 _bId) {
        require(msg.value == prices[_bId], 
        'Different value attached');
        _; 
    }

}