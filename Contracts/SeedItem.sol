// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract SeedItem is ERC1155, Ownable {
    uint256 private constant wood = 0; 
    uint256 private constant nails = 1; 
    uint256 private constant rope = 2; 
    uint256 private constant glass = 3; 
    uint256 private constant hay = 4; 
    mapping(uint256 => uint256) private _maxSupply; 
    mapping(uint256 => uint256) private _totalSupply; 

    uint256 private counter; 
    uint8 totalItems = 5; 


    constructor() ERC1155("https://sneedfarm.tech/{id}.json") {
        _maxSupply[wood] = 200;  
        _maxSupply[nails] = 300; 
        _maxSupply[rope] = 150; 
        _maxSupply[glass] = 300; 
        _maxSupply[hay] = 150;       
        _mint(msg.sender, wood, 100, ''); 
        _mint(msg.sender, nails, 100, ''); 
        _mint(msg.sender, rope, 100, ''); 
        _mint(msg.sender, glass, 100, ''); 
        _mint(msg.sender, hay, 100, ''); 
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

     function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);

        if (from == address(0)) {
            for (uint256 i = 0; i < ids.length; ++i) {
                if(_totalSupply[ids[i]] + amounts[i] > _maxSupply[ids[i]]) {
                    revert("Total supply bigger than maximum supply");
                }
                _totalSupply[ids[i]] += amounts[i];
            }
        }

        if (to == address(0)) {
            for (uint256 i = 0; i < ids.length; ++i) {
                if(_totalSupply[ids[i]] < amounts[i]) {
                    _totalSupply[ids[i]] = 0; 
                } else {
                    _totalSupply[ids[i]] -= amounts[i];
                }
            }
        }
    }
 
    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public onlyOwner returns (bool)
    {
        _mint(account, id, amount, data);
        return true; 
    }

    function mint(address account, uint256 amount) 
        public onlyOwner returns (bool)
    {
        uint256 id = randomValue(); 
        _mint(account, id, amount, ''); 
        return true; 
    }

    function randomValue() internal view returns (uint256)
    {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty,  
        msg.sender))) % totalItems;
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public onlyOwner returns (bool)
    {
        _mintBatch(to, ids, amounts, data);
        return true; 
    }

    function maxSupply(uint256 id) external view returns (uint256) {
        return _maxSupply[id]; 
    }
    
    function totalSupply(uint256 id) public view returns (uint256) {
        return _totalSupply[id];
    }
    
}
