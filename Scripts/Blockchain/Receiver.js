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
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
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
    "metadata": "{\"compiler\":{\"version\":\"0.8.7+commit.e28d00a7\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"collectSpecial\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"funds\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isSpecialCollected\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"builder\",\"type\":\"address\"}],\"name\":\"setBuilder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. To accept the transfer(s), this must return `bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` (i.e. 0xbc197c81, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"ids\":\"An array containing ids of each token being transferred (order and length must match values array)\",\"operator\":\"The address which initiated the batch transfer (i.e. msg.sender)\",\"values\":\"An array containing amounts of each token being transferred (order and length must match ids array)\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\\"))` if transfer is allowed\"}},\"onERC1155Received(address,address,uint256,uint256,bytes)\":{\"details\":\"Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. To accept the transfer, this must return `bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` (i.e. 0xf23a6e61, or its own function selector).\",\"params\":{\"data\":\"Additional data with no specified format\",\"from\":\"The address which previously owned the token\",\"id\":\"The ID of the token being transferred\",\"operator\":\"The address which initiated the transfer (i.e. msg.sender)\",\"value\":\"The amount of tokens being transferred\"},\"returns\":{\"_0\":\"`bytes4(keccak256(\\\"onERC1155Received(address,address,uint256,uint256,bytes)\\\"))` if transfer is allowed\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Github/SeedFarm/contracts/SeedItemReceiver.sol\":\"SeedItemReceiver\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1200},\"remappings\":[]},\"sources\":{\"/C/Github/SeedFarm/contracts/Builder.sol\":{\"keccak256\":\"0xe7d27aad3f7bc3d4b6a71b07eafda36746256909ceab675651b30b62557bc6b0\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://ff9dcf8a914f7c8feb9ac79b877aecbf6ebc68851cf2cdbea1be01dc86be87b6\",\"dweb:/ipfs/QmZnSxEP5awytMGEf49JLF2wX9SanpL6QsYUurCGE3xTQd\"]},\"/C/Github/SeedFarm/contracts/SeedItem.sol\":{\"keccak256\":\"0x97307407fc72f427a20982a33d3d7f4e6a286692d13cf63b55a8858a97410976\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c0fb5b4aacbc142169263f8d7b4454aa1d42d9711a9f6936cc4b4fa108294ddc\",\"dweb:/ipfs/QmQ2oFdmpuQ41iX6SR6Svq46gxAPX9KwJhJVvW9ZWtUeh7\"]},\"/C/Github/SeedFarm/contracts/SeedItemReceiver.sol\":{\"keccak256\":\"0x8afb550d4e3c81069438a62ba3cfdab3db2c2339dd80515acace411422c1faa5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5c1f79e81db68d79458d5b3efdcddb661ec51e0ef670ac88abd1e8468a768a90\",\"dweb:/ipfs/QmbgUpTtvsSWYsGvWrq3ZWFqNnxzaYzUhmAaj6kpEUVQHp\"]},\"/C/Github/SeedFarm/contracts/SeedToken.sol\":{\"keccak256\":\"0x767a2ea2c3a8530ef41e05f9b2273237046bda2c1d2a6e8b58622d76c3d51e35\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://5c697264000646167a04829219fc5733d9028f30bf5725784982012af875d830\",\"dweb:/ipfs/QmeTdrRsgmnuqdj9vG9VkZUR71MxuQHvd4Rd8RbTjrWxCb\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981\",\"dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0x04d6d1342ece664085921a4fabc928a7bcf1cf2873fa81780f61a54dc2b9b66e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6d2b052effa2e9a7479b0fea53b46f4cbbd91947848ef632aadad20ae2e9275\",\"dweb:/ipfs/QmcZp7f5cooGZrhHE8RC1yQR53RFZt19d5fyVqNfbHmPgY\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x8e93de94c9062ebc94fb7e2e3929b0781ac6a2b7772e2f7a59045861c93e5be9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f920a631bf986c610fe573d3c70a2bb6f224f86f4a8550016470c7ee476c9ab5\",\"dweb:/ipfs/QmYzsyVMfnaREKHcHv5RPS8Xg5r1Q38E2SDsGBTnXeFWzb\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xc743d2235b8854045c308d2f8f1ed88efed6c2bebf2b7a4a51ea42480c82e566\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://05e54e397a053f319187999ef4d65446a7f15f693ddd66dfaed4d856f67dac4e\",\"dweb:/ipfs/QmbGTFVdZxShg76UPcuLAXm6HBjZx3Vn6CL1eaBhV9rST1\"]},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e46c80ea068989111d6103e5521223f9ef337e93de76deed8b03f75c6f7b2797\",\"dweb:/ipfs/QmNoSE6knNfFncdDDLTb3fGR6oSQty1srG96Vsx3E9wQdw\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xd1d8caaeb45f78e0b0715664d56c220c283c89bf8b8c02954af86404d6b367f8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://300a0cc7be3b26c96c22a47ffa9530a585e1c4f2dba3021d9bf309dc63007487\",\"dweb:/ipfs/QmQmxsvxK6CaJmQ4D8vDCYPLHMqcMmZLcBqedG4GFAbzu9\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x61437cb513a887a1bbad006e7b1c8b414478427d33de47c5600af3c748f108da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2c3d0973630ed74f2b5ce3944677a885dc70ec32fc83b35f55045a10224da32b\",\"dweb:/ipfs/QmbefZ5RoEZKNHXCALfh683PnaNYzKPcKMFjyY1DVAgq8A\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x51b758a8815ecc9596c66c37d56b1d33883a444631a3f916b9fe65cb863ef7c4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://997ca03557985b3c6f9143a18b6c3a710b3bc1c7f189ee956d305a966ecfb922\",\"dweb:/ipfs/QmQaD3Wb62F88SHqmpLttvF6wKuPDQep2LLUcKPekeRzvz\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610ade8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063f09d39e31161005b578063f09d39e3146101a6578063f23a6e61146101d2578063f2fde38b1461022c57600080fd5b80638da5cb5b1461015f578063bc197c811461017a57600080fd5b80636c6d6a17116100a75780636c6d6a17146100fe578063715018a61461011357806388b22c241461011b57600080fd5b806301ffc9a7146100c3578063551f141b146100eb575b600080fd5b6100d66100d13660046109f8565b61023f565b60405190151581526020015b60405180910390f35b6100d66100f93660046107e4565b6102a8565b61011161010c3660046107e4565b610458565b005b6101116104e6565b6101516101293660046109ac565b6001600160a01b03919091166000908152600260209081526040808320938352929052205490565b6040519081526020016100e2565b6000546040516001600160a01b0390911681526020016100e2565b61018d610188366004610806565b61054c565b6040516001600160e01b031990911681526020016100e2565b6100d66101b43660046107e4565b6001600160a01b031660009081526003602052604090205460ff1690565b61018d6101e0366004610906565b50506001600160a01b039290921660009081526002602090815260408083209383529290522055507ff23a6e610000000000000000000000000000000000000000000000000000000090565b61011161023a3660046107e4565b610603565b60006001600160e01b031982167f4e2312e00000000000000000000000000000000000000000000000000000000014806102a257507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6001600160a01b038116600090815260026020908152604080832083805290915281205460041480156102fe57506001600160a01b03821660009081526002602081815260408084206001855290915290912054145b801561032d57506001600160a01b03821660009081526002602081815260408084209284529190529020546001145b801561035c57506001600160a01b03821660009081526002602081815260408084206003855290915290912054145b801561038c57506001600160a01b0382166000908152600260209081526040808320600484529091529020546003145b156103b5576001600160a01b0382166000908152600360205260409020805460ff191660011790555b600480546040517f551f141b0000000000000000000000000000000000000000000000000000000081526001600160a01b038581169382019390935291169063551f141b90602401602060405180830381600087803b15801561041757600080fd5b505af115801561042b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044f91906109d6565b50600192915050565b6000546001600160a01b031633146104b75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105405760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ae565b61054a60006106e5565b565b6000805b84518110156105d75783818151811061056b5761056b610a7c565b602002602001015160026000886001600160a01b03166001600160a01b0316815260200190815260200160002060008784815181106105ac576105ac610a7c565b6020026020010151815260200190815260200160002081905550806105d090610a53565b9050610550565b507fbc197c81000000000000000000000000000000000000000000000000000000009695505050505050565b6000546001600160a01b0316331461065d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ae565b6001600160a01b0381166106d95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104ae565b6106e2816106e5565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461075957600080fd5b919050565b600082601f83011261076f57600080fd5b8135602067ffffffffffffffff82111561078b5761078b610a92565b8160051b61079a828201610a22565b8381528281019086840183880185018910156107b557600080fd5b600093505b858410156107d85780358352600193909301929184019184016107ba565b50979650505050505050565b6000602082840312156107f657600080fd5b6107ff82610742565b9392505050565b600080600080600060a0868803121561081e57600080fd5b61082786610742565b94506020610836818801610742565b9450604087013567ffffffffffffffff8082111561085357600080fd5b61085f8a838b0161075e565b9550606089013591508082111561087557600080fd5b6108818a838b0161075e565b9450608089013591508082111561089757600080fd5b818901915089601f8301126108ab57600080fd5b8135818111156108bd576108bd610a92565b6108cf601f8201601f19168501610a22565b91508082528a848285010111156108e557600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60008060008060008060a0878903121561091f57600080fd5b61092887610742565b955061093660208801610742565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561096157600080fd5b818901915089601f83011261097557600080fd5b81358181111561098457600080fd5b8a602082850101111561099657600080fd5b6020830194508093505050509295509295509295565b600080604083850312156109bf57600080fd5b6109c883610742565b946020939093013593505050565b6000602082840312156109e857600080fd5b815180151581146107ff57600080fd5b600060208284031215610a0a57600080fd5b81356001600160e01b0319811681146107ff57600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610a4b57610a4b610a92565b604052919050565b6000600019821415610a7557634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122044a4999692934369b014d95e6d3605ae5e5f6beaecb8c8ac2d709b90ec7c739e64736f6c63430008070033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063f09d39e31161005b578063f09d39e3146101a6578063f23a6e61146101d2578063f2fde38b1461022c57600080fd5b80638da5cb5b1461015f578063bc197c811461017a57600080fd5b80636c6d6a17116100a75780636c6d6a17146100fe578063715018a61461011357806388b22c241461011b57600080fd5b806301ffc9a7146100c3578063551f141b146100eb575b600080fd5b6100d66100d13660046109f8565b61023f565b60405190151581526020015b60405180910390f35b6100d66100f93660046107e4565b6102a8565b61011161010c3660046107e4565b610458565b005b6101116104e6565b6101516101293660046109ac565b6001600160a01b03919091166000908152600260209081526040808320938352929052205490565b6040519081526020016100e2565b6000546040516001600160a01b0390911681526020016100e2565b61018d610188366004610806565b61054c565b6040516001600160e01b031990911681526020016100e2565b6100d66101b43660046107e4565b6001600160a01b031660009081526003602052604090205460ff1690565b61018d6101e0366004610906565b50506001600160a01b039290921660009081526002602090815260408083209383529290522055507ff23a6e610000000000000000000000000000000000000000000000000000000090565b61011161023a3660046107e4565b610603565b60006001600160e01b031982167f4e2312e00000000000000000000000000000000000000000000000000000000014806102a257507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6001600160a01b038116600090815260026020908152604080832083805290915281205460041480156102fe57506001600160a01b03821660009081526002602081815260408084206001855290915290912054145b801561032d57506001600160a01b03821660009081526002602081815260408084209284529190529020546001145b801561035c57506001600160a01b03821660009081526002602081815260408084206003855290915290912054145b801561038c57506001600160a01b0382166000908152600260209081526040808320600484529091529020546003145b156103b5576001600160a01b0382166000908152600360205260409020805460ff191660011790555b600480546040517f551f141b0000000000000000000000000000000000000000000000000000000081526001600160a01b038581169382019390935291169063551f141b90602401602060405180830381600087803b15801561041757600080fd5b505af115801561042b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044f91906109d6565b50600192915050565b6000546001600160a01b031633146104b75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105405760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ae565b61054a60006106e5565b565b6000805b84518110156105d75783818151811061056b5761056b610a7c565b602002602001015160026000886001600160a01b03166001600160a01b0316815260200190815260200160002060008784815181106105ac576105ac610a7c565b6020026020010151815260200190815260200160002081905550806105d090610a53565b9050610550565b507fbc197c81000000000000000000000000000000000000000000000000000000009695505050505050565b6000546001600160a01b0316331461065d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ae565b6001600160a01b0381166106d95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104ae565b6106e2816106e5565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461075957600080fd5b919050565b600082601f83011261076f57600080fd5b8135602067ffffffffffffffff82111561078b5761078b610a92565b8160051b61079a828201610a22565b8381528281019086840183880185018910156107b557600080fd5b600093505b858410156107d85780358352600193909301929184019184016107ba565b50979650505050505050565b6000602082840312156107f657600080fd5b6107ff82610742565b9392505050565b600080600080600060a0868803121561081e57600080fd5b61082786610742565b94506020610836818801610742565b9450604087013567ffffffffffffffff8082111561085357600080fd5b61085f8a838b0161075e565b9550606089013591508082111561087557600080fd5b6108818a838b0161075e565b9450608089013591508082111561089757600080fd5b818901915089601f8301126108ab57600080fd5b8135818111156108bd576108bd610a92565b6108cf601f8201601f19168501610a22565b91508082528a848285010111156108e557600080fd5b80848401858401376000848284010152508093505050509295509295909350565b60008060008060008060a0878903121561091f57600080fd5b61092887610742565b955061093660208801610742565b94506040870135935060608701359250608087013567ffffffffffffffff8082111561096157600080fd5b818901915089601f83011261097557600080fd5b81358181111561098457600080fd5b8a602082850101111561099657600080fd5b6020830194508093505050509295509295509295565b600080604083850312156109bf57600080fd5b6109c883610742565b946020939093013593505050565b6000602082840312156109e857600080fd5b815180151581146107ff57600080fd5b600060208284031215610a0a57600080fd5b81356001600160e01b0319811681146107ff57600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610a4b57610a4b610a92565b604052919050565b6000600019821415610a7557634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122044a4999692934369b014d95e6d3605ae5e5f6beaecb8c8ac2d709b90ec7c739e64736f6c63430008070033",
    "immutableReferences": {},
    "generatedSources": [],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:6839:35",
          "statements": [
            {
              "nodeType": "YulBlock",
              "src": "6:3:35",
              "statements": []
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "63:147:35",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "73:29:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "95:6:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "82:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "82:20:35"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "73:5:35"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "188:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "197:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "200:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "190:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "190:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "190:12:35"
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
                              "src": "124:5:35"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "135:5:35"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "142:42:35",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "131:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "131:54:35"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "121:2:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "121:65:35"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "114:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "114:73:35"
                    },
                    "nodeType": "YulIf",
                    "src": "111:93:35"
                  }
                ]
              },
              "name": "abi_decode_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "42:6:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "53:5:35",
                  "type": ""
                }
              ],
              "src": "14:196:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "279:659:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "328:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "337:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "340:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "330:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "330:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "330:12:35"
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
                                  "src": "307:6:35"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "315:4:35",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "303:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "303:17:35"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "322:3:35"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "299:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "299:27:35"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "292:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "292:35:35"
                    },
                    "nodeType": "YulIf",
                    "src": "289:55:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "353:30:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "376:6:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "363:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "363:20:35"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "357:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "392:14:35",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "402:4:35",
                      "type": "",
                      "value": "0x20"
                    },
                    "variables": [
                      {
                        "name": "_2",
                        "nodeType": "YulTypedName",
                        "src": "396:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "445:22:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "447:16:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "447:18:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "447:18:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "421:2:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "425:18:35",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "418:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "418:26:35"
                    },
                    "nodeType": "YulIf",
                    "src": "415:52:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "476:20:35",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "490:1:35",
                          "type": "",
                          "value": "5"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "493:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "shl",
                        "nodeType": "YulIdentifier",
                        "src": "486:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "486:10:35"
                    },
                    "variables": [
                      {
                        "name": "_3",
                        "nodeType": "YulTypedName",
                        "src": "480:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "505:39:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "536:2:35"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "540:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "532:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "532:11:35"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "516:15:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "516:28:35"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "509:3:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "553:16:35",
                    "value": {
                      "name": "dst",
                      "nodeType": "YulIdentifier",
                      "src": "566:3:35"
                    },
                    "variables": [
                      {
                        "name": "dst_1",
                        "nodeType": "YulTypedName",
                        "src": "557:5:35",
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
                          "src": "585:3:35"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "590:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "578:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "578:15:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "578:15:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "602:19:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "613:3:35"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "618:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "609:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "609:12:35"
                    },
                    "variableNames": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "602:3:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "630:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "645:6:35"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "653:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "641:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "641:15:35"
                    },
                    "variables": [
                      {
                        "name": "src",
                        "nodeType": "YulTypedName",
                        "src": "634:3:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "702:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "711:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "714:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "704:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "704:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "704:12:35"
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
                                  "src": "679:6:35"
                                },
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "687:2:35"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "675:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "675:15:35"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "692:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "671:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "671:24:35"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "697:3:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "668:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "668:33:35"
                    },
                    "nodeType": "YulIf",
                    "src": "665:53:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "727:10:35",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "736:1:35",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "731:1:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "791:118:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "dst",
                                "nodeType": "YulIdentifier",
                                "src": "812:3:35"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "src",
                                    "nodeType": "YulIdentifier",
                                    "src": "830:3:35"
                                  }
                                ],
                                "functionName": {
                                  "name": "calldataload",
                                  "nodeType": "YulIdentifier",
                                  "src": "817:12:35"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "817:17:35"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "805:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "805:30:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "805:30:35"
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "848:19:35",
                          "value": {
                            "arguments": [
                              {
                                "name": "dst",
                                "nodeType": "YulIdentifier",
                                "src": "859:3:35"
                              },
                              {
                                "name": "_2",
                                "nodeType": "YulIdentifier",
                                "src": "864:2:35"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "855:3:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "855:12:35"
                          },
                          "variableNames": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "848:3:35"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "880:19:35",
                          "value": {
                            "arguments": [
                              {
                                "name": "src",
                                "nodeType": "YulIdentifier",
                                "src": "891:3:35"
                              },
                              {
                                "name": "_2",
                                "nodeType": "YulIdentifier",
                                "src": "896:2:35"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "887:3:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "887:12:35"
                          },
                          "variableNames": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "880:3:35"
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
                          "src": "757:1:35"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "760:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "754:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "754:9:35"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "764:18:35",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "766:14:35",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "775:1:35"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "778:1:35",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "771:3:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "771:9:35"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "766:1:35"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "750:3:35",
                      "statements": []
                    },
                    "src": "746:163:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "918:14:35",
                    "value": {
                      "name": "dst_1",
                      "nodeType": "YulIdentifier",
                      "src": "927:5:35"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "918:5:35"
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
                  "src": "253:6:35",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "261:3:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "269:5:35",
                  "type": ""
                }
              ],
              "src": "215:723:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1013:116:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1059:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1068:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1071:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1061:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1061:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1061:12:35"
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
                              "src": "1034:7:35"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1043:9:35"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1030:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1030:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1055:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1026:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1026:32:35"
                    },
                    "nodeType": "YulIf",
                    "src": "1023:52:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1084:39:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1113:9:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "1094:18:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1094:29:35"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1084:6:35"
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
                  "src": "979:9:35",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "990:7:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1002:6:35",
                  "type": ""
                }
              ],
              "src": "943:186:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1331:1168:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1378:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1387:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1390:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1380:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1380:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1380:12:35"
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
                              "src": "1352:7:35"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1361:9:35"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1348:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1348:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1373:3:35",
                          "type": "",
                          "value": "160"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1344:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1344:33:35"
                    },
                    "nodeType": "YulIf",
                    "src": "1341:53:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1403:39:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1432:9:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "1413:18:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1413:29:35"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1403:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1451:12:35",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "1461:2:35",
                      "type": "",
                      "value": "32"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "1455:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1472:48:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1505:9:35"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1516:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1501:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1501:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "1482:18:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1482:38:35"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "1472:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1529:46:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1560:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1571:2:35",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1556:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1556:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1543:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1543:32:35"
                    },
                    "variables": [
                      {
                        "name": "offset",
                        "nodeType": "YulTypedName",
                        "src": "1533:6:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1584:28:35",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "1594:18:35",
                      "type": "",
                      "value": "0xffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "_2",
                        "nodeType": "YulTypedName",
                        "src": "1588:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1639:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1648:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1651:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1641:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1641:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1641:12:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "1627:6:35"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "1635:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1624:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1624:14:35"
                    },
                    "nodeType": "YulIf",
                    "src": "1621:34:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1664:71:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1707:9:35"
                            },
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "1718:6:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1703:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1703:22:35"
                        },
                        {
                          "name": "dataEnd",
                          "nodeType": "YulIdentifier",
                          "src": "1727:7:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_array_uint256_dyn",
                        "nodeType": "YulIdentifier",
                        "src": "1674:28:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1674:61:35"
                    },
                    "variableNames": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "1664:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1744:48:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1777:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1788:2:35",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1773:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1773:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1760:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1760:32:35"
                    },
                    "variables": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulTypedName",
                        "src": "1748:8:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1821:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1830:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1833:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1823:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1823:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1823:12:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "offset_1",
                          "nodeType": "YulIdentifier",
                          "src": "1807:8:35"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "1817:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1804:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1804:16:35"
                    },
                    "nodeType": "YulIf",
                    "src": "1801:36:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1846:73:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1889:9:35"
                            },
                            {
                              "name": "offset_1",
                              "nodeType": "YulIdentifier",
                              "src": "1900:8:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1885:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1885:24:35"
                        },
                        {
                          "name": "dataEnd",
                          "nodeType": "YulIdentifier",
                          "src": "1911:7:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_array_uint256_dyn",
                        "nodeType": "YulIdentifier",
                        "src": "1856:28:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1856:63:35"
                    },
                    "variableNames": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "1846:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1928:49:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1961:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1972:3:35",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1957:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1957:19:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1944:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1944:33:35"
                    },
                    "variables": [
                      {
                        "name": "offset_2",
                        "nodeType": "YulTypedName",
                        "src": "1932:8:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2006:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2015:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2018:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2008:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2008:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2008:12:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "offset_2",
                          "nodeType": "YulIdentifier",
                          "src": "1992:8:35"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "2002:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1989:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1989:16:35"
                    },
                    "nodeType": "YulIf",
                    "src": "1986:36:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2031:34:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2045:9:35"
                        },
                        {
                          "name": "offset_2",
                          "nodeType": "YulIdentifier",
                          "src": "2056:8:35"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2041:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2041:24:35"
                    },
                    "variables": [
                      {
                        "name": "_3",
                        "nodeType": "YulTypedName",
                        "src": "2035:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2113:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2122:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2125:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2115:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2115:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2115:12:35"
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
                                  "src": "2092:2:35"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2096:4:35",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2088:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2088:13:35"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2103:7:35"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2084:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2084:27:35"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "2077:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2077:35:35"
                    },
                    "nodeType": "YulIf",
                    "src": "2074:55:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2138:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "_3",
                          "nodeType": "YulIdentifier",
                          "src": "2161:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2148:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2148:16:35"
                    },
                    "variables": [
                      {
                        "name": "_4",
                        "nodeType": "YulTypedName",
                        "src": "2142:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2187:22:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "2189:16:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2189:18:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2189:18:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "_4",
                          "nodeType": "YulIdentifier",
                          "src": "2179:2:35"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "2183:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2176:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2176:10:35"
                    },
                    "nodeType": "YulIf",
                    "src": "2173:36:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2218:66:35",
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
                                      "src": "2259:2:35"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2263:4:35",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2255:3:35"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2255:13:35"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2274:2:35",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "2270:3:35"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2270:7:35"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2251:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2251:27:35"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2280:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2247:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2247:36:35"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "2231:15:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2231:53:35"
                    },
                    "variables": [
                      {
                        "name": "array",
                        "nodeType": "YulTypedName",
                        "src": "2222:5:35",
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
                          "src": "2300:5:35"
                        },
                        {
                          "name": "_4",
                          "nodeType": "YulIdentifier",
                          "src": "2307:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2293:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2293:17:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2293:17:35"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2356:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2365:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2368:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2358:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2358:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2358:12:35"
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
                                  "src": "2333:2:35"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "2337:2:35"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2329:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2329:11:35"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2342:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2325:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2325:20:35"
                        },
                        {
                          "name": "dataEnd",
                          "nodeType": "YulIdentifier",
                          "src": "2347:7:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2322:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2322:33:35"
                    },
                    "nodeType": "YulIf",
                    "src": "2319:53:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "2398:5:35"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2405:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2394:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2394:14:35"
                        },
                        {
                          "arguments": [
                            {
                              "name": "_3",
                              "nodeType": "YulIdentifier",
                              "src": "2414:2:35"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2418:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2410:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2410:11:35"
                        },
                        {
                          "name": "_4",
                          "nodeType": "YulIdentifier",
                          "src": "2423:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "2381:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2381:45:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2381:45:35"
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
                                  "src": "2450:5:35"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "2457:2:35"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2446:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2446:14:35"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2462:2:35"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2442:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2442:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2467:1:35",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2435:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2435:34:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2435:34:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2478:15:35",
                    "value": {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "2488:5:35"
                    },
                    "variableNames": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "2478:6:35"
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
                  "src": "1265:9:35",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1276:7:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1288:6:35",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "1296:6:35",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "1304:6:35",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "1312:6:35",
                  "type": ""
                },
                {
                  "name": "value4",
                  "nodeType": "YulTypedName",
                  "src": "1320:6:35",
                  "type": ""
                }
              ],
              "src": "1134:1365:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2661:720:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2708:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2717:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2720:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2710:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2710:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2710:12:35"
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
                              "src": "2682:7:35"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2691:9:35"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2678:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2678:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2703:3:35",
                          "type": "",
                          "value": "160"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2674:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2674:33:35"
                    },
                    "nodeType": "YulIf",
                    "src": "2671:53:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2733:39:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2762:9:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "2743:18:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2743:29:35"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2733:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2781:48:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2814:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2825:2:35",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2810:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2810:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "2791:18:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2791:38:35"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2781:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2838:42:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2865:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2876:2:35",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2861:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2861:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2848:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2848:32:35"
                    },
                    "variableNames": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "2838:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2889:42:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2916:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2927:2:35",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2912:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2912:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2899:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2899:32:35"
                    },
                    "variableNames": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "2889:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2940:47:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2971:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2982:3:35",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2967:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2967:19:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2954:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2954:33:35"
                    },
                    "variables": [
                      {
                        "name": "offset",
                        "nodeType": "YulTypedName",
                        "src": "2944:6:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2996:28:35",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "3006:18:35",
                      "type": "",
                      "value": "0xffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "3000:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3051:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3060:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3063:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3053:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3053:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3053:12:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3039:6:35"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "3047:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3036:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3036:14:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3033:34:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3076:32:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3090:9:35"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3101:6:35"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3086:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3086:22:35"
                    },
                    "variables": [
                      {
                        "name": "_2",
                        "nodeType": "YulTypedName",
                        "src": "3080:2:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3156:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3165:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3168:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3158:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3158:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3158:12:35"
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
                                  "src": "3135:2:35"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3139:4:35",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3131:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3131:13:35"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "3146:7:35"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "3127:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3127:27:35"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3120:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3120:35:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3117:55:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3181:30:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "3208:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3195:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3195:16:35"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "3185:6:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3238:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3247:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3250:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3240:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3240:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3240:12:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "3226:6:35"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "3234:2:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3223:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3223:14:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3220:34:35"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3304:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3313:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3316:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3306:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3306:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3306:12:35"
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
                                  "src": "3277:2:35"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "3281:6:35"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3273:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3273:15:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3290:2:35",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3269:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3269:24:35"
                        },
                        {
                          "name": "dataEnd",
                          "nodeType": "YulIdentifier",
                          "src": "3295:7:35"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3266:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3266:37:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3263:57:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3329:21:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "3343:2:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3347:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3339:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3339:11:35"
                    },
                    "variableNames": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "3329:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3359:16:35",
                    "value": {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "3369:6:35"
                    },
                    "variableNames": [
                      {
                        "name": "value5",
                        "nodeType": "YulIdentifier",
                        "src": "3359:6:35"
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
                  "src": "2587:9:35",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2598:7:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2610:6:35",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "2618:6:35",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "2626:6:35",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "2634:6:35",
                  "type": ""
                },
                {
                  "name": "value4",
                  "nodeType": "YulTypedName",
                  "src": "2642:6:35",
                  "type": ""
                },
                {
                  "name": "value5",
                  "nodeType": "YulTypedName",
                  "src": "2650:6:35",
                  "type": ""
                }
              ],
              "src": "2504:877:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3473:167:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3519:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3528:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3531:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3521:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3521:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3521:12:35"
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
                              "src": "3494:7:35"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3503:9:35"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3490:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3490:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3515:2:35",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3486:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3486:32:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3483:52:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3544:39:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3573:9:35"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "3554:18:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3554:29:35"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3544:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3592:42:35",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3619:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3630:2:35",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3615:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3615:18:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3602:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3602:32:35"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "3592:6:35"
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
                  "src": "3431:9:35",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3442:7:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3454:6:35",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "3462:6:35",
                  "type": ""
                }
              ],
              "src": "3386:254:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3723:199:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3769:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3778:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3781:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3771:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3771:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3771:12:35"
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
                              "src": "3744:7:35"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3753:9:35"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3740:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3740:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3765:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3736:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3736:32:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3733:52:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3794:29:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3813:9:35"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "3807:5:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3807:16:35"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "3798:5:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3876:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3885:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3888:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3878:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3878:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3878:12:35"
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
                              "src": "3845:5:35"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "3866:5:35"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3859:6:35"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3859:13:35"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "3852:6:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3852:21:35"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "3842:2:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3842:32:35"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3835:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3835:40:35"
                    },
                    "nodeType": "YulIf",
                    "src": "3832:60:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3901:15:35",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3911:5:35"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3901:6:35"
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
                  "src": "3689:9:35",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3700:7:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3712:6:35",
                  "type": ""
                }
              ],
              "src": "3645:277:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3996:263:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4042:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4051:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4054:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4044:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4044:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4044:12:35"
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
                              "src": "4017:7:35"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4026:9:35"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4013:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4013:23:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4038:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "4009:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4009:32:35"
                    },
                    "nodeType": "YulIf",
                    "src": "4006:52:35"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4067:36:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4093:9:35"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4080:12:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4080:23:35"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "4071:5:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4213:16:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4222:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4225:1:35",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4215:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4215:12:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4215:12:35"
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
                              "src": "4125:5:35"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4136:5:35"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4143:66:35",
                                  "type": "",
                                  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "4132:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4132:78:35"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "4122:2:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4122:89:35"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4115:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4115:97:35"
                    },
                    "nodeType": "YulIf",
                    "src": "4112:117:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4238:15:35",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4248:5:35"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4238:6:35"
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
                  "src": "3962:9:35",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3973:7:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3985:6:35",
                  "type": ""
                }
              ],
              "src": "3927:332:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4365:125:35",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4375:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4387:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4398:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4383:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4383:18:35"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4375:4:35"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4417:9:35"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4432:6:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4440:42:35",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4428:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4428:55:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4410:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4410:74:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4410:74:35"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4334:9:35",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4345:6:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4356:4:35",
                  "type": ""
                }
              ],
              "src": "4264:226:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4590:92:35",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4600:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4612:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4623:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4608:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4608:18:35"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4600:4:35"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4642:9:35"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "4667:6:35"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "4660:6:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4660:14:35"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "4653:6:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4653:22:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4635:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4635:41:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4635:41:35"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4559:9:35",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4570:6:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4581:4:35",
                  "type": ""
                }
              ],
              "src": "4495:187:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4786:149:35",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4796:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4808:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4819:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4804:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4804:18:35"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4796:4:35"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4838:9:35"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4853:6:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4861:66:35",
                              "type": "",
                              "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4849:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4849:79:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4831:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4831:98:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4831:98:35"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4755:9:35",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4766:6:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4777:4:35",
                  "type": ""
                }
              ],
              "src": "4687:248:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5114:228:35",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5131:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5142:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5124:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5124:21:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5124:21:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5165:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5176:2:35",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5161:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5161:18:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5181:2:35",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5154:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5154:30:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5154:30:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5204:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5215:2:35",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5200:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5200:18:35"
                        },
                        {
                          "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5220:34:35",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5193:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5193:62:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5193:62:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5275:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5286:2:35",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5271:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5271:18:35"
                        },
                        {
                          "hexValue": "646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5291:8:35",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5264:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5264:36:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5264:36:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5309:27:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5321:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5332:3:35",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5317:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5317:19:35"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5309:4:35"
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
                  "src": "5091:9:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5105:4:35",
                  "type": ""
                }
              ],
              "src": "4940:402:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5521:182:35",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5538:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5549:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5531:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5531:21:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5531:21:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5572:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5583:2:35",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5568:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5568:18:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5588:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5561:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5561:30:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5561:30:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5611:9:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5622:2:35",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5607:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5607:18:35"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5627:34:35",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5600:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5600:62:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5600:62:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5671:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5683:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5694:2:35",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5679:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5679:18:35"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5671:4:35"
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
                  "src": "5498:9:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5512:4:35",
                  "type": ""
                }
              ],
              "src": "5347:356:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5809:76:35",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5819:26:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5831:9:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5842:2:35",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5827:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5827:18:35"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5819:4:35"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5861:9:35"
                        },
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5872:6:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5854:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5854:25:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5854:25:35"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5778:9:35",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5789:6:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5800:4:35",
                  "type": ""
                }
              ],
              "src": "5708:177:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5935:230:35",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5945:19:35",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5961:2:35",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "5955:5:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5955:9:35"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "5945:6:35"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5973:58:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "5995:6:35"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "size",
                                  "nodeType": "YulIdentifier",
                                  "src": "6011:4:35"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6017:2:35",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6007:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6007:13:35"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6026:2:35",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "6022:3:35"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6022:7:35"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6003:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6003:27:35"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5991:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5991:40:35"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "5977:10:35",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6106:22:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "6108:16:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6108:18:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6108:18:35"
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
                              "src": "6049:10:35"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6061:18:35",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "6046:2:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6046:34:35"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "6085:10:35"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "6097:6:35"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "6082:2:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6082:22:35"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "6043:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6043:62:35"
                    },
                    "nodeType": "YulIf",
                    "src": "6040:88:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6144:2:35",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "6148:10:35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6137:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6137:22:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6137:22:35"
                  }
                ]
              },
              "name": "allocate_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "5915:4:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "5924:6:35",
                  "type": ""
                }
              ],
              "src": "5890:275:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6217:242:35",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6256:168:35",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6277:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6280:77:35",
                                "type": "",
                                "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "6270:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6270:88:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6270:88:35"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6378:1:35",
                                "type": "",
                                "value": "4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6381:4:35",
                                "type": "",
                                "value": "0x11"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "6371:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6371:15:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6371:15:35"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6406:1:35",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6409:4:35",
                                "type": "",
                                "value": "0x24"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "6399:6:35"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6399:15:35"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6399:15:35"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6233:5:35"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6244:1:35",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "6240:3:35"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6240:6:35"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "6230:2:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6230:17:35"
                    },
                    "nodeType": "YulIf",
                    "src": "6227:197:35"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6433:20:35",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6444:5:35"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6451:1:35",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6440:3:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6440:13:35"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "6433:3:35"
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
                  "src": "6199:5:35",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "6209:3:35",
                  "type": ""
                }
              ],
              "src": "6170:289:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6496:152:35",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6513:1:35",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6516:77:35",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6506:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6506:88:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6506:88:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6610:1:35",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6613:4:35",
                          "type": "",
                          "value": "0x32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6603:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6603:15:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6603:15:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6634:1:35",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6637:4:35",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "6627:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6627:15:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6627:15:35"
                  }
                ]
              },
              "name": "panic_error_0x32",
              "nodeType": "YulFunctionDefinition",
              "src": "6464:184:35"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6685:152:35",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6702:1:35",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6705:77:35",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6695:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6695:88:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6695:88:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6799:1:35",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6802:4:35",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6792:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6792:15:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6792:15:35"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6823:1:35",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6826:4:35",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "6816:6:35"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6816:15:35"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6816:15:35"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "6653:184:35"
            }
          ]
        },
        "contents": "{\n    { }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let _3 := shl(5, _1)\n        let dst := allocate_memory(add(_3, _2))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let src := add(offset, _2)\n        if gt(add(add(offset, _3), _2), end) { revert(0, 0) }\n        let i := 0\n        for { } lt(i, _1) { i := add(i, 1) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n            src := add(src, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let _1 := 32\n        value1 := abi_decode_address(add(headStart, _1))\n        let offset := calldataload(add(headStart, 64))\n        let _2 := 0xffffffffffffffff\n        if gt(offset, _2) { revert(0, 0) }\n        value2 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _2) { revert(0, 0) }\n        value3 := abi_decode_array_uint256_dyn(add(headStart, offset_1), dataEnd)\n        let offset_2 := calldataload(add(headStart, 128))\n        if gt(offset_2, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset_2)\n        if iszero(slt(add(_3, 0x1f), dataEnd)) { revert(0, 0) }\n        let _4 := calldataload(_3)\n        if gt(_4, _2) { panic_error_0x41() }\n        let array := allocate_memory(add(and(add(_4, 0x1f), not(31)), _1))\n        mstore(array, _4)\n        if gt(add(add(_3, _4), _1), dataEnd) { revert(0, 0) }\n        calldatacopy(add(array, _1), add(_3, _1), _4)\n        mstore(add(add(array, _4), _1), 0)\n        value4 := array\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4, value5\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        value3 := calldataload(add(headStart, 96))\n        let offset := calldataload(add(headStart, 128))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let length := calldataload(_2)\n        if gt(length, _1) { revert(0, 0) }\n        if gt(add(add(_2, length), 32), dataEnd) { revert(0, 0) }\n        value4 := add(_2, 32)\n        value5 := length\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        ret := add(value, 1)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
        "id": 35,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "516:1740:15:-:0;;;;;;;;;;;;-1:-1:-1;921:32:23;719:10:32;921:18:23;:32::i;:::-;516:1740:15;;2270:187:23;2343:16;2362:6;;-1:-1:-1;;;;;2378:17:23;;;-1:-1:-1;;;;;;2378:17:23;;;;;;2410:40;;2362:6;;;;;;;2410:40;;2343:16;2410:40;2333:124;2270:187;:::o;516:1740:15:-;;;;;;;",
    "deployedSourceMap": "516:1740:15:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;286:223;;;;;;:::i;:::-;;:::i;:::-;;;4660:14:35;;4653:22;4635:41;;4623:2;4608:18;286:223:15;;;;;;;;1856:395;;;;;;:::i;:::-;;:::i;782:94::-;;;;;;:::i;:::-;;:::i;:::-;;1668:101:23;;;:::i;1589:121:15:-;;;;;;:::i;:::-;-1:-1:-1;;;;;1683:15:15;;;;1656:7;1683:15;;;:6;:15;;;;;;;;:19;;;;;;;;;1589:121;;;;5854:25:35;;;5842:2;5827:18;1589:121:15;5708:177:35;1036:85:23;1082:7;1108:6;1036:85;;-1:-1:-1;;;;;1108:6:23;;;4410:74:35;;4398:2;4383:18;1036:85:23;4264:226:35;1186:395:15;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;;4849:79:35;;;4831:98;;4819:2;4804:18;1186:395:15;4687:248:35;1723:127:15;;;;;;:::i;:::-;-1:-1:-1;;;;;1813:28:15;1789:4;1813:28;;;:19;:28;;;;;;;;;1723:127;885:293;;;;;;:::i;:::-;-1:-1:-1;;;;;;;1096:12:15;;;;1077:6;1096:12;;;:6;:12;;;;;;;;:16;;;;;;;:24;-1:-1:-1;1139:31:15;;885:293;1918:198:23;;;;;;:::i;:::-;;:::i;286:223:15:-;388:4;-1:-1:-1;;;;;;412:49:15;;427:34;412:49;;:89;;-1:-1:-1;952:25:33;-1:-1:-1;;;;;;937:40:33;;;465:36:15;405:96;286:223;-1:-1:-1;;286:223:15:o;1856:395::-;-1:-1:-1;;;;;1934:15:15;;1913:4;1934:15;;;:6;:15;;;;;;;;:18;;;;;;;;;1956:1;1934:23;:64;;;;-1:-1:-1;;;;;;1975:15:15;;;;;;:6;:15;;;;;;;;1991:1;1975:18;;;;;;;;;:23;1934:64;:105;;;;-1:-1:-1;;;;;;2016:15:15;;;;;;:6;:15;;;;;;;;:18;;;;;;;;;2038:1;2016:23;1934:105;:146;;;;-1:-1:-1;;;;;;2057:15:15;;;;;;:6;:15;;;;;;;;2073:1;2057:18;;;;;;;;;:23;1934:146;:187;;;;-1:-1:-1;;;;;;2098:15:15;;;;;;:6;:15;;;;;;;;2114:1;2098:18;;;;;;;;2120:1;2098:23;1934:187;1930:237;;;-1:-1:-1;;;;;2132:28:15;;;;;;:19;:28;;;;;:35;;-1:-1:-1;;2132:35:15;2163:4;2132:35;;;1930:237;2186:8;;;2178:41;;;;;-1:-1:-1;;;;;4428:55:35;;;2178:41:15;;;4410:74:35;;;;2186:8:15;;;2178:32;;4383:18:35;;2178:41:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;2238:4:15;;1856:395;-1:-1:-1;;1856:395:15:o;782:94::-;1082:7:23;1108:6;-1:-1:-1;;;;;1108:6:23;719:10:32;1248:23:23;1240:68;;;;-1:-1:-1;;;1240:68:23;;5549:2:35;1240:68:23;;;5531:21:35;;;5568:18;;;5561:30;5627:34;5607:18;;;5600:62;5679:18;;1240:68:23;;;;;;;;;849:8:15::1;:18:::0;;-1:-1:-1;;849:18:15::1;-1:-1:-1::0;;;;;849:18:15;;;::::1;::::0;;;::::1;::::0;;782:94::o;1668:101:23:-;1082:7;1108:6;-1:-1:-1;;;;;1108:6:23;719:10:32;1248:23:23;1240:68;;;;-1:-1:-1;;;1240:68:23;;5549:2:35;1240:68:23;;;5531:21:35;;;5568:18;;;5561:30;5627:34;5607:18;;;5600:62;5679:18;;1240:68:23;5347:356:35;1240:68:23;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;1186:395:15:-;1401:6;;1420:100;1443:3;:10;1439:1;:14;1420:100;;;1498:6;1505:1;1498:9;;;;;;;;:::i;:::-;;;;;;;1475:6;:12;1482:4;-1:-1:-1;;;;;1475:12:15;-1:-1:-1;;;;;1475:12:15;;;;;;;;;;;;:20;1488:3;1492:1;1488:6;;;;;;;;:::i;:::-;;;;;;;1475:20;;;;;;;;;;;:32;;;;1455:3;;;;:::i;:::-;;;1420:100;;;-1:-1:-1;1537:36:15;;1186:395;-1:-1:-1;;;;;;1186:395:15:o;1918:198:23:-;1082:7;1108:6;-1:-1:-1;;;;;1108:6:23;719:10:32;1248:23:23;1240:68;;;;-1:-1:-1;;;1240:68:23;;5549:2:35;1240:68:23;;;5531:21:35;;;5568:18;;;5561:30;5627:34;5607:18;;;5600:62;5679:18;;1240:68:23;5347:356:35;1240:68:23;-1:-1:-1;;;;;2006:22:23;::::1;1998:73;;;::::0;-1:-1:-1;;;1998:73:23;;5142:2:35;1998:73:23::1;::::0;::::1;5124:21:35::0;5181:2;5161:18;;;5154:30;5220:34;5200:18;;;5193:62;5291:8;5271:18;;;5264:36;5317:19;;1998:73:23::1;4940:402:35::0;1998:73:23::1;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;2270:187::-;2343:16;2362:6;;-1:-1:-1;;;;;2378:17:23;;;-1:-1:-1;;2378:17:23;;;;;;2410:40;;2362:6;;;;;;;2410:40;;2343:16;2410:40;2333:124;2270:187;:::o;14:196:35:-;82:20;;-1:-1:-1;;;;;131:54:35;;121:65;;111:93;;200:1;197;190:12;111:93;14:196;;;:::o;215:723::-;269:5;322:3;315:4;307:6;303:17;299:27;289:55;;340:1;337;330:12;289:55;376:6;363:20;402:4;425:18;421:2;418:26;415:52;;;447:18;;:::i;:::-;493:2;490:1;486:10;516:28;540:2;536;532:11;516:28;:::i;:::-;578:15;;;609:12;;;;641:15;;;675;;;671:24;;668:33;-1:-1:-1;665:53:35;;;714:1;711;704:12;665:53;736:1;727:10;;746:163;760:2;757:1;754:9;746:163;;;817:17;;805:30;;778:1;771:9;;;;;855:12;;;;887;;746:163;;;-1:-1:-1;927:5:35;215:723;-1:-1:-1;;;;;;;215:723:35:o;943:186::-;1002:6;1055:2;1043:9;1034:7;1030:23;1026:32;1023:52;;;1071:1;1068;1061:12;1023:52;1094:29;1113:9;1094:29;:::i;:::-;1084:39;943:186;-1:-1:-1;;;943:186:35:o;1134:1365::-;1288:6;1296;1304;1312;1320;1373:3;1361:9;1352:7;1348:23;1344:33;1341:53;;;1390:1;1387;1380:12;1341:53;1413:29;1432:9;1413:29;:::i;:::-;1403:39;;1461:2;1482:38;1516:2;1505:9;1501:18;1482:38;:::i;:::-;1472:48;;1571:2;1560:9;1556:18;1543:32;1594:18;1635:2;1627:6;1624:14;1621:34;;;1651:1;1648;1641:12;1621:34;1674:61;1727:7;1718:6;1707:9;1703:22;1674:61;:::i;:::-;1664:71;;1788:2;1777:9;1773:18;1760:32;1744:48;;1817:2;1807:8;1804:16;1801:36;;;1833:1;1830;1823:12;1801:36;1856:63;1911:7;1900:8;1889:9;1885:24;1856:63;:::i;:::-;1846:73;;1972:3;1961:9;1957:19;1944:33;1928:49;;2002:2;1992:8;1989:16;1986:36;;;2018:1;2015;2008:12;1986:36;2056:8;2045:9;2041:24;2031:34;;2103:7;2096:4;2092:2;2088:13;2084:27;2074:55;;2125:1;2122;2115:12;2074:55;2161:2;2148:16;2183:2;2179;2176:10;2173:36;;;2189:18;;:::i;:::-;2231:53;2274:2;2255:13;;-1:-1:-1;;2251:27:35;2247:36;;2231:53;:::i;:::-;2218:66;;2307:2;2300:5;2293:17;2347:7;2342:2;2337;2333;2329:11;2325:20;2322:33;2319:53;;;2368:1;2365;2358:12;2319:53;2423:2;2418;2414;2410:11;2405:2;2398:5;2394:14;2381:45;2467:1;2462:2;2457;2450:5;2446:14;2442:23;2435:34;;2488:5;2478:15;;;;;1134:1365;;;;;;;;:::o;2504:877::-;2610:6;2618;2626;2634;2642;2650;2703:3;2691:9;2682:7;2678:23;2674:33;2671:53;;;2720:1;2717;2710:12;2671:53;2743:29;2762:9;2743:29;:::i;:::-;2733:39;;2791:38;2825:2;2814:9;2810:18;2791:38;:::i;:::-;2781:48;;2876:2;2865:9;2861:18;2848:32;2838:42;;2927:2;2916:9;2912:18;2899:32;2889:42;;2982:3;2971:9;2967:19;2954:33;3006:18;3047:2;3039:6;3036:14;3033:34;;;3063:1;3060;3053:12;3033:34;3101:6;3090:9;3086:22;3076:32;;3146:7;3139:4;3135:2;3131:13;3127:27;3117:55;;3168:1;3165;3158:12;3117:55;3208:2;3195:16;3234:2;3226:6;3223:14;3220:34;;;3250:1;3247;3240:12;3220:34;3295:7;3290:2;3281:6;3277:2;3273:15;3269:24;3266:37;3263:57;;;3316:1;3313;3306:12;3263:57;3347:2;3343;3339:11;3329:21;;3369:6;3359:16;;;;;2504:877;;;;;;;;:::o;3386:254::-;3454:6;3462;3515:2;3503:9;3494:7;3490:23;3486:32;3483:52;;;3531:1;3528;3521:12;3483:52;3554:29;3573:9;3554:29;:::i;:::-;3544:39;3630:2;3615:18;;;;3602:32;;-1:-1:-1;;;3386:254:35:o;3645:277::-;3712:6;3765:2;3753:9;3744:7;3740:23;3736:32;3733:52;;;3781:1;3778;3771:12;3733:52;3813:9;3807:16;3866:5;3859:13;3852:21;3845:5;3842:32;3832:60;;3888:1;3885;3878:12;3927:332;3985:6;4038:2;4026:9;4017:7;4013:23;4009:32;4006:52;;;4054:1;4051;4044:12;4006:52;4093:9;4080:23;-1:-1:-1;;;;;;4136:5:35;4132:78;4125:5;4122:89;4112:117;;4225:1;4222;4215:12;5890:275;5961:2;5955:9;6026:2;6007:13;;-1:-1:-1;;6003:27:35;5991:40;;6061:18;6046:34;;6082:22;;;6043:62;6040:88;;;6108:18;;:::i;:::-;6144:2;6137:22;5890:275;;-1:-1:-1;5890:275:35:o;6170:289::-;6209:3;-1:-1:-1;;6230:17:35;;6227:197;;;-1:-1:-1;;;6277:1:35;6270:88;6381:4;6378:1;6371:15;6409:4;6406:1;6399:15;6227:197;-1:-1:-1;6451:1:35;6440:13;;6170:289::o;6464:184::-;-1:-1:-1;;;6513:1:35;6506:88;6613:4;6610:1;6603:15;6637:4;6634:1;6627:15;6653:184;-1:-1:-1;;;6702:1:35;6695:88;6802:4;6799:1;6792:15;6826:4;6823:1;6816:15",
    "source": "// SPDX-License-Identifier: MIT\r\n\r\npragma solidity ^0.8.7;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\"; \r\nimport \"./Builder.sol\";\r\n\r\n\r\nabstract contract ERC1155Receiver is ERC165, IERC1155Receiver {\r\n     function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\r\n        return interfaceId == type(IERC1155Receiver).interfaceId || super.supportsInterface(interfaceId);\r\n    }\r\n}\r\n\r\ncontract SeedItemReceiver is ERC1155Receiver, Ownable {\r\n\r\n    uint256 successfulTransactions;  \r\n    mapping(address => mapping(uint256 => uint256)) private _funds; \r\n    mapping(address => bool) private _isSpecialCollected; \r\n    address private _builder; \r\n\r\n    function setBuilder(address builder) external onlyOwner {\r\n        _builder = builder; \r\n    }\r\n\r\n     function onERC1155Received(\r\n        address operator,\r\n        address from,\r\n        uint256 id,\r\n        uint256 value,\r\n        bytes calldata data\r\n    ) public virtual override returns (bytes4) {\r\n        _funds[from][id] = value; \r\n        return this.onERC1155Received.selector;\r\n    }\r\n\r\n    function onERC1155BatchReceived(\r\n        address operator,\r\n        address from,\r\n        uint256[] memory ids,\r\n        uint256[] memory values,\r\n        bytes memory data\r\n    ) public virtual override returns (bytes4) {\r\n        for(uint256 i = 0; i < ids.length; ++i) {\r\n            _funds[from][ids[i]] = values[i]; \r\n        }\r\n        return this.onERC1155BatchReceived.selector;\r\n    }\r\n\r\n    function funds(address account, uint256 id) external view returns (uint256) {\r\n        return _funds[account][id];\r\n    } \r\n    \r\n    function isSpecialCollected(address account) public view returns (bool) {\r\n        return _isSpecialCollected[account]; \r\n    }\r\n    function collectSpecial(address account) public returns (bool) {\r\n        if (_funds[account][0] == 4 && \r\n            _funds[account][1] == 2 && \r\n            _funds[account][2] == 1 && \r\n            _funds[account][3] == 2 && \r\n            _funds[account][4] == 3)\r\n        _isSpecialCollected[account] = true;\r\n        Builder(_builder).collectSpecial(account); \r\n        return true; \r\n    }\r\n\r\n}",
    "sourcePath": "C:/Github/SeedFarm/contracts/SeedItemReceiver.sol",
    "ast": {
      "absolutePath": "/C/Github/SeedFarm/contracts/SeedItemReceiver.sol",
      "exportedSymbols": {
        "Address": [
          6348
        ],
        "Builder": [
          3229
        ],
        "Context": [
          6370
        ],
        "ERC1155": [
          5224
        ],
        "ERC1155Receiver": [
          3740
        ],
        "ERC165": [
          6394
        ],
        "ERC20": [
          5948
        ],
        "IERC1155": [
          5346
        ],
        "IERC1155MetadataURI": [
          5402
        ],
        "IERC1155Receiver": [
          5387
        ],
        "IERC165": [
          6406
        ],
        "IERC20": [
          6026
        ],
        "IERC20Metadata": [
          6051
        ],
        "Ownable": [
          4128
        ],
        "SeedItem": [
          3707
        ],
        "SeedItemReceiver": [
          3939
        ],
        "SeedToken": [
          4011
        ]
      },
      "id": 3940,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 3709,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".7"
          ],
          "nodeType": "PragmaDirective",
          "src": "35:23:15"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
          "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
          "id": 3710,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 3940,
          "sourceUnit": 5388,
          "src": "62:68:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 3711,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 3940,
          "sourceUnit": 4129,
          "src": "132:52:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/C/Github/SeedFarm/contracts/Builder.sol",
          "file": "./Builder.sol",
          "id": 3712,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 3940,
          "sourceUnit": 3230,
          "src": "187:23:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": true,
          "baseContracts": [
            {
              "baseName": {
                "id": 3713,
                "name": "ERC165",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6394,
                "src": "253:6:15"
              },
              "id": 3714,
              "nodeType": "InheritanceSpecifier",
              "src": "253:6:15"
            },
            {
              "baseName": {
                "id": 3715,
                "name": "IERC1155Receiver",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 5387,
                "src": "261:16:15"
              },
              "id": 3716,
              "nodeType": "InheritanceSpecifier",
              "src": "261:16:15"
            }
          ],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": false,
          "id": 3740,
          "linearizedBaseContracts": [
            3740,
            5387,
            6394,
            6406
          ],
          "name": "ERC1155Receiver",
          "nameLocation": "234:15:15",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "baseFunctions": [
                6393,
                6405
              ],
              "body": {
                "id": 3738,
                "nodeType": "Block",
                "src": "394:115:15",
                "statements": [
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 3736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 3731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 3726,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3718,
                          "src": "412:11:15",
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
                                "id": 3728,
                                "name": "IERC1155Receiver",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5387,
                                "src": "432:16:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$5387_$",
                                  "typeString": "type(contract IERC1155Receiver)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$5387_$",
                                  "typeString": "type(contract IERC1155Receiver)"
                                }
                              ],
                              "id": 3727,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967269,
                              "src": "427:4:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 3729,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "427:22:15",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155Receiver_$5387",
                              "typeString": "type(contract IERC1155Receiver)"
                            }
                          },
                          "id": 3730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "427:34:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "412:49:15",
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
                            "id": 3734,
                            "name": "interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3718,
                            "src": "489:11:15",
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
                            "id": 3732,
                            "name": "super",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967271,
                            "src": "465:5:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_super$_ERC1155Receiver_$3740_$",
                              "typeString": "type(contract super ERC1155Receiver)"
                            }
                          },
                          "id": 3733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "supportsInterface",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6393,
                          "src": "465:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (bytes4) view returns (bool)"
                          }
                        },
                        "id": 3735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "465:36:15",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "412:89:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 3725,
                    "id": 3737,
                    "nodeType": "Return",
                    "src": "405:96:15"
                  }
                ]
              },
              "functionSelector": "01ffc9a7",
              "id": 3739,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nameLocation": "295:17:15",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 3722,
                "nodeType": "OverrideSpecifier",
                "overrides": [
                  {
                    "id": 3720,
                    "name": "ERC165",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6394,
                    "src": "362:6:15"
                  },
                  {
                    "id": 3721,
                    "name": "IERC165",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6406,
                    "src": "370:7:15"
                  }
                ],
                "src": "353:25:15"
              },
              "parameters": {
                "id": 3719,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3718,
                    "mutability": "mutable",
                    "name": "interfaceId",
                    "nameLocation": "320:11:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3739,
                    "src": "313:18:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 3717,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "313:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "312:20:15"
              },
              "returnParameters": {
                "id": 3725,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3724,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3739,
                    "src": "388:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3723,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "388:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "387:6:15"
              },
              "scope": 3740,
              "src": "286:223:15",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "public"
            }
          ],
          "scope": 3940,
          "src": "216:296:15",
          "usedErrors": []
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 3741,
                "name": "ERC1155Receiver",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3740,
                "src": "545:15:15"
              },
              "id": 3742,
              "nodeType": "InheritanceSpecifier",
              "src": "545:15:15"
            },
            {
              "baseName": {
                "id": 3743,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4128,
                "src": "562:7:15"
              },
              "id": 3744,
              "nodeType": "InheritanceSpecifier",
              "src": "562:7:15"
            }
          ],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 3939,
          "linearizedBaseContracts": [
            3939,
            4128,
            6370,
            3740,
            5387,
            6394,
            6406
          ],
          "name": "SeedItemReceiver",
          "nameLocation": "525:16:15",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3746,
              "mutability": "mutable",
              "name": "successfulTransactions",
              "nameLocation": "587:22:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "579:30:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3745,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "579:7:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 3752,
              "mutability": "mutable",
              "name": "_funds",
              "nameLocation": "674:6:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "618:62:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(uint256 => uint256))"
              },
              "typeName": {
                "id": 3751,
                "keyType": {
                  "id": 3747,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "626:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "618:47:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                },
                "valueType": {
                  "id": 3750,
                  "keyType": {
                    "id": 3748,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "637:27:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                    "typeString": "mapping(uint256 => uint256)"
                  },
                  "valueType": {
                    "id": 3749,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "656:7:15",
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
              "id": 3756,
              "mutability": "mutable",
              "name": "_isSpecialCollected",
              "nameLocation": "721:19:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "688:52:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 3755,
                "keyType": {
                  "id": 3753,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "696:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "688:24:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 3754,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "707:4:15",
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
              "id": 3758,
              "mutability": "mutable",
              "name": "_builder",
              "nameLocation": "764:8:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "748:24:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 3757,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "748:7:15",
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
                "id": 3769,
                "nodeType": "Block",
                "src": "838:38:15",
                "statements": [
                  {
                    "expression": {
                      "id": 3767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 3765,
                        "name": "_builder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3758,
                        "src": "849:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 3766,
                        "name": "builder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3760,
                        "src": "860:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "849:18:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3768,
                    "nodeType": "ExpressionStatement",
                    "src": "849:18:15"
                  }
                ]
              },
              "functionSelector": "6c6d6a17",
              "id": 3770,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 3763,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 3762,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 4070,
                    "src": "828:9:15"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "828:9:15"
                }
              ],
              "name": "setBuilder",
              "nameLocation": "791:10:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3761,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3760,
                    "mutability": "mutable",
                    "name": "builder",
                    "nameLocation": "810:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3770,
                    "src": "802:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3759,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "802:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "801:17:15"
              },
              "returnParameters": {
                "id": 3764,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "838:0:15"
              },
              "scope": 3939,
              "src": "782:94:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                5368
              ],
              "body": {
                "id": 3798,
                "nodeType": "Block",
                "src": "1085:93:15",
                "statements": [
                  {
                    "expression": {
                      "id": 3792,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 3786,
                            "name": "_funds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3752,
                            "src": "1096:6:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(uint256 => uint256))"
                            }
                          },
                          "id": 3789,
                          "indexExpression": {
                            "id": 3787,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3774,
                            "src": "1103:4:15",
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
                          "src": "1096:12:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 3790,
                        "indexExpression": {
                          "id": 3788,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3776,
                          "src": "1109:2:15",
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
                        "src": "1096:16:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 3791,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3778,
                        "src": "1115:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1096:24:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3793,
                    "nodeType": "ExpressionStatement",
                    "src": "1096:24:15"
                  },
                  {
                    "expression": {
                      "expression": {
                        "expression": {
                          "id": 3794,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967268,
                          "src": "1139:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_SeedItemReceiver_$3939",
                            "typeString": "contract SeedItemReceiver"
                          }
                        },
                        "id": 3795,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "onERC1155Received",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3799,
                        "src": "1139:22:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                        }
                      },
                      "id": 3796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "1139:31:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "functionReturnParameters": 3785,
                    "id": 3797,
                    "nodeType": "Return",
                    "src": "1132:38:15"
                  }
                ]
              },
              "functionSelector": "f23a6e61",
              "id": 3799,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "onERC1155Received",
              "nameLocation": "894:17:15",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 3782,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1059:8:15"
              },
              "parameters": {
                "id": 3781,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3772,
                    "mutability": "mutable",
                    "name": "operator",
                    "nameLocation": "930:8:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "922:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3771,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "922:7:15",
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
                    "id": 3774,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "957:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "949:12:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3773,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "949:7:15",
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
                    "id": 3776,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "980:2:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "972:10:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3775,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "972:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3778,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "1001:5:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "993:13:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3777,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "993:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3780,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "1032:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "1017:19:15",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 3779,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1017:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "911:132:15"
              },
              "returnParameters": {
                "id": 3785,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3784,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "1077:6:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 3783,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "1077:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1076:8:15"
              },
              "scope": 3939,
              "src": "885:293:15",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                5386
              ],
              "body": {
                "id": 3846,
                "nodeType": "Block",
                "src": "1409:172:15",
                "statements": [
                  {
                    "body": {
                      "id": 3840,
                      "nodeType": "Block",
                      "src": "1460:60:15",
                      "statements": [
                        {
                          "expression": {
                            "id": 3838,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 3828,
                                  "name": "_funds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3752,
                                  "src": "1475:6:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 3833,
                                "indexExpression": {
                                  "id": 3829,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3803,
                                  "src": "1482:4:15",
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
                                "src": "1475:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 3834,
                              "indexExpression": {
                                "baseExpression": {
                                  "id": 3830,
                                  "name": "ids",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3806,
                                  "src": "1488:3:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 3832,
                                "indexExpression": {
                                  "id": 3831,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3818,
                                  "src": "1492:1:15",
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
                                "src": "1488:6:15",
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
                              "src": "1475:20:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "baseExpression": {
                                "id": 3835,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3809,
                                "src": "1498:6:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 3837,
                              "indexExpression": {
                                "id": 3836,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3818,
                                "src": "1505:1:15",
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
                              "src": "1498:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1475:32:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 3839,
                          "nodeType": "ExpressionStatement",
                          "src": "1475:32:15"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 3821,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "1439:1:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 3822,
                          "name": "ids",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3806,
                          "src": "1443:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 3823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "1443:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1439:14:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3841,
                    "initializationExpression": {
                      "assignments": [
                        3818
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3818,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "1432:1:15",
                          "nodeType": "VariableDeclaration",
                          "scope": 3841,
                          "src": "1424:9:15",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 3817,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1424:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3820,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 3819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1436:1:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1424:13:15"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 3826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "1455:3:15",
                        "subExpression": {
                          "id": 3825,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3818,
                          "src": "1457:1:15",
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
                      "id": 3827,
                      "nodeType": "ExpressionStatement",
                      "src": "1455:3:15"
                    },
                    "nodeType": "ForStatement",
                    "src": "1420:100:15"
                  },
                  {
                    "expression": {
                      "expression": {
                        "expression": {
                          "id": 3842,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967268,
                          "src": "1537:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_SeedItemReceiver_$3939",
                            "typeString": "contract SeedItemReceiver"
                          }
                        },
                        "id": 3843,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "onERC1155BatchReceived",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3847,
                        "src": "1537:27:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                        }
                      },
                      "id": 3844,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "1537:36:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "functionReturnParameters": 3816,
                    "id": 3845,
                    "nodeType": "Return",
                    "src": "1530:43:15"
                  }
                ]
              },
              "functionSelector": "bc197c81",
              "id": 3847,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "onERC1155BatchReceived",
              "nameLocation": "1195:22:15",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 3813,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1383:8:15"
              },
              "parameters": {
                "id": 3812,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3801,
                    "mutability": "mutable",
                    "name": "operator",
                    "nameLocation": "1236:8:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1228:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3800,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1228:7:15",
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
                    "id": 3803,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "1263:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1255:12:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3802,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1255:7:15",
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
                    "id": 3806,
                    "mutability": "mutable",
                    "name": "ids",
                    "nameLocation": "1295:3:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1278:20:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 3804,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1278:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3805,
                      "nodeType": "ArrayTypeName",
                      "src": "1278:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3809,
                    "mutability": "mutable",
                    "name": "values",
                    "nameLocation": "1326:6:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1309:23:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 3807,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1309:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3808,
                      "nodeType": "ArrayTypeName",
                      "src": "1309:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3811,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "1356:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1343:17:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 3810,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1343:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1217:150:15"
              },
              "returnParameters": {
                "id": 3816,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3815,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1401:6:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 3814,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "1401:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1400:8:15"
              },
              "scope": 3939,
              "src": "1186:395:15",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3862,
                "nodeType": "Block",
                "src": "1665:45:15",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 3856,
                          "name": "_funds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3752,
                          "src": "1683:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(uint256 => uint256))"
                          }
                        },
                        "id": 3858,
                        "indexExpression": {
                          "id": 3857,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3849,
                          "src": "1690:7:15",
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
                        "src": "1683:15:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3860,
                      "indexExpression": {
                        "id": 3859,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3851,
                        "src": "1699:2:15",
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
                      "src": "1683:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 3855,
                    "id": 3861,
                    "nodeType": "Return",
                    "src": "1676:26:15"
                  }
                ]
              },
              "functionSelector": "88b22c24",
              "id": 3863,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "funds",
              "nameLocation": "1598:5:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3852,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3849,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1612:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3863,
                    "src": "1604:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3848,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1604:7:15",
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
                    "id": 3851,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "1629:2:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3863,
                    "src": "1621:10:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3850,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1621:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1603:29:15"
              },
              "returnParameters": {
                "id": 3855,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3854,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3863,
                    "src": "1656:7:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3853,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1656:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1655:9:15"
              },
              "scope": 3939,
              "src": "1589:121:15",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 3874,
                "nodeType": "Block",
                "src": "1795:55:15",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 3870,
                        "name": "_isSpecialCollected",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3756,
                        "src": "1813:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3872,
                      "indexExpression": {
                        "id": 3871,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3865,
                        "src": "1833:7:15",
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
                      "src": "1813:28:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 3869,
                    "id": 3873,
                    "nodeType": "Return",
                    "src": "1806:35:15"
                  }
                ]
              },
              "functionSelector": "f09d39e3",
              "id": 3875,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isSpecialCollected",
              "nameLocation": "1732:18:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3866,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3865,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1759:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3875,
                    "src": "1751:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3864,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1751:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1750:17:15"
              },
              "returnParameters": {
                "id": 3869,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3868,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3875,
                    "src": "1789:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3867,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1789:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1788:6:15"
              },
              "scope": 3939,
              "src": "1723:127:15",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3937,
                "nodeType": "Block",
                "src": "1919:332:15",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 3920,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 3896,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3888,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "id": 3882,
                                    "name": "_funds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3752,
                                    "src": "1934:6:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                      "typeString": "mapping(address => mapping(uint256 => uint256))"
                                    }
                                  },
                                  "id": 3884,
                                  "indexExpression": {
                                    "id": 3883,
                                    "name": "account",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3877,
                                    "src": "1941:7:15",
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
                                  "src": "1934:15:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                    "typeString": "mapping(uint256 => uint256)"
                                  }
                                },
                                "id": 3886,
                                "indexExpression": {
                                  "hexValue": "30",
                                  "id": 3885,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1950:1:15",
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
                                "src": "1934:18:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "34",
                                "id": 3887,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1956:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "1934:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "&&",
                            "rightExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3895,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "id": 3889,
                                    "name": "_funds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3752,
                                    "src": "1975:6:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                      "typeString": "mapping(address => mapping(uint256 => uint256))"
                                    }
                                  },
                                  "id": 3891,
                                  "indexExpression": {
                                    "id": 3890,
                                    "name": "account",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3877,
                                    "src": "1982:7:15",
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
                                  "src": "1975:15:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                    "typeString": "mapping(uint256 => uint256)"
                                  }
                                },
                                "id": 3893,
                                "indexExpression": {
                                  "hexValue": "31",
                                  "id": 3892,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1991:1:15",
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
                                "src": "1975:18:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "32",
                                "id": 3894,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1997:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "1975:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "1934:64:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 3903,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 3897,
                                  "name": "_funds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3752,
                                  "src": "2016:6:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 3899,
                                "indexExpression": {
                                  "id": 3898,
                                  "name": "account",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3877,
                                  "src": "2023:7:15",
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
                                "src": "2016:15:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 3901,
                              "indexExpression": {
                                "hexValue": "32",
                                "id": 3900,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2032:1:15",
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
                              "src": "2016:18:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 3902,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2038:1:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "2016:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1934:105:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3911,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 3905,
                                "name": "_funds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3752,
                                "src": "2057:6:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                                }
                              },
                              "id": 3907,
                              "indexExpression": {
                                "id": 3906,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3877,
                                "src": "2064:7:15",
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
                              "src": "2057:15:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 3909,
                            "indexExpression": {
                              "hexValue": "33",
                              "id": 3908,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2073:1:15",
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
                            "src": "2057:18:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 3910,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2079:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "2057:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1934:146:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 3919,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 3913,
                              "name": "_funds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3752,
                              "src": "2098:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(uint256 => uint256))"
                              }
                            },
                            "id": 3915,
                            "indexExpression": {
                              "id": 3914,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3877,
                              "src": "2105:7:15",
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
                            "src": "2098:15:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 3917,
                          "indexExpression": {
                            "hexValue": "34",
                            "id": 3916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2114:1:15",
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
                          "src": "2098:18:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 3918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2120:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "2098:23:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1934:187:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3927,
                    "nodeType": "IfStatement",
                    "src": "1930:237:15",
                    "trueBody": {
                      "expression": {
                        "id": 3925,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "id": 3921,
                            "name": "_isSpecialCollected",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3756,
                            "src": "2132:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 3923,
                          "indexExpression": {
                            "id": 3922,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3877,
                            "src": "2152:7:15",
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
                          "src": "2132:28:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "hexValue": "74727565",
                          "id": 3924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2163:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2132:35:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 3926,
                      "nodeType": "ExpressionStatement",
                      "src": "2132:35:15"
                    }
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 3932,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3877,
                          "src": "2211:7:15",
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
                        "expression": {
                          "arguments": [
                            {
                              "id": 3929,
                              "name": "_builder",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3758,
                              "src": "2186:8:15",
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
                            "id": 3928,
                            "name": "Builder",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3229,
                            "src": "2178:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_Builder_$3229_$",
                              "typeString": "type(contract Builder)"
                            }
                          },
                          "id": 3930,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2178:17:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Builder_$3229",
                            "typeString": "contract Builder"
                          }
                        },
                        "id": 3931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "collectSpecial",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2927,
                        "src": "2178:32:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) external returns (bool)"
                        }
                      },
                      "id": 3933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2178:41:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3934,
                    "nodeType": "ExpressionStatement",
                    "src": "2178:41:15"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 3935,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2238:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 3881,
                    "id": 3936,
                    "nodeType": "Return",
                    "src": "2231:11:15"
                  }
                ]
              },
              "functionSelector": "551f141b",
              "id": 3938,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "collectSpecial",
              "nameLocation": "1865:14:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3878,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3877,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1888:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3938,
                    "src": "1880:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3876,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1880:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1879:17:15"
              },
              "returnParameters": {
                "id": 3881,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3880,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3938,
                    "src": "1913:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3879,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1913:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1912:6:15"
              },
              "scope": 3939,
              "src": "1856:395:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 3940,
          "src": "516:1740:15",
          "usedErrors": []
        }
      ],
      "src": "35:2221:15"
    },
    "legacyAST": {
      "absolutePath": "/C/Github/SeedFarm/contracts/SeedItemReceiver.sol",
      "exportedSymbols": {
        "Address": [
          6348
        ],
        "Builder": [
          3229
        ],
        "Context": [
          6370
        ],
        "ERC1155": [
          5224
        ],
        "ERC1155Receiver": [
          3740
        ],
        "ERC165": [
          6394
        ],
        "ERC20": [
          5948
        ],
        "IERC1155": [
          5346
        ],
        "IERC1155MetadataURI": [
          5402
        ],
        "IERC1155Receiver": [
          5387
        ],
        "IERC165": [
          6406
        ],
        "IERC20": [
          6026
        ],
        "IERC20Metadata": [
          6051
        ],
        "Ownable": [
          4128
        ],
        "SeedItem": [
          3707
        ],
        "SeedItemReceiver": [
          3939
        ],
        "SeedToken": [
          4011
        ]
      },
      "id": 3940,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 3709,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".7"
          ],
          "nodeType": "PragmaDirective",
          "src": "35:23:15"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
          "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
          "id": 3710,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 3940,
          "sourceUnit": 5388,
          "src": "62:68:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 3711,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 3940,
          "sourceUnit": 4129,
          "src": "132:52:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "/C/Github/SeedFarm/contracts/Builder.sol",
          "file": "./Builder.sol",
          "id": 3712,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 3940,
          "sourceUnit": 3230,
          "src": "187:23:15",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": true,
          "baseContracts": [
            {
              "baseName": {
                "id": 3713,
                "name": "ERC165",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6394,
                "src": "253:6:15"
              },
              "id": 3714,
              "nodeType": "InheritanceSpecifier",
              "src": "253:6:15"
            },
            {
              "baseName": {
                "id": 3715,
                "name": "IERC1155Receiver",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 5387,
                "src": "261:16:15"
              },
              "id": 3716,
              "nodeType": "InheritanceSpecifier",
              "src": "261:16:15"
            }
          ],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": false,
          "id": 3740,
          "linearizedBaseContracts": [
            3740,
            5387,
            6394,
            6406
          ],
          "name": "ERC1155Receiver",
          "nameLocation": "234:15:15",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "baseFunctions": [
                6393,
                6405
              ],
              "body": {
                "id": 3738,
                "nodeType": "Block",
                "src": "394:115:15",
                "statements": [
                  {
                    "expression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 3736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        "id": 3731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 3726,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3718,
                          "src": "412:11:15",
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
                                "id": 3728,
                                "name": "IERC1155Receiver",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5387,
                                "src": "432:16:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$5387_$",
                                  "typeString": "type(contract IERC1155Receiver)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_type$_t_contract$_IERC1155Receiver_$5387_$",
                                  "typeString": "type(contract IERC1155Receiver)"
                                }
                              ],
                              "id": 3727,
                              "name": "type",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967269,
                              "src": "427:4:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 3729,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "427:22:15",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_meta_type_t_contract$_IERC1155Receiver_$5387",
                              "typeString": "type(contract IERC1155Receiver)"
                            }
                          },
                          "id": 3730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "interfaceId",
                          "nodeType": "MemberAccess",
                          "src": "427:34:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        },
                        "src": "412:49:15",
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
                            "id": 3734,
                            "name": "interfaceId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3718,
                            "src": "489:11:15",
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
                            "id": 3732,
                            "name": "super",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967271,
                            "src": "465:5:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_super$_ERC1155Receiver_$3740_$",
                              "typeString": "type(contract super ERC1155Receiver)"
                            }
                          },
                          "id": 3733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "supportsInterface",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6393,
                          "src": "465:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (bytes4) view returns (bool)"
                          }
                        },
                        "id": 3735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "465:36:15",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "412:89:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 3725,
                    "id": 3737,
                    "nodeType": "Return",
                    "src": "405:96:15"
                  }
                ]
              },
              "functionSelector": "01ffc9a7",
              "id": 3739,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nameLocation": "295:17:15",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 3722,
                "nodeType": "OverrideSpecifier",
                "overrides": [
                  {
                    "id": 3720,
                    "name": "ERC165",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6394,
                    "src": "362:6:15"
                  },
                  {
                    "id": 3721,
                    "name": "IERC165",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6406,
                    "src": "370:7:15"
                  }
                ],
                "src": "353:25:15"
              },
              "parameters": {
                "id": 3719,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3718,
                    "mutability": "mutable",
                    "name": "interfaceId",
                    "nameLocation": "320:11:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3739,
                    "src": "313:18:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 3717,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "313:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "312:20:15"
              },
              "returnParameters": {
                "id": 3725,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3724,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3739,
                    "src": "388:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3723,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "388:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "387:6:15"
              },
              "scope": 3740,
              "src": "286:223:15",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "public"
            }
          ],
          "scope": 3940,
          "src": "216:296:15",
          "usedErrors": []
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 3741,
                "name": "ERC1155Receiver",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3740,
                "src": "545:15:15"
              },
              "id": 3742,
              "nodeType": "InheritanceSpecifier",
              "src": "545:15:15"
            },
            {
              "baseName": {
                "id": 3743,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4128,
                "src": "562:7:15"
              },
              "id": 3744,
              "nodeType": "InheritanceSpecifier",
              "src": "562:7:15"
            }
          ],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 3939,
          "linearizedBaseContracts": [
            3939,
            4128,
            6370,
            3740,
            5387,
            6394,
            6406
          ],
          "name": "SeedItemReceiver",
          "nameLocation": "525:16:15",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 3746,
              "mutability": "mutable",
              "name": "successfulTransactions",
              "nameLocation": "587:22:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "579:30:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 3745,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "579:7:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 3752,
              "mutability": "mutable",
              "name": "_funds",
              "nameLocation": "674:6:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "618:62:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(uint256 => uint256))"
              },
              "typeName": {
                "id": 3751,
                "keyType": {
                  "id": 3747,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "626:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "618:47:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                },
                "valueType": {
                  "id": 3750,
                  "keyType": {
                    "id": 3748,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "637:27:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                    "typeString": "mapping(uint256 => uint256)"
                  },
                  "valueType": {
                    "id": 3749,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "656:7:15",
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
              "id": 3756,
              "mutability": "mutable",
              "name": "_isSpecialCollected",
              "nameLocation": "721:19:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "688:52:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 3755,
                "keyType": {
                  "id": 3753,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "696:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "688:24:15",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 3754,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "707:4:15",
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
              "id": 3758,
              "mutability": "mutable",
              "name": "_builder",
              "nameLocation": "764:8:15",
              "nodeType": "VariableDeclaration",
              "scope": 3939,
              "src": "748:24:15",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 3757,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "748:7:15",
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
                "id": 3769,
                "nodeType": "Block",
                "src": "838:38:15",
                "statements": [
                  {
                    "expression": {
                      "id": 3767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 3765,
                        "name": "_builder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3758,
                        "src": "849:8:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 3766,
                        "name": "builder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3760,
                        "src": "860:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "849:18:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3768,
                    "nodeType": "ExpressionStatement",
                    "src": "849:18:15"
                  }
                ]
              },
              "functionSelector": "6c6d6a17",
              "id": 3770,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 3763,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 3762,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 4070,
                    "src": "828:9:15"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "828:9:15"
                }
              ],
              "name": "setBuilder",
              "nameLocation": "791:10:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3761,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3760,
                    "mutability": "mutable",
                    "name": "builder",
                    "nameLocation": "810:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3770,
                    "src": "802:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3759,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "802:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "801:17:15"
              },
              "returnParameters": {
                "id": 3764,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "838:0:15"
              },
              "scope": 3939,
              "src": "782:94:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "baseFunctions": [
                5368
              ],
              "body": {
                "id": 3798,
                "nodeType": "Block",
                "src": "1085:93:15",
                "statements": [
                  {
                    "expression": {
                      "id": 3792,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 3786,
                            "name": "_funds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3752,
                            "src": "1096:6:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(uint256 => uint256))"
                            }
                          },
                          "id": 3789,
                          "indexExpression": {
                            "id": 3787,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3774,
                            "src": "1103:4:15",
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
                          "src": "1096:12:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 3790,
                        "indexExpression": {
                          "id": 3788,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3776,
                          "src": "1109:2:15",
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
                        "src": "1096:16:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 3791,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3778,
                        "src": "1115:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1096:24:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 3793,
                    "nodeType": "ExpressionStatement",
                    "src": "1096:24:15"
                  },
                  {
                    "expression": {
                      "expression": {
                        "expression": {
                          "id": 3794,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967268,
                          "src": "1139:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_SeedItemReceiver_$3939",
                            "typeString": "contract SeedItemReceiver"
                          }
                        },
                        "id": 3795,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "onERC1155Received",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3799,
                        "src": "1139:22:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                        }
                      },
                      "id": 3796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "1139:31:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "functionReturnParameters": 3785,
                    "id": 3797,
                    "nodeType": "Return",
                    "src": "1132:38:15"
                  }
                ]
              },
              "functionSelector": "f23a6e61",
              "id": 3799,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "onERC1155Received",
              "nameLocation": "894:17:15",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 3782,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1059:8:15"
              },
              "parameters": {
                "id": 3781,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3772,
                    "mutability": "mutable",
                    "name": "operator",
                    "nameLocation": "930:8:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "922:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3771,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "922:7:15",
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
                    "id": 3774,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "957:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "949:12:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3773,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "949:7:15",
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
                    "id": 3776,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "980:2:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "972:10:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3775,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "972:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3778,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "1001:5:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "993:13:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3777,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "993:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3780,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "1032:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "1017:19:15",
                    "stateVariable": false,
                    "storageLocation": "calldata",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 3779,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1017:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "911:132:15"
              },
              "returnParameters": {
                "id": 3785,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3784,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3799,
                    "src": "1077:6:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 3783,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "1077:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1076:8:15"
              },
              "scope": 3939,
              "src": "885:293:15",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                5386
              ],
              "body": {
                "id": 3846,
                "nodeType": "Block",
                "src": "1409:172:15",
                "statements": [
                  {
                    "body": {
                      "id": 3840,
                      "nodeType": "Block",
                      "src": "1460:60:15",
                      "statements": [
                        {
                          "expression": {
                            "id": 3838,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 3828,
                                  "name": "_funds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3752,
                                  "src": "1475:6:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 3833,
                                "indexExpression": {
                                  "id": 3829,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3803,
                                  "src": "1482:4:15",
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
                                "src": "1475:12:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 3834,
                              "indexExpression": {
                                "baseExpression": {
                                  "id": 3830,
                                  "name": "ids",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3806,
                                  "src": "1488:3:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                    "typeString": "uint256[] memory"
                                  }
                                },
                                "id": 3832,
                                "indexExpression": {
                                  "id": 3831,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3818,
                                  "src": "1492:1:15",
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
                                "src": "1488:6:15",
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
                              "src": "1475:20:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "baseExpression": {
                                "id": 3835,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3809,
                                "src": "1498:6:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 3837,
                              "indexExpression": {
                                "id": 3836,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3818,
                                "src": "1505:1:15",
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
                              "src": "1498:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1475:32:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 3839,
                          "nodeType": "ExpressionStatement",
                          "src": "1475:32:15"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 3824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 3821,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "1439:1:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 3822,
                          "name": "ids",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3806,
                          "src": "1443:3:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 3823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "1443:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1439:14:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3841,
                    "initializationExpression": {
                      "assignments": [
                        3818
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 3818,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "1432:1:15",
                          "nodeType": "VariableDeclaration",
                          "scope": 3841,
                          "src": "1424:9:15",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 3817,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1424:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 3820,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 3819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1436:1:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1424:13:15"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 3826,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": true,
                        "src": "1455:3:15",
                        "subExpression": {
                          "id": 3825,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3818,
                          "src": "1457:1:15",
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
                      "id": 3827,
                      "nodeType": "ExpressionStatement",
                      "src": "1455:3:15"
                    },
                    "nodeType": "ForStatement",
                    "src": "1420:100:15"
                  },
                  {
                    "expression": {
                      "expression": {
                        "expression": {
                          "id": 3842,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967268,
                          "src": "1537:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_SeedItemReceiver_$3939",
                            "typeString": "contract SeedItemReceiver"
                          }
                        },
                        "id": 3843,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "onERC1155BatchReceived",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3847,
                        "src": "1537:27:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                          "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                        }
                      },
                      "id": 3844,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "selector",
                      "nodeType": "MemberAccess",
                      "src": "1537:36:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "functionReturnParameters": 3816,
                    "id": 3845,
                    "nodeType": "Return",
                    "src": "1530:43:15"
                  }
                ]
              },
              "functionSelector": "bc197c81",
              "id": 3847,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "onERC1155BatchReceived",
              "nameLocation": "1195:22:15",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 3813,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1383:8:15"
              },
              "parameters": {
                "id": 3812,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3801,
                    "mutability": "mutable",
                    "name": "operator",
                    "nameLocation": "1236:8:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1228:16:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3800,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1228:7:15",
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
                    "id": 3803,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "1263:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1255:12:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3802,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1255:7:15",
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
                    "id": 3806,
                    "mutability": "mutable",
                    "name": "ids",
                    "nameLocation": "1295:3:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1278:20:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 3804,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1278:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3805,
                      "nodeType": "ArrayTypeName",
                      "src": "1278:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3809,
                    "mutability": "mutable",
                    "name": "values",
                    "nameLocation": "1326:6:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1309:23:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                      "typeString": "uint256[]"
                    },
                    "typeName": {
                      "baseType": {
                        "id": 3807,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1309:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3808,
                      "nodeType": "ArrayTypeName",
                      "src": "1309:9:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                        "typeString": "uint256[]"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 3811,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "1356:4:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1343:17:15",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 3810,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "1343:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1217:150:15"
              },
              "returnParameters": {
                "id": 3816,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3815,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3847,
                    "src": "1401:6:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 3814,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "1401:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1400:8:15"
              },
              "scope": 3939,
              "src": "1186:395:15",
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3862,
                "nodeType": "Block",
                "src": "1665:45:15",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 3856,
                          "name": "_funds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3752,
                          "src": "1683:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(uint256 => uint256))"
                          }
                        },
                        "id": 3858,
                        "indexExpression": {
                          "id": 3857,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3849,
                          "src": "1690:7:15",
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
                        "src": "1683:15:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 3860,
                      "indexExpression": {
                        "id": 3859,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3851,
                        "src": "1699:2:15",
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
                      "src": "1683:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 3855,
                    "id": 3861,
                    "nodeType": "Return",
                    "src": "1676:26:15"
                  }
                ]
              },
              "functionSelector": "88b22c24",
              "id": 3863,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "funds",
              "nameLocation": "1598:5:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3852,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3849,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1612:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3863,
                    "src": "1604:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3848,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1604:7:15",
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
                    "id": 3851,
                    "mutability": "mutable",
                    "name": "id",
                    "nameLocation": "1629:2:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3863,
                    "src": "1621:10:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3850,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1621:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1603:29:15"
              },
              "returnParameters": {
                "id": 3855,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3854,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3863,
                    "src": "1656:7:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 3853,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1656:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1655:9:15"
              },
              "scope": 3939,
              "src": "1589:121:15",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 3874,
                "nodeType": "Block",
                "src": "1795:55:15",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 3870,
                        "name": "_isSpecialCollected",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3756,
                        "src": "1813:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 3872,
                      "indexExpression": {
                        "id": 3871,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3865,
                        "src": "1833:7:15",
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
                      "src": "1813:28:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 3869,
                    "id": 3873,
                    "nodeType": "Return",
                    "src": "1806:35:15"
                  }
                ]
              },
              "functionSelector": "f09d39e3",
              "id": 3875,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "isSpecialCollected",
              "nameLocation": "1732:18:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3866,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3865,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1759:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3875,
                    "src": "1751:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3864,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1751:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1750:17:15"
              },
              "returnParameters": {
                "id": 3869,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3868,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3875,
                    "src": "1789:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3867,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1789:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1788:6:15"
              },
              "scope": 3939,
              "src": "1723:127:15",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3937,
                "nodeType": "Block",
                "src": "1919:332:15",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 3920,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 3912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3904,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 3896,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3888,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "id": 3882,
                                    "name": "_funds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3752,
                                    "src": "1934:6:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                      "typeString": "mapping(address => mapping(uint256 => uint256))"
                                    }
                                  },
                                  "id": 3884,
                                  "indexExpression": {
                                    "id": 3883,
                                    "name": "account",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3877,
                                    "src": "1941:7:15",
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
                                  "src": "1934:15:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                    "typeString": "mapping(uint256 => uint256)"
                                  }
                                },
                                "id": 3886,
                                "indexExpression": {
                                  "hexValue": "30",
                                  "id": 3885,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1950:1:15",
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
                                "src": "1934:18:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "34",
                                "id": 3887,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1956:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_4_by_1",
                                  "typeString": "int_const 4"
                                },
                                "value": "4"
                              },
                              "src": "1934:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "&&",
                            "rightExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3895,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "baseExpression": {
                                  "baseExpression": {
                                    "id": 3889,
                                    "name": "_funds",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3752,
                                    "src": "1975:6:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                      "typeString": "mapping(address => mapping(uint256 => uint256))"
                                    }
                                  },
                                  "id": 3891,
                                  "indexExpression": {
                                    "id": 3890,
                                    "name": "account",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3877,
                                    "src": "1982:7:15",
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
                                  "src": "1975:15:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                    "typeString": "mapping(uint256 => uint256)"
                                  }
                                },
                                "id": 3893,
                                "indexExpression": {
                                  "hexValue": "31",
                                  "id": 3892,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1991:1:15",
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
                                "src": "1975:18:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "32",
                                "id": 3894,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1997:1:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "1975:23:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "1934:64:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 3903,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "baseExpression": {
                                "baseExpression": {
                                  "id": 3897,
                                  "name": "_funds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3752,
                                  "src": "2016:6:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 3899,
                                "indexExpression": {
                                  "id": 3898,
                                  "name": "account",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3877,
                                  "src": "2023:7:15",
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
                                "src": "2016:15:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 3901,
                              "indexExpression": {
                                "hexValue": "32",
                                "id": 3900,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2032:1:15",
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
                              "src": "2016:18:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 3902,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2038:1:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "2016:23:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1934:105:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3911,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 3905,
                                "name": "_funds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3752,
                                "src": "2057:6:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                                }
                              },
                              "id": 3907,
                              "indexExpression": {
                                "id": 3906,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3877,
                                "src": "2064:7:15",
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
                              "src": "2057:15:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 3909,
                            "indexExpression": {
                              "hexValue": "33",
                              "id": 3908,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2073:1:15",
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
                            "src": "2057:18:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 3910,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2079:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "2057:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1934:146:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "&&",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 3919,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 3913,
                              "name": "_funds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3752,
                              "src": "2098:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(uint256 => uint256))"
                              }
                            },
                            "id": 3915,
                            "indexExpression": {
                              "id": 3914,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3877,
                              "src": "2105:7:15",
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
                            "src": "2098:15:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 3917,
                          "indexExpression": {
                            "hexValue": "34",
                            "id": 3916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2114:1:15",
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
                          "src": "2098:18:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 3918,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2120:1:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "2098:23:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1934:187:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3927,
                    "nodeType": "IfStatement",
                    "src": "1930:237:15",
                    "trueBody": {
                      "expression": {
                        "id": 3925,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "baseExpression": {
                            "id": 3921,
                            "name": "_isSpecialCollected",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3756,
                            "src": "2132:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 3923,
                          "indexExpression": {
                            "id": 3922,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3877,
                            "src": "2152:7:15",
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
                          "src": "2132:28:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "hexValue": "74727565",
                          "id": 3924,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2163:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "2132:35:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 3926,
                      "nodeType": "ExpressionStatement",
                      "src": "2132:35:15"
                    }
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 3932,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3877,
                          "src": "2211:7:15",
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
                        "expression": {
                          "arguments": [
                            {
                              "id": 3929,
                              "name": "_builder",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3758,
                              "src": "2186:8:15",
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
                            "id": 3928,
                            "name": "Builder",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3229,
                            "src": "2178:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_Builder_$3229_$",
                              "typeString": "type(contract Builder)"
                            }
                          },
                          "id": 3930,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2178:17:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Builder_$3229",
                            "typeString": "contract Builder"
                          }
                        },
                        "id": 3931,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "collectSpecial",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2927,
                        "src": "2178:32:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) external returns (bool)"
                        }
                      },
                      "id": 3933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2178:41:15",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 3934,
                    "nodeType": "ExpressionStatement",
                    "src": "2178:41:15"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 3935,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2238:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 3881,
                    "id": 3936,
                    "nodeType": "Return",
                    "src": "2231:11:15"
                  }
                ]
              },
              "functionSelector": "551f141b",
              "id": 3938,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "collectSpecial",
              "nameLocation": "1865:14:15",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 3878,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3877,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1888:7:15",
                    "nodeType": "VariableDeclaration",
                    "scope": 3938,
                    "src": "1880:15:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 3876,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1880:7:15",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1879:17:15"
              },
              "returnParameters": {
                "id": 3881,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 3880,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 3938,
                    "src": "1913:4:15",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 3879,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1913:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1912:6:15"
              },
              "scope": 3939,
              "src": "1856:395:15",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 3940,
          "src": "516:1740:15",
          "usedErrors": []
        }
      ],
      "src": "35:2221:15"
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
    "updatedAt": "2022-02-15T18:37:25.776Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": {
          "details": "Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. To accept the transfer(s), this must return `bytes4(keccak256(\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\"))` (i.e. 0xbc197c81, or its own function selector).",
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
          "details": "Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. To accept the transfer, this must return `bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"))` (i.e. 0xf23a6e61, or its own function selector).",
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