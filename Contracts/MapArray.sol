// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 

contract MapArray { 

    mapping(address => uint8[81]) public maps; 

    function addPlayer() external returns (bool) { 
        uint8[81] memory newMap; 
        maps[msg.sender] = newMap;  
        return true; 
    }

    function getMap() external view returns (uint8[81] memory) { 
        return maps[msg.sender]; 
    }

    function setPosition(uint8 pos, uint8 value) external returns (bool) {
        maps[msg.sender][pos] = value; 
        return true; 
    }
}