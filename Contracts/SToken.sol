// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SToken is ERC20, Ownable {
    
    constructor() ERC20("SneedFarmToken", "STOK") {}
    
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount); 
    }
    
    function _transferOwnership(address newOwner) public onlyOwner { 
        transferOwnership(newOwner); 
    }
}