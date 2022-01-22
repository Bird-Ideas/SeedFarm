// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

abstract contract ERC1155Receiver is ERC165, IERC1155Receiver {
     function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC1155Receiver).interfaceId || super.supportsInterface(interfaceId);
    }
}

contract SeedItemReceiver is ERC1155Receiver {

    uint256 successfulTransactions;  
    mapping(address => mapping(uint256 => uint256)) private _funds; 
    mapping(address => bool) private _isSpecialCollected; 

     function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) public virtual override returns (bytes4) {
        _funds[from][id] = value; 
        isSpecialCollected(from); 
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
        isSpecialCollected(from); 
        return this.onERC1155BatchReceived.selector;
    }
    
    function isSpecialCollected(address account) public returns (bool) {
        if (_funds[account][0] == 4 && 
            _funds[account][1] == 2 && 
            _funds[account][2] == 1 && 
            _funds[account][3] == 2 && 
            _funds[account][4] == 3)
        _isSpecialCollected[account] = true; 
        return true; 
    }

}