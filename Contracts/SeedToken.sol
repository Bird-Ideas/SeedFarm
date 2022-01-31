// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SeedToken is ERC20, Ownable {
    
    uint256 private constant _maxSupply = 125 * (10 ** 6) * 10 ** 18; 

    constructor() ERC20("SeedToken", "NEED") {
        mint(msg.sender, 3000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) onlyOwner public {
        require(totalSupply() + amount < _maxSupply, "Maximum of tokens minted"); 
        _mint(to, amount); 
    }

    function maxSupply() external pure returns (uint256) {
        return _maxSupply; 
    }

}