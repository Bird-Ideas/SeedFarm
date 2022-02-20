// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 
import "./Builder.sol";
import "./SeedItem.sol"; 


abstract contract ERC1155Receiver is ERC165, IERC1155Receiver {
     function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC1155Receiver).interfaceId || super.supportsInterface(interfaceId);
    }
}

contract SeedItemReceiver is ERC1155Receiver, Ownable {

    mapping(address => mapping(uint256 => uint256)) private _funds; 
    mapping(address => bool) private _isSpecialCollected; 
    address private _builder; 
    address private _item;

    function setBuilder(address builder) external onlyOwner {
        _builder = builder; 
    }

    function setItem(address item) external onlyOwner {
        _item = item; 
    }

     function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) public virtual override returns (bytes4) {
        _funds[from][id] = value; 
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] memory ids,
        uint256[] memory values,
        bytes memory data
    ) public virtual override returns (bytes4) {
        for(uint256 i = 0; i < ids.length; ++i) {
            _funds[from][ids[i]] = values[i]; 
        }
        return this.onERC1155BatchReceived.selector;
    }

    function funds(address account, uint256 id) external view returns (uint256) {
        return _funds[account][id];
    } 
    
    function isSpecialCollected(address account) public view returns (bool) {
        return _isSpecialCollected[account]; 
    }
    function collectSpecial(address account, uint8 _pos) public 
        specialNotCollected returns (bool) {
        if (_funds[account][0] + _funds[account][1] 
            + _funds[account][2] + _funds[account][3] 
            + _funds[account][4] < 3) revert("Not enough NFTs collected");   
        _isSpecialCollected[account] = true;
        Builder(_builder).collectSpecial(account, _pos); 
        return true; 
    }

    modifier specialNotCollected() {
        require(_isSpecialCollected[msg.sender] != true, 
        "You have already collected special. "); 
        _; 
    }
}