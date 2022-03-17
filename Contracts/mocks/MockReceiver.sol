// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "../Builder.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract MockReceiver is Ownable { 

    address private _builder; 

    function setBuilder(address builder) external onlyOwner {
        _builder = builder; 
    }

    function collectSpecial(address account, uint8 _pos) external returns (bool) {
        Builder(_builder).collectSpecial(account, _pos); 
        return true; 
    }
}