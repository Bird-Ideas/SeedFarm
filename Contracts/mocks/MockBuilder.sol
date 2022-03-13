// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 

contract MockBuilder { 

    address private _receiver; 
    mapping(address => bool) _isSpecial; 
    mapping(address => mapping(uint8 => uint8)) _map; 

    uint8 special = 200; 

    constructor(address receiver) {
        _receiver = receiver; 
    }

    function collectSpecial(address _player, uint8 _pos) external onlyReceiver returns (bool) {
        _isSpecial[_player] = true; 
        _map[_player][_pos] = special; 
        return true; 
    }

    function isSpecial(address _player) external view returns (bool) {
        return _isSpecial[_player]; 
    }

    function map(address _player, uint8 _pos) external view returns (uint8) {
        return _map[_player][_pos]; 
    }

    modifier onlyReceiver { 
        require(msg.sender == _receiver, 
        "Can't call receiver function"); 
        _; 
    }

}