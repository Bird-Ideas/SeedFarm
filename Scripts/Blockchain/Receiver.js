export default {
	"contractName": "SeedItemReceiver",
	"abi": [
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "previousOwner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "OwnershipTransferred",
		"type": "event"
	  },
	  {
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "bytes4",
			"name": "interfaceId",
			"type": "bytes4"
		  }
		],
		"name": "supportsInterface",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		  }
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "builder",
			"type": "address"
		  }
		],
		"name": "setBuilder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "item",
			"type": "address"
		  }
		],
		"name": "setItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "operator",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "id",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		  },
		  {
			"internalType": "bytes",
			"name": "data",
			"type": "bytes"
		  }
		],
		"name": "onERC1155Received",
		"outputs": [
		  {
			"internalType": "bytes4",
			"name": "",
			"type": "bytes4"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "operator",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"internalType": "uint256[]",
			"name": "ids",
			"type": "uint256[]"
		  },
		  {
			"internalType": "uint256[]",
			"name": "values",
			"type": "uint256[]"
		  },
		  {
			"internalType": "bytes",
			"name": "data",
			"type": "bytes"
		  }
		],
		"name": "onERC1155BatchReceived",
		"outputs": [
		  {
			"internalType": "bytes4",
			"name": "",
			"type": "bytes4"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "id",
			"type": "uint256"
		  }
		],
		"name": "funds",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "isSpecialCollected",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint8",
			"name": "_pos",
			"type": "uint8"
		  }
		],
		"name": "collectSpecial",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	],
	"metadata": "{\"compiler\":{\"version\":\"0.8.7+commit.e28d00a7\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"_pos\",\"type\":\"uint8\"}],\"name\":\"collectSpecial\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"funds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isSpecialCollected\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"builder\",\"type\":\"address\"}],\"name\":\"setBuilder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"item\",\"type\":\"address\"}],\"name\":\"setItem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` (i.e. 0xbc197c81, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"ids\":\"An array containing ids of each token being transferred (order and length must match values array)\",\"operator\":\"The address which initiated the batch transfer (i.e. msg.sender)\",\"values\":\"An array containing amounts of each token being transferred (order and length must match ids array)\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\"}},\"onERC1155Received(address,address,uint256,uint256,bytes)\":{\"details\":\"Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` (i.e. 0xf23a6e61, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"id\":\"The ID of the token being transferred\",\"operator\":\"The address which initiated the transfer (i.e. msg.sender)\",\"value\":\"The amount of tokens being transferred\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Github/SeedFarm/contracts/SeedItemReceiver.sol\":\"SeedItemReceiver\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1200},\"remappings\":[]},\"sources\":{\"/C/Github/SeedFarm/contracts/Builder.sol\":{\"keccak256\":\"0xce62776b29b246ba99c4b98b980c1afff3f09e2fde27a51753c89128ddacc449\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://448ec2f32f52570b5b3db2282b3a244cd3dc0983419904243aaefda18b314ef6\",\"dweb:/ipfs/QmYt2jRkRbqQmQFNkTsU8U1PSVV7NLusdcddjWgxoktuud\"]},\"/C/Github/SeedFarm/contracts/SeedItem.sol\":{\"keccak256\":\"0xfdd8c014114e0c4f0a62c374919bf5b9c8eefb54e9e368510ba72f1de7e1ece6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59fc2f348646ea3ee4c764aa55d354af53c609265f650fc8ed2639b6e4afdcb3\",\"dweb:/ipfs/QmZTBnQHuz4yLzz7Vn8diZTvbmcnjgWvZygndo3bN2p5xz\"]},\"/C/Github/SeedFarm/contracts/SeedItemReceiver.sol\":{\"keccak256\":\"0x5eadc8cb25fe9b1adca773a9334dd0d7140e81a0b819ecb59d285d09af20e7ac\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f8ffe30ab93e07908eb0c9cd72a54fa7160c11ee03c4234ccbf7a2aad535e674\",\"dweb:/ipfs/QmRgMuoEDesjdXwRhvkuE3EbPG7ch48RxST153apNTAHdi\"]},\"/C/Github/SeedFarm/contracts/SeedToken.sol\":{\"keccak256\":\"0x767a2ea2c3a8530ef41e05f9b2273237046bda2c1d2a6e8b58622d76c3d51e35\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://5c697264000646167a04829219fc5733d9028f30bf5725784982012af875d830\",\"dweb:/ipfs/QmeTdrRsgmnuqdj9vG9VkZUR71MxuQHvd4Rd8RbTjrWxCb\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981\",\"dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0x04d6d1342ece664085921a4fabc928a7bcf1cf2873fa81780f61a54dc2b9b66e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6d2b052effa2e9a7479b0fea53b46f4cbbd91947848ef632aadad20ae2e9275\",\"dweb:/ipfs/QmcZp7f5cooGZrhHE8RC1yQR53RFZt19d5fyVqNfbHmPgY\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x8e93de94c9062ebc94fb7e2e3929b0781ac6a2b7772e2f7a59045861c93e5be9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f920a631bf986c610fe573d3c70a2bb6f224f86f4a8550016470c7ee476c9ab5\",\"dweb:/ipfs/QmYzsyVMfnaREKHcHv5RPS8Xg5r1Q38E2SDsGBTnXeFWzb\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e28648f994abf1d6bc345644a361cc0b7efa544f8bc0c8ec26011fed85a91ec\",\"dweb:/ipfs/QmVVE7AiRjKaQYYji7TkjmTeVzGpNmms5eoxqTCfvvpj6D\"]},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e46c80ea068989111d6103e5521223f9ef337e93de76deed8b03f75c6f7b2797\",\"dweb:/ipfs/QmNoSE6knNfFncdDDLTb3fGR6oSQty1srG96Vsx3E9wQdw\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xdadd41acb749920eccf40aeaa8d291adf9751399a7343561bad13e7a8d99be0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://12af4ac016f9fdf3be5d15824f4292272aa11f6b2e0192a0f7320f5ad49bbbf0\",\"dweb:/ipfs/QmRXMpdqCgA3TYuYxBodqs5p9jGbnMW6xa2gvjppvq4TWk\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xbbc8ac883ac3c0078ce5ad3e288fbb3ffcc8a30c3a98c0fda0114d64fc44fca2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87a7a5d2f6f63f84598af02b8c50ca2df2631cb8ba2453e8d95fcb17e4be9824\",\"dweb:/ipfs/QmR76hqtAcRqoFj33tmNjcWTLrgNsAaakYwnKZ8zoJtKei\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x2ccf9d2313a313d41a791505f2b5abfdc62191b5d4334f7f7a82691c088a1c87\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3a57d0854b2fdce6ebff933a48dca2445643d1eccfc27f00292e937f26c6a58\",\"dweb:/ipfs/QmW45rZooS9TqR4YXUbjRbtf2Bpb5ouSarBvfW1LdGprvV\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
	"bytecode": "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610c458061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80638da5cb5b11610081578063f09d39e31161005b578063f09d39e3146101c4578063f23a6e61146101f0578063f2fde38b1461024a57600080fd5b80638da5cb5b1461016a578063bc197c8114610185578063e9638298146101b157600080fd5b80636c6d6a17116100b25780636c6d6a171461010b578063715018a61461011e57806388b22c241461012657600080fd5b806301ffc9a7146100ce578063165ed276146100f6575b600080fd5b6100e16100dc366004610b3f565b61025d565b60405190151581526020015b60405180910390f35b6101096101043660046108ee565b6102c6565b005b6101096101193660046108ee565b610354565b6101096103dd565b61015c610134366004610ab6565b6001600160a01b03919091166000908152600160209081526040808320938352929052205490565b6040519081526020016100ed565b6000546040516001600160a01b0390911681526020016100ed565b610198610193366004610910565b610443565b6040516001600160e01b031990911681526020016100ed565b6100e16101bf366004610ae0565b6104fa565b6100e16101d23660046108ee565b6001600160a01b031660009081526002602052604090205460ff1690565b6101986101fe366004610a10565b50506001600160a01b039290921660009081526001602090815260408083209383529290522055507ff23a6e610000000000000000000000000000000000000000000000000000000090565b6101096102583660046108ee565b61070d565b60006001600160e01b031982167f4e2312e00000000000000000000000000000000000000000000000000000000014806102c057507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6000546001600160a01b031633146103255760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146103ae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031c565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146104375760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031c565b61044160006107ef565b565b6000805b84518110156104ce5783818151811061046257610462610be3565b602002602001015160016000886001600160a01b03166001600160a01b0316815260200190815260200160002060008784815181106104a3576104a3610be3565b6020026020010151815260200190815260200160002081905550806104c790610bb2565b9050610447565b507fbc197c81000000000000000000000000000000000000000000000000000000009695505050505050565b3360009081526002602052604081205460ff161515600114156105845760405162461bcd60e51b8152602060048201526024808201527f596f75206861766520616c726561647920636f6c6c656374656420737065636960448201527f616c2e2000000000000000000000000000000000000000000000000000000000606482015260840161031c565b6001600160a01b0383166000908152600160208181526040808420600485529091528083205460038085528285205460028652838620549486528386205486805293909520549094919391926105d991610b9a565b6105e39190610b9a565b6105ed9190610b9a565b6105f79190610b9a565b10156106455760405162461bcd60e51b815260206004820152601960248201527f4e6f7420656e6f756768204e46547320636f6c6c656374656400000000000000604482015260640161031c565b6001600160a01b0383811660008181526002602052604090819020805460ff1916600117905560035490517fe9638298000000000000000000000000000000000000000000000000000000008152600481019290925260ff851660248301529091169063e963829890604401602060405180830381600087803b1580156106cb57600080fd5b505af11580156106df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107039190610b1d565b5060019392505050565b6000546001600160a01b031633146107675760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031c565b6001600160a01b0381166107e35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161031c565b6107ec816107ef565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461086357600080fd5b919050565b600082601f83011261087957600080fd5b8135602067ffffffffffffffff82111561089557610895610bf9565b8160051b6108a4828201610b69565b8381528281019086840183880185018910156108bf57600080fd5b600093505b858410156108e25780358352600193909301929184019184016108c4565b50979650505050505050565b60006020828403121561090057600080fd5b6109098261084c565b9392505050565b600080600080600060a0868803121561092857600080fd5b6109318661084c565b9450602061094081880161084c565b9450604087013567ffffffffffffffff8082111561095d57600080fd5b6109698a838b01610868565b9550606089013591508082111561097f57600080fd5b61098b8a838b01610868565b945060808901359150808211156109a157600080fd5b818901915089601f8301126109b557600080fd5b8135818111156109c7576109c7610bf9565b6109d9601f8201601f19168501610b69565b91508082528a848285010111156109ef57600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60008060008060008060a08789031215610a2957600080fd5b610a328761084c565b9550610a406020880161084c565b94506040870135935060608701359250608087013567ffffffffffffffff80821115610a6b57600080fd5b818901915089601f830112610a7f57600080fd5b813581811115610a8e57600080fd5b8a6020828501011115610aa057600080fd5b6020830194508093505050509295509295509295565b60008060408385031215610ac957600080fd5b610ad28361084c565b946020939093013593505050565b60008060408385031215610af357600080fd5b610afc8361084c565b9150602083013560ff81168114610b1257600080fd5b809150509250929050565b600060208284031215610b2f57600080fd5b8151801515811461090957600080fd5b600060208284031215610b5157600080fd5b81356001600160e01b03198116811461090957600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610b9257610b92610bf9565b604052919050565b60008219821115610bad57610bad610bcd565b500190565b6000600019821415610bc657610bc6610bcd565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220611c0ca9359170cac4d14474b8dd696f82e2ba7adcc3bef11436c0466064a4ca64736f6c63430008070033",
	"deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100c95760003560e01c80638da5cb5b11610081578063f09d39e31161005b578063f09d39e3146101c4578063f23a6e61146101f0578063f2fde38b1461024a57600080fd5b80638da5cb5b1461016a578063bc197c8114610185578063e9638298146101b157600080fd5b80636c6d6a17116100b25780636c6d6a171461010b578063715018a61461011e57806388b22c241461012657600080fd5b806301ffc9a7146100ce578063165ed276146100f6575b600080fd5b6100e16100dc366004610b3f565b61025d565b60405190151581526020015b60405180910390f35b6101096101043660046108ee565b6102c6565b005b6101096101193660046108ee565b610354565b6101096103dd565b61015c610134366004610ab6565b6001600160a01b03919091166000908152600160209081526040808320938352929052205490565b6040519081526020016100ed565b6000546040516001600160a01b0390911681526020016100ed565b610198610193366004610910565b610443565b6040516001600160e01b031990911681526020016100ed565b6100e16101bf366004610ae0565b6104fa565b6100e16101d23660046108ee565b6001600160a01b031660009081526002602052604090205460ff1690565b6101986101fe366004610a10565b50506001600160a01b039290921660009081526001602090815260408083209383529290522055507ff23a6e610000000000000000000000000000000000000000000000000000000090565b6101096102583660046108ee565b61070d565b60006001600160e01b031982167f4e2312e00000000000000000000000000000000000000000000000000000000014806102c057507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6000546001600160a01b031633146103255760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146103ae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031c565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146104375760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031c565b61044160006107ef565b565b6000805b84518110156104ce5783818151811061046257610462610be3565b602002602001015160016000886001600160a01b03166001600160a01b0316815260200190815260200160002060008784815181106104a3576104a3610be3565b6020026020010151815260200190815260200160002081905550806104c790610bb2565b9050610447565b507fbc197c81000000000000000000000000000000000000000000000000000000009695505050505050565b3360009081526002602052604081205460ff161515600114156105845760405162461bcd60e51b8152602060048201526024808201527f596f75206861766520616c726561647920636f6c6c656374656420737065636960448201527f616c2e2000000000000000000000000000000000000000000000000000000000606482015260840161031c565b6001600160a01b0383166000908152600160208181526040808420600485529091528083205460038085528285205460028652838620549486528386205486805293909520549094919391926105d991610b9a565b6105e39190610b9a565b6105ed9190610b9a565b6105f79190610b9a565b10156106455760405162461bcd60e51b815260206004820152601960248201527f4e6f7420656e6f756768204e46547320636f6c6c656374656400000000000000604482015260640161031c565b6001600160a01b0383811660008181526002602052604090819020805460ff1916600117905560035490517fe9638298000000000000000000000000000000000000000000000000000000008152600481019290925260ff851660248301529091169063e963829890604401602060405180830381600087803b1580156106cb57600080fd5b505af11580156106df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107039190610b1d565b5060019392505050565b6000546001600160a01b031633146107675760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031c565b6001600160a01b0381166107e35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161031c565b6107ec816107ef565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461086357600080fd5b919050565b600082601f83011261087957600080fd5b8135602067ffffffffffffffff82111561089557610895610bf9565b8160051b6108a4828201610b69565b8381528281019086840183880185018910156108bf57600080fd5b600093505b858410156108e25780358352600193909301929184019184016108c4565b50979650505050505050565b60006020828403121561090057600080fd5b6109098261084c565b9392505050565b600080600080600060a0868803121561092857600080fd5b6109318661084c565b9450602061094081880161084c565b9450604087013567ffffffffffffffff8082111561095d57600080fd5b6109698a838b01610868565b9550606089013591508082111561097f57600080fd5b61098b8a838b01610868565b945060808901359150808211156109a157600080fd5b818901915089601f8301126109b557600080fd5b8135818111156109c7576109c7610bf9565b6109d9601f8201601f19168501610b69565b91508082528a848285010111156109ef57600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60008060008060008060a08789031215610a2957600080fd5b610a328761084c565b9550610a406020880161084c565b94506040870135935060608701359250608087013567ffffffffffffffff80821115610a6b57600080fd5b818901915089601f830112610a7f57600080fd5b813581811115610a8e57600080fd5b8a6020828501011115610aa057600080fd5b6020830194508093505050509295509295509295565b60008060408385031215610ac957600080fd5b610ad28361084c565b946020939093013593505050565b60008060408385031215610af357600080fd5b610afc8361084c565b9150602083013560ff81168114610b1257600080fd5b809150509250929050565b600060208284031215610b2f57600080fd5b8151801515811461090957600080fd5b600060208284031215610b5157600080fd5b81356001600160e01b03198116811461090957600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610b9257610b92610bf9565b604052919050565b60008219821115610bad57610bad610bcd565b500190565b6000600019821415610bc657610bc6610bcd565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220611c0ca9359170cac4d14474b8dd696f82e2ba7adcc3bef11436c0466064a4ca64736f6c63430008070033",
	"immutableReferences": {},
	"generatedSources": [],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:8423:37",
		  "statements": [
			{
			  "nodeType": "YulBlock",
			  "src": "6:3:37",
			  "statements": []
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "63:147:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "73:29:37",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "95:6:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "82:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "82:20:37"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "73:5:37"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "188:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "197:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "200:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "190:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "190:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "190:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "124:5:37"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "135:5:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "142:42:37",
								  "type": "",
								  "value": "0xffffffffffffffffffffffffffffffffffffffff"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "131:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "131:54:37"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "121:2:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "121:65:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "114:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "114:73:37"
					},
					"nodeType": "YulIf",
					"src": "111:93:37"
				  }
				]
			  },
			  "name": "abi_decode_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "42:6:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "53:5:37",
				  "type": ""
				}
			  ],
			  "src": "14:196:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "279:659:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "328:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "337:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "340:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "330:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "330:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "330:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "307:6:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "315:4:37",
								  "type": "",
								  "value": "0x1f"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "303:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "303:17:37"
							},
							{
							  "name": "end",
							  "nodeType": "YulIdentifier",
							  "src": "322:3:37"
							}
						  ],
						  "functionName": {
							"name": "slt",
							"nodeType": "YulIdentifier",
							"src": "299:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "299:27:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "292:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "292:35:37"
					},
					"nodeType": "YulIf",
					"src": "289:55:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "353:30:37",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "376:6:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "363:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "363:20:37"
					},
					"variables": [
					  {
						"name": "_1",
						"nodeType": "YulTypedName",
						"src": "357:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "392:14:37",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "402:4:37",
					  "type": "",
					  "value": "0x20"
					},
					"variables": [
					  {
						"name": "_2",
						"nodeType": "YulTypedName",
						"src": "396:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "445:22:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "447:16:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "447:18:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "447:18:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "421:2:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "425:18:37",
						  "type": "",
						  "value": "0xffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "418:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "418:26:37"
					},
					"nodeType": "YulIf",
					"src": "415:52:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "476:20:37",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "490:1:37",
						  "type": "",
						  "value": "5"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "493:2:37"
						}
					  ],
					  "functionName": {
						"name": "shl",
						"nodeType": "YulIdentifier",
						"src": "486:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "486:10:37"
					},
					"variables": [
					  {
						"name": "_3",
						"nodeType": "YulTypedName",
						"src": "480:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "505:39:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "_3",
							  "nodeType": "YulIdentifier",
							  "src": "536:2:37"
							},
							{
							  "name": "_2",
							  "nodeType": "YulIdentifier",
							  "src": "540:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "532:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "532:11:37"
						}
					  ],
					  "functionName": {
						"name": "allocate_memory",
						"nodeType": "YulIdentifier",
						"src": "516:15:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "516:28:37"
					},
					"variables": [
					  {
						"name": "dst",
						"nodeType": "YulTypedName",
						"src": "509:3:37",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "553:16:37",
					"value": {
					  "name": "dst",
					  "nodeType": "YulIdentifier",
					  "src": "566:3:37"
					},
					"variables": [
					  {
						"name": "dst_1",
						"nodeType": "YulTypedName",
						"src": "557:5:37",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "dst",
						  "nodeType": "YulIdentifier",
						  "src": "585:3:37"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "590:2:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "578:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "578:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "578:15:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "602:19:37",
					"value": {
					  "arguments": [
						{
						  "name": "dst",
						  "nodeType": "YulIdentifier",
						  "src": "613:3:37"
						},
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "618:2:37"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "609:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "609:12:37"
					},
					"variableNames": [
					  {
						"name": "dst",
						"nodeType": "YulIdentifier",
						"src": "602:3:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "630:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "645:6:37"
						},
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "653:2:37"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "641:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "641:15:37"
					},
					"variables": [
					  {
						"name": "src",
						"nodeType": "YulTypedName",
						"src": "634:3:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "702:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "711:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "714:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "704:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "704:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "704:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "679:6:37"
								},
								{
								  "name": "_3",
								  "nodeType": "YulIdentifier",
								  "src": "687:2:37"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "675:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "675:15:37"
							},
							{
							  "name": "_2",
							  "nodeType": "YulIdentifier",
							  "src": "692:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "671:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "671:24:37"
						},
						{
						  "name": "end",
						  "nodeType": "YulIdentifier",
						  "src": "697:3:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "668:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "668:33:37"
					},
					"nodeType": "YulIf",
					"src": "665:53:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "727:10:37",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "736:1:37",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "i",
						"nodeType": "YulTypedName",
						"src": "731:1:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "791:118:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"name": "dst",
								"nodeType": "YulIdentifier",
								"src": "812:3:37"
							  },
							  {
								"arguments": [
								  {
									"name": "src",
									"nodeType": "YulIdentifier",
									"src": "830:3:37"
								  }
								],
								"functionName": {
								  "name": "calldataload",
								  "nodeType": "YulIdentifier",
								  "src": "817:12:37"
								},
								"nodeType": "YulFunctionCall",
								"src": "817:17:37"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "805:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "805:30:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "805:30:37"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "848:19:37",
						  "value": {
							"arguments": [
							  {
								"name": "dst",
								"nodeType": "YulIdentifier",
								"src": "859:3:37"
							  },
							  {
								"name": "_2",
								"nodeType": "YulIdentifier",
								"src": "864:2:37"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "855:3:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "855:12:37"
						  },
						  "variableNames": [
							{
							  "name": "dst",
							  "nodeType": "YulIdentifier",
							  "src": "848:3:37"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "880:19:37",
						  "value": {
							"arguments": [
							  {
								"name": "src",
								"nodeType": "YulIdentifier",
								"src": "891:3:37"
							  },
							  {
								"name": "_2",
								"nodeType": "YulIdentifier",
								"src": "896:2:37"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "887:3:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "887:12:37"
						  },
						  "variableNames": [
							{
							  "name": "src",
							  "nodeType": "YulIdentifier",
							  "src": "880:3:37"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "757:1:37"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "760:2:37"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "754:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "754:9:37"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "764:18:37",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "766:14:37",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "775:1:37"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "778:1:37",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "771:3:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "771:9:37"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "766:1:37"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "750:3:37",
					  "statements": []
					},
					"src": "746:163:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "918:14:37",
					"value": {
					  "name": "dst_1",
					  "nodeType": "YulIdentifier",
					  "src": "927:5:37"
					},
					"variableNames": [
					  {
						"name": "array",
						"nodeType": "YulIdentifier",
						"src": "918:5:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_array_uint256_dyn",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "253:6:37",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "261:3:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "269:5:37",
				  "type": ""
				}
			  ],
			  "src": "215:723:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1013:116:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1059:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1068:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1071:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1061:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "1061:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1061:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1034:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1043:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1030:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1030:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1055:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1026:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1026:32:37"
					},
					"nodeType": "YulIf",
					"src": "1023:52:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1084:39:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1113:9:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "1094:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1094:29:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1084:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "979:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "990:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1002:6:37",
				  "type": ""
				}
			  ],
			  "src": "943:186:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1331:1168:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1378:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1387:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1390:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1380:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "1380:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1380:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1352:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1361:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1348:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1348:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1373:3:37",
						  "type": "",
						  "value": "160"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1344:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1344:33:37"
					},
					"nodeType": "YulIf",
					"src": "1341:53:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1403:39:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1432:9:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "1413:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1413:29:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1403:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1451:12:37",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "1461:2:37",
					  "type": "",
					  "value": "32"
					},
					"variables": [
					  {
						"name": "_1",
						"nodeType": "YulTypedName",
						"src": "1455:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1472:48:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1505:9:37"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "1516:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1501:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1501:18:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "1482:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1482:38:37"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "1472:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1529:46:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1560:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1571:2:37",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1556:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1556:18:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1543:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1543:32:37"
					},
					"variables": [
					  {
						"name": "offset",
						"nodeType": "YulTypedName",
						"src": "1533:6:37",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1584:28:37",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "1594:18:37",
					  "type": "",
					  "value": "0xffffffffffffffff"
					},
					"variables": [
					  {
						"name": "_2",
						"nodeType": "YulTypedName",
						"src": "1588:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1639:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1648:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1651:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1641:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "1641:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1641:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "1627:6:37"
						},
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "1635:2:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1624:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1624:14:37"
					},
					"nodeType": "YulIf",
					"src": "1621:34:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1664:71:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1707:9:37"
							},
							{
							  "name": "offset",
							  "nodeType": "YulIdentifier",
							  "src": "1718:6:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1703:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1703:22:37"
						},
						{
						  "name": "dataEnd",
						  "nodeType": "YulIdentifier",
						  "src": "1727:7:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_array_uint256_dyn",
						"nodeType": "YulIdentifier",
						"src": "1674:28:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1674:61:37"
					},
					"variableNames": [
					  {
						"name": "value2",
						"nodeType": "YulIdentifier",
						"src": "1664:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1744:48:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1777:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1788:2:37",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1773:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1773:18:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1760:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1760:32:37"
					},
					"variables": [
					  {
						"name": "offset_1",
						"nodeType": "YulTypedName",
						"src": "1748:8:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1821:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1830:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1833:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1823:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "1823:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1823:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "offset_1",
						  "nodeType": "YulIdentifier",
						  "src": "1807:8:37"
						},
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "1817:2:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1804:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1804:16:37"
					},
					"nodeType": "YulIf",
					"src": "1801:36:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1846:73:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1889:9:37"
							},
							{
							  "name": "offset_1",
							  "nodeType": "YulIdentifier",
							  "src": "1900:8:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1885:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1885:24:37"
						},
						{
						  "name": "dataEnd",
						  "nodeType": "YulIdentifier",
						  "src": "1911:7:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_array_uint256_dyn",
						"nodeType": "YulIdentifier",
						"src": "1856:28:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1856:63:37"
					},
					"variableNames": [
					  {
						"name": "value3",
						"nodeType": "YulIdentifier",
						"src": "1846:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1928:49:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1961:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1972:3:37",
							  "type": "",
							  "value": "128"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1957:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1957:19:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1944:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1944:33:37"
					},
					"variables": [
					  {
						"name": "offset_2",
						"nodeType": "YulTypedName",
						"src": "1932:8:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2006:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2015:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2018:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2008:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "2008:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2008:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "offset_2",
						  "nodeType": "YulIdentifier",
						  "src": "1992:8:37"
						},
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "2002:2:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1989:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1989:16:37"
					},
					"nodeType": "YulIf",
					"src": "1986:36:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2031:34:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2045:9:37"
						},
						{
						  "name": "offset_2",
						  "nodeType": "YulIdentifier",
						  "src": "2056:8:37"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2041:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2041:24:37"
					},
					"variables": [
					  {
						"name": "_3",
						"nodeType": "YulTypedName",
						"src": "2035:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2113:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2122:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2125:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2115:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "2115:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2115:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "_3",
								  "nodeType": "YulIdentifier",
								  "src": "2092:2:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "2096:4:37",
								  "type": "",
								  "value": "0x1f"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2088:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2088:13:37"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2103:7:37"
							}
						  ],
						  "functionName": {
							"name": "slt",
							"nodeType": "YulIdentifier",
							"src": "2084:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2084:27:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "2077:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2077:35:37"
					},
					"nodeType": "YulIf",
					"src": "2074:55:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2138:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "_3",
						  "nodeType": "YulIdentifier",
						  "src": "2161:2:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2148:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2148:16:37"
					},
					"variables": [
					  {
						"name": "_4",
						"nodeType": "YulTypedName",
						"src": "2142:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2187:22:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "2189:16:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "2189:18:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2189:18:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "_4",
						  "nodeType": "YulIdentifier",
						  "src": "2179:2:37"
						},
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "2183:2:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "2176:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2176:10:37"
					},
					"nodeType": "YulIf",
					"src": "2173:36:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2218:66:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "name": "_4",
									  "nodeType": "YulIdentifier",
									  "src": "2259:2:37"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "2263:4:37",
									  "type": "",
									  "value": "0x1f"
									}
								  ],
								  "functionName": {
									"name": "add",
									"nodeType": "YulIdentifier",
									"src": "2255:3:37"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "2255:13:37"
								},
								{
								  "arguments": [
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "2274:2:37",
									  "type": "",
									  "value": "31"
									}
								  ],
								  "functionName": {
									"name": "not",
									"nodeType": "YulIdentifier",
									"src": "2270:3:37"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "2270:7:37"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "2251:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2251:27:37"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "2280:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2247:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2247:36:37"
						}
					  ],
					  "functionName": {
						"name": "allocate_memory",
						"nodeType": "YulIdentifier",
						"src": "2231:15:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2231:53:37"
					},
					"variables": [
					  {
						"name": "array",
						"nodeType": "YulTypedName",
						"src": "2222:5:37",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "array",
						  "nodeType": "YulIdentifier",
						  "src": "2300:5:37"
						},
						{
						  "name": "_4",
						  "nodeType": "YulIdentifier",
						  "src": "2307:2:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2293:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2293:17:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2293:17:37"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2356:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2365:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2368:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2358:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "2358:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2358:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "_3",
								  "nodeType": "YulIdentifier",
								  "src": "2333:2:37"
								},
								{
								  "name": "_4",
								  "nodeType": "YulIdentifier",
								  "src": "2337:2:37"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2329:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2329:11:37"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "2342:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2325:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2325:20:37"
						},
						{
						  "name": "dataEnd",
						  "nodeType": "YulIdentifier",
						  "src": "2347:7:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "2322:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2322:33:37"
					},
					"nodeType": "YulIf",
					"src": "2319:53:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "array",
							  "nodeType": "YulIdentifier",
							  "src": "2398:5:37"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "2405:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2394:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2394:14:37"
						},
						{
						  "arguments": [
							{
							  "name": "_3",
							  "nodeType": "YulIdentifier",
							  "src": "2414:2:37"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "2418:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2410:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2410:11:37"
						},
						{
						  "name": "_4",
						  "nodeType": "YulIdentifier",
						  "src": "2423:2:37"
						}
					  ],
					  "functionName": {
						"name": "calldatacopy",
						"nodeType": "YulIdentifier",
						"src": "2381:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2381:45:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2381:45:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "array",
								  "nodeType": "YulIdentifier",
								  "src": "2450:5:37"
								},
								{
								  "name": "_4",
								  "nodeType": "YulIdentifier",
								  "src": "2457:2:37"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2446:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2446:14:37"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "2462:2:37"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2442:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2442:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2467:1:37",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2435:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2435:34:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2435:34:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2478:15:37",
					"value": {
					  "name": "array",
					  "nodeType": "YulIdentifier",
					  "src": "2488:5:37"
					},
					"variableNames": [
					  {
						"name": "value4",
						"nodeType": "YulIdentifier",
						"src": "2478:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1265:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1276:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1288:6:37",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "1296:6:37",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "1304:6:37",
				  "type": ""
				},
				{
				  "name": "value3",
				  "nodeType": "YulTypedName",
				  "src": "1312:6:37",
				  "type": ""
				},
				{
				  "name": "value4",
				  "nodeType": "YulTypedName",
				  "src": "1320:6:37",
				  "type": ""
				}
			  ],
			  "src": "1134:1365:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2661:720:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2708:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2717:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2720:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2710:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "2710:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2710:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2682:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2691:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2678:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2678:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2703:3:37",
						  "type": "",
						  "value": "160"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2674:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2674:33:37"
					},
					"nodeType": "YulIf",
					"src": "2671:53:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2733:39:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2762:9:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "2743:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2743:29:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "2733:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2781:48:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2814:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2825:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2810:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2810:18:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "2791:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2791:38:37"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "2781:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2838:42:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2865:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2876:2:37",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2861:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2861:18:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2848:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2848:32:37"
					},
					"variableNames": [
					  {
						"name": "value2",
						"nodeType": "YulIdentifier",
						"src": "2838:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2889:42:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2916:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2927:2:37",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2912:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2912:18:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2899:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2899:32:37"
					},
					"variableNames": [
					  {
						"name": "value3",
						"nodeType": "YulIdentifier",
						"src": "2889:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2940:47:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2971:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2982:3:37",
							  "type": "",
							  "value": "128"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2967:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2967:19:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2954:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2954:33:37"
					},
					"variables": [
					  {
						"name": "offset",
						"nodeType": "YulTypedName",
						"src": "2944:6:37",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2996:28:37",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "3006:18:37",
					  "type": "",
					  "value": "0xffffffffffffffff"
					},
					"variables": [
					  {
						"name": "_1",
						"nodeType": "YulTypedName",
						"src": "3000:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3051:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3060:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3063:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3053:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3053:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3053:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "3039:6:37"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "3047:2:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "3036:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3036:14:37"
					},
					"nodeType": "YulIf",
					"src": "3033:34:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3076:32:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3090:9:37"
						},
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "3101:6:37"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "3086:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3086:22:37"
					},
					"variables": [
					  {
						"name": "_2",
						"nodeType": "YulTypedName",
						"src": "3080:2:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3156:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3165:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3168:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3158:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3158:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3158:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "_2",
								  "nodeType": "YulIdentifier",
								  "src": "3135:2:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "3139:4:37",
								  "type": "",
								  "value": "0x1f"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3131:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3131:13:37"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3146:7:37"
							}
						  ],
						  "functionName": {
							"name": "slt",
							"nodeType": "YulIdentifier",
							"src": "3127:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3127:27:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3120:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3120:35:37"
					},
					"nodeType": "YulIf",
					"src": "3117:55:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3181:30:37",
					"value": {
					  "arguments": [
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "3208:2:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3195:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3195:16:37"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "3185:6:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3238:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3247:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3250:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3240:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3240:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3240:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "3226:6:37"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "3234:2:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "3223:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3223:14:37"
					},
					"nodeType": "YulIf",
					"src": "3220:34:37"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3304:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3313:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3316:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3306:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3306:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3306:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "_2",
								  "nodeType": "YulIdentifier",
								  "src": "3277:2:37"
								},
								{
								  "name": "length",
								  "nodeType": "YulIdentifier",
								  "src": "3281:6:37"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3273:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3273:15:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3290:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3269:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3269:24:37"
						},
						{
						  "name": "dataEnd",
						  "nodeType": "YulIdentifier",
						  "src": "3295:7:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "3266:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3266:37:37"
					},
					"nodeType": "YulIf",
					"src": "3263:57:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3329:21:37",
					"value": {
					  "arguments": [
						{
						  "name": "_2",
						  "nodeType": "YulIdentifier",
						  "src": "3343:2:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3347:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "3339:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3339:11:37"
					},
					"variableNames": [
					  {
						"name": "value4",
						"nodeType": "YulIdentifier",
						"src": "3329:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3359:16:37",
					"value": {
					  "name": "length",
					  "nodeType": "YulIdentifier",
					  "src": "3369:6:37"
					},
					"variableNames": [
					  {
						"name": "value5",
						"nodeType": "YulIdentifier",
						"src": "3359:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_calldata_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2587:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2598:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2610:6:37",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "2618:6:37",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "2626:6:37",
				  "type": ""
				},
				{
				  "name": "value3",
				  "nodeType": "YulTypedName",
				  "src": "2634:6:37",
				  "type": ""
				},
				{
				  "name": "value4",
				  "nodeType": "YulTypedName",
				  "src": "2642:6:37",
				  "type": ""
				},
				{
				  "name": "value5",
				  "nodeType": "YulTypedName",
				  "src": "2650:6:37",
				  "type": ""
				}
			  ],
			  "src": "2504:877:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3473:167:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3519:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3528:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3531:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3521:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3521:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3521:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3494:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3503:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "3490:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3490:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3515:2:37",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "3486:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3486:32:37"
					},
					"nodeType": "YulIf",
					"src": "3483:52:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3544:39:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3573:9:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "3554:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3554:29:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "3544:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3592:42:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3619:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3630:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3615:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3615:18:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3602:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3602:32:37"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "3592:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "3431:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "3442:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3454:6:37",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "3462:6:37",
				  "type": ""
				}
			  ],
			  "src": "3386:254:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3730:258:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3776:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3785:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3788:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3778:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3778:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3778:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3751:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3760:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "3747:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3747:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3772:2:37",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "3743:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3743:32:37"
					},
					"nodeType": "YulIf",
					"src": "3740:52:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3801:39:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3830:9:37"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_address",
						"nodeType": "YulIdentifier",
						"src": "3811:18:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3811:29:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "3801:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3849:45:37",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3879:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3890:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3875:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3875:18:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3862:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3862:32:37"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "3853:5:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3942:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3951:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3954:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3944:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "3944:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3944:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3916:5:37"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "3927:5:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "3934:4:37",
								  "type": "",
								  "value": "0xff"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "3923:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3923:16:37"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "3913:2:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3913:27:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3906:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3906:35:37"
					},
					"nodeType": "YulIf",
					"src": "3903:55:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3967:15:37",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "3977:5:37"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "3967:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "3688:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "3699:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3711:6:37",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "3719:6:37",
				  "type": ""
				}
			  ],
			  "src": "3645:343:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4071:199:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4117:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4126:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4129:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4119:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "4119:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4119:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4092:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4101:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "4088:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4088:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4113:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "4084:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4084:32:37"
					},
					"nodeType": "YulIf",
					"src": "4081:52:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "4142:29:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4161:9:37"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "4155:5:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4155:16:37"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "4146:5:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4224:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4233:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4236:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4226:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "4226:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4226:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4193:5:37"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "name": "value",
									  "nodeType": "YulIdentifier",
									  "src": "4214:5:37"
									}
								  ],
								  "functionName": {
									"name": "iszero",
									"nodeType": "YulIdentifier",
									"src": "4207:6:37"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "4207:13:37"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "4200:6:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4200:21:37"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "4190:2:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4190:32:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4183:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4183:40:37"
					},
					"nodeType": "YulIf",
					"src": "4180:60:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4249:15:37",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "4259:5:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "4249:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_bool_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4037:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "4048:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4060:6:37",
				  "type": ""
				}
			  ],
			  "src": "3993:277:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4344:263:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4390:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4399:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4402:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4392:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "4392:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4392:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4365:7:37"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4374:9:37"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "4361:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4361:23:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4386:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "4357:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4357:32:37"
					},
					"nodeType": "YulIf",
					"src": "4354:52:37"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "4415:36:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4441:9:37"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "4428:12:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4428:23:37"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "4419:5:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4561:16:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4570:1:37",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4573:1:37",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4563:6:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "4563:12:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4563:12:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4473:5:37"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "4484:5:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4491:66:37",
								  "type": "",
								  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "4480:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4480:78:37"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "4470:2:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4470:89:37"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4463:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4463:97:37"
					},
					"nodeType": "YulIf",
					"src": "4460:117:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4586:15:37",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "4596:5:37"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "4586:6:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_bytes4",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4310:9:37",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "4321:7:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4333:6:37",
				  "type": ""
				}
			  ],
			  "src": "4275:332:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4713:125:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4723:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4735:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4746:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4731:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4731:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4723:4:37"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4765:9:37"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "4780:6:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4788:42:37",
							  "type": "",
							  "value": "0xffffffffffffffffffffffffffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4776:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4776:55:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4758:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4758:74:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4758:74:37"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4682:9:37",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4693:6:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4704:4:37",
				  "type": ""
				}
			  ],
			  "src": "4612:226:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4968:179:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4978:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4990:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5001:2:37",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4986:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4986:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4978:4:37"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5020:9:37"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "5035:6:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5043:42:37",
							  "type": "",
							  "value": "0xffffffffffffffffffffffffffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "5031:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5031:55:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5013:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5013:74:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5013:74:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5107:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5118:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5103:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5103:18:37"
						},
						{
						  "arguments": [
							{
							  "name": "value1",
							  "nodeType": "YulIdentifier",
							  "src": "5127:6:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5135:4:37",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "5123:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5123:17:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5096:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5096:45:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5096:45:37"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_t_uint8__to_t_address_t_uint8__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4929:9:37",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "4940:6:37",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4948:6:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4959:4:37",
				  "type": ""
				}
			  ],
			  "src": "4843:304:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5247:92:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5257:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5269:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5280:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5265:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5265:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5257:4:37"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5299:9:37"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value0",
								  "nodeType": "YulIdentifier",
								  "src": "5324:6:37"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "5317:6:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5317:14:37"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "5310:6:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5310:22:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5292:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5292:41:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5292:41:37"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5216:9:37",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5227:6:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5238:4:37",
				  "type": ""
				}
			  ],
			  "src": "5152:187:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5443:149:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5453:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5465:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5476:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5461:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5461:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5453:4:37"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5495:9:37"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "5510:6:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5518:66:37",
							  "type": "",
							  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "5506:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5506:79:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5488:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5488:98:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5488:98:37"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5412:9:37",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5423:6:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5434:4:37",
				  "type": ""
				}
			  ],
			  "src": "5344:248:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5771:228:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5788:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5799:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5781:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5781:21:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5781:21:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5822:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5833:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5818:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5818:18:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5838:2:37",
						  "type": "",
						  "value": "38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5811:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5811:30:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5811:30:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5861:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5872:2:37",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5857:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5857:18:37"
						},
						{
						  "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5877:34:37",
						  "type": "",
						  "value": "Ownable: new owner is the zero a"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5850:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5850:62:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5850:62:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5932:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5943:2:37",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5928:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5928:18:37"
						},
						{
						  "hexValue": "646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5948:8:37",
						  "type": "",
						  "value": "ddress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5921:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5921:36:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5921:36:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5966:27:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5978:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5989:3:37",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5974:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5974:19:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5966:4:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5748:9:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5762:4:37",
				  "type": ""
				}
			  ],
			  "src": "5597:402:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6178:175:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6195:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6206:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6188:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6188:21:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6188:21:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6229:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6240:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6225:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6225:18:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6245:2:37",
						  "type": "",
						  "value": "25"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6218:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6218:30:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6218:30:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6268:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6279:2:37",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6264:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6264:18:37"
						},
						{
						  "hexValue": "4e6f7420656e6f756768204e46547320636f6c6c6563746564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "6284:27:37",
						  "type": "",
						  "value": "Not enough NFTs collected"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6257:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6257:55:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6257:55:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6321:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6333:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6344:2:37",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6329:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6329:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6321:4:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_36f61271bb0b1f7068062b8ae4311798e31ce010c882d6f1c20db1f45757f326__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6155:9:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6169:4:37",
				  "type": ""
				}
			  ],
			  "src": "6004:349:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6532:182:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6549:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6560:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6542:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6542:21:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6542:21:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6583:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6594:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6579:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6579:18:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6599:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6572:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6572:30:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6572:30:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6622:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6633:2:37",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6618:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6618:18:37"
						},
						{
						  "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "6638:34:37",
						  "type": "",
						  "value": "Ownable: caller is not the owner"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6611:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6611:62:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6611:62:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6682:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6694:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6705:2:37",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6690:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6690:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6682:4:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6509:9:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6523:4:37",
				  "type": ""
				}
			  ],
			  "src": "6358:356:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6893:226:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6910:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6921:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6903:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6903:21:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6903:21:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6944:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6955:2:37",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6940:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6940:18:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6960:2:37",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6933:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6933:30:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6933:30:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6983:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6994:2:37",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6979:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6979:18:37"
						},
						{
						  "hexValue": "596f75206861766520616c726561647920636f6c6c6563746564207370656369",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "6999:34:37",
						  "type": "",
						  "value": "You have already collected speci"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6972:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6972:62:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6972:62:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7054:9:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7065:2:37",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7050:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7050:18:37"
						},
						{
						  "hexValue": "616c2e20",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "7070:6:37",
						  "type": "",
						  "value": "al. "
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7043:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7043:34:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7043:34:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "7086:27:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7098:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7109:3:37",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7094:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7094:19:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "7086:4:37"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_cdc3b747d92c283e1da7003e640dff49505af3ee9b9189ec315ec13ff54d3b42__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6870:9:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6884:4:37",
				  "type": ""
				}
			  ],
			  "src": "6719:400:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7225:76:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7235:26:37",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7247:9:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7258:2:37",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7243:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7243:18:37"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "7235:4:37"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7277:9:37"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "7288:6:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7270:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7270:25:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7270:25:37"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7194:9:37",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "7205:6:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "7216:4:37",
				  "type": ""
				}
			  ],
			  "src": "7124:177:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7351:230:37",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7361:19:37",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7377:2:37",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "7371:5:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7371:9:37"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "7361:6:37"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "7389:58:37",
					"value": {
					  "arguments": [
						{
						  "name": "memPtr",
						  "nodeType": "YulIdentifier",
						  "src": "7411:6:37"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "size",
								  "nodeType": "YulIdentifier",
								  "src": "7427:4:37"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7433:2:37",
								  "type": "",
								  "value": "31"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7423:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7423:13:37"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7442:2:37",
								  "type": "",
								  "value": "31"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "7438:3:37"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7438:7:37"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "7419:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7419:27:37"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7407:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7407:40:37"
					},
					"variables": [
					  {
						"name": "newFreePtr",
						"nodeType": "YulTypedName",
						"src": "7393:10:37",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7522:22:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "7524:16:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "7524:18:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7524:18:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "newFreePtr",
							  "nodeType": "YulIdentifier",
							  "src": "7465:10:37"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7477:18:37",
							  "type": "",
							  "value": "0xffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "gt",
							"nodeType": "YulIdentifier",
							"src": "7462:2:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7462:34:37"
						},
						{
						  "arguments": [
							{
							  "name": "newFreePtr",
							  "nodeType": "YulIdentifier",
							  "src": "7501:10:37"
							},
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "7513:6:37"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "7498:2:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7498:22:37"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "7459:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7459:62:37"
					},
					"nodeType": "YulIf",
					"src": "7456:88:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7560:2:37",
						  "type": "",
						  "value": "64"
						},
						{
						  "name": "newFreePtr",
						  "nodeType": "YulIdentifier",
						  "src": "7564:10:37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7553:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7553:22:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7553:22:37"
				  }
				]
			  },
			  "name": "allocate_memory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "size",
				  "nodeType": "YulTypedName",
				  "src": "7331:4:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "7340:6:37",
				  "type": ""
				}
			  ],
			  "src": "7306:275:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7634:80:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7661:22:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "7663:16:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "7663:18:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7663:18:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "7650:1:37"
						},
						{
						  "arguments": [
							{
							  "name": "y",
							  "nodeType": "YulIdentifier",
							  "src": "7657:1:37"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "7653:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7653:6:37"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "7647:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7647:13:37"
					},
					"nodeType": "YulIf",
					"src": "7644:39:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "7692:16:37",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "7703:1:37"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "7706:1:37"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7699:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7699:9:37"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "7692:3:37"
					  }
					]
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "7617:1:37",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "7620:1:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "7626:3:37",
				  "type": ""
				}
			  ],
			  "src": "7586:128:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7766:88:37",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7797:22:37",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "7799:16:37"
							},
							"nodeType": "YulFunctionCall",
							"src": "7799:18:37"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7799:18:37"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "7782:5:37"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7793:1:37",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "7789:3:37"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7789:6:37"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "7779:2:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7779:17:37"
					},
					"nodeType": "YulIf",
					"src": "7776:43:37"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "7828:20:37",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "7839:5:37"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7846:1:37",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7835:3:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7835:13:37"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "7828:3:37"
					  }
					]
				  }
				]
			  },
			  "name": "increment_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "7748:5:37",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "7758:3:37",
				  "type": ""
				}
			  ],
			  "src": "7719:135:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7891:152:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7908:1:37",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7911:77:37",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7901:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7901:88:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7901:88:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8005:1:37",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8008:4:37",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7998:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7998:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7998:15:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8029:1:37",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8032:4:37",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "8022:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8022:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8022:15:37"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "7859:184:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8080:152:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8097:1:37",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8100:77:37",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8090:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8090:88:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8090:88:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8194:1:37",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8197:4:37",
						  "type": "",
						  "value": "0x32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8187:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8187:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8187:15:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8218:1:37",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8221:4:37",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "8211:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8211:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8211:15:37"
				  }
				]
			  },
			  "name": "panic_error_0x32",
			  "nodeType": "YulFunctionDefinition",
			  "src": "8048:184:37"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8269:152:37",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8286:1:37",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8289:77:37",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8279:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8279:88:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8279:88:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8383:1:37",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8386:4:37",
						  "type": "",
						  "value": "0x41"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8376:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8376:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8376:15:37"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8407:1:37",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8410:4:37",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "8400:6:37"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8400:15:37"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8400:15:37"
				  }
				]
			  },
			  "name": "panic_error_0x41",
			  "nodeType": "YulFunctionDefinition",
			  "src": "8237:184:37"
			}
		  ]
		},
		"contents": "{\n    { }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let _3 := shl(5, _1)\n        let dst := allocate_memory(add(_3, _2))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let src := add(offset, _2)\n        if gt(add(add(offset, _3), _2), end) { revert(0, 0) }\n        let i := 0\n        for { } lt(i, _1) { i := add(i, 1) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n            src := add(src, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let _1 := 32\n        value1 := abi_decode_address(add(headStart, _1))\n        let offset := calldataload(add(headStart, 64))\n        let _2 := 0xffffffffffffffff\n        if gt(offset, _2) { revert(0, 0) }\n        value2 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _2) { revert(0, 0) }\n        value3 := abi_decode_array_uint256_dyn(add(headStart, offset_1), dataEnd)\n        let offset_2 := calldataload(add(headStart, 128))\n        if gt(offset_2, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset_2)\n        if iszero(slt(add(_3, 0x1f), dataEnd)) { revert(0, 0) }\n        let _4 := calldataload(_3)\n        if gt(_4, _2) { panic_error_0x41() }\n        let array := allocate_memory(add(and(add(_4, 0x1f), not(31)), _1))\n        mstore(array, _4)\n        if gt(add(add(_3, _4), _1), dataEnd) { revert(0, 0) }\n        calldatacopy(add(array, _1), add(_3, _1), _4)\n        mstore(add(add(array, _4), _1), 0)\n        value4 := array\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4, value5\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        value3 := calldataload(add(headStart, 96))\n        let offset := calldataload(add(headStart, 128))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value4 := add(_2, 32)\n        value5 := length\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_addresst_uint8(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let value := calldataload(add(headStart, 32))\n        if iszero(eq(value, and(value, 0xff))) { revert(0, 0) }\n        value1 := value\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_address_t_uint8__to_t_address_t_uint8__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), and(value1, 0xff))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_36f61271bb0b1f7068062b8ae4311798e31ce010c882d6f1c20db1f45757f326__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 25)\n        mstore(add(headStart, 64), \"Not enough NFTs collected\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_cdc3b747d92c283e1da7003e640dff49505af3ee9b9189ec315ec13ff54d3b42__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"You have already collected speci\")\n        mstore(add(headStart, 96), \"al. \")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
		"id": 37,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "543:2022:11:-:0;;;;;;;;;;;;-1:-1:-1;921:32:25;719:10:34;921:18:25;:32::i;:::-;543:2022:11;;2270:187:25;2343:16;2362:6;;-1:-1:-1;;;;;2378:17:25;;;-1:-1:-1;;;;;;2378:17:25;;;;;;2410:40;;2362:6;;;;;;;2410:40;;2343:16;2410:40;2333:124;2270:187;:::o;543:2022:11:-;;;;;;;",
	"deployedSourceMap": "543:2022:11:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;313:223;;;;;;:::i;:::-;;:::i;:::-;;;5317:14:37;;5310:22;5292:41;;5280:2;5265:18;313:223:11;;;;;;;;900:82;;;;;;:::i;:::-;;:::i;:::-;;798:94;;;;;;:::i;:::-;;:::i;1668:101:25:-;;;:::i;1695:121:11:-;;;;;;:::i;:::-;-1:-1:-1;;;;;1789:15:11;;;;1762:7;1789:15;;;:6;:15;;;;;;;;:19;;;;;;;;;1695:121;;;;7270:25:37;;;7258:2;7243:18;1695:121:11;7124:177:37;1036:85:25;1082:7;1108:6;1036:85;;-1:-1:-1;;;;;1108:6:25;;;4758:74:37;;4746:2;4731:18;1036:85:25;4612:226:37;1292:395:11;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;;5506:79:37;;;5488:98;;5476:2;5461:18;1292:395:11;5344:248:37;1962:430:11;;;;;;:::i;:::-;;:::i;1829:127::-;;;;;;:::i;:::-;-1:-1:-1;;;;;1919:28:11;1895:4;1919:28;;;:19;:28;;;;;;;;;1829:127;991:293;;;;;;:::i;:::-;-1:-1:-1;;;;;;;1202:12:11;;;;1183:6;1202:12;;;:6;:12;;;;;;;;:16;;;;;;;:24;-1:-1:-1;1245:31:11;;991:293;1918:198:25;;;;;;:::i;:::-;;:::i;313:223:11:-;415:4;-1:-1:-1;;;;;;439:49:11;;454:34;439:49;;:89;;-1:-1:-1;952:25:35;-1:-1:-1;;;;;;937:40:35;;;492:36:11;432:96;313:223;-1:-1:-1;;313:223:11:o;900:82::-;1082:7:25;1108:6;-1:-1:-1;;;;;1108:6:25;719:10:34;1248:23:25;1240:68;;;;-1:-1:-1;;;1240:68:25;;6560:2:37;1240:68:25;;;6542:21:37;;;6579:18;;;6572:30;6638:34;6618:18;;;6611:62;6690:18;;1240:68:25;;;;;;;;;961:5:11::1;:12:::0;;-1:-1:-1;;961:12:11::1;-1:-1:-1::0;;;;;961:12:11;;;::::1;::::0;;;::::1;::::0;;900:82::o;798:94::-;1082:7:25;1108:6;-1:-1:-1;;;;;1108:6:25;719:10:34;1248:23:25;1240:68;;;;-1:-1:-1;;;1240:68:25;;6560:2:37;1240:68:25;;;6542:21:37;;;6579:18;;;6572:30;6638:34;6618:18;;;6611:62;6690:18;;1240:68:25;6358:356:37;1240:68:25;865:8:11::1;:18:::0;;-1:-1:-1;;865:18:11::1;-1:-1:-1::0;;;;;865:18:11;;;::::1;::::0;;;::::1;::::0;;798:94::o;1668:101:25:-;1082:7;1108:6;-1:-1:-1;;;;;1108:6:25;719:10:34;1248:23:25;1240:68;;;;-1:-1:-1;;;1240:68:25;;6560:2:37;1240:68:25;;;6542:21:37;;;6579:18;;;6572:30;6638:34;6618:18;;;6611:62;6690:18;;1240:68:25;6358:356:37;1240:68:25;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;1292:395:11:-;1507:6;;1526:100;1549:3;:10;1545:1;:14;1526:100;;;1604:6;1611:1;1604:9;;;;;;;;:::i;:::-;;;;;;;1581:6;:12;1588:4;-1:-1:-1;;;;;1581:12:11;-1:-1:-1;;;;;1581:12:11;;;;;;;;;;;;:20;1594:3;1598:1;1594:6;;;;;;;;:::i;:::-;;;;;;;1581:20;;;;;;;;;;;:32;;;;1561:3;;;;:::i;:::-;;;1526:100;;;-1:-1:-1;1643:36:11;;1292:395;-1:-1:-1;;;;;;1292:395:11:o;1962:430::-;2470:10;2061:4;2450:31;;;:19;:31;;;;;;;;:39;;:31;:39;;2442:98;;;;-1:-1:-1;;;2442:98:11;;6921:2:37;2442:98:11;;;6903:21:37;6960:2;6940:18;;;6933:30;6999:34;6979:18;;;6972:62;7070:6;7050:18;;;7043:34;7094:19;;2442:98:11;6719:400:37;2442:98:11;-1:-1:-1;;;;;2194:15:11;::::1;;::::0;;;:6:::1;:15;::::0;;;;;;;2210:1:::1;2194:18:::0;;;;;;;;;2215:1:::1;2159:18:::0;;;;;;;2154:1:::1;2138:18:::0;;;;;;2103;;;;;;;2082;;;;;;;;2215:1;;2194:18;;2159;;2082:39:::1;::::0;::::1;:::i;:::-;:74;;;;:::i;:::-;:95;;;;:::i;:::-;:130;;;;:::i;:::-;:134;2078:175;;;2218:35;::::0;-1:-1:-1;;;2218:35:11;;6206:2:37;2218:35:11::1;::::0;::::1;6188:21:37::0;6245:2;6225:18;;;6218:30;6284:27;6264:18;;;6257:55;6329:18;;2218:35:11::1;6004:349:37::0;2078:175:11::1;-1:-1:-1::0;;;;;2267:28:11;;::::1;;::::0;;;:19:::1;:28;::::0;;;;;;:35;;-1:-1:-1;;2267:35:11::1;2298:4;2267:35;::::0;;2321:8:::1;::::0;2313:47;;;;;::::1;::::0;::::1;5013:74:37::0;;;;5135:4;5123:17;;5103:18;;;5096:45;2321:8:11;;::::1;::::0;2313:32:::1;::::0;4986:18:37;;2313:47:11::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;2379:4:11::1;::::0;1962:430;-1:-1:-1;;;1962:430:11:o;1918:198:25:-;1082:7;1108:6;-1:-1:-1;;;;;1108:6:25;719:10:34;1248:23:25;1240:68;;;;-1:-1:-1;;;1240:68:25;;6560:2:37;1240:68:25;;;6542:21:37;;;6579:18;;;6572:30;6638:34;6618:18;;;6611:62;6690:18;;1240:68:25;6358:356:37;1240:68:25;-1:-1:-1;;;;;2006:22:25;::::1;1998:73;;;::::0;-1:-1:-1;;;1998:73:25;;5799:2:37;1998:73:25::1;::::0;::::1;5781:21:37::0;5838:2;5818:18;;;5811:30;5877:34;5857:18;;;5850:62;5948:8;5928:18;;;5921:36;5974:19;;1998:73:25::1;5597:402:37::0;1998:73:25::1;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;2270:187::-;2343:16;2362:6;;-1:-1:-1;;;;;2378:17:25;;;-1:-1:-1;;2378:17:25;;;;;;2410:40;;2362:6;;;;;;;2410:40;;2343:16;2410:40;2333:124;2270:187;:::o;14:196:37:-;82:20;;-1:-1:-1;;;;;131:54:37;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:723::-;269:5;322:3;315:4;307:6;303:17;299:27;289:55;;340:1;337;330:12;289:55;376:6;363:20;402:4;425:18;421:2;418:26;415:52;;;447:18;;:::i;:::-;493:2;490:1;486:10;516:28;540:2;536;532:11;516:28;:::i;:::-;578:15;;;609:12;;;;641:15;;;675;;;671:24;;668:33;-1:-1:-1;665:53:37;;;714:1;711;704:12;665:53;736:1;727:10;;746:163;760:2;757:1;754:9;746:163;;;817:17;;805:30;;778:1;771:9;;;;;855:12;;;;887;;746:163;;;-1:-1:-1;927:5:37;215:723;-1:-1:-1;;;;;;;215:723:37:o;943:186::-;1002:6;1055:2;1043:9;1034:7;1030:23;1026:32;1023:52;;;1071:1;1068;1061:12;1023:52;1094:29;1113:9;1094:29;:::i;:::-;1084:39;943:186;-1:-1:-1;;;943:186:37:o;1134:1365::-;1288:6;1296;1304;1312;1320;1373:3;1361:9;1352:7;1348:23;1344:33;1341:53;;;1390:1;1387;1380:12;1341:53;1413:29;1432:9;1413:29;:::i;:::-;1403:39;;1461:2;1482:38;1516:2;1505:9;1501:18;1482:38;:::i;:::-;1472:48;;1571:2;1560:9;1556:18;1543:32;1594:18;1635:2;1627:6;1624:14;1621:34;;;1651:1;1648;1641:12;1621:34;1674:61;1727:7;1718:6;1707:9;1703:22;1674:61;:::i;:::-;1664:71;;1788:2;1777:9;1773:18;1760:32;1744:48;;1817:2;1807:8;1804:16;1801:36;;;1833:1;1830;1823:12;1801:36;1856:63;1911:7;1900:8;1889:9;1885:24;1856:63;:::i;:::-;1846:73;;1972:3;1961:9;1957:19;1944:33;1928:49;;2002:2;1992:8;1989:16;1986:36;;;2018:1;2015;2008:12;1986:36;2056:8;2045:9;2041:24;2031:34;;2103:7;2096:4;2092:2;2088:13;2084:27;2074:55;;2125:1;2122;2115:12;2074:55;2161:2;2148:16;2183:2;2179;2176:10;2173:36;;;2189:18;;:::i;:::-;2231:53;2274:2;2255:13;;-1:-1:-1;;2251:27:37;2247:36;;2231:53;:::i;:::-;2218:66;;2307:2;2300:5;2293:17;2347:7;2342:2;2337;2333;2329:11;2325:20;2322:33;2319:53;;;2368:1;2365;2358:12;2319:53;2423:2;2418;2414;2410:11;2405:2;2398:5;2394:14;2381:45;2467:1;2462:2;2457;2450:5;2446:14;2442:23;2435:34;;2488:5;2478:15;;;;;1134:1365;;;;;;;;:::o;2504:877::-;2610:6;2618;2626;2634;2642;2650;2703:3;2691:9;2682:7;2678:23;2674:33;2671:53;;;2720:1;2717;2710:12;2671:53;2743:29;2762:9;2743:29;:::i;:::-;2733:39;;2791:38;2825:2;2814:9;2810:18;2791:38;:::i;:::-;2781:48;;2876:2;2865:9;2861:18;2848:32;2838:42;;2927:2;2916:9;2912:18;2899:32;2889:42;;2982:3;2971:9;2967:19;2954:33;3006:18;3047:2;3039:6;3036:14;3033:34;;;3063:1;3060;3053:12;3033:34;3101:6;3090:9;3086:22;3076:32;;3146:7;3139:4;3135:2;3131:13;3127:27;3117:55;;3168:1;3165;3158:12;3117:55;3208:2;3195:16;3234:2;3226:6;3223:14;3220:34;;;3250:1;3247;3240:12;3220:34;3295:7;3290:2;3281:6;3277:2;3273:15;3269:24;3266:37;3263:57;;;3316:1;3313;3306:12;3263:57;3347:2;3343;3339:11;3329:21;;3369:6;3359:16;;;;;2504:877;;;;;;;;:::o;3386:254::-;3454:6;3462;3515:2;3503:9;3494:7;3490:23;3486:32;3483:52;;;3531:1;3528;3521:12;3483:52;3554:29;3573:9;3554:29;:::i;:::-;3544:39;3630:2;3615:18;;;;3602:32;;-1:-1:-1;;;3386:254:37:o;3645:343::-;3711:6;3719;3772:2;3760:9;3751:7;3747:23;3743:32;3740:52;;;3788:1;3785;3778:12;3740:52;3811:29;3830:9;3811:29;:::i;:::-;3801:39;;3890:2;3879:9;3875:18;3862:32;3934:4;3927:5;3923:16;3916:5;3913:27;3903:55;;3954:1;3951;3944:12;3903:55;3977:5;3967:15;;;3645:343;;;;;:::o;3993:277::-;4060:6;4113:2;4101:9;4092:7;4088:23;4084:32;4081:52;;;4129:1;4126;4119:12;4081:52;4161:9;4155:16;4214:5;4207:13;4200:21;4193:5;4190:32;4180:60;;4236:1;4233;4226:12;4275:332;4333:6;4386:2;4374:9;4365:7;4361:23;4357:32;4354:52;;;4402:1;4399;4392:12;4354:52;4441:9;4428:23;-1:-1:-1;;;;;;4484:5:37;4480:78;4473:5;4470:89;4460:117;;4573:1;4570;4563:12;7306:275;7377:2;7371:9;7442:2;7423:13;;-1:-1:-1;;7419:27:37;7407:40;;7477:18;7462:34;;7498:22;;;7459:62;7456:88;;;7524:18;;:::i;:::-;7560:2;7553:22;7306:275;;-1:-1:-1;7306:275:37:o;7586:128::-;7626:3;7657:1;7653:6;7650:1;7647:13;7644:39;;;7663:18;;:::i;:::-;-1:-1:-1;7699:9:37;;7586:128::o;7719:135::-;7758:3;-1:-1:-1;;7779:17:37;;7776:43;;;7799:18;;:::i;:::-;-1:-1:-1;7846:1:37;7835:13;;7719:135::o;7859:184::-;-1:-1:-1;;;7908:1:37;7901:88;8008:4;8005:1;7998:15;8032:4;8029:1;8022:15;8048:184;-1:-1:-1;;;8097:1:37;8090:88;8197:4;8194:1;8187:15;8221:4;8218:1;8211:15;8237:184;-1:-1:-1;;;8286:1:37;8279:88;8386:4;8383:1;8376:15;8410:4;8407:1;8400:15",
	"source": "// SPDX-License-Identifier: MIT\r\n\r\npragma solidity ^0.8.7;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\"; \r\nimport \"./Builder.sol\";\r\nimport \"./SeedItem.sol\"; \r\n\r\n\r\nabstract contract ERC1155Receiver is ERC165, IERC1155Receiver {\r\n     function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\r\n        return interfaceId == type(IERC1155Receiver).interfaceId || super.supportsInterface(interfaceId);\r\n    }\r\n}\r\n\r\ncontract SeedItemReceiver is ERC1155Receiver, Ownable {\r\n\r\n    mapping(address => mapping(uint256 => uint256)) private _funds; \r\n    mapping(address => bool) private _isSpecialCollected; \r\n    address private _builder; \r\n    address private _item;\r\n\r\n    function setBuilder(address builder) external onlyOwner {\r\n        _builder = builder; \r\n    }\r\n\r\n    function setItem(address item) external onlyOwner {\r\n        _item = item; \r\n    }\r\n\r\n     function onERC1155Received(\r\n        address operator,\r\n        address from,\r\n        uint256 id,\r\n        uint256 value,\r\n        bytes calldata data\r\n    ) public virtual override returns (bytes4) {\r\n        _funds[from][id] = value; \r\n        return this.onERC1155Received.selector;\r\n    }\r\n\r\n    function onERC1155BatchReceived(\r\n        address operator,\r\n        address from,\r\n        uint256[] memory ids,\r\n        uint256[] memory values,\r\n        bytes memory data\r\n    ) public virtual override returns (bytes4) {\r\n        for(uint256 i = 0; i < ids.length; ++i) {\r\n            _funds[from][ids[i]] = values[i]; \r\n        }\r\n        return this.onERC1155BatchReceived.selector;\r\n    }\r\n\r\n    function funds(address account, uint256 id) external view returns (uint256) {\r\n        return _funds[account][id];\r\n    } \r\n    \r\n    function isSpecialCollected(address account) public view returns (bool) {\r\n        return _isSpecialCollected[account]; \r\n    }\r\n    function collectSpecial(address account, uint8 _pos) public \r\n        specialNotCollected returns (bool) {\r\n        if (_funds[account][0] + _funds[account][1] \r\n            + _funds[account][2] + _funds[account][3] \r\n            + _funds[account][4] < 3) revert(\"Not enough NFTs collected\");   \r\n        _isSpecialCollected[account] = true;\r\n        Builder(_builder).collectSpecial(account, _pos); \r\n        return true; \r\n    }\r\n\r\n    modifier specialNotCollected() {\r\n        require(_isSpecialCollected[msg.sender] != true, \r\n        \"You have already collected special. \"); \r\n        _; \r\n    }\r\n}",
	"sourcePath": "C:/Github/SeedFarm/contracts/SeedItemReceiver.sol",
	"ast": {
	  "absolutePath": "/C/Github/SeedFarm/contracts/SeedItemReceiver.sol",
	  "exportedSymbols": {
		"Address": [
		  4757
		],
		"Builder": [
		  1510
		],
		"Context": [
		  4779
		],
		"ERC1155": [
		  3593
		],
		"ERC1155Receiver": [
		  1937
		],
		"ERC165": [
		  4803
		],
		"ERC20": [
		  4359
		],
		"IERC1155": [
		  3715
		],
		"IERC1155MetadataURI": [
		  3771
		],
		"IERC1155Receiver": [
		  3756
		],
		"IERC165": [
		  4815
		],
		"IERC20": [
		  4437
		],
		"IERC20Metadata": [
		  4462
		],
		"Ownable": [
		  2497
		],
		"SeedItem": [
		  1903
		],
		"SeedItemReceiver": [
		  2163
		],
		"SeedToken": [
		  2235
		]
	  },
	  "id": 2164,
	  "license": "MIT",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 1905,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".7"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "35:23:11"
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
		  "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
		  "id": 1906,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 3757,
		  "src": "62:68:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
		  "file": "@openzeppelin/contracts/access/Ownable.sol",
		  "id": 1907,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 2498,
		  "src": "132:52:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/Builder.sol",
		  "file": "./Builder.sol",
		  "id": 1908,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 1511,
		  "src": "187:23:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/SeedItem.sol",
		  "file": "./SeedItem.sol",
		  "id": 1909,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 1904,
		  "src": "212:24:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": true,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 1910,
				"name": "ERC165",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 4803,
				"src": "280:6:11"
			  },
			  "id": 1911,
			  "nodeType": "InheritanceSpecifier",
			  "src": "280:6:11"
			},
			{
			  "baseName": {
				"id": 1912,
				"name": "IERC1155Receiver",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 3756,
				"src": "288:16:11"
			  },
			  "id": 1913,
			  "nodeType": "InheritanceSpecifier",
			  "src": "288:16:11"
			}
		  ],
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": false,
		  "id": 1937,
		  "linearizedBaseContracts": [
			1937,
			3756,
			4803,
			4815
		  ],
		  "name": "ERC1155Receiver",
		  "nameLocation": "261:15:11",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "baseFunctions": [
				4802,
				4814
			  ],
			  "body": {
				"id": 1935,
				"nodeType": "Block",
				"src": "421:115:11",
				"statements": [
				  {
					"expression": {
					  "commonType": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "id": 1933,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"commonType": {
						  "typeIdentifier": "t_bytes4",
						  "typeString": "bytes4"
						},
						"id": 1928,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "id": 1923,
						  "name": "interfaceId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1915,
						  "src": "439:11:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes4",
							"typeString": "bytes4"
						  }
						},
						"nodeType": "BinaryOperation",
						"operator": "==",
						"rightExpression": {
						  "expression": {
							"arguments": [
							  {
								"id": 1925,
								"name": "IERC1155Receiver",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 3756,
								"src": "459:16:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$3756_$",
								  "typeString": "type(contract IERC1155Receiver)"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$3756_$",
								  "typeString": "type(contract IERC1155Receiver)"
								}
							  ],
							  "id": 1924,
							  "name": "type",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967269,
							  "src": "454:4:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_metatype_pure$__$returns$__$",
								"typeString": "function () pure"
							  }
							},
							"id": 1926,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "454:22:11",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155Receiver_$3756",
							  "typeString": "type(contract IERC1155Receiver)"
							}
						  },
						  "id": 1927,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "memberName": "interfaceId",
						  "nodeType": "MemberAccess",
						  "src": "454:34:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes4",
							"typeString": "bytes4"
						  }
						},
						"src": "439:49:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "||",
					  "rightExpression": {
						"arguments": [
						  {
							"id": 1931,
							"name": "interfaceId",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1915,
							"src": "516:11:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_bytes4",
							  "typeString": "bytes4"
							}
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_bytes4",
							  "typeString": "bytes4"
							}
						  ],
						  "expression": {
							"id": 1929,
							"name": "super",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967271,
							"src": "492:5:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_super$_ERC1155Receiver_$1937_$",
							  "typeString": "type(contract super ERC1155Receiver)"
							}
						  },
						  "id": 1930,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "supportsInterface",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 4802,
						  "src": "492:23:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
							"typeString": "function (bytes4) view returns (bool)"
						  }
						},
						"id": 1932,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "492:36:11",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "439:89:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 1922,
					"id": 1934,
					"nodeType": "Return",
					"src": "432:96:11"
				  }
				]
			  },
			  "functionSelector": "01ffc9a7",
			  "id": 1936,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "supportsInterface",
			  "nameLocation": "322:17:11",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 1919,
				"nodeType": "OverrideSpecifier",
				"overrides": [
				  {
					"id": 1917,
					"name": "ERC165",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 4803,
					"src": "389:6:11"
				  },
				  {
					"id": 1918,
					"name": "IERC165",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 4815,
					"src": "397:7:11"
				  }
				],
				"src": "380:25:11"
			  },
			  "parameters": {
				"id": 1916,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1915,
					"mutability": "mutable",
					"name": "interfaceId",
					"nameLocation": "347:11:11",
					"nodeType": "VariableDeclaration",
					"scope": 1936,
					"src": "340:18:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 1914,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "340:6:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "339:20:11"
			  },
			  "returnParameters": {
				"id": 1922,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1921,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 1936,
					"src": "415:4:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 1920,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "415:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "414:6:11"
			  },
			  "scope": 1937,
			  "src": "313:223:11",
			  "stateMutability": "view",
			  "virtual": true,
			  "visibility": "public"
			}
		  ],
		  "scope": 2164,
		  "src": "243:296:11",
		  "usedErrors": []
		},
		{
		  "abstract": false,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 1938,
				"name": "ERC1155Receiver",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 1937,
				"src": "572:15:11"
			  },
			  "id": 1939,
			  "nodeType": "InheritanceSpecifier",
			  "src": "572:15:11"
			},
			{
			  "baseName": {
				"id": 1940,
				"name": "Ownable",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2497,
				"src": "589:7:11"
			  },
			  "id": 1941,
			  "nodeType": "InheritanceSpecifier",
			  "src": "589:7:11"
			}
		  ],
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": true,
		  "id": 2163,
		  "linearizedBaseContracts": [
			2163,
			2497,
			4779,
			1937,
			3756,
			4803,
			4815
		  ],
		  "name": "SeedItemReceiver",
		  "nameLocation": "552:16:11",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "constant": false,
			  "id": 1947,
			  "mutability": "mutable",
			  "name": "_funds",
			  "nameLocation": "662:6:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "606:62:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
				"typeString": "mapping(address => mapping(uint256 => uint256))"
			  },
			  "typeName": {
				"id": 1946,
				"keyType": {
				  "id": 1942,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "614:7:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "606:47:11",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
				  "typeString": "mapping(address => mapping(uint256 => uint256))"
				},
				"valueType": {
				  "id": 1945,
				  "keyType": {
					"id": 1943,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "633:7:11",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "nodeType": "Mapping",
				  "src": "625:27:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
					"typeString": "mapping(uint256 => uint256)"
				  },
				  "valueType": {
					"id": 1944,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "644:7:11",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  }
				}
			  },
			  "visibility": "private"
			},
			{
			  "constant": false,
			  "id": 1951,
			  "mutability": "mutable",
			  "name": "_isSpecialCollected",
			  "nameLocation": "709:19:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "676:52:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 1950,
				"keyType": {
				  "id": 1948,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "684:7:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "676:24:11",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 1949,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "695:4:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "private"
			},
			{
			  "constant": false,
			  "id": 1953,
			  "mutability": "mutable",
			  "name": "_builder",
			  "nameLocation": "752:8:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "736:24:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 1952,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "736:7:11",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "private"
			},
			{
			  "constant": false,
			  "id": 1955,
			  "mutability": "mutable",
			  "name": "_item",
			  "nameLocation": "784:5:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "768:21:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 1954,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "768:7:11",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "private"
			},
			{
			  "body": {
				"id": 1966,
				"nodeType": "Block",
				"src": "854:38:11",
				"statements": [
				  {
					"expression": {
					  "id": 1964,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 1962,
						"name": "_builder",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1953,
						"src": "865:8:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 1963,
						"name": "builder",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1957,
						"src": "876:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "865:18:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 1965,
					"nodeType": "ExpressionStatement",
					"src": "865:18:11"
				  }
				]
			  },
			  "functionSelector": "6c6d6a17",
			  "id": 1967,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 1960,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 1959,
					"name": "onlyOwner",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2439,
					"src": "844:9:11"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "844:9:11"
				}
			  ],
			  "name": "setBuilder",
			  "nameLocation": "807:10:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 1958,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1957,
					"mutability": "mutable",
					"name": "builder",
					"nameLocation": "826:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 1967,
					"src": "818:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1956,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "818:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "817:17:11"
			  },
			  "returnParameters": {
				"id": 1961,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "854:0:11"
			  },
			  "scope": 2163,
			  "src": "798:94:11",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 1978,
				"nodeType": "Block",
				"src": "950:32:11",
				"statements": [
				  {
					"expression": {
					  "id": 1976,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 1974,
						"name": "_item",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1955,
						"src": "961:5:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 1975,
						"name": "item",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1969,
						"src": "969:4:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "961:12:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 1977,
					"nodeType": "ExpressionStatement",
					"src": "961:12:11"
				  }
				]
			  },
			  "functionSelector": "165ed276",
			  "id": 1979,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 1972,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 1971,
					"name": "onlyOwner",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2439,
					"src": "940:9:11"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "940:9:11"
				}
			  ],
			  "name": "setItem",
			  "nameLocation": "909:7:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 1970,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1969,
					"mutability": "mutable",
					"name": "item",
					"nameLocation": "925:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 1979,
					"src": "917:12:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1968,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "917:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "916:14:11"
			  },
			  "returnParameters": {
				"id": 1973,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "950:0:11"
			  },
			  "scope": 2163,
			  "src": "900:82:11",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "baseFunctions": [
				3737
			  ],
			  "body": {
				"id": 2007,
				"nodeType": "Block",
				"src": "1191:93:11",
				"statements": [
				  {
					"expression": {
					  "id": 2001,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 1995,
							"name": "_funds",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1947,
							"src": "1202:6:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
							  "typeString": "mapping(address => mapping(uint256 => uint256))"
							}
						  },
						  "id": 1998,
						  "indexExpression": {
							"id": 1996,
							"name": "from",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1983,
							"src": "1209:4:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "1202:12:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
							"typeString": "mapping(uint256 => uint256)"
						  }
						},
						"id": 1999,
						"indexExpression": {
						  "id": 1997,
						  "name": "id",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1985,
						  "src": "1215:2:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "1202:16:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 2000,
						"name": "value",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1987,
						"src": "1221:5:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1202:24:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 2002,
					"nodeType": "ExpressionStatement",
					"src": "1202:24:11"
				  },
				  {
					"expression": {
					  "expression": {
						"expression": {
						  "id": 2003,
						  "name": "this",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967268,
						  "src": "1245:4:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_SeedItemReceiver_$2163",
							"typeString": "contract SeedItemReceiver"
						  }
						},
						"id": 2004,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "onERC1155Received",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2008,
						"src": "1245:22:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
						  "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
						}
					  },
					  "id": 2005,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "lValueRequested": false,
					  "memberName": "selector",
					  "nodeType": "MemberAccess",
					  "src": "1245:31:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"functionReturnParameters": 1994,
					"id": 2006,
					"nodeType": "Return",
					"src": "1238:38:11"
				  }
				]
			  },
			  "functionSelector": "f23a6e61",
			  "id": 2008,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "onERC1155Received",
			  "nameLocation": "1000:17:11",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 1991,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "1165:8:11"
			  },
			  "parameters": {
				"id": 1990,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1981,
					"mutability": "mutable",
					"name": "operator",
					"nameLocation": "1036:8:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1028:16:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1980,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1028:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1983,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "1063:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1055:12:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1982,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1055:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1985,
					"mutability": "mutable",
					"name": "id",
					"nameLocation": "1086:2:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1078:10:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 1984,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1078:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1987,
					"mutability": "mutable",
					"name": "value",
					"nameLocation": "1107:5:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1099:13:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 1986,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1099:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1989,
					"mutability": "mutable",
					"name": "data",
					"nameLocation": "1138:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1123:19:11",
					"stateVariable": false,
					"storageLocation": "calldata",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes_calldata_ptr",
					  "typeString": "bytes"
					},
					"typeName": {
					  "id": 1988,
					  "name": "bytes",
					  "nodeType": "ElementaryTypeName",
					  "src": "1123:5:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes_storage_ptr",
						"typeString": "bytes"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1017:132:11"
			  },
			  "returnParameters": {
				"id": 1994,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1993,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1183:6:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 1992,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "1183:6:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1182:8:11"
			  },
			  "scope": 2163,
			  "src": "991:293:11",
			  "stateMutability": "nonpayable",
			  "virtual": true,
			  "visibility": "public"
			},
			{
			  "baseFunctions": [
				3755
			  ],
			  "body": {
				"id": 2055,
				"nodeType": "Block",
				"src": "1515:172:11",
				"statements": [
				  {
					"body": {
					  "id": 2049,
					  "nodeType": "Block",
					  "src": "1566:60:11",
					  "statements": [
						{
						  "expression": {
							"id": 2047,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "baseExpression": {
								"baseExpression": {
								  "id": 2037,
								  "name": "_funds",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 1947,
								  "src": "1581:6:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									"typeString": "mapping(address => mapping(uint256 => uint256))"
								  }
								},
								"id": 2042,
								"indexExpression": {
								  "id": 2038,
								  "name": "from",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2012,
								  "src": "1588:4:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "1581:12:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
								  "typeString": "mapping(uint256 => uint256)"
								}
							  },
							  "id": 2043,
							  "indexExpression": {
								"baseExpression": {
								  "id": 2039,
								  "name": "ids",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2015,
								  "src": "1594:3:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
									"typeString": "uint256[] memory"
								  }
								},
								"id": 2041,
								"indexExpression": {
								  "id": 2040,
								  "name": "i",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2027,
								  "src": "1598:1:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "1594:6:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": true,
							  "nodeType": "IndexAccess",
							  "src": "1581:20:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "baseExpression": {
								"id": 2044,
								"name": "values",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 2018,
								"src": "1604:6:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
								  "typeString": "uint256[] memory"
								}
							  },
							  "id": 2046,
							  "indexExpression": {
								"id": 2045,
								"name": "i",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 2027,
								"src": "1611:1:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "1604:9:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "1581:32:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "id": 2048,
						  "nodeType": "ExpressionStatement",
						  "src": "1581:32:11"
						}
					  ]
					},
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 2033,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 2030,
						"name": "i",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2027,
						"src": "1545:1:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "<",
					  "rightExpression": {
						"expression": {
						  "id": 2031,
						  "name": "ids",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2015,
						  "src": "1549:3:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
							"typeString": "uint256[] memory"
						  }
						},
						"id": 2032,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "length",
						"nodeType": "MemberAccess",
						"src": "1549:10:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1545:14:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2050,
					"initializationExpression": {
					  "assignments": [
						2027
					  ],
					  "declarations": [
						{
						  "constant": false,
						  "id": 2027,
						  "mutability": "mutable",
						  "name": "i",
						  "nameLocation": "1538:1:11",
						  "nodeType": "VariableDeclaration",
						  "scope": 2050,
						  "src": "1530:9:11",
						  "stateVariable": false,
						  "storageLocation": "default",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "typeName": {
							"id": 2026,
							"name": "uint256",
							"nodeType": "ElementaryTypeName",
							"src": "1530:7:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "visibility": "internal"
						}
					  ],
					  "id": 2029,
					  "initialValue": {
						"hexValue": "30",
						"id": 2028,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1542:1:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "nodeType": "VariableDeclarationStatement",
					  "src": "1530:13:11"
					},
					"loopExpression": {
					  "expression": {
						"id": 2035,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "++",
						"prefix": true,
						"src": "1561:3:11",
						"subExpression": {
						  "id": 2034,
						  "name": "i",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2027,
						  "src": "1563:1:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 2036,
					  "nodeType": "ExpressionStatement",
					  "src": "1561:3:11"
					},
					"nodeType": "ForStatement",
					"src": "1526:100:11"
				  },
				  {
					"expression": {
					  "expression": {
						"expression": {
						  "id": 2051,
						  "name": "this",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967268,
						  "src": "1643:4:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_SeedItemReceiver_$2163",
							"typeString": "contract SeedItemReceiver"
						  }
						},
						"id": 2052,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "onERC1155BatchReceived",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2056,
						"src": "1643:27:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
						  "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
						}
					  },
					  "id": 2053,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "lValueRequested": false,
					  "memberName": "selector",
					  "nodeType": "MemberAccess",
					  "src": "1643:36:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"functionReturnParameters": 2025,
					"id": 2054,
					"nodeType": "Return",
					"src": "1636:43:11"
				  }
				]
			  },
			  "functionSelector": "bc197c81",
			  "id": 2056,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "onERC1155BatchReceived",
			  "nameLocation": "1301:22:11",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 2022,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "1489:8:11"
			  },
			  "parameters": {
				"id": 2021,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2010,
					"mutability": "mutable",
					"name": "operator",
					"nameLocation": "1342:8:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1334:16:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2009,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1334:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2012,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "1369:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1361:12:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2011,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1361:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2015,
					"mutability": "mutable",
					"name": "ids",
					"nameLocation": "1401:3:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1384:20:11",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
					  "typeString": "uint256[]"
					},
					"typeName": {
					  "baseType": {
						"id": 2013,
						"name": "uint256",
						"nodeType": "ElementaryTypeName",
						"src": "1384:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 2014,
					  "nodeType": "ArrayTypeName",
					  "src": "1384:9:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
						"typeString": "uint256[]"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2018,
					"mutability": "mutable",
					"name": "values",
					"nameLocation": "1432:6:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1415:23:11",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
					  "typeString": "uint256[]"
					},
					"typeName": {
					  "baseType": {
						"id": 2016,
						"name": "uint256",
						"nodeType": "ElementaryTypeName",
						"src": "1415:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 2017,
					  "nodeType": "ArrayTypeName",
					  "src": "1415:9:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
						"typeString": "uint256[]"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2020,
					"mutability": "mutable",
					"name": "data",
					"nameLocation": "1462:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1449:17:11",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes_memory_ptr",
					  "typeString": "bytes"
					},
					"typeName": {
					  "id": 2019,
					  "name": "bytes",
					  "nodeType": "ElementaryTypeName",
					  "src": "1449:5:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes_storage_ptr",
						"typeString": "bytes"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1323:150:11"
			  },
			  "returnParameters": {
				"id": 2025,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2024,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1507:6:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 2023,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "1507:6:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1506:8:11"
			  },
			  "scope": 2163,
			  "src": "1292:395:11",
			  "stateMutability": "nonpayable",
			  "virtual": true,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 2071,
				"nodeType": "Block",
				"src": "1771:45:11",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 2065,
						  "name": "_funds",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1947,
						  "src": "1789:6:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
							"typeString": "mapping(address => mapping(uint256 => uint256))"
						  }
						},
						"id": 2067,
						"indexExpression": {
						  "id": 2066,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2058,
						  "src": "1796:7:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "IndexAccess",
						"src": "1789:15:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
						  "typeString": "mapping(uint256 => uint256)"
						}
					  },
					  "id": 2069,
					  "indexExpression": {
						"id": 2068,
						"name": "id",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2060,
						"src": "1805:2:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "1789:19:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 2064,
					"id": 2070,
					"nodeType": "Return",
					"src": "1782:26:11"
				  }
				]
			  },
			  "functionSelector": "88b22c24",
			  "id": 2072,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "funds",
			  "nameLocation": "1704:5:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 2061,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2058,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "1718:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 2072,
					"src": "1710:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2057,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1710:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2060,
					"mutability": "mutable",
					"name": "id",
					"nameLocation": "1735:2:11",
					"nodeType": "VariableDeclaration",
					"scope": 2072,
					"src": "1727:10:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 2059,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1727:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1709:29:11"
			  },
			  "returnParameters": {
				"id": 2064,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2063,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2072,
					"src": "1762:7:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 2062,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1762:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1761:9:11"
			  },
			  "scope": 2163,
			  "src": "1695:121:11",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 2083,
				"nodeType": "Block",
				"src": "1901:55:11",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 2079,
						"name": "_isSpecialCollected",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1951,
						"src": "1919:19:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
						  "typeString": "mapping(address => bool)"
						}
					  },
					  "id": 2081,
					  "indexExpression": {
						"id": 2080,
						"name": "account",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2074,
						"src": "1939:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "1919:28:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 2078,
					"id": 2082,
					"nodeType": "Return",
					"src": "1912:35:11"
				  }
				]
			  },
			  "functionSelector": "f09d39e3",
			  "id": 2084,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "isSpecialCollected",
			  "nameLocation": "1838:18:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 2075,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2074,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "1865:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 2084,
					"src": "1857:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2073,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1857:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1856:17:11"
			  },
			  "returnParameters": {
				"id": 2078,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2077,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2084,
					"src": "1895:4:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 2076,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "1895:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1894:6:11"
			  },
			  "scope": 2163,
			  "src": "1829:127:11",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 2147,
				"nodeType": "Block",
				"src": "2067:325:11",
				"statements": [
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 2125,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"commonType": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"id": 2123,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 2117,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 2111,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  },
							  "id": 2105,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"baseExpression": {
								  "baseExpression": {
									"id": 2095,
									"name": "_funds",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 1947,
									"src": "2082:6:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									  "typeString": "mapping(address => mapping(uint256 => uint256))"
									}
								  },
								  "id": 2097,
								  "indexExpression": {
									"id": 2096,
									"name": "account",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 2086,
									"src": "2089:7:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "isConstant": false,
								  "isLValue": true,
								  "isPure": false,
								  "lValueRequested": false,
								  "nodeType": "IndexAccess",
								  "src": "2082:15:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
									"typeString": "mapping(uint256 => uint256)"
								  }
								},
								"id": 2099,
								"indexExpression": {
								  "hexValue": "30",
								  "id": 2098,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "kind": "number",
								  "lValueRequested": false,
								  "nodeType": "Literal",
								  "src": "2098:1:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_rational_0_by_1",
									"typeString": "int_const 0"
								  },
								  "value": "0"
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "2082:18:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "+",
							  "rightExpression": {
								"baseExpression": {
								  "baseExpression": {
									"id": 2100,
									"name": "_funds",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 1947,
									"src": "2103:6:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									  "typeString": "mapping(address => mapping(uint256 => uint256))"
									}
								  },
								  "id": 2102,
								  "indexExpression": {
									"id": 2101,
									"name": "account",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 2086,
									"src": "2110:7:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "isConstant": false,
								  "isLValue": true,
								  "isPure": false,
								  "lValueRequested": false,
								  "nodeType": "IndexAccess",
								  "src": "2103:15:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
									"typeString": "mapping(uint256 => uint256)"
								  }
								},
								"id": 2104,
								"indexExpression": {
								  "hexValue": "31",
								  "id": 2103,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "kind": "number",
								  "lValueRequested": false,
								  "nodeType": "Literal",
								  "src": "2119:1:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_rational_1_by_1",
									"typeString": "int_const 1"
								  },
								  "value": "1"
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "2103:18:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "src": "2082:39:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "+",
							"rightExpression": {
							  "baseExpression": {
								"baseExpression": {
								  "id": 2106,
								  "name": "_funds",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 1947,
								  "src": "2138:6:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									"typeString": "mapping(address => mapping(uint256 => uint256))"
								  }
								},
								"id": 2108,
								"indexExpression": {
								  "id": 2107,
								  "name": "account",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2086,
								  "src": "2145:7:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "2138:15:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
								  "typeString": "mapping(uint256 => uint256)"
								}
							  },
							  "id": 2110,
							  "indexExpression": {
								"hexValue": "32",
								"id": 2109,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2154:1:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_2_by_1",
								  "typeString": "int_const 2"
								},
								"value": "2"
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "2138:18:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "2082:74:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "+",
						  "rightExpression": {
							"baseExpression": {
							  "baseExpression": {
								"id": 2112,
								"name": "_funds",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1947,
								"src": "2159:6:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
								  "typeString": "mapping(address => mapping(uint256 => uint256))"
								}
							  },
							  "id": 2114,
							  "indexExpression": {
								"id": 2113,
								"name": "account",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 2086,
								"src": "2166:7:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "2159:15:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
								"typeString": "mapping(uint256 => uint256)"
							  }
							},
							"id": 2116,
							"indexExpression": {
							  "hexValue": "33",
							  "id": 2115,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "2175:1:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_3_by_1",
								"typeString": "int_const 3"
							  },
							  "value": "3"
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2159:18:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "2082:95:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"nodeType": "BinaryOperation",
						"operator": "+",
						"rightExpression": {
						  "baseExpression": {
							"baseExpression": {
							  "id": 2118,
							  "name": "_funds",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1947,
							  "src": "2194:6:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
								"typeString": "mapping(address => mapping(uint256 => uint256))"
							  }
							},
							"id": 2120,
							"indexExpression": {
							  "id": 2119,
							  "name": "account",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 2086,
							  "src": "2201:7:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2194:15:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
							  "typeString": "mapping(uint256 => uint256)"
							}
						  },
						  "id": 2122,
						  "indexExpression": {
							"hexValue": "34",
							"id": 2121,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2210:1:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_4_by_1",
							  "typeString": "int_const 4"
							},
							"value": "4"
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "2194:18:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"src": "2082:130:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "<",
					  "rightExpression": {
						"hexValue": "33",
						"id": 2124,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2215:1:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_3_by_1",
						  "typeString": "int_const 3"
						},
						"value": "3"
					  },
					  "src": "2082:134:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2130,
					"nodeType": "IfStatement",
					"src": "2078:175:11",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "4e6f7420656e6f756768204e46547320636f6c6c6563746564",
							"id": 2127,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2225:27:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_36f61271bb0b1f7068062b8ae4311798e31ce010c882d6f1c20db1f45757f326",
							  "typeString": "literal_string \"Not enough NFTs collected\""
							},
							"value": "Not enough NFTs collected"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_36f61271bb0b1f7068062b8ae4311798e31ce010c882d6f1c20db1f45757f326",
							  "typeString": "literal_string \"Not enough NFTs collected\""
							}
						  ],
						  "id": 2126,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "2218:6:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 2128,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "2218:35:11",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 2129,
					  "nodeType": "ExpressionStatement",
					  "src": "2218:35:11"
					}
				  },
				  {
					"expression": {
					  "id": 2135,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 2131,
						  "name": "_isSpecialCollected",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1951,
						  "src": "2267:19:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 2133,
						"indexExpression": {
						  "id": 2132,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2086,
						  "src": "2287:7:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2267:28:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 2134,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2298:4:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "2267:35:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2136,
					"nodeType": "ExpressionStatement",
					"src": "2267:35:11"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 2141,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2086,
						  "src": "2346:7:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 2142,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2088,
						  "src": "2355:4:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						],
						"expression": {
						  "arguments": [
							{
							  "id": 2138,
							  "name": "_builder",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1953,
							  "src": "2321:8:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							],
							"id": 2137,
							"name": "Builder",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1510,
							"src": "2313:7:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_contract$_Builder_$1510_$",
							  "typeString": "type(contract Builder)"
							}
						  },
						  "id": 2139,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "2313:17:11",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Builder_$1510",
							"typeString": "contract Builder"
						  }
						},
						"id": 2140,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "collectSpecial",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 1186,
						"src": "2313:32:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint8_$returns$_t_bool_$",
						  "typeString": "function (address,uint8) external returns (bool)"
						}
					  },
					  "id": 2143,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2313:47:11",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2144,
					"nodeType": "ExpressionStatement",
					"src": "2313:47:11"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 2145,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "2379:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 2094,
					"id": 2146,
					"nodeType": "Return",
					"src": "2372:11:11"
				  }
				]
			  },
			  "functionSelector": "e9638298",
			  "id": 2148,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 2091,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 2090,
					"name": "specialNotCollected",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2162,
					"src": "2032:19:11"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2032:19:11"
				}
			  ],
			  "name": "collectSpecial",
			  "nameLocation": "1971:14:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 2089,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2086,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "1994:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 2148,
					"src": "1986:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2085,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1986:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2088,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "2009:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2148,
					"src": "2003:10:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 2087,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "2003:5:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1985:29:11"
			  },
			  "returnParameters": {
				"id": 2094,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2093,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2148,
					"src": "2061:4:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 2092,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "2061:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2060:6:11"
			  },
			  "scope": 2163,
			  "src": "1962:430:11",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 2161,
				"nodeType": "Block",
				"src": "2431:131:11",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 2156,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 2151,
							  "name": "_isSpecialCollected",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1951,
							  "src": "2450:19:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								"typeString": "mapping(address => bool)"
							  }
							},
							"id": 2154,
							"indexExpression": {
							  "expression": {
								"id": 2152,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "2470:3:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 2153,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "2470:10:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2450:31:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"hexValue": "74727565",
							"id": 2155,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "bool",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2485:4:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"value": "true"
						  },
						  "src": "2450:39:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "596f75206861766520616c726561647920636f6c6c6563746564207370656369616c2e20",
						  "id": 2157,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2501:38:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_cdc3b747d92c283e1da7003e640dff49505af3ee9b9189ec315ec13ff54d3b42",
							"typeString": "literal_string \"You have already collected special. \""
						  },
						  "value": "You have already collected special. "
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_cdc3b747d92c283e1da7003e640dff49505af3ee9b9189ec315ec13ff54d3b42",
							"typeString": "literal_string \"You have already collected special. \""
						  }
						],
						"id": 2150,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2442:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 2158,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2442:98:11",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 2159,
					"nodeType": "ExpressionStatement",
					"src": "2442:98:11"
				  },
				  {
					"id": 2160,
					"nodeType": "PlaceholderStatement",
					"src": "2552:1:11"
				  }
				]
			  },
			  "id": 2162,
			  "name": "specialNotCollected",
			  "nameLocation": "2409:19:11",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 2149,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2428:2:11"
			  },
			  "src": "2400:162:11",
			  "virtual": false,
			  "visibility": "internal"
			}
		  ],
		  "scope": 2164,
		  "src": "543:2022:11",
		  "usedErrors": []
		}
	  ],
	  "src": "35:2530:11"
	},
	"legacyAST": {
	  "absolutePath": "/C/Github/SeedFarm/contracts/SeedItemReceiver.sol",
	  "exportedSymbols": {
		"Address": [
		  4757
		],
		"Builder": [
		  1510
		],
		"Context": [
		  4779
		],
		"ERC1155": [
		  3593
		],
		"ERC1155Receiver": [
		  1937
		],
		"ERC165": [
		  4803
		],
		"ERC20": [
		  4359
		],
		"IERC1155": [
		  3715
		],
		"IERC1155MetadataURI": [
		  3771
		],
		"IERC1155Receiver": [
		  3756
		],
		"IERC165": [
		  4815
		],
		"IERC20": [
		  4437
		],
		"IERC20Metadata": [
		  4462
		],
		"Ownable": [
		  2497
		],
		"SeedItem": [
		  1903
		],
		"SeedItemReceiver": [
		  2163
		],
		"SeedToken": [
		  2235
		]
	  },
	  "id": 2164,
	  "license": "MIT",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 1905,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".7"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "35:23:11"
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
		  "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
		  "id": 1906,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 3757,
		  "src": "62:68:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
		  "file": "@openzeppelin/contracts/access/Ownable.sol",
		  "id": 1907,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 2498,
		  "src": "132:52:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/Builder.sol",
		  "file": "./Builder.sol",
		  "id": 1908,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 1511,
		  "src": "187:23:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/SeedItem.sol",
		  "file": "./SeedItem.sol",
		  "id": 1909,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 2164,
		  "sourceUnit": 1904,
		  "src": "212:24:11",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": true,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 1910,
				"name": "ERC165",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 4803,
				"src": "280:6:11"
			  },
			  "id": 1911,
			  "nodeType": "InheritanceSpecifier",
			  "src": "280:6:11"
			},
			{
			  "baseName": {
				"id": 1912,
				"name": "IERC1155Receiver",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 3756,
				"src": "288:16:11"
			  },
			  "id": 1913,
			  "nodeType": "InheritanceSpecifier",
			  "src": "288:16:11"
			}
		  ],
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": false,
		  "id": 1937,
		  "linearizedBaseContracts": [
			1937,
			3756,
			4803,
			4815
		  ],
		  "name": "ERC1155Receiver",
		  "nameLocation": "261:15:11",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "baseFunctions": [
				4802,
				4814
			  ],
			  "body": {
				"id": 1935,
				"nodeType": "Block",
				"src": "421:115:11",
				"statements": [
				  {
					"expression": {
					  "commonType": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "id": 1933,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"commonType": {
						  "typeIdentifier": "t_bytes4",
						  "typeString": "bytes4"
						},
						"id": 1928,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "id": 1923,
						  "name": "interfaceId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1915,
						  "src": "439:11:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes4",
							"typeString": "bytes4"
						  }
						},
						"nodeType": "BinaryOperation",
						"operator": "==",
						"rightExpression": {
						  "expression": {
							"arguments": [
							  {
								"id": 1925,
								"name": "IERC1155Receiver",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 3756,
								"src": "459:16:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$3756_$",
								  "typeString": "type(contract IERC1155Receiver)"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$3756_$",
								  "typeString": "type(contract IERC1155Receiver)"
								}
							  ],
							  "id": 1924,
							  "name": "type",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967269,
							  "src": "454:4:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_metatype_pure$__$returns$__$",
								"typeString": "function () pure"
							  }
							},
							"id": 1926,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "454:22:11",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155Receiver_$3756",
							  "typeString": "type(contract IERC1155Receiver)"
							}
						  },
						  "id": 1927,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "memberName": "interfaceId",
						  "nodeType": "MemberAccess",
						  "src": "454:34:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes4",
							"typeString": "bytes4"
						  }
						},
						"src": "439:49:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "||",
					  "rightExpression": {
						"arguments": [
						  {
							"id": 1931,
							"name": "interfaceId",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1915,
							"src": "516:11:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_bytes4",
							  "typeString": "bytes4"
							}
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_bytes4",
							  "typeString": "bytes4"
							}
						  ],
						  "expression": {
							"id": 1929,
							"name": "super",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967271,
							"src": "492:5:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_super$_ERC1155Receiver_$1937_$",
							  "typeString": "type(contract super ERC1155Receiver)"
							}
						  },
						  "id": 1930,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "supportsInterface",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 4802,
						  "src": "492:23:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
							"typeString": "function (bytes4) view returns (bool)"
						  }
						},
						"id": 1932,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "492:36:11",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "439:89:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 1922,
					"id": 1934,
					"nodeType": "Return",
					"src": "432:96:11"
				  }
				]
			  },
			  "functionSelector": "01ffc9a7",
			  "id": 1936,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "supportsInterface",
			  "nameLocation": "322:17:11",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 1919,
				"nodeType": "OverrideSpecifier",
				"overrides": [
				  {
					"id": 1917,
					"name": "ERC165",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 4803,
					"src": "389:6:11"
				  },
				  {
					"id": 1918,
					"name": "IERC165",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 4815,
					"src": "397:7:11"
				  }
				],
				"src": "380:25:11"
			  },
			  "parameters": {
				"id": 1916,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1915,
					"mutability": "mutable",
					"name": "interfaceId",
					"nameLocation": "347:11:11",
					"nodeType": "VariableDeclaration",
					"scope": 1936,
					"src": "340:18:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 1914,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "340:6:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "339:20:11"
			  },
			  "returnParameters": {
				"id": 1922,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1921,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 1936,
					"src": "415:4:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 1920,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "415:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "414:6:11"
			  },
			  "scope": 1937,
			  "src": "313:223:11",
			  "stateMutability": "view",
			  "virtual": true,
			  "visibility": "public"
			}
		  ],
		  "scope": 2164,
		  "src": "243:296:11",
		  "usedErrors": []
		},
		{
		  "abstract": false,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 1938,
				"name": "ERC1155Receiver",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 1937,
				"src": "572:15:11"
			  },
			  "id": 1939,
			  "nodeType": "InheritanceSpecifier",
			  "src": "572:15:11"
			},
			{
			  "baseName": {
				"id": 1940,
				"name": "Ownable",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2497,
				"src": "589:7:11"
			  },
			  "id": 1941,
			  "nodeType": "InheritanceSpecifier",
			  "src": "589:7:11"
			}
		  ],
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": true,
		  "id": 2163,
		  "linearizedBaseContracts": [
			2163,
			2497,
			4779,
			1937,
			3756,
			4803,
			4815
		  ],
		  "name": "SeedItemReceiver",
		  "nameLocation": "552:16:11",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "constant": false,
			  "id": 1947,
			  "mutability": "mutable",
			  "name": "_funds",
			  "nameLocation": "662:6:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "606:62:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
				"typeString": "mapping(address => mapping(uint256 => uint256))"
			  },
			  "typeName": {
				"id": 1946,
				"keyType": {
				  "id": 1942,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "614:7:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "606:47:11",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
				  "typeString": "mapping(address => mapping(uint256 => uint256))"
				},
				"valueType": {
				  "id": 1945,
				  "keyType": {
					"id": 1943,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "633:7:11",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "nodeType": "Mapping",
				  "src": "625:27:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
					"typeString": "mapping(uint256 => uint256)"
				  },
				  "valueType": {
					"id": 1944,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "644:7:11",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  }
				}
			  },
			  "visibility": "private"
			},
			{
			  "constant": false,
			  "id": 1951,
			  "mutability": "mutable",
			  "name": "_isSpecialCollected",
			  "nameLocation": "709:19:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "676:52:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 1950,
				"keyType": {
				  "id": 1948,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "684:7:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "676:24:11",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 1949,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "695:4:11",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "private"
			},
			{
			  "constant": false,
			  "id": 1953,
			  "mutability": "mutable",
			  "name": "_builder",
			  "nameLocation": "752:8:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "736:24:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 1952,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "736:7:11",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "private"
			},
			{
			  "constant": false,
			  "id": 1955,
			  "mutability": "mutable",
			  "name": "_item",
			  "nameLocation": "784:5:11",
			  "nodeType": "VariableDeclaration",
			  "scope": 2163,
			  "src": "768:21:11",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 1954,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "768:7:11",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "private"
			},
			{
			  "body": {
				"id": 1966,
				"nodeType": "Block",
				"src": "854:38:11",
				"statements": [
				  {
					"expression": {
					  "id": 1964,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 1962,
						"name": "_builder",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1953,
						"src": "865:8:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 1963,
						"name": "builder",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1957,
						"src": "876:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "865:18:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 1965,
					"nodeType": "ExpressionStatement",
					"src": "865:18:11"
				  }
				]
			  },
			  "functionSelector": "6c6d6a17",
			  "id": 1967,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 1960,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 1959,
					"name": "onlyOwner",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2439,
					"src": "844:9:11"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "844:9:11"
				}
			  ],
			  "name": "setBuilder",
			  "nameLocation": "807:10:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 1958,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1957,
					"mutability": "mutable",
					"name": "builder",
					"nameLocation": "826:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 1967,
					"src": "818:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1956,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "818:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "817:17:11"
			  },
			  "returnParameters": {
				"id": 1961,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "854:0:11"
			  },
			  "scope": 2163,
			  "src": "798:94:11",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 1978,
				"nodeType": "Block",
				"src": "950:32:11",
				"statements": [
				  {
					"expression": {
					  "id": 1976,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 1974,
						"name": "_item",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1955,
						"src": "961:5:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 1975,
						"name": "item",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1969,
						"src": "969:4:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "961:12:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 1977,
					"nodeType": "ExpressionStatement",
					"src": "961:12:11"
				  }
				]
			  },
			  "functionSelector": "165ed276",
			  "id": 1979,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 1972,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 1971,
					"name": "onlyOwner",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2439,
					"src": "940:9:11"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "940:9:11"
				}
			  ],
			  "name": "setItem",
			  "nameLocation": "909:7:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 1970,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1969,
					"mutability": "mutable",
					"name": "item",
					"nameLocation": "925:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 1979,
					"src": "917:12:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1968,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "917:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "916:14:11"
			  },
			  "returnParameters": {
				"id": 1973,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "950:0:11"
			  },
			  "scope": 2163,
			  "src": "900:82:11",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "baseFunctions": [
				3737
			  ],
			  "body": {
				"id": 2007,
				"nodeType": "Block",
				"src": "1191:93:11",
				"statements": [
				  {
					"expression": {
					  "id": 2001,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 1995,
							"name": "_funds",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1947,
							"src": "1202:6:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
							  "typeString": "mapping(address => mapping(uint256 => uint256))"
							}
						  },
						  "id": 1998,
						  "indexExpression": {
							"id": 1996,
							"name": "from",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1983,
							"src": "1209:4:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "1202:12:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
							"typeString": "mapping(uint256 => uint256)"
						  }
						},
						"id": 1999,
						"indexExpression": {
						  "id": 1997,
						  "name": "id",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1985,
						  "src": "1215:2:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "1202:16:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 2000,
						"name": "value",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1987,
						"src": "1221:5:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1202:24:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 2002,
					"nodeType": "ExpressionStatement",
					"src": "1202:24:11"
				  },
				  {
					"expression": {
					  "expression": {
						"expression": {
						  "id": 2003,
						  "name": "this",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967268,
						  "src": "1245:4:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_SeedItemReceiver_$2163",
							"typeString": "contract SeedItemReceiver"
						  }
						},
						"id": 2004,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "onERC1155Received",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2008,
						"src": "1245:22:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
						  "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
						}
					  },
					  "id": 2005,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "lValueRequested": false,
					  "memberName": "selector",
					  "nodeType": "MemberAccess",
					  "src": "1245:31:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"functionReturnParameters": 1994,
					"id": 2006,
					"nodeType": "Return",
					"src": "1238:38:11"
				  }
				]
			  },
			  "functionSelector": "f23a6e61",
			  "id": 2008,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "onERC1155Received",
			  "nameLocation": "1000:17:11",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 1991,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "1165:8:11"
			  },
			  "parameters": {
				"id": 1990,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1981,
					"mutability": "mutable",
					"name": "operator",
					"nameLocation": "1036:8:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1028:16:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1980,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1028:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1983,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "1063:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1055:12:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 1982,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1055:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1985,
					"mutability": "mutable",
					"name": "id",
					"nameLocation": "1086:2:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1078:10:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 1984,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1078:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1987,
					"mutability": "mutable",
					"name": "value",
					"nameLocation": "1107:5:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1099:13:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 1986,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1099:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 1989,
					"mutability": "mutable",
					"name": "data",
					"nameLocation": "1138:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1123:19:11",
					"stateVariable": false,
					"storageLocation": "calldata",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes_calldata_ptr",
					  "typeString": "bytes"
					},
					"typeName": {
					  "id": 1988,
					  "name": "bytes",
					  "nodeType": "ElementaryTypeName",
					  "src": "1123:5:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes_storage_ptr",
						"typeString": "bytes"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1017:132:11"
			  },
			  "returnParameters": {
				"id": 1994,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 1993,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2008,
					"src": "1183:6:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 1992,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "1183:6:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1182:8:11"
			  },
			  "scope": 2163,
			  "src": "991:293:11",
			  "stateMutability": "nonpayable",
			  "virtual": true,
			  "visibility": "public"
			},
			{
			  "baseFunctions": [
				3755
			  ],
			  "body": {
				"id": 2055,
				"nodeType": "Block",
				"src": "1515:172:11",
				"statements": [
				  {
					"body": {
					  "id": 2049,
					  "nodeType": "Block",
					  "src": "1566:60:11",
					  "statements": [
						{
						  "expression": {
							"id": 2047,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "baseExpression": {
								"baseExpression": {
								  "id": 2037,
								  "name": "_funds",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 1947,
								  "src": "1581:6:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									"typeString": "mapping(address => mapping(uint256 => uint256))"
								  }
								},
								"id": 2042,
								"indexExpression": {
								  "id": 2038,
								  "name": "from",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2012,
								  "src": "1588:4:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "1581:12:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
								  "typeString": "mapping(uint256 => uint256)"
								}
							  },
							  "id": 2043,
							  "indexExpression": {
								"baseExpression": {
								  "id": 2039,
								  "name": "ids",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2015,
								  "src": "1594:3:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
									"typeString": "uint256[] memory"
								  }
								},
								"id": 2041,
								"indexExpression": {
								  "id": 2040,
								  "name": "i",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2027,
								  "src": "1598:1:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_uint256",
									"typeString": "uint256"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "1594:6:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": true,
							  "nodeType": "IndexAccess",
							  "src": "1581:20:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "baseExpression": {
								"id": 2044,
								"name": "values",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 2018,
								"src": "1604:6:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
								  "typeString": "uint256[] memory"
								}
							  },
							  "id": 2046,
							  "indexExpression": {
								"id": 2045,
								"name": "i",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 2027,
								"src": "1611:1:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "1604:9:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "1581:32:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "id": 2048,
						  "nodeType": "ExpressionStatement",
						  "src": "1581:32:11"
						}
					  ]
					},
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 2033,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 2030,
						"name": "i",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2027,
						"src": "1545:1:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "<",
					  "rightExpression": {
						"expression": {
						  "id": 2031,
						  "name": "ids",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2015,
						  "src": "1549:3:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
							"typeString": "uint256[] memory"
						  }
						},
						"id": 2032,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "length",
						"nodeType": "MemberAccess",
						"src": "1549:10:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1545:14:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2050,
					"initializationExpression": {
					  "assignments": [
						2027
					  ],
					  "declarations": [
						{
						  "constant": false,
						  "id": 2027,
						  "mutability": "mutable",
						  "name": "i",
						  "nameLocation": "1538:1:11",
						  "nodeType": "VariableDeclaration",
						  "scope": 2050,
						  "src": "1530:9:11",
						  "stateVariable": false,
						  "storageLocation": "default",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "typeName": {
							"id": 2026,
							"name": "uint256",
							"nodeType": "ElementaryTypeName",
							"src": "1530:7:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "visibility": "internal"
						}
					  ],
					  "id": 2029,
					  "initialValue": {
						"hexValue": "30",
						"id": 2028,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1542:1:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "nodeType": "VariableDeclarationStatement",
					  "src": "1530:13:11"
					},
					"loopExpression": {
					  "expression": {
						"id": 2035,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "++",
						"prefix": true,
						"src": "1561:3:11",
						"subExpression": {
						  "id": 2034,
						  "name": "i",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2027,
						  "src": "1563:1:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 2036,
					  "nodeType": "ExpressionStatement",
					  "src": "1561:3:11"
					},
					"nodeType": "ForStatement",
					"src": "1526:100:11"
				  },
				  {
					"expression": {
					  "expression": {
						"expression": {
						  "id": 2051,
						  "name": "this",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967268,
						  "src": "1643:4:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_SeedItemReceiver_$2163",
							"typeString": "contract SeedItemReceiver"
						  }
						},
						"id": 2052,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "onERC1155BatchReceived",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2056,
						"src": "1643:27:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
						  "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
						}
					  },
					  "id": 2053,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "lValueRequested": false,
					  "memberName": "selector",
					  "nodeType": "MemberAccess",
					  "src": "1643:36:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"functionReturnParameters": 2025,
					"id": 2054,
					"nodeType": "Return",
					"src": "1636:43:11"
				  }
				]
			  },
			  "functionSelector": "bc197c81",
			  "id": 2056,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "onERC1155BatchReceived",
			  "nameLocation": "1301:22:11",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 2022,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "1489:8:11"
			  },
			  "parameters": {
				"id": 2021,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2010,
					"mutability": "mutable",
					"name": "operator",
					"nameLocation": "1342:8:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1334:16:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2009,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1334:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2012,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "1369:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1361:12:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2011,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1361:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2015,
					"mutability": "mutable",
					"name": "ids",
					"nameLocation": "1401:3:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1384:20:11",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
					  "typeString": "uint256[]"
					},
					"typeName": {
					  "baseType": {
						"id": 2013,
						"name": "uint256",
						"nodeType": "ElementaryTypeName",
						"src": "1384:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 2014,
					  "nodeType": "ArrayTypeName",
					  "src": "1384:9:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
						"typeString": "uint256[]"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2018,
					"mutability": "mutable",
					"name": "values",
					"nameLocation": "1432:6:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1415:23:11",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
					  "typeString": "uint256[]"
					},
					"typeName": {
					  "baseType": {
						"id": 2016,
						"name": "uint256",
						"nodeType": "ElementaryTypeName",
						"src": "1415:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 2017,
					  "nodeType": "ArrayTypeName",
					  "src": "1415:9:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
						"typeString": "uint256[]"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2020,
					"mutability": "mutable",
					"name": "data",
					"nameLocation": "1462:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1449:17:11",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes_memory_ptr",
					  "typeString": "bytes"
					},
					"typeName": {
					  "id": 2019,
					  "name": "bytes",
					  "nodeType": "ElementaryTypeName",
					  "src": "1449:5:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes_storage_ptr",
						"typeString": "bytes"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1323:150:11"
			  },
			  "returnParameters": {
				"id": 2025,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2024,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2056,
					"src": "1507:6:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 2023,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "1507:6:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1506:8:11"
			  },
			  "scope": 2163,
			  "src": "1292:395:11",
			  "stateMutability": "nonpayable",
			  "virtual": true,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 2071,
				"nodeType": "Block",
				"src": "1771:45:11",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 2065,
						  "name": "_funds",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1947,
						  "src": "1789:6:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
							"typeString": "mapping(address => mapping(uint256 => uint256))"
						  }
						},
						"id": 2067,
						"indexExpression": {
						  "id": 2066,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2058,
						  "src": "1796:7:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "IndexAccess",
						"src": "1789:15:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
						  "typeString": "mapping(uint256 => uint256)"
						}
					  },
					  "id": 2069,
					  "indexExpression": {
						"id": 2068,
						"name": "id",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2060,
						"src": "1805:2:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "1789:19:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 2064,
					"id": 2070,
					"nodeType": "Return",
					"src": "1782:26:11"
				  }
				]
			  },
			  "functionSelector": "88b22c24",
			  "id": 2072,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "funds",
			  "nameLocation": "1704:5:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 2061,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2058,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "1718:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 2072,
					"src": "1710:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2057,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1710:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2060,
					"mutability": "mutable",
					"name": "id",
					"nameLocation": "1735:2:11",
					"nodeType": "VariableDeclaration",
					"scope": 2072,
					"src": "1727:10:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 2059,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1727:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1709:29:11"
			  },
			  "returnParameters": {
				"id": 2064,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2063,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2072,
					"src": "1762:7:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 2062,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1762:7:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1761:9:11"
			  },
			  "scope": 2163,
			  "src": "1695:121:11",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 2083,
				"nodeType": "Block",
				"src": "1901:55:11",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 2079,
						"name": "_isSpecialCollected",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1951,
						"src": "1919:19:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
						  "typeString": "mapping(address => bool)"
						}
					  },
					  "id": 2081,
					  "indexExpression": {
						"id": 2080,
						"name": "account",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2074,
						"src": "1939:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "1919:28:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 2078,
					"id": 2082,
					"nodeType": "Return",
					"src": "1912:35:11"
				  }
				]
			  },
			  "functionSelector": "f09d39e3",
			  "id": 2084,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "isSpecialCollected",
			  "nameLocation": "1838:18:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 2075,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2074,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "1865:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 2084,
					"src": "1857:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2073,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1857:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1856:17:11"
			  },
			  "returnParameters": {
				"id": 2078,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2077,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2084,
					"src": "1895:4:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 2076,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "1895:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1894:6:11"
			  },
			  "scope": 2163,
			  "src": "1829:127:11",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 2147,
				"nodeType": "Block",
				"src": "2067:325:11",
				"statements": [
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 2125,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"commonType": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"id": 2123,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 2117,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 2111,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  },
							  "id": 2105,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"baseExpression": {
								  "baseExpression": {
									"id": 2095,
									"name": "_funds",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 1947,
									"src": "2082:6:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									  "typeString": "mapping(address => mapping(uint256 => uint256))"
									}
								  },
								  "id": 2097,
								  "indexExpression": {
									"id": 2096,
									"name": "account",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 2086,
									"src": "2089:7:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "isConstant": false,
								  "isLValue": true,
								  "isPure": false,
								  "lValueRequested": false,
								  "nodeType": "IndexAccess",
								  "src": "2082:15:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
									"typeString": "mapping(uint256 => uint256)"
								  }
								},
								"id": 2099,
								"indexExpression": {
								  "hexValue": "30",
								  "id": 2098,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "kind": "number",
								  "lValueRequested": false,
								  "nodeType": "Literal",
								  "src": "2098:1:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_rational_0_by_1",
									"typeString": "int_const 0"
								  },
								  "value": "0"
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "2082:18:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "+",
							  "rightExpression": {
								"baseExpression": {
								  "baseExpression": {
									"id": 2100,
									"name": "_funds",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 1947,
									"src": "2103:6:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									  "typeString": "mapping(address => mapping(uint256 => uint256))"
									}
								  },
								  "id": 2102,
								  "indexExpression": {
									"id": 2101,
									"name": "account",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 2086,
									"src": "2110:7:11",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "isConstant": false,
								  "isLValue": true,
								  "isPure": false,
								  "lValueRequested": false,
								  "nodeType": "IndexAccess",
								  "src": "2103:15:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
									"typeString": "mapping(uint256 => uint256)"
								  }
								},
								"id": 2104,
								"indexExpression": {
								  "hexValue": "31",
								  "id": 2103,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "kind": "number",
								  "lValueRequested": false,
								  "nodeType": "Literal",
								  "src": "2119:1:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_rational_1_by_1",
									"typeString": "int_const 1"
								  },
								  "value": "1"
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "2103:18:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "src": "2082:39:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "+",
							"rightExpression": {
							  "baseExpression": {
								"baseExpression": {
								  "id": 2106,
								  "name": "_funds",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 1947,
								  "src": "2138:6:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
									"typeString": "mapping(address => mapping(uint256 => uint256))"
								  }
								},
								"id": 2108,
								"indexExpression": {
								  "id": 2107,
								  "name": "account",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 2086,
								  "src": "2145:7:11",
								  "typeDescriptions": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "2138:15:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
								  "typeString": "mapping(uint256 => uint256)"
								}
							  },
							  "id": 2110,
							  "indexExpression": {
								"hexValue": "32",
								"id": 2109,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2154:1:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_2_by_1",
								  "typeString": "int_const 2"
								},
								"value": "2"
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "2138:18:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "2082:74:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "+",
						  "rightExpression": {
							"baseExpression": {
							  "baseExpression": {
								"id": 2112,
								"name": "_funds",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1947,
								"src": "2159:6:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
								  "typeString": "mapping(address => mapping(uint256 => uint256))"
								}
							  },
							  "id": 2114,
							  "indexExpression": {
								"id": 2113,
								"name": "account",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 2086,
								"src": "2166:7:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "2159:15:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
								"typeString": "mapping(uint256 => uint256)"
							  }
							},
							"id": 2116,
							"indexExpression": {
							  "hexValue": "33",
							  "id": 2115,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "2175:1:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_3_by_1",
								"typeString": "int_const 3"
							  },
							  "value": "3"
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2159:18:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "2082:95:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"nodeType": "BinaryOperation",
						"operator": "+",
						"rightExpression": {
						  "baseExpression": {
							"baseExpression": {
							  "id": 2118,
							  "name": "_funds",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1947,
							  "src": "2194:6:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
								"typeString": "mapping(address => mapping(uint256 => uint256))"
							  }
							},
							"id": 2120,
							"indexExpression": {
							  "id": 2119,
							  "name": "account",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 2086,
							  "src": "2201:7:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2194:15:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
							  "typeString": "mapping(uint256 => uint256)"
							}
						  },
						  "id": 2122,
						  "indexExpression": {
							"hexValue": "34",
							"id": 2121,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2210:1:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_4_by_1",
							  "typeString": "int_const 4"
							},
							"value": "4"
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "2194:18:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"src": "2082:130:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "<",
					  "rightExpression": {
						"hexValue": "33",
						"id": 2124,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2215:1:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_3_by_1",
						  "typeString": "int_const 3"
						},
						"value": "3"
					  },
					  "src": "2082:134:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2130,
					"nodeType": "IfStatement",
					"src": "2078:175:11",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "4e6f7420656e6f756768204e46547320636f6c6c6563746564",
							"id": 2127,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2225:27:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_36f61271bb0b1f7068062b8ae4311798e31ce010c882d6f1c20db1f45757f326",
							  "typeString": "literal_string \"Not enough NFTs collected\""
							},
							"value": "Not enough NFTs collected"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_36f61271bb0b1f7068062b8ae4311798e31ce010c882d6f1c20db1f45757f326",
							  "typeString": "literal_string \"Not enough NFTs collected\""
							}
						  ],
						  "id": 2126,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "2218:6:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 2128,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "2218:35:11",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 2129,
					  "nodeType": "ExpressionStatement",
					  "src": "2218:35:11"
					}
				  },
				  {
					"expression": {
					  "id": 2135,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 2131,
						  "name": "_isSpecialCollected",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 1951,
						  "src": "2267:19:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 2133,
						"indexExpression": {
						  "id": 2132,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2086,
						  "src": "2287:7:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2267:28:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 2134,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2298:4:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "2267:35:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2136,
					"nodeType": "ExpressionStatement",
					"src": "2267:35:11"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 2141,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2086,
						  "src": "2346:7:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 2142,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 2088,
						  "src": "2355:4:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						],
						"expression": {
						  "arguments": [
							{
							  "id": 2138,
							  "name": "_builder",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1953,
							  "src": "2321:8:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							],
							"id": 2137,
							"name": "Builder",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1510,
							"src": "2313:7:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_contract$_Builder_$1510_$",
							  "typeString": "type(contract Builder)"
							}
						  },
						  "id": 2139,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "2313:17:11",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_Builder_$1510",
							"typeString": "contract Builder"
						  }
						},
						"id": 2140,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "collectSpecial",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 1186,
						"src": "2313:32:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint8_$returns$_t_bool_$",
						  "typeString": "function (address,uint8) external returns (bool)"
						}
					  },
					  "id": 2143,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2313:47:11",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 2144,
					"nodeType": "ExpressionStatement",
					"src": "2313:47:11"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 2145,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "2379:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 2094,
					"id": 2146,
					"nodeType": "Return",
					"src": "2372:11:11"
				  }
				]
			  },
			  "functionSelector": "e9638298",
			  "id": 2148,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 2091,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 2090,
					"name": "specialNotCollected",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2162,
					"src": "2032:19:11"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2032:19:11"
				}
			  ],
			  "name": "collectSpecial",
			  "nameLocation": "1971:14:11",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 2089,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2086,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "1994:7:11",
					"nodeType": "VariableDeclaration",
					"scope": 2148,
					"src": "1986:15:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 2085,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1986:7:11",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 2088,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "2009:4:11",
					"nodeType": "VariableDeclaration",
					"scope": 2148,
					"src": "2003:10:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 2087,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "2003:5:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1985:29:11"
			  },
			  "returnParameters": {
				"id": 2094,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 2093,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 2148,
					"src": "2061:4:11",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 2092,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "2061:4:11",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2060:6:11"
			  },
			  "scope": 2163,
			  "src": "1962:430:11",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 2161,
				"nodeType": "Block",
				"src": "2431:131:11",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 2156,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 2151,
							  "name": "_isSpecialCollected",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1951,
							  "src": "2450:19:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								"typeString": "mapping(address => bool)"
							  }
							},
							"id": 2154,
							"indexExpression": {
							  "expression": {
								"id": 2152,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "2470:3:11",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 2153,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "2470:10:11",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2450:31:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"hexValue": "74727565",
							"id": 2155,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "bool",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2485:4:11",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"value": "true"
						  },
						  "src": "2450:39:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "596f75206861766520616c726561647920636f6c6c6563746564207370656369616c2e20",
						  "id": 2157,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2501:38:11",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_cdc3b747d92c283e1da7003e640dff49505af3ee9b9189ec315ec13ff54d3b42",
							"typeString": "literal_string \"You have already collected special. \""
						  },
						  "value": "You have already collected special. "
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_cdc3b747d92c283e1da7003e640dff49505af3ee9b9189ec315ec13ff54d3b42",
							"typeString": "literal_string \"You have already collected special. \""
						  }
						],
						"id": 2150,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2442:7:11",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 2158,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2442:98:11",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 2159,
					"nodeType": "ExpressionStatement",
					"src": "2442:98:11"
				  },
				  {
					"id": 2160,
					"nodeType": "PlaceholderStatement",
					"src": "2552:1:11"
				  }
				]
			  },
			  "id": 2162,
			  "name": "specialNotCollected",
			  "nameLocation": "2409:19:11",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 2149,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2428:2:11"
			  },
			  "src": "2400:162:11",
			  "virtual": false,
			  "visibility": "internal"
			}
		  ],
		  "scope": 2164,
		  "src": "543:2022:11",
		  "usedErrors": []
		}
	  ],
	  "src": "35:2530:11"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.7+commit.e28d00a7.Emscripten.clang"
	},
	"networks": {
	  "5777": {
		"events": {
		  "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			  }
			],
			"name": "OwnershipTransferred",
			"type": "event"
		  }
		},
		"links": {},
		"address": "0xa6916a4c47342C65d54fDe8F78841b9F1A3b919C",
		"transactionHash": "0x3b0e72e6426ef4da4ea282d29bed9dc65cd5511fe1eec507b06776a125950411"
	  }
	},
	"schemaVersion": "3.3.4",
	"updatedAt": "2022-03-13T23:15:44.649Z",
	"devdoc": {
	  "kind": "dev",
	  "methods": {
		"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": {
		  "details": "Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` (i.e. 0xbc197c81, or its own function selector).",
		  "params": {
			"data": "Additional data with no specified format",
			"from": "The address which previously owned the token",
			"ids": "An array containing ids of each token being transferred (order and length must match values array)",
			"operator": "The address which initiated the batch transfer (i.e. msg.sender)",
			"values": "An array containing amounts of each token being transferred (order and length must match ids array)"
		  },
		  "returns": {
			"_0": "`bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` if transfer is allowed"
		  }
		},
		"onERC1155Received(address,address,uint256,uint256,bytes)": {
		  "details": "Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` (i.e. 0xf23a6e61, or its own function selector).",
		  "params": {
			"data": "Additional data with no specified format",
			"from": "The address which previously owned the token",
			"id": "The ID of the token being transferred",
			"operator": "The address which initiated the transfer (i.e. msg.sender)",
			"value": "The amount of tokens being transferred"
		  },
		  "returns": {
			"_0": "`bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` if transfer is allowed"
		  }
		},
		"owner()": {
		  "details": "Returns the address of the current owner."
		},
		"renounceOwnership()": {
		  "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
		},
		"transferOwnership(address)": {
		  "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
		}
	  },
	  "version": 1
	},
	"userdoc": {
	  "kind": "user",
	  "methods": {},
	  "version": 1
	}
  }