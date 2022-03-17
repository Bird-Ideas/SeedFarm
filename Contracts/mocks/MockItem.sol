// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract MockItem is ERC1155, Ownable {
    uint8 private constant wood = 0; 
    uint8 private constant nails = 1; 
    uint8 private constant rope = 2; 
    uint8 private constant glass = 3; 
    uint8 private constant hay = 4; 
    uint8 private totalItems = 5; 

    address private _builder; 

    mapping(uint256 => uint256) private _maxSupply; 
    mapping(uint256 => uint256) private _totalSupply; 


    constructor(address to) ERC1155("https://sneedfarm.tech/{id}.json") {
        _maxSupply[wood] = 1000;  
        _maxSupply[nails] = 1000; 
        _maxSupply[rope] = 1000; 
        _maxSupply[glass] = 1000; 
        _maxSupply[hay] = 1000;       
        _mint(to, wood, 100, ''); 
        _mint(to, nails, 100, ''); 
        _mint(to, rope, 100, ''); 
        _mint(to, glass, 100, ''); 
        _mint(to, hay, 100, ''); 
    }

    function setBuilder(address builder) external onlyOwner {
        _builder = builder; 
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
 
    function mint(address account, uint256 amount) 
        public onlyOwnerBuilder returns (bool) {
        uint256 id = _randomValue(); 
        _mint(account, id, amount, ''); 
        return true; 
    }

    function increaseMaxSupply(uint256 id, uint256 max) external 
        onlyOwner returns (bool) {

        _maxSupply[id] = max; 
        return true; 
    }

    function maxSupply(uint256 id) external view returns (uint256) {
        return _maxSupply[id]; 
    }
    
    function totalSupply(uint256 id) public view returns (uint256) {
        return _totalSupply[id];
    }

     function _randomValue() internal view returns (uint256)
    {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty,  
        msg.sender))) % totalItems;
    }

    modifier onlyOwnerBuilder {
        require(
            msg.sender == owner() || 
            msg.sender == _msgSender(), 
        "Can't call owner function"); 
        _; 
    }
    
}
