export default {
	"contractName": "Builder",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "contract ISeedToken",
			"name": "_SEED",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "Stake",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "Unstake",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		  }
		],
		"name": "YieldWithdraw",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "start",
			"type": "uint256"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "end",
			"type": "uint256"
		  }
		],
		"name": "calculatedYield",
		"type": "event"
	  },
	  {
		"inputs": [],
		"name": "ONE",
		"outputs": [
		  {
			"internalType": "contract ERC20",
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
		"name": "SEED",
		"outputs": [
		  {
			"internalType": "contract ISeedToken",
			"name": "",
			"type": "address"
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
			"name": "",
			"type": "address"
		  }
		],
		"name": "housesCount",
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
			"name": "",
			"type": "address"
		  }
		],
		"name": "isStaking",
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
			"name": "",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "map",
		"outputs": [
		  {
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
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
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "staked",
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
			"name": "",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "stakedTime",
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
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"name": "structures",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "price",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "time",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "rate",
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
			"internalType": "uint8",
			"name": "_pos",
			"type": "uint8"
		  },
		  {
			"internalType": "uint8",
			"name": "_sId",
			"type": "uint8"
		  }
		],
		"name": "placeStructure",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "payable",
		"type": "function",
		"payable": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint8",
			"name": "_pos",
			"type": "uint8"
		  }
		],
		"name": "removeStructure",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint8",
			"name": "_pos",
			"type": "uint8"
		  },
		  {
			"internalType": "uint8",
			"name": "_sId",
			"type": "uint8"
		  }
		],
		"name": "withdrawTileYield",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "start",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "bound",
			"type": "uint256"
		  }
		],
		"name": "calculateYieldTime",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "getMap",
		"outputs": [
		  {
			"internalType": "uint8[81]",
			"name": "",
			"type": "uint8[81]"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "getHouses",
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
			"internalType": "uint256",
			"name": "_sId",
			"type": "uint256"
		  }
		],
		"name": "getStructure",
		"outputs": [
		  {
			"components": [
			  {
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			  },
			  {
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			  },
			  {
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			  }
			],
			"internalType": "struct Builder.Structure",
			"name": "",
			"type": "tuple"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "getIsStaking",
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
		"inputs": [],
		"name": "getStaked",
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
			"internalType": "uint8",
			"name": "_pos",
			"type": "uint8"
		  }
		],
		"name": "getStakedTime",
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
			"internalType": "uint8",
			"name": "_pos",
			"type": "uint8"
		  }
		],
		"name": "isReadyForWithdraw",
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
	"metadata": "{\"compiler\":{\"version\":\"0.8.7+commit.e28d00a7\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract ISeedToken\",\"name\":\"_SEED\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Stake\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Unstake\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"}],\"name\":\"YieldWithdraw\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"}],\"name\":\"calculatedYield\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"ONE\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"SEED\",\"outputs\":[{\"internalType\":\"contract ISeedToken\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bound\",\"type\":\"uint256\"}],\"name\":\"calculateYieldTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getHouses\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getIsStaking\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMap\",\"outputs\":[{\"internalType\":\"uint8[81]\",\"name\":\"\",\"type\":\"uint8[81]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStaked\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pos\",\"type\":\"uint8\"}],\"name\":\"getStakedTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sId\",\"type\":\"uint256\"}],\"name\":\"getStructure\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"}],\"internalType\":\"struct Builder.Structure\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"housesCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pos\",\"type\":\"uint8\"}],\"name\":\"isReadyForWithdraw\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isStaking\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"map\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pos\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_sId\",\"type\":\"uint8\"}],\"name\":\"placeStructure\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pos\",\"type\":\"uint8\"}],\"name\":\"removeStructure\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"staked\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"stakedTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"structures\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"time\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rate\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_pos\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_sId\",\"type\":\"uint8\"}],\"name\":\"withdrawTileYield\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract for game handling. Places buildings on map, stakes $ONE tokens and  mints rewards for farmers. Each player has 81  tiles where they can build. Each tile has a timestamp  making each building independent farming unit.  \",\"kind\":\"dev\",\"methods\":{\"calculateYieldTime(uint256,uint256)\":{\"details\":\"Returns time while structure was accumulating tokens. \"},\"constructor\":{\"details\":\"Sets contract address for {ONE} and {SEED} tokens.   {structures} is initialized with available structures. \"},\"getHouses()\":{\"details\":\"Returns amount of built houses. \"},\"getIsStaking()\":{\"details\":\"Returns isStaking mapping. \"},\"getMap()\":{\"details\":\"Returns player's gamemap. \"},\"getStaked()\":{\"details\":\"Returns amount of staked tokens. \"},\"getStakedTime(uint8)\":{\"details\":\"Returns time when structure was staked. \"},\"getStructure(uint256)\":{\"details\":\"Returns in-game structure.   \"},\"isReadyForWithdraw(uint8)\":{\"details\":\"Returns boolean whether building finished accumulating tokens or not.  \"},\"placeStructure(uint8,uint8)\":{\"details\":\"Places a new structure on the map and sets up farming.   Returns a boolean value indicating whether the operation succeeded. Emits a {Stake} event. Requirements: - value attached must be equal to `_sid' price.  - `_sId` at `_pos` must be different from current value.\"},\"removeStructure(uint8)\":{\"details\":\"Removes a structure from the map, stops farming, returns staked tokens.    Returns a boolean value indicating whether the operation succeeded. Emits an {Unstake} event. Requirements: - sender must have tokens staked. \"},\"withdrawTileYield(uint8,uint8)\":{\"details\":\"Withdraw yield of {Seed} from the structure.   Returns a boolean value indicating whether the operation succeeded. Emits a {YieldWithdraw} event. Requirements: - sender must have tokens staked. \"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Github/SeedFarm/contracts/Builder.sol\":\"Builder\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Github/SeedFarm/contracts/Builder.sol\":{\"keccak256\":\"0x65f343df9c7454c0987730516b86afe2a5ec454c927fa34d8a1c27135a7b842f\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://358f1828056b9ab73ec44a71491332b8928d4b69459ab6862cae7b99bf14e798\",\"dweb:/ipfs/QmSDx3oZEWzTttd9nXH4RHAoiuVFHaLAFnEuC1udjuFD6C\"]},\"/C/Github/SeedFarm/contracts/ISeedToken.sol\":{\"keccak256\":\"0xd6d1de4bdaa7032a72361a53b62cd9fa2209d91a217e77119f492bb486a6eab4\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://be846f5c54817886724ad3bb5acbe319c9a037ed558f84036b13dca884124afd\",\"dweb:/ipfs/QmSciJCHgoG7PC9nTYPoYPUCVwSTzGjDZ1Yt2VXvgTg3gg\"]},\"/C/Github/SeedFarm/contracts/SeedToken.sol\":{\"keccak256\":\"0x059b6f65af407c25f34b7ec667505a6b5fab35cfbbe33b88a3f11798d042007d\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://880ed33c6735171a213d725dede5ded7f3c45d2705cfff78679c0668e7f9261a\",\"dweb:/ipfs/QmWmdxCWyHfVHm8HffLN3vNLdeX7SU8Csnuf6HDAuHAHd6\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981\",\"dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xd1d8caaeb45f78e0b0715664d56c220c283c89bf8b8c02954af86404d6b367f8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://300a0cc7be3b26c96c22a47ffa9530a585e1c4f2dba3021d9bf309dc63007487\",\"dweb:/ipfs/QmQmxsvxK6CaJmQ4D8vDCYPLHMqcMmZLcBqedG4GFAbzu9\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x61437cb513a887a1bbad006e7b1c8b414478427d33de47c5600af3c748f108da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2c3d0973630ed74f2b5ce3944677a885dc70ec32fc83b35f55045a10224da32b\",\"dweb:/ipfs/QmbefZ5RoEZKNHXCALfh683PnaNYzKPcKMFjyY1DVAgq8A\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]}},\"version\":1}",
	"bytecode": "0x60806040523480156200001157600080fd5b5060405162001f7e38038062001f7e83398181016040528101906200003791906200011c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006003600060018152602001908152602001600020905067016345785d8a000081600001819055506138408160010181905550670de0b6b3a764000081600201819055505050620001b5565b60008151905062000116816200019b565b92915050565b60006020828403121562000135576200013462000196565b5b6000620001458482850162000105565b91505092915050565b60006200015b8262000176565b9050919050565b60006200016f826200014e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001a68162000162565b8114620001b257600080fd5b50565b611db980620001c56000396000f3fe60806040526004361061011f5760003560e01c8063975542a1116100a0578063ad3de14c11610064578063ad3de14c14610483578063c2ee3a08146104ae578063c59abf9f146104d9578063c6313eb714610504578063fd5f33ec146105345761011f565b8063975542a11461035057806398807d841461038d5780639dfb94ba146103ca5780639e3cb48814610407578063a8a26730146104465761011f565b80636f49712b116100e75780636f49712b14610243578063702376a71461028057806375c30a9f146102ab5780638da5cb5b146102e857806394148d4f146103135761011f565b80630edc47371461012457806315e63a9e1461014f5780634aec48c91461018c5780635013d729146101c95780635574f57714610206575b600080fd5b34801561013057600080fd5b5061013961055f565b60405161014691906118c3565b60405180910390f35b34801561015b57600080fd5b50610176600480360381019061017191906115cb565b610585565b6040516101839190611979565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae919061155e565b6105e7565b6040516101c09190611979565b60405180910390f35b3480156101d557600080fd5b506101f060048036038101906101eb919061159e565b61060f565b6040516101fd919061195e565b60405180910390f35b34801561021257600080fd5b5061022d60048036038101906102289190611638565b61065a565b60405161023a919061188d565b60405180910390f35b34801561024f57600080fd5b5061026a60048036038101906102659190611531565b610968565b604051610277919061188d565b60405180910390f35b34801561028c57600080fd5b50610295610988565b6040516102a2919061188d565b60405180910390f35b3480156102b757600080fd5b506102d260048036038101906102cd9190611531565b6109dc565b6040516102df9190611979565b60405180910390f35b3480156102f457600080fd5b506102fd6109f4565b60405161030a919061182d565b60405180910390f35b34801561031f57600080fd5b5061033a6004803603810190610335919061160b565b610a18565b604051610347919061188d565b60405180910390f35b34801561035c57600080fd5b506103776004803603810190610372919061160b565b610b69565b604051610384919061188d565b60405180910390f35b34801561039957600080fd5b506103b460048036038101906103af9190611531565b610efb565b6040516103c19190611979565b60405180910390f35b3480156103d657600080fd5b506103f160048036038101906103ec919061155e565b610f13565b6040516103fe91906119f4565b60405180910390f35b34801561041357600080fd5b5061042e6004803603810190610429919061159e565b610f4c565b60405161043d939291906119bd565b60405180910390f35b34801561045257600080fd5b5061046d6004803603810190610468919061160b565b610f76565b60405161047a9190611979565b60405180910390f35b34801561048f57600080fd5b50610498610fd5565b6040516104a59190611871565b60405180910390f35b3480156104ba57600080fd5b506104c3611083565b6040516104d091906118a8565b60405180910390f35b3480156104e557600080fd5b506104ee6110a9565b6040516104fb9190611979565b60405180910390f35b61051e60048036038101906105199190611638565b6110f0565b60405161052b919061188d565b60405180910390f35b34801561054057600080fd5b50610549611433565b6040516105569190611979565b60405180910390f35b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008083426105949190611aa7565b90507f0965bc40502fce90bcf17a328b4e93f0e6ee33dc98b44716d0bdc44a90c8fa9784426040516105c7929190611994565b60405180910390a18281116105dc57806105de565b825b91505092915050565b6006602052816000526040600020816051811061060357600080fd5b01600091509150505481565b6106176114ae565b6003600083815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050919050565b600060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e69061193e565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208460ff166051811061074557610744611c1a565b5b602091828204019190069054906101000a900460ff16905060008160ff1614156107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b9061191e565b60405180910390fd5b600061081e600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208660ff16605181106107fd576107fc611c1a565b5b0154600360008760ff16815260200190815260200160002060010154610585565b90506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208660ff166051811061087657610875611c1a565b5b01819055506000610887828661147a565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b81526004016108e6929190611848565b600060405180830381600087803b15801561090057600080fd5b505af1158015610914573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167fbcd3911ec0701f7d54f70486dd4db6fc7cd3094bcc04eb26bb17a4163310905860405160405180910390a26001935050505092915050565b60046020528060005260406000206000915054906101000a900460ff1681565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905090565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208360ff1660518110610a6f57610a6e611c1a565b5b602091828204019190069054906101000a900460ff16905060008160ff161415610ace576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac59061191e565b60405180910390fd5b600360008260ff16815260200190815260200160002060010154610b60600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208560ff1660518110610b3f57610b3e611c1a565b5b0154600360008560ff16815260200190815260200160002060010154610585565b14915050919050565b600060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610bfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf59061193e565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208360ff1660518110610c5457610c53611c1a565b5b602091828204019190069054906101000a900460ff16905060008160ff161415610cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caa9061191e565b60405180910390fd5b610cbd838261065a565b503373ffffffffffffffffffffffffffffffffffffffff166108fc600360008460ff168152602001908152602001600020600001549081150290604051600060405180830381858888f19350505050158015610d1d573d6000803e3d6000fd5b506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208460ff1660518110610d7457610d73611c1a565b5b602091828204019190066101000a81548160ff021916908360ff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610de490611b78565b91905055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610e8a576000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b3373ffffffffffffffffffffffffffffffffffffffff167f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd600360008460ff16815260200190815260200160002060000154604051610ee99190611979565b60405180910390a26001915050919050565b60056020528060005260406000206000915090505481565b60016020528160005260406000208160518110610f2f57600080fd5b60209182820401919006915091509054906101000a900460ff1681565b60036020528060005260406000206000915090508060000154908060010154908060020154905083565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208260ff1660518110610fcc57610fcb611c1a565b5b01549050919050565b610fdd6114cf565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020605180602002604051908101604052809291908260518015611079576020028201916000905b82829054906101000a900460ff1660ff16815260200190600101906020826000010492830192600103820291508084116110425790505b5050505050905090565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600081600360008260ff16815260200190815260200160002060000154341461114e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611145906118fe565b60405180910390fd5b83838060ff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208360ff16605181106111a8576111a7611c1a565b5b602091828204019190069054906101000a900460ff1660ff161415611202576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f9906118de565b60405180910390fd5b60001515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514156112b4576001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b84600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208760ff166051811061130957611308611c1a565b5b602091828204019190066101000a81548160ff021916908360ff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061137990611ba2565b919050555042600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208760ff16605181106113d3576113d2611c1a565b5b01819055503373ffffffffffffffffffffffffffffffffffffffff167febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a3460405161141e9190611979565b60405180910390a26001935050505092915050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600080600360008460ff16815260200190815260200160002060020154846114a29190611a4d565b90508091505092915050565b60405180606001604052806000815260200160008152602001600081525090565b60405180610a200160405280605190602082028036833780820191505090505090565b60008135905061150181611d3e565b92915050565b60008135905061151681611d55565b92915050565b60008135905061152b81611d6c565b92915050565b60006020828403121561154757611546611c49565b5b6000611555848285016114f2565b91505092915050565b6000806040838503121561157557611574611c49565b5b6000611583858286016114f2565b925050602061159485828601611507565b9150509250929050565b6000602082840312156115b4576115b3611c49565b5b60006115c284828501611507565b91505092915050565b600080604083850312156115e2576115e1611c49565b5b60006115f085828601611507565b925050602061160185828601611507565b9150509250929050565b60006020828403121561162157611620611c49565b5b600061162f8482850161151c565b91505092915050565b6000806040838503121561164f5761164e611c49565b5b600061165d8582860161151c565b925050602061166e8582860161151c565b9150509250929050565b6000611684838361180f565b60208301905092915050565b61169981611adb565b82525050565b6116a881611a19565b6116b28184611a31565b92506116bd82611a0f565b8060005b838110156116ee5781516116d58782611678565b96506116e083611a24565b9250506001810190506116c1565b505050505050565b6116ff81611aed565b82525050565b61170e81611b30565b82525050565b61171d81611b42565b82525050565b6000611730602483611a3c565b915061173b82611c4e565b604082019050919050565b6000611753601883611a3c565b915061175e82611c9d565b602082019050919050565b6000611776600a83611a3c565b915061178182611cc6565b602082019050919050565b6000611799602683611a3c565b91506117a482611cef565b604082019050919050565b6060820160008201516117c560008501826117f1565b5060208201516117d860208501826117f1565b5060408201516117eb60408501826117f1565b50505050565b6117fa81611b19565b82525050565b61180981611b19565b82525050565b61181881611b23565b82525050565b61182781611b23565b82525050565b60006020820190506118426000830184611690565b92915050565b600060408201905061185d6000830185611690565b61186a6020830184611800565b9392505050565b6000610a2082019050611887600083018461169f565b92915050565b60006020820190506118a260008301846116f6565b92915050565b60006020820190506118bd6000830184611705565b92915050565b60006020820190506118d86000830184611714565b92915050565b600060208201905081810360008301526118f781611723565b9050919050565b6000602082019050818103600083015261191781611746565b9050919050565b6000602082019050818103600083015261193781611769565b9050919050565b600060208201905081810360008301526119578161178c565b9050919050565b600060608201905061197360008301846117af565b92915050565b600060208201905061198e6000830184611800565b92915050565b60006040820190506119a96000830185611800565b6119b66020830184611800565b9392505050565b60006060820190506119d26000830186611800565b6119df6020830185611800565b6119ec6040830184611800565b949350505050565b6000602082019050611a09600083018461181e565b92915050565b6000819050919050565b600060519050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b6000611a5882611b19565b9150611a6383611b19565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611a9c57611a9b611beb565b5b828202905092915050565b6000611ab282611b19565b9150611abd83611b19565b925082821015611ad057611acf611beb565b5b828203905092915050565b6000611ae682611af9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000611b3b82611b54565b9050919050565b6000611b4d82611b54565b9050919050565b6000611b5f82611b66565b9050919050565b6000611b7182611af9565b9050919050565b6000611b8382611b19565b91506000821415611b9757611b96611beb565b5b600182039050919050565b6000611bad82611b19565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611be057611bdf611beb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b7f596f75206861766520616c7265616479206275696c74207468697320616e642060008201527f6865726500000000000000000000000000000000000000000000000000000000602082015250565b7f446966666572656e742076616c75652061747461636865640000000000000000600082015250565b7f456d7074792074696c6500000000000000000000000000000000000000000000600082015250565b7f596f752063616e277420776974686472617720696620796f75206469646e277460008201527f207374616b650000000000000000000000000000000000000000000000000000602082015250565b611d4781611adb565b8114611d5257600080fd5b50565b611d5e81611b19565b8114611d6957600080fd5b50565b611d7581611b23565b8114611d8057600080fd5b5056fea264697066735822122091a384390ca2adcfcf5edee20318357548c053ec35a5e941dd1c340580d3edca64736f6c63430008070033",
	"deployedBytecode": "0x60806040526004361061011f5760003560e01c8063975542a1116100a0578063ad3de14c11610064578063ad3de14c14610483578063c2ee3a08146104ae578063c59abf9f146104d9578063c6313eb714610504578063fd5f33ec146105345761011f565b8063975542a11461035057806398807d841461038d5780639dfb94ba146103ca5780639e3cb48814610407578063a8a26730146104465761011f565b80636f49712b116100e75780636f49712b14610243578063702376a71461028057806375c30a9f146102ab5780638da5cb5b146102e857806394148d4f146103135761011f565b80630edc47371461012457806315e63a9e1461014f5780634aec48c91461018c5780635013d729146101c95780635574f57714610206575b600080fd5b34801561013057600080fd5b5061013961055f565b60405161014691906118c3565b60405180910390f35b34801561015b57600080fd5b50610176600480360381019061017191906115cb565b610585565b6040516101839190611979565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae919061155e565b6105e7565b6040516101c09190611979565b60405180910390f35b3480156101d557600080fd5b506101f060048036038101906101eb919061159e565b61060f565b6040516101fd919061195e565b60405180910390f35b34801561021257600080fd5b5061022d60048036038101906102289190611638565b61065a565b60405161023a919061188d565b60405180910390f35b34801561024f57600080fd5b5061026a60048036038101906102659190611531565b610968565b604051610277919061188d565b60405180910390f35b34801561028c57600080fd5b50610295610988565b6040516102a2919061188d565b60405180910390f35b3480156102b757600080fd5b506102d260048036038101906102cd9190611531565b6109dc565b6040516102df9190611979565b60405180910390f35b3480156102f457600080fd5b506102fd6109f4565b60405161030a919061182d565b60405180910390f35b34801561031f57600080fd5b5061033a6004803603810190610335919061160b565b610a18565b604051610347919061188d565b60405180910390f35b34801561035c57600080fd5b506103776004803603810190610372919061160b565b610b69565b604051610384919061188d565b60405180910390f35b34801561039957600080fd5b506103b460048036038101906103af9190611531565b610efb565b6040516103c19190611979565b60405180910390f35b3480156103d657600080fd5b506103f160048036038101906103ec919061155e565b610f13565b6040516103fe91906119f4565b60405180910390f35b34801561041357600080fd5b5061042e6004803603810190610429919061159e565b610f4c565b60405161043d939291906119bd565b60405180910390f35b34801561045257600080fd5b5061046d6004803603810190610468919061160b565b610f76565b60405161047a9190611979565b60405180910390f35b34801561048f57600080fd5b50610498610fd5565b6040516104a59190611871565b60405180910390f35b3480156104ba57600080fd5b506104c3611083565b6040516104d091906118a8565b60405180910390f35b3480156104e557600080fd5b506104ee6110a9565b6040516104fb9190611979565b60405180910390f35b61051e60048036038101906105199190611638565b6110f0565b60405161052b919061188d565b60405180910390f35b34801561054057600080fd5b50610549611433565b6040516105569190611979565b60405180910390f35b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008083426105949190611aa7565b90507f0965bc40502fce90bcf17a328b4e93f0e6ee33dc98b44716d0bdc44a90c8fa9784426040516105c7929190611994565b60405180910390a18281116105dc57806105de565b825b91505092915050565b6006602052816000526040600020816051811061060357600080fd5b01600091509150505481565b6106176114ae565b6003600083815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050919050565b600060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e69061193e565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208460ff166051811061074557610744611c1a565b5b602091828204019190069054906101000a900460ff16905060008160ff1614156107a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079b9061191e565b60405180910390fd5b600061081e600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208660ff16605181106107fd576107fc611c1a565b5b0154600360008760ff16815260200190815260200160002060010154610585565b90506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208660ff166051811061087657610875611c1a565b5b01819055506000610887828661147a565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b81526004016108e6929190611848565b600060405180830381600087803b15801561090057600080fd5b505af1158015610914573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167fbcd3911ec0701f7d54f70486dd4db6fc7cd3094bcc04eb26bb17a4163310905860405160405180910390a26001935050505092915050565b60046020528060005260406000206000915054906101000a900460ff1681565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905090565b60026020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208360ff1660518110610a6f57610a6e611c1a565b5b602091828204019190069054906101000a900460ff16905060008160ff161415610ace576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac59061191e565b60405180910390fd5b600360008260ff16815260200190815260200160002060010154610b60600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208560ff1660518110610b3f57610b3e611c1a565b5b0154600360008560ff16815260200190815260200160002060010154610585565b14915050919050565b600060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610bfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf59061193e565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208360ff1660518110610c5457610c53611c1a565b5b602091828204019190069054906101000a900460ff16905060008160ff161415610cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caa9061191e565b60405180910390fd5b610cbd838261065a565b503373ffffffffffffffffffffffffffffffffffffffff166108fc600360008460ff168152602001908152602001600020600001549081150290604051600060405180830381858888f19350505050158015610d1d573d6000803e3d6000fd5b506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208460ff1660518110610d7457610d73611c1a565b5b602091828204019190066101000a81548160ff021916908360ff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610de490611b78565b91905055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610e8a576000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b3373ffffffffffffffffffffffffffffffffffffffff167f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd600360008460ff16815260200190815260200160002060000154604051610ee99190611979565b60405180910390a26001915050919050565b60056020528060005260406000206000915090505481565b60016020528160005260406000208160518110610f2f57600080fd5b60209182820401919006915091509054906101000a900460ff1681565b60036020528060005260406000206000915090508060000154908060010154908060020154905083565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208260ff1660518110610fcc57610fcb611c1a565b5b01549050919050565b610fdd6114cf565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020605180602002604051908101604052809291908260518015611079576020028201916000905b82829054906101000a900460ff1660ff16815260200190600101906020826000010492830192600103820291508084116110425790505b5050505050905090565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600081600360008260ff16815260200190815260200160002060000154341461114e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611145906118fe565b60405180910390fd5b83838060ff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208360ff16605181106111a8576111a7611c1a565b5b602091828204019190069054906101000a900460ff1660ff161415611202576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f9906118de565b60405180910390fd5b60001515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514156112b4576001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b84600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208760ff166051811061130957611308611c1a565b5b602091828204019190066101000a81548160ff021916908360ff160217905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061137990611ba2565b919050555042600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208760ff16605181106113d3576113d2611c1a565b5b01819055503373ffffffffffffffffffffffffffffffffffffffff167febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a3460405161141e9190611979565b60405180910390a26001935050505092915050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b600080600360008460ff16815260200190815260200160002060020154846114a29190611a4d565b90508091505092915050565b60405180606001604052806000815260200160008152602001600081525090565b60405180610a200160405280605190602082028036833780820191505090505090565b60008135905061150181611d3e565b92915050565b60008135905061151681611d55565b92915050565b60008135905061152b81611d6c565b92915050565b60006020828403121561154757611546611c49565b5b6000611555848285016114f2565b91505092915050565b6000806040838503121561157557611574611c49565b5b6000611583858286016114f2565b925050602061159485828601611507565b9150509250929050565b6000602082840312156115b4576115b3611c49565b5b60006115c284828501611507565b91505092915050565b600080604083850312156115e2576115e1611c49565b5b60006115f085828601611507565b925050602061160185828601611507565b9150509250929050565b60006020828403121561162157611620611c49565b5b600061162f8482850161151c565b91505092915050565b6000806040838503121561164f5761164e611c49565b5b600061165d8582860161151c565b925050602061166e8582860161151c565b9150509250929050565b6000611684838361180f565b60208301905092915050565b61169981611adb565b82525050565b6116a881611a19565b6116b28184611a31565b92506116bd82611a0f565b8060005b838110156116ee5781516116d58782611678565b96506116e083611a24565b9250506001810190506116c1565b505050505050565b6116ff81611aed565b82525050565b61170e81611b30565b82525050565b61171d81611b42565b82525050565b6000611730602483611a3c565b915061173b82611c4e565b604082019050919050565b6000611753601883611a3c565b915061175e82611c9d565b602082019050919050565b6000611776600a83611a3c565b915061178182611cc6565b602082019050919050565b6000611799602683611a3c565b91506117a482611cef565b604082019050919050565b6060820160008201516117c560008501826117f1565b5060208201516117d860208501826117f1565b5060408201516117eb60408501826117f1565b50505050565b6117fa81611b19565b82525050565b61180981611b19565b82525050565b61181881611b23565b82525050565b61182781611b23565b82525050565b60006020820190506118426000830184611690565b92915050565b600060408201905061185d6000830185611690565b61186a6020830184611800565b9392505050565b6000610a2082019050611887600083018461169f565b92915050565b60006020820190506118a260008301846116f6565b92915050565b60006020820190506118bd6000830184611705565b92915050565b60006020820190506118d86000830184611714565b92915050565b600060208201905081810360008301526118f781611723565b9050919050565b6000602082019050818103600083015261191781611746565b9050919050565b6000602082019050818103600083015261193781611769565b9050919050565b600060208201905081810360008301526119578161178c565b9050919050565b600060608201905061197360008301846117af565b92915050565b600060208201905061198e6000830184611800565b92915050565b60006040820190506119a96000830185611800565b6119b66020830184611800565b9392505050565b60006060820190506119d26000830186611800565b6119df6020830185611800565b6119ec6040830184611800565b949350505050565b6000602082019050611a09600083018461181e565b92915050565b6000819050919050565b600060519050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b6000611a5882611b19565b9150611a6383611b19565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611a9c57611a9b611beb565b5b828202905092915050565b6000611ab282611b19565b9150611abd83611b19565b925082821015611ad057611acf611beb565b5b828203905092915050565b6000611ae682611af9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000611b3b82611b54565b9050919050565b6000611b4d82611b54565b9050919050565b6000611b5f82611b66565b9050919050565b6000611b7182611af9565b9050919050565b6000611b8382611b19565b91506000821415611b9757611b96611beb565b5b600182039050919050565b6000611bad82611b19565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611be057611bdf611beb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b7f596f75206861766520616c7265616479206275696c74207468697320616e642060008201527f6865726500000000000000000000000000000000000000000000000000000000602082015250565b7f446966666572656e742076616c75652061747461636865640000000000000000600082015250565b7f456d7074792074696c6500000000000000000000000000000000000000000000600082015250565b7f596f752063616e277420776974686472617720696620796f75206469646e277460008201527f207374616b650000000000000000000000000000000000000000000000000000602082015250565b611d4781611adb565b8114611d5257600080fd5b50565b611d5e81611b19565b8114611d6957600080fd5b50565b611d7581611b23565b8114611d8057600080fd5b5056fea264697066735822122091a384390ca2adcfcf5edee20318357548c053ec35a5e941dd1c340580d3edca64736f6c63430008070033",
	"immutableReferences": {},
	"generatedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:1427:8",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "88:98:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "98:22:8",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "113:6:8"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "107:5:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "107:13:8"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "98:5:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "174:5:8"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_contract$_ISeedToken_$599",
						"nodeType": "YulIdentifier",
						"src": "129:44:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "129:51:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "129:51:8"
				  }
				]
			  },
			  "name": "abi_decode_t_contract$_ISeedToken_$599_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "66:6:8",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "74:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "82:5:8",
				  "type": ""
				}
			  ],
			  "src": "7:179:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "287:292:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "333:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "335:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "335:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "335:79:8"
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
							  "src": "308:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "317:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "304:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "304:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "329:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "300:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "300:32:8"
					},
					"nodeType": "YulIf",
					"src": "297:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "426:146:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "441:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "455:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "445:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "470:92:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "534:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "545:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "530:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "530:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "554:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_contract$_ISeedToken_$599_fromMemory",
							"nodeType": "YulIdentifier",
							"src": "480:49:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "480:82:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "470:6:8"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_contract$_ISeedToken_$599_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "257:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "268:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "280:6:8",
				  "type": ""
				}
			  ],
			  "src": "192:387:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "625:35:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "635:19:8",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "651:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "645:5:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "645:9:8"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "635:6:8"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "618:6:8",
				  "type": ""
				}
			  ],
			  "src": "585:75:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "711:51:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "721:35:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "750:5:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "732:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "732:24:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "721:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "693:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "703:7:8",
				  "type": ""
				}
			  ],
			  "src": "666:96:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "831:51:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "841:35:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "870:5:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_address",
						"nodeType": "YulIdentifier",
						"src": "852:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "852:24:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "841:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_contract$_ISeedToken_$599",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "813:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "823:7:8",
				  "type": ""
				}
			  ],
			  "src": "768:114:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "933:81:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "943:65:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "958:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "965:42:8",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "954:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "954:54:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "943:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "915:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "925:7:8",
				  "type": ""
				}
			  ],
			  "src": "888:126:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1109:28:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1126:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1129:1:8",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1119:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1119:12:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1119:12:8"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1020:117:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1232:28:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1249:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1252:1:8",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1242:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1242:12:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1242:12:8"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1143:117:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1327:97:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1402:16:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1411:1:8",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1414:1:8",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1404:6:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "1404:12:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1404:12:8"
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
							  "src": "1350:5:8"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "1393:5:8"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_contract$_ISeedToken_$599",
								"nodeType": "YulIdentifier",
								"src": "1357:35:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1357:42:8"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "1347:2:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1347:53:8"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "1340:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1340:61:8"
					},
					"nodeType": "YulIf",
					"src": "1337:81:8"
				  }
				]
			  },
			  "name": "validator_revert_t_contract$_ISeedToken_$599",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1320:5:8",
				  "type": ""
				}
			  ],
			  "src": "1266:158:8"
			}
		  ]
		},
		"contents": "{\n\n    function abi_decode_t_contract$_ISeedToken_$599_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_ISeedToken_$599(value)\n    }\n\n    function abi_decode_tuple_t_contract$_ISeedToken_$599_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_ISeedToken_$599_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_ISeedToken_$599(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_contract$_ISeedToken_$599(value) {\n        if iszero(eq(value, cleanup_t_contract$_ISeedToken_$599(value))) { revert(0, 0) }\n    }\n\n}\n",
		"id": 8,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:16479:8",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "59:87:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "69:29:8",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "91:6:8"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "78:12:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "78:20:8"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "69:5:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "134:5:8"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_address",
						"nodeType": "YulIdentifier",
						"src": "107:26:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "107:33:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "107:33:8"
				  }
				]
			  },
			  "name": "abi_decode_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "37:6:8",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "45:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "53:5:8",
				  "type": ""
				}
			  ],
			  "src": "7:139:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "204:87:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "214:29:8",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "236:6:8"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "223:12:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "223:20:8"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "214:5:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "279:5:8"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "252:26:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "252:33:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "252:33:8"
				  }
				]
			  },
			  "name": "abi_decode_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "182:6:8",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "190:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "198:5:8",
				  "type": ""
				}
			  ],
			  "src": "152:139:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "347:85:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "357:29:8",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "379:6:8"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "366:12:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "366:20:8"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "357:5:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "420:5:8"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_uint8",
						"nodeType": "YulIdentifier",
						"src": "395:24:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "395:31:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "395:31:8"
				  }
				]
			  },
			  "name": "abi_decode_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "325:6:8",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "333:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "341:5:8",
				  "type": ""
				}
			  ],
			  "src": "297:135:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "504:263:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "550:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "552:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "552:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "552:79:8"
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
							  "src": "525:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "534:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "521:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "521:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "546:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "517:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "517:32:8"
					},
					"nodeType": "YulIf",
					"src": "514:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "643:117:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "658:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "672:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "662:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "687:63:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "722:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "733:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "718:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "718:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "742:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "697:20:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "697:53:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "687:6:8"
						  }
						]
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
				  "src": "474:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "485:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "497:6:8",
				  "type": ""
				}
			  ],
			  "src": "438:329:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "856:391:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "902:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "904:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "904:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "904:79:8"
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
							  "src": "877:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "886:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "873:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "873:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "898:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "869:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "869:32:8"
					},
					"nodeType": "YulIf",
					"src": "866:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "995:117:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1010:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1024:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1014:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1039:63:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1074:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1085:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1070:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1070:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1094:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "1049:20:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1049:53:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "1039:6:8"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "1122:118:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1137:16:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1151:2:8",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1141:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1167:63:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1202:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1213:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1198:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1198:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1222:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "1177:20:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1177:53:8"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "1167:6:8"
						  }
						]
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
				  "src": "818:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "829:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "841:6:8",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "849:6:8",
				  "type": ""
				}
			  ],
			  "src": "773:474:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1319:263:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1365:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "1367:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "1367:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1367:79:8"
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
							  "src": "1340:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1349:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1336:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1336:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1361:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1332:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1332:32:8"
					},
					"nodeType": "YulIf",
					"src": "1329:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "1458:117:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1473:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1487:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1477:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1502:63:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1537:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1548:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1533:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1533:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1557:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "1512:20:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1512:53:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "1502:6:8"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1289:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1300:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1312:6:8",
				  "type": ""
				}
			  ],
			  "src": "1253:329:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1671:391:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1717:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "1719:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "1719:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1719:79:8"
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
							  "src": "1692:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1701:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1688:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1688:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1713:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1684:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1684:32:8"
					},
					"nodeType": "YulIf",
					"src": "1681:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "1810:117:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1825:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1839:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1829:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1854:63:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1889:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1900:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1885:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1885:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1909:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "1864:20:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1864:53:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "1854:6:8"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "1937:118:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1952:16:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1966:2:8",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1956:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1982:63:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "2017:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "2028:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2013:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2013:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2037:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "1992:20:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1992:53:8"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "1982:6:8"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_uint256t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1633:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1644:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1656:6:8",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "1664:6:8",
				  "type": ""
				}
			  ],
			  "src": "1588:474:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2132:261:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2178:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "2180:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "2180:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2180:79:8"
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
							  "src": "2153:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2162:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2149:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2149:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2174:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2145:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2145:32:8"
					},
					"nodeType": "YulIf",
					"src": "2142:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "2271:115:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "2286:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2300:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "2290:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "2315:61:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "2348:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "2359:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2344:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2344:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2368:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "2325:18:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2325:51:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "2315:6:8"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2102:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2113:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2125:6:8",
				  "type": ""
				}
			  ],
			  "src": "2068:325:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2478:387:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2524:83:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "2526:77:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "2526:79:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2526:79:8"
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
							  "src": "2499:7:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2508:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2495:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2495:23:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2520:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2491:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2491:32:8"
					},
					"nodeType": "YulIf",
					"src": "2488:119:8"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "2617:115:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "2632:15:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2646:1:8",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "2636:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "2661:61:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "2694:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "2705:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2690:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2690:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2714:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "2671:18:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2671:51:8"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "2661:6:8"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "2742:116:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "2757:16:8",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2771:2:8",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "2761:6:8",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "2787:61:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "2820:9:8"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "2831:6:8"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "2816:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2816:22:8"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2840:7:8"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "2797:18:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2797:51:8"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "2787:6:8"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_uint8t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2440:9:8",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2451:7:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2463:6:8",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "2471:6:8",
				  "type": ""
				}
			  ],
			  "src": "2399:466:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2947:95:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "2987:6:8"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "2995:3:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint8_to_t_uint8",
						"nodeType": "YulIdentifier",
						"src": "2957:29:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2957:42:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2957:42:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3008:28:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3026:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3031:4:8",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "3022:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3022:14:8"
					},
					"variableNames": [
					  {
						"name": "updatedPos",
						"nodeType": "YulIdentifier",
						"src": "3008:10:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encodeUpdatedPos_t_uint8_to_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2920:6:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "2928:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updatedPos",
				  "nodeType": "YulTypedName",
				  "src": "2936:10:8",
				  "type": ""
				}
			  ],
			  "src": "2871:171:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3113:53:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3130:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3153:5:8"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_address",
							"nodeType": "YulIdentifier",
							"src": "3135:17:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3135:24:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3123:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3123:37:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3123:37:8"
				  }
				]
			  },
			  "name": "abi_encode_t_address_to_t_address_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3101:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "3108:3:8",
				  "type": ""
				}
			  ],
			  "src": "3048:118:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3312:574:8",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3322:65:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3381:5:8"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_array$_t_uint8_$81_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "3336:44:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3336:51:8"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "3326:6:8",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3396:90:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3474:3:8"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "3479:6:8"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_array$_t_uint8_$81_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "3403:70:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3403:83:8"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "3396:3:8"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3495:68:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3557:5:8"
						}
					  ],
					  "functionName": {
						"name": "array_dataslot_t_array$_t_uint8_$81_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "3510:46:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3510:53:8"
					},
					"variables": [
					  {
						"name": "baseRef",
						"nodeType": "YulTypedName",
						"src": "3499:7:8",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3572:21:8",
					"value": {
					  "name": "baseRef",
					  "nodeType": "YulIdentifier",
					  "src": "3586:7:8"
					},
					"variables": [
					  {
						"name": "srcPtr",
						"nodeType": "YulTypedName",
						"src": "3576:6:8",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3662:217:8",
					  "statements": [
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "3676:34:8",
						  "value": {
							"arguments": [
							  {
								"name": "srcPtr",
								"nodeType": "YulIdentifier",
								"src": "3703:6:8"
							  }
							],
							"functionName": {
							  "name": "mload",
							  "nodeType": "YulIdentifier",
							  "src": "3697:5:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "3697:13:8"
						  },
						  "variables": [
							{
							  "name": "elementValue0",
							  "nodeType": "YulTypedName",
							  "src": "3680:13:8",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "3723:66:8",
						  "value": {
							"arguments": [
							  {
								"name": "elementValue0",
								"nodeType": "YulIdentifier",
								"src": "3770:13:8"
							  },
							  {
								"name": "pos",
								"nodeType": "YulIdentifier",
								"src": "3785:3:8"
							  }
							],
							"functionName": {
							  "name": "abi_encodeUpdatedPos_t_uint8_to_t_uint8",
							  "nodeType": "YulIdentifier",
							  "src": "3730:39:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "3730:59:8"
						  },
						  "variableNames": [
							{
							  "name": "pos",
							  "nodeType": "YulIdentifier",
							  "src": "3723:3:8"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "3802:67:8",
						  "value": {
							"arguments": [
							  {
								"name": "srcPtr",
								"nodeType": "YulIdentifier",
								"src": "3862:6:8"
							  }
							],
							"functionName": {
							  "name": "array_nextElement_t_array$_t_uint8_$81_memory_ptr",
							  "nodeType": "YulIdentifier",
							  "src": "3812:49:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "3812:57:8"
						  },
						  "variableNames": [
							{
							  "name": "srcPtr",
							  "nodeType": "YulIdentifier",
							  "src": "3802:6:8"
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
						  "src": "3624:1:8"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "3627:6:8"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "3621:2:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3621:13:8"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "3635:18:8",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3637:14:8",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "3646:1:8"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3649:1:8",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "3642:3:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "3642:9:8"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "3637:1:8"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "3606:14:8",
					  "statements": [
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "3608:10:8",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "3617:1:8",
							"type": "",
							"value": "0"
						  },
						  "variables": [
							{
							  "name": "i",
							  "nodeType": "YulTypedName",
							  "src": "3612:1:8",
							  "type": ""
							}
						  ]
						}
					  ]
					},
					"src": "3602:277:8"
				  }
				]
			  },
			  "name": "abi_encode_t_array$_t_uint8_$81_memory_ptr_to_t_array$_t_uint8_$81_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3299:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "3306:3:8",
				  "type": ""
				}
			  ],
			  "src": "3202:684:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3951:50:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3968:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3988:5:8"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_bool",
							"nodeType": "YulIdentifier",
							"src": "3973:14:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3973:21:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3961:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3961:34:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3961:34:8"
				  }
				]
			  },
			  "name": "abi_encode_t_bool_to_t_bool_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3939:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "3946:3:8",
				  "type": ""
				}
			  ],
			  "src": "3892:109:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4086:80:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4103:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4153:5:8"
							}
						  ],
						  "functionName": {
							"name": "convert_t_contract$_ERC20_$1284_to_t_address",
							"nodeType": "YulIdentifier",
							"src": "4108:44:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4108:51:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4096:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4096:64:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4096:64:8"
				  }
				]
			  },
			  "name": "abi_encode_t_contract$_ERC20_$1284_to_t_address_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4074:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4081:3:8",
				  "type": ""
				}
			  ],
			  "src": "4007:159:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4255:84:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4272:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4326:5:8"
							}
						  ],
						  "functionName": {
							"name": "convert_t_contract$_ISeedToken_$599_to_t_address",
							"nodeType": "YulIdentifier",
							"src": "4277:48:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4277:55:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4265:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4265:68:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4265:68:8"
				  }
				]
			  },
			  "name": "abi_encode_t_contract$_ISeedToken_$599_to_t_address_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4243:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4250:3:8",
				  "type": ""
				}
			  ],
			  "src": "4172:167:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4491:220:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4501:74:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4567:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4572:2:8",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "4508:58:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4508:67:8"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "4501:3:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4673:3:8"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a",
						"nodeType": "YulIdentifier",
						"src": "4584:88:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4584:93:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4584:93:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4686:19:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4697:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4702:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4693:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4693:12:8"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "4686:3:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4479:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "4487:3:8",
				  "type": ""
				}
			  ],
			  "src": "4345:366:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4863:220:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4873:74:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4939:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4944:2:8",
						  "type": "",
						  "value": "24"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "4880:58:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4880:67:8"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "4873:3:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5045:3:8"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde",
						"nodeType": "YulIdentifier",
						"src": "4956:88:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4956:93:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4956:93:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5058:19:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5069:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5074:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5065:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5065:12:8"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "5058:3:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4851:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "4859:3:8",
				  "type": ""
				}
			  ],
			  "src": "4717:366:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5235:220:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5245:74:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5311:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5316:2:8",
						  "type": "",
						  "value": "10"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "5252:58:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5252:67:8"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "5245:3:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5417:3:8"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
						"nodeType": "YulIdentifier",
						"src": "5328:88:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5328:93:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5328:93:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5430:19:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5441:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5446:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5437:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5437:12:8"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "5430:3:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "5223:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "5231:3:8",
				  "type": ""
				}
			  ],
			  "src": "5089:366:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5607:220:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5617:74:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5683:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5688:2:8",
						  "type": "",
						  "value": "38"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "5624:58:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5624:67:8"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "5617:3:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5789:3:8"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a",
						"nodeType": "YulIdentifier",
						"src": "5700:88:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5700:93:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5700:93:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5802:19:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5813:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5818:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5809:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5809:12:8"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "5802:3:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "5595:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "5603:3:8",
				  "type": ""
				}
			  ],
			  "src": "5461:366:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6009:566:8",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "6019:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6035:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6040:4:8",
						  "type": "",
						  "value": "0x60"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6031:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6031:14:8"
					},
					"variables": [
					  {
						"name": "tail",
						"nodeType": "YulTypedName",
						"src": "6023:4:8",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "6055:165:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "6091:43:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "6121:5:8"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "6128:4:8",
								  "type": "",
								  "value": "0x00"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6117:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6117:16:8"
							}
						  ],
						  "functionName": {
							"name": "mload",
							"nodeType": "YulIdentifier",
							"src": "6111:5:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6111:23:8"
						},
						"variables": [
						  {
							"name": "memberValue0",
							"nodeType": "YulTypedName",
							"src": "6095:12:8",
							"type": ""
						  }
						]
					  },
					  {
						"expression": {
						  "arguments": [
							{
							  "name": "memberValue0",
							  "nodeType": "YulIdentifier",
							  "src": "6181:12:8"
							},
							{
							  "arguments": [
								{
								  "name": "pos",
								  "nodeType": "YulIdentifier",
								  "src": "6199:3:8"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "6204:4:8",
								  "type": "",
								  "value": "0x00"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6195:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6195:14:8"
							}
						  ],
						  "functionName": {
							"name": "abi_encode_t_uint256_to_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "6147:33:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6147:63:8"
						},
						"nodeType": "YulExpressionStatement",
						"src": "6147:63:8"
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "6230:164:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "6265:43:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "6295:5:8"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "6302:4:8",
								  "type": "",
								  "value": "0x20"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6291:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6291:16:8"
							}
						  ],
						  "functionName": {
							"name": "mload",
							"nodeType": "YulIdentifier",
							"src": "6285:5:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6285:23:8"
						},
						"variables": [
						  {
							"name": "memberValue0",
							"nodeType": "YulTypedName",
							"src": "6269:12:8",
							"type": ""
						  }
						]
					  },
					  {
						"expression": {
						  "arguments": [
							{
							  "name": "memberValue0",
							  "nodeType": "YulIdentifier",
							  "src": "6355:12:8"
							},
							{
							  "arguments": [
								{
								  "name": "pos",
								  "nodeType": "YulIdentifier",
								  "src": "6373:3:8"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "6378:4:8",
								  "type": "",
								  "value": "0x20"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6369:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6369:14:8"
							}
						  ],
						  "functionName": {
							"name": "abi_encode_t_uint256_to_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "6321:33:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6321:63:8"
						},
						"nodeType": "YulExpressionStatement",
						"src": "6321:63:8"
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "6404:164:8",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "6439:43:8",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "6469:5:8"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "6476:4:8",
								  "type": "",
								  "value": "0x40"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6465:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6465:16:8"
							}
						  ],
						  "functionName": {
							"name": "mload",
							"nodeType": "YulIdentifier",
							"src": "6459:5:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6459:23:8"
						},
						"variables": [
						  {
							"name": "memberValue0",
							"nodeType": "YulTypedName",
							"src": "6443:12:8",
							"type": ""
						  }
						]
					  },
					  {
						"expression": {
						  "arguments": [
							{
							  "name": "memberValue0",
							  "nodeType": "YulIdentifier",
							  "src": "6529:12:8"
							},
							{
							  "arguments": [
								{
								  "name": "pos",
								  "nodeType": "YulIdentifier",
								  "src": "6547:3:8"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "6552:4:8",
								  "type": "",
								  "value": "0x40"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6543:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6543:14:8"
							}
						  ],
						  "functionName": {
							"name": "abi_encode_t_uint256_to_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "6495:33:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6495:63:8"
						},
						"nodeType": "YulExpressionStatement",
						"src": "6495:63:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_struct$_Structure_$49_memory_ptr_to_t_struct$_Structure_$49_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "5996:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6003:3:8",
				  "type": ""
				}
			  ],
			  "src": "5893:682:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6636:53:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6653:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6676:5:8"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "6658:17:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6658:24:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6646:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6646:37:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6646:37:8"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6624:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6631:3:8",
				  "type": ""
				}
			  ],
			  "src": "6581:108:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6760:53:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6777:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6800:5:8"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "6782:17:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6782:24:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6770:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6770:37:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6770:37:8"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6748:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6755:3:8",
				  "type": ""
				}
			  ],
			  "src": "6695:118:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6870:51:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6887:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6908:5:8"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "6892:15:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6892:22:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6880:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6880:35:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6880:35:8"
				  }
				]
			  },
			  "name": "abi_encode_t_uint8_to_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6858:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6865:3:8",
				  "type": ""
				}
			  ],
			  "src": "6819:102:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6988:51:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "7005:3:8"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "7026:5:8"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "7010:15:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7010:22:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6998:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6998:35:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6998:35:8"
				  }
				]
			  },
			  "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6976:5:8",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6983:3:8",
				  "type": ""
				}
			  ],
			  "src": "6927:112:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7143:124:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7153:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7165:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7176:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7161:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7161:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "7153:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "7233:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7246:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7257:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7242:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7242:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "7189:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7189:71:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7189:71:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7115:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "7127:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "7138:4:8",
				  "type": ""
				}
			  ],
			  "src": "7045:222:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7399:206:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7409:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7421:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7432:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7417:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7417:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "7409:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "7489:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7502:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7513:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7498:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7498:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "7445:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7445:71:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7445:71:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "7570:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7583:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7594:2:8",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7579:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7579:18:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "7526:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7526:72:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7526:72:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7363:9:8",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "7375:6:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "7383:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "7394:4:8",
				  "type": ""
				}
			  ],
			  "src": "7273:332:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7753:170:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7763:28:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7775:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7786:4:8",
						  "type": "",
						  "value": "2592"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7771:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7771:20:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "7763:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "7889:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7902:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7913:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7898:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7898:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_array$_t_uint8_$81_memory_ptr_to_t_array$_t_uint8_$81_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "7801:87:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7801:115:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7801:115:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_array$_t_uint8_$81_memory_ptr__to_t_array$_t_uint8_$81_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7725:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "7737:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "7748:4:8",
				  "type": ""
				}
			  ],
			  "src": "7611:312:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8021:118:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8031:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8043:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8054:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8039:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8039:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8031:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "8105:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8118:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8129:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8114:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8114:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_bool_to_t_bool_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8067:37:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8067:65:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8067:65:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7993:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "8005:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8016:4:8",
				  "type": ""
				}
			  ],
			  "src": "7929:210:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8257:138:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8267:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8279:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8290:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8275:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8275:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8267:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "8361:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8374:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8385:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8370:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8370:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_contract$_ERC20_$1284_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8303:57:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8303:85:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8303:85:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_contract$_ERC20_$1284__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8229:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "8241:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8252:4:8",
				  "type": ""
				}
			  ],
			  "src": "8145:250:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8517:142:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8527:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8539:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8550:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8535:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8535:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8527:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "8625:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8638:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8649:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8634:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8634:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_contract$_ISeedToken_$599_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8563:61:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8563:89:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8563:89:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_contract$_ISeedToken_$599__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8489:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "8501:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8512:4:8",
				  "type": ""
				}
			  ],
			  "src": "8401:258:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8836:248:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8846:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8858:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8869:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8854:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8854:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8846:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8893:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8904:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8889:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8889:17:8"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "8912:4:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8918:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "8908:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8908:20:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8882:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8882:47:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8882:47:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8938:139:8",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "9072:4:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8946:124:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8946:131:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8938:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8816:9:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8831:4:8",
				  "type": ""
				}
			  ],
			  "src": "8665:419:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9261:248:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9271:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9283:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9294:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9279:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9279:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9271:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9318:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9329:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9314:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9314:17:8"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "9337:4:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9343:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "9333:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9333:20:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9307:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9307:47:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9307:47:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9363:139:8",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "9497:4:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "9371:124:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9371:131:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9363:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9241:9:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9256:4:8",
				  "type": ""
				}
			  ],
			  "src": "9090:419:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9686:248:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9696:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9708:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9719:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9704:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9704:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9696:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9743:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9754:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9739:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9739:17:8"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "9762:4:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9768:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "9758:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9758:20:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9732:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9732:47:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9732:47:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9788:139:8",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "9922:4:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "9796:124:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9796:131:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9788:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9666:9:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9681:4:8",
				  "type": ""
				}
			  ],
			  "src": "9515:419:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10111:248:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10121:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10133:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10144:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10129:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10129:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10121:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10168:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10179:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10164:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10164:17:8"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "10187:4:8"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10193:9:8"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "10183:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10183:20:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10157:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10157:47:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10157:47:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10213:139:8",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "10347:4:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10221:124:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10221:131:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10213:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10091:9:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10106:4:8",
				  "type": ""
				}
			  ],
			  "src": "9940:419:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10513:174:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10523:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10535:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10546:2:8",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10531:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10531:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10523:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "10653:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10666:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10677:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10662:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10662:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_struct$_Structure_$49_memory_ptr_to_t_struct$_Structure_$49_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10559:93:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10559:121:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10559:121:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_struct$_Structure_$49_memory_ptr__to_t_struct$_Structure_$49_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10485:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "10497:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10508:4:8",
				  "type": ""
				}
			  ],
			  "src": "10365:322:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10791:124:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10801:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10813:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10824:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10809:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10809:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10801:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "10881:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10894:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10905:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10890:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10890:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10837:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10837:71:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10837:71:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10763:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "10775:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10786:4:8",
				  "type": ""
				}
			  ],
			  "src": "10693:222:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11047:206:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11057:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11069:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11080:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11065:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11065:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11057:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "11137:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11150:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11161:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11146:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11146:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11093:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11093:71:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11093:71:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "11218:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11231:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11242:2:8",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11227:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11227:18:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11174:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11174:72:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11174:72:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11011:9:8",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "11023:6:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "11031:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11042:4:8",
				  "type": ""
				}
			  ],
			  "src": "10921:332:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11413:288:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11423:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11435:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11446:2:8",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11431:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11431:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11423:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "11503:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11516:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11527:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11512:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11512:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11459:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11459:71:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11459:71:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "11584:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11597:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11608:2:8",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11593:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11593:18:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11540:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11540:72:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11540:72:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value2",
						  "nodeType": "YulIdentifier",
						  "src": "11666:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11679:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11690:2:8",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11675:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11675:18:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11622:43:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11622:72:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11622:72:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256__to_t_uint256_t_uint256_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11369:9:8",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "11381:6:8",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "11389:6:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "11397:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11408:4:8",
				  "type": ""
				}
			  ],
			  "src": "11259:442:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11801:120:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11811:26:8",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11823:9:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11834:2:8",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11819:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11819:18:8"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11811:4:8"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "11887:6:8"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11900:9:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11911:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11896:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11896:17:8"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint8_to_t_uint8_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11847:39:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11847:67:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11847:67:8"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11773:9:8",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "11785:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11796:4:8",
				  "type": ""
				}
			  ],
			  "src": "11707:214:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11967:35:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11977:19:8",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11993:2:8",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "11987:5:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11987:9:8"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "11977:6:8"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "11960:6:8",
				  "type": ""
				}
			  ],
			  "src": "11927:75:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12077:28:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12087:11:8",
					"value": {
					  "name": "ptr",
					  "nodeType": "YulIdentifier",
					  "src": "12095:3:8"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "12087:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "array_dataslot_t_array$_t_uint8_$81_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "ptr",
				  "nodeType": "YulTypedName",
				  "src": "12064:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "12072:4:8",
				  "type": ""
				}
			  ],
			  "src": "12008:97:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12182:32:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12193:14:8",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "12203:4:8",
					  "type": "",
					  "value": "0x51"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "12193:6:8"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_array$_t_uint8_$81_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "12165:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "12175:6:8",
				  "type": ""
				}
			  ],
			  "src": "12111:103:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12292:38:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12302:22:8",
					"value": {
					  "arguments": [
						{
						  "name": "ptr",
						  "nodeType": "YulIdentifier",
						  "src": "12314:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12319:4:8",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12310:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12310:14:8"
					},
					"variableNames": [
					  {
						"name": "next",
						"nodeType": "YulIdentifier",
						"src": "12302:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "array_nextElement_t_array$_t_uint8_$81_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "ptr",
				  "nodeType": "YulTypedName",
				  "src": "12279:3:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "next",
				  "nodeType": "YulTypedName",
				  "src": "12287:4:8",
				  "type": ""
				}
			  ],
			  "src": "12220:110:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12444:34:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12454:18:8",
					"value": {
					  "name": "pos",
					  "nodeType": "YulIdentifier",
					  "src": "12469:3:8"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "12454:11:8"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_array$_t_uint8_$81_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "12416:3:8",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "12421:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "12432:11:8",
				  "type": ""
				}
			  ],
			  "src": "12336:142:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12580:73:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12597:3:8"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "12602:6:8"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12590:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12590:19:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12590:19:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12618:29:8",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12637:3:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12642:4:8",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12633:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12633:14:8"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "12618:11:8"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "12552:3:8",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "12557:6:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "12568:11:8",
				  "type": ""
				}
			  ],
			  "src": "12484:169:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12707:300:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12717:25:8",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12740:1:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "12722:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12722:20:8"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "12717:1:8"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12751:25:8",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "12774:1:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "12756:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12756:20:8"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "12751:1:8"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "12949:22:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "12951:16:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "12951:18:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "12951:18:8"
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
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "12861:1:8"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "12854:6:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "12854:9:8"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "12847:6:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12847:17:8"
						},
						{
						  "arguments": [
							{
							  "name": "y",
							  "nodeType": "YulIdentifier",
							  "src": "12869:1:8"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "12876:66:8",
								  "type": "",
								  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
								},
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "12944:1:8"
								}
							  ],
							  "functionName": {
								"name": "div",
								"nodeType": "YulIdentifier",
								"src": "12872:3:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "12872:74:8"
							}
						  ],
						  "functionName": {
							"name": "gt",
							"nodeType": "YulIdentifier",
							"src": "12866:2:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12866:81:8"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "12843:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12843:105:8"
					},
					"nodeType": "YulIf",
					"src": "12840:131:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12981:20:8",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12996:1:8"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "12999:1:8"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "12992:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12992:9:8"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "12981:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "12690:1:8",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "12693:1:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "12699:7:8",
				  "type": ""
				}
			  ],
			  "src": "12659:348:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13058:146:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13068:25:8",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "13091:1:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "13073:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13073:20:8"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "13068:1:8"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13102:25:8",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13125:1:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "13107:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13107:20:8"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "13102:1:8"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "13149:22:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "13151:16:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "13151:18:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "13151:18:8"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "13143:1:8"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13146:1:8"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "13140:2:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13140:8:8"
					},
					"nodeType": "YulIf",
					"src": "13137:34:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13181:17:8",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "13193:1:8"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13196:1:8"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "13189:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13189:9:8"
					},
					"variableNames": [
					  {
						"name": "diff",
						"nodeType": "YulIdentifier",
						"src": "13181:4:8"
					  }
					]
				  }
				]
			  },
			  "name": "checked_sub_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "13044:1:8",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "13047:1:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "diff",
				  "nodeType": "YulTypedName",
				  "src": "13053:4:8",
				  "type": ""
				}
			  ],
			  "src": "13013:191:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13255:51:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13265:35:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13294:5:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "13276:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13276:24:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "13265:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13237:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "13247:7:8",
				  "type": ""
				}
			  ],
			  "src": "13210:96:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13354:48:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13364:32:8",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "13389:5:8"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "13382:6:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13382:13:8"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "13375:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13375:21:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "13364:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13336:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "13346:7:8",
				  "type": ""
				}
			  ],
			  "src": "13312:90:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13453:81:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13463:65:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13478:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13485:42:8",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "13474:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13474:54:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "13463:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13435:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "13445:7:8",
				  "type": ""
				}
			  ],
			  "src": "13408:126:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13585:32:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13595:16:8",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "13606:5:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "13595:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13567:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "13577:7:8",
				  "type": ""
				}
			  ],
			  "src": "13540:77:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13666:43:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13676:27:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13691:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13698:4:8",
						  "type": "",
						  "value": "0xff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "13687:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13687:16:8"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "13676:7:8"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13648:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "13658:7:8",
				  "type": ""
				}
			  ],
			  "src": "13623:86:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13789:66:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13799:50:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13843:5:8"
						}
					  ],
					  "functionName": {
						"name": "convert_t_uint160_to_t_address",
						"nodeType": "YulIdentifier",
						"src": "13812:30:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13812:37:8"
					},
					"variableNames": [
					  {
						"name": "converted",
						"nodeType": "YulIdentifier",
						"src": "13799:9:8"
					  }
					]
				  }
				]
			  },
			  "name": "convert_t_contract$_ERC20_$1284_to_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13769:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "converted",
				  "nodeType": "YulTypedName",
				  "src": "13779:9:8",
				  "type": ""
				}
			  ],
			  "src": "13715:140:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13939:66:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13949:50:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13993:5:8"
						}
					  ],
					  "functionName": {
						"name": "convert_t_uint160_to_t_address",
						"nodeType": "YulIdentifier",
						"src": "13962:30:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13962:37:8"
					},
					"variableNames": [
					  {
						"name": "converted",
						"nodeType": "YulIdentifier",
						"src": "13949:9:8"
					  }
					]
				  }
				]
			  },
			  "name": "convert_t_contract$_ISeedToken_$599_to_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13919:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "converted",
				  "nodeType": "YulTypedName",
				  "src": "13929:9:8",
				  "type": ""
				}
			  ],
			  "src": "13861:144:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14071:66:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14081:50:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14125:5:8"
						}
					  ],
					  "functionName": {
						"name": "convert_t_uint160_to_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "14094:30:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14094:37:8"
					},
					"variableNames": [
					  {
						"name": "converted",
						"nodeType": "YulIdentifier",
						"src": "14081:9:8"
					  }
					]
				  }
				]
			  },
			  "name": "convert_t_uint160_to_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "14051:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "converted",
				  "nodeType": "YulTypedName",
				  "src": "14061:9:8",
				  "type": ""
				}
			  ],
			  "src": "14011:126:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14203:53:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14213:37:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14244:5:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "14226:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14226:24:8"
					},
					"variableNames": [
					  {
						"name": "converted",
						"nodeType": "YulIdentifier",
						"src": "14213:9:8"
					  }
					]
				  }
				]
			  },
			  "name": "convert_t_uint160_to_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "14183:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "converted",
				  "nodeType": "YulTypedName",
				  "src": "14193:9:8",
				  "type": ""
				}
			  ],
			  "src": "14143:113:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14305:128:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14315:33:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14342:5:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "14324:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14324:24:8"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "14315:5:8"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "14376:22:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "14378:16:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "14378:18:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "14378:18:8"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14363:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14370:4:8",
						  "type": "",
						  "value": "0x00"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "14360:2:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14360:15:8"
					},
					"nodeType": "YulIf",
					"src": "14357:41:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "14407:20:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14418:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14425:1:8",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "14414:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14414:13:8"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "14407:3:8"
					  }
					]
				  }
				]
			  },
			  "name": "decrement_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "14291:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "14301:3:8",
				  "type": ""
				}
			  ],
			  "src": "14262:171:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14482:190:8",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14492:33:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14519:5:8"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "14501:17:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14501:24:8"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "14492:5:8"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "14615:22:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "14617:16:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "14617:18:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "14617:18:8"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14540:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14547:66:8",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "14537:2:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14537:77:8"
					},
					"nodeType": "YulIf",
					"src": "14534:103:8"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "14646:20:8",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "14657:5:8"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14664:1:8",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "14653:3:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14653:13:8"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "14646:3:8"
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
				  "src": "14468:5:8",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "14478:3:8",
				  "type": ""
				}
			  ],
			  "src": "14439:233:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14706:152:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14723:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14726:77:8",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "14716:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14716:88:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14716:88:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14820:1:8",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14823:4:8",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "14813:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14813:15:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14813:15:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14844:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14847:4:8",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "14837:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14837:15:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14837:15:8"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "14678:180:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14892:152:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14909:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14912:77:8",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "14902:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14902:88:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14902:88:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15006:1:8",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15009:4:8",
						  "type": "",
						  "value": "0x32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "14999:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14999:15:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14999:15:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15030:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15033:4:8",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "15023:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15023:15:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15023:15:8"
				  }
				]
			  },
			  "name": "panic_error_0x32",
			  "nodeType": "YulFunctionDefinition",
			  "src": "14864:180:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15139:28:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15156:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15159:1:8",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "15149:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15149:12:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15149:12:8"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "15050:117:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15262:28:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15279:1:8",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15282:1:8",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "15272:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15272:12:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15272:12:8"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "15173:117:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15402:117:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15424:6:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15432:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15420:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15420:14:8"
						},
						{
						  "hexValue": "596f75206861766520616c7265616479206275696c74207468697320616e6420",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "15436:34:8",
						  "type": "",
						  "value": "You have already built this and "
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15413:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15413:58:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15413:58:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15492:6:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15500:2:8",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15488:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15488:15:8"
						},
						{
						  "hexValue": "68657265",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "15505:6:8",
						  "type": "",
						  "value": "here"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15481:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15481:31:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15481:31:8"
				  }
				]
			  },
			  "name": "store_literal_in_memory_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "15394:6:8",
				  "type": ""
				}
			  ],
			  "src": "15296:223:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15631:68:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15653:6:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15661:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15649:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15649:14:8"
						},
						{
						  "hexValue": "446966666572656e742076616c7565206174746163686564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "15665:26:8",
						  "type": "",
						  "value": "Different value attached"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15642:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15642:50:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15642:50:8"
				  }
				]
			  },
			  "name": "store_literal_in_memory_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "15623:6:8",
				  "type": ""
				}
			  ],
			  "src": "15525:174:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15811:54:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15833:6:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15841:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15829:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15829:14:8"
						},
						{
						  "hexValue": "456d7074792074696c65",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "15845:12:8",
						  "type": "",
						  "value": "Empty tile"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15822:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15822:36:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15822:36:8"
				  }
				]
			  },
			  "name": "store_literal_in_memory_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "15803:6:8",
				  "type": ""
				}
			  ],
			  "src": "15705:160:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15977:119:8",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15999:6:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16007:1:8",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15995:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15995:14:8"
						},
						{
						  "hexValue": "596f752063616e277420776974686472617720696620796f75206469646e2774",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "16011:34:8",
						  "type": "",
						  "value": "You can't withdraw if you didn't"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15988:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15988:58:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15988:58:8"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "16067:6:8"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16075:2:8",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16063:3:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16063:15:8"
						},
						{
						  "hexValue": "207374616b65",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "16080:8:8",
						  "type": "",
						  "value": " stake"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16056:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16056:33:8"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16056:33:8"
				  }
				]
			  },
			  "name": "store_literal_in_memory_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "15969:6:8",
				  "type": ""
				}
			  ],
			  "src": "15871:225:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16145:79:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "16202:16:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "16211:1:8",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "16214:1:8",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "16204:6:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "16204:12:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "16204:12:8"
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
							  "src": "16168:5:8"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "16193:5:8"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address",
								"nodeType": "YulIdentifier",
								"src": "16175:17:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "16175:24:8"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "16165:2:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16165:35:8"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "16158:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16158:43:8"
					},
					"nodeType": "YulIf",
					"src": "16155:63:8"
				  }
				]
			  },
			  "name": "validator_revert_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "16138:5:8",
				  "type": ""
				}
			  ],
			  "src": "16102:122:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16273:79:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "16330:16:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "16339:1:8",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "16342:1:8",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "16332:6:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "16332:12:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "16332:12:8"
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
							  "src": "16296:5:8"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "16321:5:8"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "16303:17:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "16303:24:8"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "16293:2:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16293:35:8"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "16286:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16286:43:8"
					},
					"nodeType": "YulIf",
					"src": "16283:63:8"
				  }
				]
			  },
			  "name": "validator_revert_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "16266:5:8",
				  "type": ""
				}
			  ],
			  "src": "16230:122:8"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16399:77:8",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "16454:16:8",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "16463:1:8",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "16466:1:8",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "16456:6:8"
							},
							"nodeType": "YulFunctionCall",
							"src": "16456:12:8"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "16456:12:8"
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
							  "src": "16422:5:8"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "16445:5:8"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint8",
								"nodeType": "YulIdentifier",
								"src": "16429:15:8"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "16429:22:8"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "16419:2:8"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16419:33:8"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "16412:6:8"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16412:41:8"
					},
					"nodeType": "YulIf",
					"src": "16409:61:8"
				  }
				]
			  },
			  "name": "validator_revert_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "16392:5:8",
				  "type": ""
				}
			  ],
			  "src": "16358:118:8"
			}
		  ]
		},
		"contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_t_uint8(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint8(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint8(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint8(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint8t_uint8(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint8(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint8(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encodeUpdatedPos_t_uint8_to_t_uint8(value0, pos) -> updatedPos {\n        abi_encode_t_uint8_to_t_uint8(value0, pos)\n        updatedPos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    // uint8[81] -> uint8[81]\n    function abi_encode_t_array$_t_uint8_$81_memory_ptr_to_t_array$_t_uint8_$81_memory_ptr_fromStack(value, pos)  {\n        let length := array_length_t_array$_t_uint8_$81_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_uint8_$81_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_uint8_$81_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := mload(srcPtr)\n            pos := abi_encodeUpdatedPos_t_uint8_to_t_uint8(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_uint8_$81_memory_ptr(srcPtr)\n        }\n\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_contract$_ERC20_$1284_to_t_address_fromStack(value, pos) {\n        mstore(pos, convert_t_contract$_ERC20_$1284_to_t_address(value))\n    }\n\n    function abi_encode_t_contract$_ISeedToken_$599_to_t_address_fromStack(value, pos) {\n        mstore(pos, convert_t_contract$_ISeedToken_$599_to_t_address(value))\n    }\n\n    function abi_encode_t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a(pos)\n        end := add(pos, 64)\n    }\n\n    // struct Builder.Structure -> struct Builder.Structure\n    function abi_encode_t_struct$_Structure_$49_memory_ptr_to_t_struct$_Structure_$49_memory_ptr_fromStack(value, pos)  {\n        let tail := add(pos, 0x60)\n\n        {\n            // price\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // time\n\n            let memberValue0 := mload(add(value, 0x20))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x20))\n        }\n\n        {\n            // rate\n\n            let memberValue0 := mload(add(value, 0x40))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x40))\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint8_to_t_uint8(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_array$_t_uint8_$81_memory_ptr__to_t_array$_t_uint8_$81_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 2592)\n\n        abi_encode_t_array$_t_uint8_$81_memory_ptr_to_t_array$_t_uint8_$81_memory_ptr_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_contract$_ERC20_$1284__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_contract$_ERC20_$1284_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_contract$_ISeedToken_$599__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_contract$_ISeedToken_$599_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_struct$_Structure_$49_memory_ptr__to_t_struct$_Structure_$49_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_struct$_Structure_$49_memory_ptr_to_t_struct$_Structure_$49_memory_ptr_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256__to_t_uint256_t_uint256_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_dataslot_t_array$_t_uint8_$81_memory_ptr(ptr) -> data {\n        data := ptr\n\n    }\n\n    function array_length_t_array$_t_uint8_$81_memory_ptr(value) -> length {\n\n        length := 0x51\n\n    }\n\n    function array_nextElement_t_array$_t_uint8_$81_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_uint8_$81_memory_ptr_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function convert_t_contract$_ERC20_$1284_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_address(value)\n    }\n\n    function convert_t_contract$_ISeedToken_$599_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_address(value)\n    }\n\n    function convert_t_uint160_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_uint160(value)\n    }\n\n    function convert_t_uint160_to_t_uint160(value) -> converted {\n        converted := cleanup_t_uint160(value)\n    }\n\n    function decrement_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0x00) { panic_error_0x11() }\n        ret := sub(value, 1)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function store_literal_in_memory_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a(memPtr) {\n\n        mstore(add(memPtr, 0), \"You have already built this and \")\n\n        mstore(add(memPtr, 32), \"here\")\n\n    }\n\n    function store_literal_in_memory_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde(memPtr) {\n\n        mstore(add(memPtr, 0), \"Different value attached\")\n\n    }\n\n    function store_literal_in_memory_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19(memPtr) {\n\n        mstore(add(memPtr, 0), \"Empty tile\")\n\n    }\n\n    function store_literal_in_memory_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a(memPtr) {\n\n        mstore(add(memPtr, 0), \"You can't withdraw if you didn't\")\n\n        mstore(add(memPtr, 32), \" stake\")\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint8(value) {\n        if iszero(eq(value, cleanup_t_uint8(value))) { revert(0, 0) }\n    }\n\n}\n",
		"id": 8,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "476:7043:0:-:0;;;1261:246;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1310:10;1302:5;;:18;;;;;;;;;;;;;;;;;;1341:5;1334:4;;:12;;;;;;;;;;;;;;;;;;1360:23;1386:10;:13;1397:1;1386:13;;;;;;;;;;;1360:39;;1425:9;1411:5;:11;;:23;;;;1459:7;1446:5;:10;;:20;;;;1491:7;1478:5;:10;;:20;;;;1291:216;1261:246;476:7043;;7:179:8;82:5;113:6;107:13;98:22;;129:51;174:5;129:51;:::i;:::-;7:179;;;;:::o;192:387::-;280:6;329:2;317:9;308:7;304:23;300:32;297:119;;;335:79;;:::i;:::-;297:119;455:1;480:82;554:7;545:6;534:9;530:22;480:82;:::i;:::-;470:92;;426:146;192:387;;;;:::o;666:96::-;703:7;732:24;750:5;732:24;:::i;:::-;721:35;;666:96;;;:::o;768:114::-;823:7;852:24;870:5;852:24;:::i;:::-;841:35;;768:114;;;:::o;888:126::-;925:7;965:42;958:5;954:54;943:65;;888:126;;;:::o;1143:117::-;1252:1;1249;1242:12;1266:158;1357:42;1393:5;1357:42;:::i;:::-;1350:5;1347:53;1337:81;;1414:1;1411;1404:12;1337:81;1266:158;:::o;476:7043:0:-;;;;;;;",
	"deployedSourceMap": "476:7043:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;870:22;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4293:271;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;787:49;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5314:117;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3577:620;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;690:41;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5500:101;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;581:46;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;503:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6102:367;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2680:597;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;739:41;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;533:40;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;636:44;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;5856:122;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4959:102;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;846:16;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5676:98;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1888:460;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5136:103;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;870:22;;;;;;;;;;;;;:::o;4293:271::-;4378:7;4398:17;4436:5;4418:15;:23;;;;:::i;:::-;4398:43;;4458:39;4474:5;4481:15;4458:39;;;;;;;:::i;:::-;;;;;;;;4529:5;4517:9;:17;4516:39;;4546:9;4516:39;;;4538:5;4516:39;4509:46;;;4293:271;;;;:::o;787:49::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5314:117::-;5370:16;;:::i;:::-;5406:10;:16;5417:4;5406:16;;;;;;;;;;;5399:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5314:117;;;:::o;3577:620::-;3662:4;7268;7243:29;;:9;:21;7253:10;7243:21;;;;;;;;;;;;;;;;;;;;;;;;;:29;;;7235:90;;;;;;;;;;;;:::i;:::-;;;;;;;;;3681:19:::1;3703:3;:15;3707:10;3703:15;;;;;;;;;;;;;;;3719:4;3703:21;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;3681:43;;3756:1;3739:13;:18;;;3736:43;;;3759:20;;;;;;;;;;:::i;:::-;;;;;;;;3736:43;3793:18;3814:109;3847:10;:22;3858:10;3847:22;;;;;;;;;;;;;;;3870:4;3847:28;;;;;;;;;:::i;:::-;;;;3891:10;:16;3902:4;3891:16;;;;;;;;;;;;;:21;;;3814:18;:109::i;:::-;3793:130;;3966:1;3935:10;:22;3946:10;3935:22;;;;;;;;;;;;;;;3958:4;3935:28;;;;;;;;;:::i;:::-;;;:32;;;;3989:14;4006:71;4036:10;4062:4;4006:15;:71::i;:::-;3989:88;;4090:4;;;;;;;;;;;:9;;;4100:10;4112:6;4090:29;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;4152:10;4138:25;;;;;;;;;;;;4184:4;4177:11;;;;;3577:620:::0;;;;:::o;690:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;5500:101::-;5547:4;5571:9;:21;5581:10;5571:21;;;;;;;;;;;;;;;;;;;;;;;;;5564:28;;5500:101;:::o;581:46::-;;;;;;;;;;;;;;;;;:::o;503:20::-;;;;;;;;;;;;:::o;6102:367::-;6161:4;6179:19;6201:3;:15;6205:10;6201:15;;;;;;;;;;;;;;;6217:4;6201:21;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;6179:43;;6255:1;6238:13;:18;;;6235:43;;;6258:20;;;;;;;;;;:::i;:::-;;;;;;;;6235:43;6428:10;:25;6439:13;6428:25;;;;;;;;;;;;;:30;;;6302:122;6335:10;:22;6346:10;6335:22;;;;;;;;;;;;;;;6358:4;6335:28;;;;;;;;;:::i;:::-;;;;6379:10;:25;6390:13;6379:25;;;;;;;;;;;;;:30;;;6302:18;:122::i;:::-;:156;6294:165;;;6102:367;;;:::o;2680:597::-;2753:4;7268;7243:29;;:9;:21;7253:10;7243:21;;;;;;;;;;;;;;;;;;;;;;;;;:29;;;7235:90;;;;;;;;;;;;:::i;:::-;;;;;;;;;2772:19:::1;2794:3;:15;2798:10;2794:15;;;;;;;;;;;;;;;2810:4;2794:21;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;2772:43;;2847:1;2830:13;:18;;;2827:43;;;2850:20;;;;;;;;;;:::i;:::-;;;;;;;;2827:43;2884:38;2902:4;2908:13;2884:17;:38::i;:::-;;2942:10;2934:28;;:61;2963:10;:25;2974:13;2963:25;;;;;;;;;;;;;:31;;;2934:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;3033:1;3009:3;:15;3013:10;3009:15;;;;;;;;;;;;;;;3025:4;3009:21;;;;;;;;;:::i;:::-;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;3046:11;:23;3058:10;3046:23;;;;;;;;;;;;;;;;:25;;;;;;;;;:::i;:::-;;;;;;3113:1;3086:11;:23;3098:10;3086:23;;;;;;;;;;;;;;;;:28;3083:93;;;3155:5;3131:9;:21;3141:10;3131:21;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3083:93;3201:10;3193:52;;;3213:10;:25;3224:13;3213:25;;;;;;;;;;;;;:31;;;3193:52;;;;;;:::i;:::-;;;;;;;;3264:4;3257:11;;;2680:597:::0;;;:::o;739:41::-;;;;;;;;;;;;;;;;;:::o;533:40::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;636:44::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5856:122::-;5914:7;5941:10;:22;5952:10;5941:22;;;;;;;;;;;;;;;5964:4;5941:28;;;;;;;;;:::i;:::-;;;;5934:35;;5856:122;;;:::o;4959:102::-;5000:16;;:::i;:::-;5037:3;:15;5041:10;5037:15;;;;;;;;;;;;;;;5030:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4959:102;:::o;846:16::-;;;;;;;;;;;;;:::o;5676:98::-;5720:7;5747:6;:18;5754:10;5747:18;;;;;;;;;;;;;;;;5740:25;;5676:98;:::o;1888:460::-;2004:4;1962;6801:10;:16;6812:4;6801:16;;;;;;;;;;;;;:22;;;6788:9;:35;6780:82;;;;;;;;;;;;:::i;:::-;;;;;;;;;1975:4:::1;1981;7048;7023:29;;:3;:15;7027:10;7023:15;;;;;;;;;;;;;;;7039:4;7023:21;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;:29;;;;7015:87;;;;;;;;;;;;:::i;:::-;;;;;;;;;2059:5:::2;2034:30;;:9;:21;2044:10;2034:21;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;2031:102;;;2105:4;2081:9;:21;2091:10;2081:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;2031:102;2169:4;2145:3;:15;2149:10;2145:15;;;;;;;;;;;;;;;2161:4;2145:21;;;;;;;;;:::i;:::-;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;2185:11;:23;2197:10;2185:23;;;;;;;;;;;;;;;;:25;;;;;;;;;:::i;:::-;;;;;;2255:15;2224:10;:22;2235:10;2224:22;;;;;;;;;;;;;;;2247:4;2224:28;;;;;;;;;:::i;:::-;;;:46;;;;2295:10;2289:28;;;2307:9;2289:28;;;;;;:::i;:::-;;;;;;;;2335:4;2328:11;;6873:1:::1;;1888:460:::0;;;;;:::o;5136:103::-;5180:7;5207:11;:23;5219:10;5207:23;;;;;;;;;;;;;;;;5200:30;;5136:103;:::o;4704:187::-;4788:7;4808:14;4837:10;:16;4848:4;4837:16;;;;;;;;;;;;;:21;;;4826:8;:32;;;;:::i;:::-;4808:50;;4876:6;4869:13;;;4704:187;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:139:8:-;53:5;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;7:139;;;;:::o;152:::-;198:5;236:6;223:20;214:29;;252:33;279:5;252:33;:::i;:::-;152:139;;;;:::o;297:135::-;341:5;379:6;366:20;357:29;;395:31;420:5;395:31;:::i;:::-;297:135;;;;:::o;438:329::-;497:6;546:2;534:9;525:7;521:23;517:32;514:119;;;552:79;;:::i;:::-;514:119;672:1;697:53;742:7;733:6;722:9;718:22;697:53;:::i;:::-;687:63;;643:117;438:329;;;;:::o;773:474::-;841:6;849;898:2;886:9;877:7;873:23;869:32;866:119;;;904:79;;:::i;:::-;866:119;1024:1;1049:53;1094:7;1085:6;1074:9;1070:22;1049:53;:::i;:::-;1039:63;;995:117;1151:2;1177:53;1222:7;1213:6;1202:9;1198:22;1177:53;:::i;:::-;1167:63;;1122:118;773:474;;;;;:::o;1253:329::-;1312:6;1361:2;1349:9;1340:7;1336:23;1332:32;1329:119;;;1367:79;;:::i;:::-;1329:119;1487:1;1512:53;1557:7;1548:6;1537:9;1533:22;1512:53;:::i;:::-;1502:63;;1458:117;1253:329;;;;:::o;1588:474::-;1656:6;1664;1713:2;1701:9;1692:7;1688:23;1684:32;1681:119;;;1719:79;;:::i;:::-;1681:119;1839:1;1864:53;1909:7;1900:6;1889:9;1885:22;1864:53;:::i;:::-;1854:63;;1810:117;1966:2;1992:53;2037:7;2028:6;2017:9;2013:22;1992:53;:::i;:::-;1982:63;;1937:118;1588:474;;;;;:::o;2068:325::-;2125:6;2174:2;2162:9;2153:7;2149:23;2145:32;2142:119;;;2180:79;;:::i;:::-;2142:119;2300:1;2325:51;2368:7;2359:6;2348:9;2344:22;2325:51;:::i;:::-;2315:61;;2271:115;2068:325;;;;:::o;2399:466::-;2463:6;2471;2520:2;2508:9;2499:7;2495:23;2491:32;2488:119;;;2526:79;;:::i;:::-;2488:119;2646:1;2671:51;2714:7;2705:6;2694:9;2690:22;2671:51;:::i;:::-;2661:61;;2617:115;2771:2;2797:51;2840:7;2831:6;2820:9;2816:22;2797:51;:::i;:::-;2787:61;;2742:116;2399:466;;;;;:::o;2871:171::-;2936:10;2957:42;2995:3;2987:6;2957:42;:::i;:::-;3031:4;3026:3;3022:14;3008:28;;2871:171;;;;:::o;3048:118::-;3135:24;3153:5;3135:24;:::i;:::-;3130:3;3123:37;3048:118;;:::o;3202:684::-;3336:51;3381:5;3336:51;:::i;:::-;3403:83;3479:6;3474:3;3403:83;:::i;:::-;3396:90;;3510:53;3557:5;3510:53;:::i;:::-;3586:7;3617:1;3602:277;3627:6;3624:1;3621:13;3602:277;;;3703:6;3697:13;3730:59;3785:3;3770:13;3730:59;:::i;:::-;3723:66;;3812:57;3862:6;3812:57;:::i;:::-;3802:67;;3662:217;3649:1;3646;3642:9;3637:14;;3602:277;;;3606:14;3312:574;;;3202:684;;:::o;3892:109::-;3973:21;3988:5;3973:21;:::i;:::-;3968:3;3961:34;3892:109;;:::o;4007:159::-;4108:51;4153:5;4108:51;:::i;:::-;4103:3;4096:64;4007:159;;:::o;4172:167::-;4277:55;4326:5;4277:55;:::i;:::-;4272:3;4265:68;4172:167;;:::o;4345:366::-;4487:3;4508:67;4572:2;4567:3;4508:67;:::i;:::-;4501:74;;4584:93;4673:3;4584:93;:::i;:::-;4702:2;4697:3;4693:12;4686:19;;4345:366;;;:::o;4717:::-;4859:3;4880:67;4944:2;4939:3;4880:67;:::i;:::-;4873:74;;4956:93;5045:3;4956:93;:::i;:::-;5074:2;5069:3;5065:12;5058:19;;4717:366;;;:::o;5089:::-;5231:3;5252:67;5316:2;5311:3;5252:67;:::i;:::-;5245:74;;5328:93;5417:3;5328:93;:::i;:::-;5446:2;5441:3;5437:12;5430:19;;5089:366;;;:::o;5461:::-;5603:3;5624:67;5688:2;5683:3;5624:67;:::i;:::-;5617:74;;5700:93;5789:3;5700:93;:::i;:::-;5818:2;5813:3;5809:12;5802:19;;5461:366;;;:::o;5893:682::-;6040:4;6035:3;6031:14;6128:4;6121:5;6117:16;6111:23;6147:63;6204:4;6199:3;6195:14;6181:12;6147:63;:::i;:::-;6055:165;6302:4;6295:5;6291:16;6285:23;6321:63;6378:4;6373:3;6369:14;6355:12;6321:63;:::i;:::-;6230:164;6476:4;6469:5;6465:16;6459:23;6495:63;6552:4;6547:3;6543:14;6529:12;6495:63;:::i;:::-;6404:164;6009:566;5893:682;;:::o;6581:108::-;6658:24;6676:5;6658:24;:::i;:::-;6653:3;6646:37;6581:108;;:::o;6695:118::-;6782:24;6800:5;6782:24;:::i;:::-;6777:3;6770:37;6695:118;;:::o;6819:102::-;6892:22;6908:5;6892:22;:::i;:::-;6887:3;6880:35;6819:102;;:::o;6927:112::-;7010:22;7026:5;7010:22;:::i;:::-;7005:3;6998:35;6927:112;;:::o;7045:222::-;7138:4;7176:2;7165:9;7161:18;7153:26;;7189:71;7257:1;7246:9;7242:17;7233:6;7189:71;:::i;:::-;7045:222;;;;:::o;7273:332::-;7394:4;7432:2;7421:9;7417:18;7409:26;;7445:71;7513:1;7502:9;7498:17;7489:6;7445:71;:::i;:::-;7526:72;7594:2;7583:9;7579:18;7570:6;7526:72;:::i;:::-;7273:332;;;;;:::o;7611:312::-;7748:4;7786;7775:9;7771:20;7763:28;;7801:115;7913:1;7902:9;7898:17;7889:6;7801:115;:::i;:::-;7611:312;;;;:::o;7929:210::-;8016:4;8054:2;8043:9;8039:18;8031:26;;8067:65;8129:1;8118:9;8114:17;8105:6;8067:65;:::i;:::-;7929:210;;;;:::o;8145:250::-;8252:4;8290:2;8279:9;8275:18;8267:26;;8303:85;8385:1;8374:9;8370:17;8361:6;8303:85;:::i;:::-;8145:250;;;;:::o;8401:258::-;8512:4;8550:2;8539:9;8535:18;8527:26;;8563:89;8649:1;8638:9;8634:17;8625:6;8563:89;:::i;:::-;8401:258;;;;:::o;8665:419::-;8831:4;8869:2;8858:9;8854:18;8846:26;;8918:9;8912:4;8908:20;8904:1;8893:9;8889:17;8882:47;8946:131;9072:4;8946:131;:::i;:::-;8938:139;;8665:419;;;:::o;9090:::-;9256:4;9294:2;9283:9;9279:18;9271:26;;9343:9;9337:4;9333:20;9329:1;9318:9;9314:17;9307:47;9371:131;9497:4;9371:131;:::i;:::-;9363:139;;9090:419;;;:::o;9515:::-;9681:4;9719:2;9708:9;9704:18;9696:26;;9768:9;9762:4;9758:20;9754:1;9743:9;9739:17;9732:47;9796:131;9922:4;9796:131;:::i;:::-;9788:139;;9515:419;;;:::o;9940:::-;10106:4;10144:2;10133:9;10129:18;10121:26;;10193:9;10187:4;10183:20;10179:1;10168:9;10164:17;10157:47;10221:131;10347:4;10221:131;:::i;:::-;10213:139;;9940:419;;;:::o;10365:322::-;10508:4;10546:2;10535:9;10531:18;10523:26;;10559:121;10677:1;10666:9;10662:17;10653:6;10559:121;:::i;:::-;10365:322;;;;:::o;10693:222::-;10786:4;10824:2;10813:9;10809:18;10801:26;;10837:71;10905:1;10894:9;10890:17;10881:6;10837:71;:::i;:::-;10693:222;;;;:::o;10921:332::-;11042:4;11080:2;11069:9;11065:18;11057:26;;11093:71;11161:1;11150:9;11146:17;11137:6;11093:71;:::i;:::-;11174:72;11242:2;11231:9;11227:18;11218:6;11174:72;:::i;:::-;10921:332;;;;;:::o;11259:442::-;11408:4;11446:2;11435:9;11431:18;11423:26;;11459:71;11527:1;11516:9;11512:17;11503:6;11459:71;:::i;:::-;11540:72;11608:2;11597:9;11593:18;11584:6;11540:72;:::i;:::-;11622;11690:2;11679:9;11675:18;11666:6;11622:72;:::i;:::-;11259:442;;;;;;:::o;11707:214::-;11796:4;11834:2;11823:9;11819:18;11811:26;;11847:67;11911:1;11900:9;11896:17;11887:6;11847:67;:::i;:::-;11707:214;;;;:::o;12008:97::-;12072:4;12095:3;12087:11;;12008:97;;;:::o;12111:103::-;12175:6;12203:4;12193:14;;12111:103;;;:::o;12220:110::-;12287:4;12319;12314:3;12310:14;12302:22;;12220:110;;;:::o;12336:142::-;12432:11;12469:3;12454:18;;12336:142;;;;:::o;12484:169::-;12568:11;12602:6;12597:3;12590:19;12642:4;12637:3;12633:14;12618:29;;12484:169;;;;:::o;12659:348::-;12699:7;12722:20;12740:1;12722:20;:::i;:::-;12717:25;;12756:20;12774:1;12756:20;:::i;:::-;12751:25;;12944:1;12876:66;12872:74;12869:1;12866:81;12861:1;12854:9;12847:17;12843:105;12840:131;;;12951:18;;:::i;:::-;12840:131;12999:1;12996;12992:9;12981:20;;12659:348;;;;:::o;13013:191::-;13053:4;13073:20;13091:1;13073:20;:::i;:::-;13068:25;;13107:20;13125:1;13107:20;:::i;:::-;13102:25;;13146:1;13143;13140:8;13137:34;;;13151:18;;:::i;:::-;13137:34;13196:1;13193;13189:9;13181:17;;13013:191;;;;:::o;13210:96::-;13247:7;13276:24;13294:5;13276:24;:::i;:::-;13265:35;;13210:96;;;:::o;13312:90::-;13346:7;13389:5;13382:13;13375:21;13364:32;;13312:90;;;:::o;13408:126::-;13445:7;13485:42;13478:5;13474:54;13463:65;;13408:126;;;:::o;13540:77::-;13577:7;13606:5;13595:16;;13540:77;;;:::o;13623:86::-;13658:7;13698:4;13691:5;13687:16;13676:27;;13623:86;;;:::o;13715:140::-;13779:9;13812:37;13843:5;13812:37;:::i;:::-;13799:50;;13715:140;;;:::o;13861:144::-;13929:9;13962:37;13993:5;13962:37;:::i;:::-;13949:50;;13861:144;;;:::o;14011:126::-;14061:9;14094:37;14125:5;14094:37;:::i;:::-;14081:50;;14011:126;;;:::o;14143:113::-;14193:9;14226:24;14244:5;14226:24;:::i;:::-;14213:37;;14143:113;;;:::o;14262:171::-;14301:3;14324:24;14342:5;14324:24;:::i;:::-;14315:33;;14370:4;14363:5;14360:15;14357:41;;;14378:18;;:::i;:::-;14357:41;14425:1;14418:5;14414:13;14407:20;;14262:171;;;:::o;14439:233::-;14478:3;14501:24;14519:5;14501:24;:::i;:::-;14492:33;;14547:66;14540:5;14537:77;14534:103;;;14617:18;;:::i;:::-;14534:103;14664:1;14657:5;14653:13;14646:20;;14439:233;;;:::o;14678:180::-;14726:77;14723:1;14716:88;14823:4;14820:1;14813:15;14847:4;14844:1;14837:15;14864:180;14912:77;14909:1;14902:88;15009:4;15006:1;14999:15;15033:4;15030:1;15023:15;15173:117;15282:1;15279;15272:12;15296:223;15436:34;15432:1;15424:6;15420:14;15413:58;15505:6;15500:2;15492:6;15488:15;15481:31;15296:223;:::o;15525:174::-;15665:26;15661:1;15653:6;15649:14;15642:50;15525:174;:::o;15705:160::-;15845:12;15841:1;15833:6;15829:14;15822:36;15705:160;:::o;15871:225::-;16011:34;16007:1;15999:6;15995:14;15988:58;16080:8;16075:2;16067:6;16063:15;16056:33;15871:225;:::o;16102:122::-;16175:24;16193:5;16175:24;:::i;:::-;16168:5;16165:35;16155:63;;16214:1;16211;16204:12;16155:63;16102:122;:::o;16230:::-;16303:24;16321:5;16303:24;:::i;:::-;16296:5;16293:35;16283:63;;16342:1;16339;16332:12;16283:63;16230:122;:::o;16358:118::-;16429:22;16445:5;16429:22;:::i;:::-;16422:5;16419:33;16409:61;;16466:1;16463;16456:12;16409:61;16358:118;:::o",
	"source": "// SPDX-License-Identifier: GPL-3.0\r\n\r\npragma solidity ^0.8.7; \r\n\r\nimport \"./SeedToken.sol\"; \r\nimport \"./ISeedToken.sol\"; \r\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\r\n\r\n    /**\r\n     * @dev Contract for game handling.\r\n     * Places buildings on map, stakes $ONE tokens and \r\n     * mints rewards for farmers. Each player has 81 \r\n     * tiles where they can build. Each tile has a timestamp \r\n     * making each building independent farming unit.  \r\n     */\r\n\r\ncontract Builder { \r\n\r\n    address public owner; \r\n\r\n    mapping(address => uint8[81]) public map; \r\n    mapping(address => uint256) public housesCount;  \r\n    mapping(uint => Structure) public structures; \r\n\r\n    mapping(address => bool) public isStaking; \r\n    mapping(address => uint256) public staked;\r\n    mapping(address => uint256[81]) public stakedTime; \r\n\r\n    ERC20 public ONE; \r\n    ISeedToken public SEED; \r\n    \r\n    /**\r\n     * @dev Saves data about structure's price and farming time. \r\n     */ \r\n    struct Structure {\r\n        uint256 price; \r\n        uint256 time;\r\n        uint256 rate; \r\n    } \r\n  \r\n\r\n    /** \r\n     * @dev Sets contract address for {ONE} and {SEED} tokens. \r\n     * \r\n     * {structures} is initialized with available structures. \r\n     */\r\n\r\n    constructor(ISeedToken _SEED) {\r\n        owner = msg.sender; \r\n\r\n        SEED = _SEED; \r\n\r\n        Structure storage house = structures[1]; \r\n        house.price = 0.1 ether; \r\n        house.time = 4 hours; \r\n        house.rate = 1 ether; \r\n    }\r\n\r\n    /**\r\n     * @dev Places a new structure on the map and sets up farming. \r\n     * \r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits a {Stake} event.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - value attached must be equal to `_sid' price. \r\n     * - `_sId` at `_pos` must be different from current value.\r\n     */\r\n\r\n    function placeStructure(uint8 _pos, uint8 _sId) external \r\n        priced(_sId) unique(_pos, _sId) payable returns (bool) {\r\n        \r\n        if(isStaking[msg.sender] == false) {\r\n            isStaking[msg.sender] = true;            \r\n        }\r\n\r\n        map[msg.sender][_pos] = _sId; \r\n        housesCount[msg.sender]++; \r\n\r\n        stakedTime[msg.sender][_pos] = block.timestamp; \r\n\r\n        emit Stake(msg.sender, msg.value);\r\n        return true; \r\n    }\r\n\r\n     /**\r\n     * @dev Removes a structure from the map, stops farming, returns\r\n     * staked tokens.  \r\n     * \r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits an {Unstake} event.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - sender must have tokens staked. \r\n     */\r\n\r\n    function removeStructure(uint8 _pos) external \r\n        staking returns (bool) {\r\n\r\n        uint8 currentStruct = map[msg.sender][_pos]; \r\n        if(currentStruct == 0) revert(\"Empty tile\"); \r\n\r\n        withdrawTileYield(_pos, currentStruct); \r\n        payable(msg.sender).transfer(structures[currentStruct].price); \r\n\r\n        map[msg.sender][_pos] = 0; \r\n        housesCount[msg.sender]--; \r\n        if(housesCount[msg.sender] == 0) {\r\n            isStaking[msg.sender] = false;    \r\n        }\r\n\r\n        emit Unstake(msg.sender, structures[currentStruct].price); \r\n        return true; \r\n    }\r\n\r\n    /**\r\n     * @dev Withdraw yield of {Seed} from the structure. \r\n     * \r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits a {YieldWithdraw} event.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - sender must have tokens staked. \r\n     */\r\n\r\n    function withdrawTileYield(uint8 _pos, uint8 _sId) public \r\n        staking returns (bool) {\r\n\r\n        uint8 currentStruct = map[msg.sender][_pos]; \r\n        if(currentStruct == 0) revert(\"Empty tile\"); \r\n\r\n        uint256 timeStaked = calculateYieldTime(\r\n            stakedTime[msg.sender][_pos], \r\n            structures[_sId].time\r\n        ); \r\n        stakedTime[msg.sender][_pos] = 0; \r\n        \r\n        uint256 reward = calculateReward(\r\n            timeStaked, \r\n            _sId\r\n        );  \r\n        SEED.mint(msg.sender, reward); \r\n\r\n        emit YieldWithdraw(msg.sender); \r\n\r\n        return true; \r\n    }\r\n\r\n    /**\r\n     * @dev Returns time while structure was accumulating tokens. \r\n     */\r\n\r\n    function calculateYieldTime(uint256 start, uint256 bound) public\r\n          returns (uint256) {\r\n        uint256 yieldTime = block.timestamp - start; \r\n        emit calculatedYield(start, block.timestamp); \r\n        return (yieldTime > bound) ? bound : yieldTime; \r\n    } \r\n    event calculatedYield(uint256 start, uint256 end); \r\n    /**\r\n     * @dev Returns amount of yield from a structure. \r\n     */\r\n\r\n    function calculateReward(uint256 _stkTime, uint8 _sId) internal \r\n    view returns (uint256) {\r\n        uint256 reward =  _stkTime * structures[_sId].rate;\r\n        return reward; \r\n    }\r\n\r\n    /**\r\n     * @dev Returns player's gamemap. \r\n     */\r\n\r\n    function getMap() external view returns (uint8[81] memory) { \r\n        return map[msg.sender]; \r\n    }\r\n\r\n     /**\r\n     * @dev Returns amount of built houses. \r\n     */\r\n\r\n    function getHouses() external view returns (uint256) {\r\n        return housesCount[msg.sender]; \r\n    }    \r\n\r\n    /**\r\n     * @dev Returns in-game structure.   \r\n     */\r\n\r\n    function getStructure(uint _sId) external view returns (Structure memory) {\r\n        return structures[_sId]; \r\n    }\r\n\r\n    /**\r\n     * @dev Returns isStaking mapping. \r\n     */\r\n\r\n    function getIsStaking() external view returns (bool) {\r\n        return isStaking[msg.sender]; \r\n    }\r\n\r\n    /**\r\n     * @dev Returns amount of staked tokens. \r\n     */\r\n\r\n    function getStaked() external view returns (uint256) {\r\n        return staked[msg.sender]; \r\n    }\r\n\r\n    /**\r\n     * @dev Returns time when structure was staked. \r\n     */\r\n\r\n    function getStakedTime(uint8 _pos) external view returns (uint256) {\r\n        return stakedTime[msg.sender][_pos]; \r\n    }  \r\n\r\n    /**\r\n     * @dev Returns boolean whether building finished accumulating\r\n     * tokens or not.  \r\n     */\r\n\r\n     function isReadyForWithdraw(uint8 _pos) external  returns (bool) {\r\n         uint8 currentStruct = map[msg.sender][_pos]; \r\n         if(currentStruct == 0) revert(\"Empty tile\");  \r\n\r\n         return (calculateYieldTime(\r\n            stakedTime[msg.sender][_pos], \r\n            structures[currentStruct].time\r\n            ) == structures[currentStruct].time); \r\n     }\r\n\r\n    /**\r\n     * @dev Requires sender to be owner.  \r\n     */\r\n\r\n    modifier onlyOwner {\r\n        require(msg.sender == owner, \r\n        \"Can't call owner function\"); \r\n        _; \r\n    }\r\n\r\n    /**\r\n     * @dev Requires price to be in price mapping. \r\n     */\r\n\r\n    modifier priced(uint8 _sId) {\r\n        require(msg.value == structures[_sId].price, \r\n        \"Different value attached\");\r\n        _; \r\n    }\r\n\r\n    /**\r\n     * @dev Requires price to be in price mapping. \r\n     */\r\n\r\n    modifier unique(uint8 _pos, uint8 _sId) {\r\n        require(map[msg.sender][_pos] != _sId,\r\n        \"You have already built this and here\"); \r\n        _; \r\n    }\r\n\r\n    /**\r\n     * @dev Requires price to be in price mapping. \r\n     */\r\n\r\n    modifier staking() {\r\n        require(isStaking[msg.sender] == true, \r\n        \"You can't withdraw if you didn't stake\"); \r\n        _; \r\n    }\r\n\r\n\r\n    event Stake(address indexed from, uint256 amount); \r\n    event Unstake(address indexed from, uint256 amount); \r\n    event YieldWithdraw(address indexed from); \r\n}",
	"sourcePath": "C:/Github/SeedFarm/contracts/Builder.sol",
	"ast": {
	  "absolutePath": "/C/Github/SeedFarm/contracts/Builder.sol",
	  "exportedSymbols": {
		"Builder": [
		  589
		],
		"Context": [
		  1409
		],
		"ERC20": [
		  1284
		],
		"IERC20": [
		  1362
		],
		"IERC20Metadata": [
		  1387
		],
		"ISeedToken": [
		  599
		],
		"Ownable": [
		  738
		],
		"SeedToken": [
		  633
		]
	  },
	  "id": 590,
	  "license": "GPL-3.0",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 1,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".7"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "39:23:0"
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/SeedToken.sol",
		  "file": "./SeedToken.sol",
		  "id": 2,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 590,
		  "sourceUnit": 634,
		  "src": "67:25:0",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/ISeedToken.sol",
		  "file": "./ISeedToken.sol",
		  "id": 3,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 590,
		  "sourceUnit": 600,
		  "src": "95:26:0",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "id": 4,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 590,
		  "sourceUnit": 1285,
		  "src": "124:55:0",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": false,
		  "baseContracts": [],
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "documentation": {
			"id": 5,
			"nodeType": "StructuredDocumentation",
			"src": "187:285:0",
			"text": " @dev Contract for game handling.\n Places buildings on map, stakes $ONE tokens and \n mints rewards for farmers. Each player has 81 \n tiles where they can build. Each tile has a timestamp \n making each building independent farming unit.  "
		  },
		  "fullyImplemented": true,
		  "id": 589,
		  "linearizedBaseContracts": [
			589
		  ],
		  "name": "Builder",
		  "nameLocation": "485:7:0",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "constant": false,
			  "functionSelector": "8da5cb5b",
			  "id": 7,
			  "mutability": "mutable",
			  "name": "owner",
			  "nameLocation": "518:5:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "503:20:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 6,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "503:7:0",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "9dfb94ba",
			  "id": 13,
			  "mutability": "mutable",
			  "name": "map",
			  "nameLocation": "570:3:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "533:40:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
				"typeString": "mapping(address => uint8[81])"
			  },
			  "typeName": {
				"id": 12,
				"keyType": {
				  "id": 8,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "541:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "533:29:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
				  "typeString": "mapping(address => uint8[81])"
				},
				"valueType": {
				  "baseType": {
					"id": 9,
					"name": "uint8",
					"nodeType": "ElementaryTypeName",
					"src": "552:5:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					}
				  },
				  "id": 11,
				  "length": {
					"hexValue": "3831",
					"id": 10,
					"isConstant": false,
					"isLValue": false,
					"isPure": true,
					"kind": "number",
					"lValueRequested": false,
					"nodeType": "Literal",
					"src": "558:2:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_rational_81_by_1",
					  "typeString": "int_const 81"
					},
					"value": "81"
				  },
				  "nodeType": "ArrayTypeName",
				  "src": "552:9:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_array$_t_uint8_$81_storage_ptr",
					"typeString": "uint8[81]"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "75c30a9f",
			  "id": 17,
			  "mutability": "mutable",
			  "name": "housesCount",
			  "nameLocation": "616:11:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "581:46:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 16,
				"keyType": {
				  "id": 14,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "589:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "581:27:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 15,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "600:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "9e3cb488",
			  "id": 22,
			  "mutability": "mutable",
			  "name": "structures",
			  "nameLocation": "670:10:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "636:44:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
				"typeString": "mapping(uint256 => struct Builder.Structure)"
			  },
			  "typeName": {
				"id": 21,
				"keyType": {
				  "id": 18,
				  "name": "uint",
				  "nodeType": "ElementaryTypeName",
				  "src": "644:4:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				},
				"nodeType": "Mapping",
				"src": "636:26:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
				  "typeString": "mapping(uint256 => struct Builder.Structure)"
				},
				"valueType": {
				  "id": 20,
				  "nodeType": "UserDefinedTypeName",
				  "pathNode": {
					"id": 19,
					"name": "Structure",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 49,
					"src": "652:9:0"
				  },
				  "referencedDeclaration": 49,
				  "src": "652:9:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
					"typeString": "struct Builder.Structure"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "6f49712b",
			  "id": 26,
			  "mutability": "mutable",
			  "name": "isStaking",
			  "nameLocation": "722:9:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "690:41:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 25,
				"keyType": {
				  "id": 23,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "698:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "690:24:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 24,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "709:4:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "98807d84",
			  "id": 30,
			  "mutability": "mutable",
			  "name": "staked",
			  "nameLocation": "774:6:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "739:41:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 29,
				"keyType": {
				  "id": 27,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "747:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "739:27:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 28,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "758:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "4aec48c9",
			  "id": 36,
			  "mutability": "mutable",
			  "name": "stakedTime",
			  "nameLocation": "826:10:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "787:49:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
				"typeString": "mapping(address => uint256[81])"
			  },
			  "typeName": {
				"id": 35,
				"keyType": {
				  "id": 31,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "795:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "787:31:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
				  "typeString": "mapping(address => uint256[81])"
				},
				"valueType": {
				  "baseType": {
					"id": 32,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "806:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "id": 34,
				  "length": {
					"hexValue": "3831",
					"id": 33,
					"isConstant": false,
					"isLValue": false,
					"isPure": true,
					"kind": "number",
					"lValueRequested": false,
					"nodeType": "Literal",
					"src": "814:2:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_rational_81_by_1",
					  "typeString": "int_const 81"
					},
					"value": "81"
				  },
				  "nodeType": "ArrayTypeName",
				  "src": "806:11:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_array$_t_uint256_$81_storage_ptr",
					"typeString": "uint256[81]"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "c2ee3a08",
			  "id": 39,
			  "mutability": "mutable",
			  "name": "ONE",
			  "nameLocation": "859:3:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "846:16:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_contract$_ERC20_$1284",
				"typeString": "contract ERC20"
			  },
			  "typeName": {
				"id": 38,
				"nodeType": "UserDefinedTypeName",
				"pathNode": {
				  "id": 37,
				  "name": "ERC20",
				  "nodeType": "IdentifierPath",
				  "referencedDeclaration": 1284,
				  "src": "846:5:0"
				},
				"referencedDeclaration": 1284,
				"src": "846:5:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_contract$_ERC20_$1284",
				  "typeString": "contract ERC20"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "0edc4737",
			  "id": 42,
			  "mutability": "mutable",
			  "name": "SEED",
			  "nameLocation": "888:4:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "870:22:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_contract$_ISeedToken_$599",
				"typeString": "contract ISeedToken"
			  },
			  "typeName": {
				"id": 41,
				"nodeType": "UserDefinedTypeName",
				"pathNode": {
				  "id": 40,
				  "name": "ISeedToken",
				  "nodeType": "IdentifierPath",
				  "referencedDeclaration": 599,
				  "src": "870:10:0"
				},
				"referencedDeclaration": 599,
				"src": "870:10:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_contract$_ISeedToken_$599",
				  "typeString": "contract ISeedToken"
				}
			  },
			  "visibility": "public"
			},
			{
			  "canonicalName": "Builder.Structure",
			  "id": 49,
			  "members": [
				{
				  "constant": false,
				  "id": 44,
				  "mutability": "mutable",
				  "name": "price",
				  "nameLocation": "1028:5:0",
				  "nodeType": "VariableDeclaration",
				  "scope": 49,
				  "src": "1020:13:0",
				  "stateVariable": false,
				  "storageLocation": "default",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  },
				  "typeName": {
					"id": 43,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "1020:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "visibility": "internal"
				},
				{
				  "constant": false,
				  "id": 46,
				  "mutability": "mutable",
				  "name": "time",
				  "nameLocation": "1053:4:0",
				  "nodeType": "VariableDeclaration",
				  "scope": 49,
				  "src": "1045:12:0",
				  "stateVariable": false,
				  "storageLocation": "default",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  },
				  "typeName": {
					"id": 45,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "1045:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "visibility": "internal"
				},
				{
				  "constant": false,
				  "id": 48,
				  "mutability": "mutable",
				  "name": "rate",
				  "nameLocation": "1076:4:0",
				  "nodeType": "VariableDeclaration",
				  "scope": 49,
				  "src": "1068:12:0",
				  "stateVariable": false,
				  "storageLocation": "default",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  },
				  "typeName": {
					"id": 47,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "1068:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "visibility": "internal"
				}
			  ],
			  "name": "Structure",
			  "nameLocation": "999:9:0",
			  "nodeType": "StructDefinition",
			  "scope": 589,
			  "src": "992:97:0",
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 90,
				"nodeType": "Block",
				"src": "1291:216:0",
				"statements": [
				  {
					"expression": {
					  "id": 59,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 56,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 7,
						"src": "1302:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 57,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "1310:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 58,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "1310:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "1302:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 60,
					"nodeType": "ExpressionStatement",
					"src": "1302:18:0"
				  },
				  {
					"expression": {
					  "id": 63,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 61,
						"name": "SEED",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 42,
						"src": "1334:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_ISeedToken_$599",
						  "typeString": "contract ISeedToken"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 62,
						"name": "_SEED",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 53,
						"src": "1341:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_ISeedToken_$599",
						  "typeString": "contract ISeedToken"
						}
					  },
					  "src": "1334:12:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_ISeedToken_$599",
						"typeString": "contract ISeedToken"
					  }
					},
					"id": 64,
					"nodeType": "ExpressionStatement",
					"src": "1334:12:0"
				  },
				  {
					"assignments": [
					  67
					],
					"declarations": [
					  {
						"constant": false,
						"id": 67,
						"mutability": "mutable",
						"name": "house",
						"nameLocation": "1378:5:0",
						"nodeType": "VariableDeclaration",
						"scope": 90,
						"src": "1360:23:0",
						"stateVariable": false,
						"storageLocation": "storage",
						"typeDescriptions": {
						  "typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
						  "typeString": "struct Builder.Structure"
						},
						"typeName": {
						  "id": 66,
						  "nodeType": "UserDefinedTypeName",
						  "pathNode": {
							"id": 65,
							"name": "Structure",
							"nodeType": "IdentifierPath",
							"referencedDeclaration": 49,
							"src": "1360:9:0"
						  },
						  "referencedDeclaration": 49,
						  "src": "1360:9:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 71,
					"initialValue": {
					  "baseExpression": {
						"id": 68,
						"name": "structures",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 22,
						"src": "1386:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
						  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
						}
					  },
					  "id": 70,
					  "indexExpression": {
						"hexValue": "31",
						"id": 69,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1397:1:0",
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
					  "src": "1386:13:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_struct$_Structure_$49_storage",
						"typeString": "struct Builder.Structure storage ref"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "1360:39:0"
				  },
				  {
					"expression": {
					  "id": 76,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"expression": {
						  "id": 72,
						  "name": "house",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 67,
						  "src": "1411:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure storage pointer"
						  }
						},
						"id": 74,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"memberName": "price",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 44,
						"src": "1411:11:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "302e31",
						"id": 75,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1425:9:0",
						"subdenomination": "ether",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100000000000000000_by_1",
						  "typeString": "int_const 100000000000000000"
						},
						"value": "0.1"
					  },
					  "src": "1411:23:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 77,
					"nodeType": "ExpressionStatement",
					"src": "1411:23:0"
				  },
				  {
					"expression": {
					  "id": 82,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"expression": {
						  "id": 78,
						  "name": "house",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 67,
						  "src": "1446:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure storage pointer"
						  }
						},
						"id": 80,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"memberName": "time",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 46,
						"src": "1446:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "34",
						"id": 81,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1459:7:0",
						"subdenomination": "hours",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_14400_by_1",
						  "typeString": "int_const 14400"
						},
						"value": "4"
					  },
					  "src": "1446:20:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 83,
					"nodeType": "ExpressionStatement",
					"src": "1446:20:0"
				  },
				  {
					"expression": {
					  "id": 88,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"expression": {
						  "id": 84,
						  "name": "house",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 67,
						  "src": "1478:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure storage pointer"
						  }
						},
						"id": 86,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"memberName": "rate",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 48,
						"src": "1478:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "31",
						"id": 87,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1491:7:0",
						"subdenomination": "ether",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_1000000000000000000_by_1",
						  "typeString": "int_const 1000000000000000000"
						},
						"value": "1"
					  },
					  "src": "1478:20:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 89,
					"nodeType": "ExpressionStatement",
					"src": "1478:20:0"
				  }
				]
			  },
			  "documentation": {
				"id": 50,
				"nodeType": "StructuredDocumentation",
				"src": "1102:151:0",
				"text": " @dev Sets contract address for {ONE} and {SEED} tokens. \n \n {structures} is initialized with available structures. "
			  },
			  "id": 91,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 54,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 53,
					"mutability": "mutable",
					"name": "_SEED",
					"nameLocation": "1284:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 91,
					"src": "1273:16:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_contract$_ISeedToken_$599",
					  "typeString": "contract ISeedToken"
					},
					"typeName": {
					  "id": 52,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 51,
						"name": "ISeedToken",
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 599,
						"src": "1273:10:0"
					  },
					  "referencedDeclaration": 599,
					  "src": "1273:10:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_ISeedToken_$599",
						"typeString": "contract ISeedToken"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1272:18:0"
			  },
			  "returnParameters": {
				"id": 55,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1291:0:0"
			  },
			  "scope": 589,
			  "src": "1261:246:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 157,
				"nodeType": "Block",
				"src": "2010:338:0",
				"statements": [
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "id": 113,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"baseExpression": {
						  "id": 108,
						  "name": "isStaking",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 26,
						  "src": "2034:9:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 111,
						"indexExpression": {
						  "expression": {
							"id": 109,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2044:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 110,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2044:10:0",
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
						"src": "2034:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "66616c7365",
						"id": 112,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2059:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "false"
					  },
					  "src": "2034:30:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 122,
					"nodeType": "IfStatement",
					"src": "2031:102:0",
					"trueBody": {
					  "id": 121,
					  "nodeType": "Block",
					  "src": "2066:67:0",
					  "statements": [
						{
						  "expression": {
							"id": 119,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "baseExpression": {
								"id": 114,
								"name": "isStaking",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 26,
								"src": "2081:9:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								  "typeString": "mapping(address => bool)"
								}
							  },
							  "id": 117,
							  "indexExpression": {
								"expression": {
								  "id": 115,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "2091:3:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 116,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "2091:10:0",
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
							  "src": "2081:21:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "hexValue": "74727565",
							  "id": 118,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "bool",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "2105:4:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  },
							  "value": "true"
							},
							"src": "2081:28:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "id": 120,
						  "nodeType": "ExpressionStatement",
						  "src": "2081:28:0"
						}
					  ]
					}
				  },
				  {
					"expression": {
					  "id": 130,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 123,
							"name": "map",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 13,
							"src": "2145:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							  "typeString": "mapping(address => uint8[81] storage ref)"
							}
						  },
						  "id": 127,
						  "indexExpression": {
							"expression": {
							  "id": 124,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "2149:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 125,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "2149:10:0",
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
						  "src": "2145:15:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint8_$81_storage",
							"typeString": "uint8[81] storage ref"
						  }
						},
						"id": 128,
						"indexExpression": {
						  "id": 126,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 94,
						  "src": "2161:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2145:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 129,
						"name": "_sId",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 96,
						"src": "2169:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "src": "2145:28:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"id": 131,
					"nodeType": "ExpressionStatement",
					"src": "2145:28:0"
				  },
				  {
					"expression": {
					  "id": 136,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "++",
					  "prefix": false,
					  "src": "2185:25:0",
					  "subExpression": {
						"baseExpression": {
						  "id": 132,
						  "name": "housesCount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 17,
						  "src": "2185:11:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 135,
						"indexExpression": {
						  "expression": {
							"id": 133,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2197:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 134,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2197:10:0",
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
						"src": "2185:23:0",
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
					"id": 137,
					"nodeType": "ExpressionStatement",
					"src": "2185:25:0"
				  },
				  {
					"expression": {
					  "id": 146,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 138,
							"name": "stakedTime",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 36,
							"src": "2224:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
							  "typeString": "mapping(address => uint256[81] storage ref)"
							}
						  },
						  "id": 142,
						  "indexExpression": {
							"expression": {
							  "id": 139,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "2235:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 140,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "2235:10:0",
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
						  "src": "2224:22:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint256_$81_storage",
							"typeString": "uint256[81] storage ref"
						  }
						},
						"id": 143,
						"indexExpression": {
						  "id": 141,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 94,
						  "src": "2247:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2224:28:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 144,
						  "name": "block",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967292,
						  "src": "2255:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_block",
							"typeString": "block"
						  }
						},
						"id": 145,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "timestamp",
						"nodeType": "MemberAccess",
						"src": "2255:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "2224:46:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 147,
					"nodeType": "ExpressionStatement",
					"src": "2224:46:0"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 149,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2295:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 150,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2295:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"id": 151,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2307:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 152,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "value",
						  "nodeType": "MemberAccess",
						  "src": "2307:9:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
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
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 148,
						"name": "Stake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 578,
						"src": "2289:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 153,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2289:28:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 154,
					"nodeType": "EmitStatement",
					"src": "2284:33:0"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 155,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "2335:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 107,
					"id": 156,
					"nodeType": "Return",
					"src": "2328:11:0"
				  }
				]
			  },
			  "documentation": {
				"id": 92,
				"nodeType": "StructuredDocumentation",
				"src": "1515:365:0",
				"text": " @dev Places a new structure on the map and sets up farming. \n \n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Stake} event.\n Requirements:\n - value attached must be equal to `_sid' price. \n - `_sId` at `_pos` must be different from current value."
			  },
			  "functionSelector": "c6313eb7",
			  "id": 158,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "id": 99,
					  "name": "_sId",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 96,
					  "src": "1962:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					}
				  ],
				  "id": 100,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 98,
					"name": "priced",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 536,
					"src": "1955:6:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1955:12:0"
				},
				{
				  "arguments": [
					{
					  "id": 102,
					  "name": "_pos",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 94,
					  "src": "1975:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					{
					  "id": 103,
					  "name": "_sId",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 96,
					  "src": "1981:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					}
				  ],
				  "id": 104,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 101,
					"name": "unique",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 557,
					"src": "1968:6:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1968:18:0"
				}
			  ],
			  "name": "placeStructure",
			  "nameLocation": "1897:14:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 97,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 94,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "1918:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 158,
					"src": "1912:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 93,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "1912:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 96,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "1930:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 158,
					"src": "1924:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 95,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "1924:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1911:24:0"
			  },
			  "returnParameters": {
				"id": 107,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 106,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 158,
					"src": "2004:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 105,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "2004:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2003:6:0"
			  },
			  "scope": 589,
			  "src": "1888:460:0",
			  "stateMutability": "payable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 243,
				"nodeType": "Block",
				"src": "2759:518:0",
				"statements": [
				  {
					"assignments": [
					  169
					],
					"declarations": [
					  {
						"constant": false,
						"id": 169,
						"mutability": "mutable",
						"name": "currentStruct",
						"nameLocation": "2778:13:0",
						"nodeType": "VariableDeclaration",
						"scope": 243,
						"src": "2772:19:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						},
						"typeName": {
						  "id": 168,
						  "name": "uint8",
						  "nodeType": "ElementaryTypeName",
						  "src": "2772:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 176,
					"initialValue": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 170,
						  "name": "map",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 13,
						  "src": "2794:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							"typeString": "mapping(address => uint8[81] storage ref)"
						  }
						},
						"id": 173,
						"indexExpression": {
						  "expression": {
							"id": 171,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2798:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 172,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2798:10:0",
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
						"src": "2794:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint8_$81_storage",
						  "typeString": "uint8[81] storage ref"
						}
					  },
					  "id": 175,
					  "indexExpression": {
						"id": 174,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 161,
						"src": "2810:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "2794:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "2772:43:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  },
					  "id": 179,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 177,
						"name": "currentStruct",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 169,
						"src": "2830:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 178,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2847:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "2830:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 184,
					"nodeType": "IfStatement",
					"src": "2827:43:0",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "456d7074792074696c65",
							"id": 181,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2857:12:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							},
							"value": "Empty tile"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							}
						  ],
						  "id": 180,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "2850:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 182,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "2850:20:0",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 183,
					  "nodeType": "ExpressionStatement",
					  "src": "2850:20:0"
					}
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 186,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 161,
						  "src": "2902:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						{
						  "id": 187,
						  "name": "currentStruct",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 169,
						  "src": "2908:13:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  },
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						],
						"id": 185,
						"name": "withdrawTileYield",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 320,
						"src": "2884:17:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$_t_uint8_$returns$_t_bool_$",
						  "typeString": "function (uint8,uint8) returns (bool)"
						}
					  },
					  "id": 188,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2884:38:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 189,
					"nodeType": "ExpressionStatement",
					"src": "2884:38:0"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "expression": {
							"baseExpression": {
							  "id": 196,
							  "name": "structures",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 22,
							  "src": "2963:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								"typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							  }
							},
							"id": 198,
							"indexExpression": {
							  "id": 197,
							  "name": "currentStruct",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 169,
							  "src": "2974:13:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2963:25:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_struct$_Structure_$49_storage",
							  "typeString": "struct Builder.Structure storage ref"
							}
						  },
						  "id": 199,
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "price",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 44,
						  "src": "2963:31:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "arguments": [
							{
							  "expression": {
								"id": 192,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "2942:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 193,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "2942:10:0",
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
							"id": 191,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "2934:8:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_payable_$",
							  "typeString": "type(address payable)"
							},
							"typeName": {
							  "id": 190,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "2934:8:0",
							  "stateMutability": "payable",
							  "typeDescriptions": {}
							}
						  },
						  "id": 194,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "2934:19:0",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						"id": 195,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "transfer",
						"nodeType": "MemberAccess",
						"src": "2934:28:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
						  "typeString": "function (uint256)"
						}
					  },
					  "id": 200,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2934:61:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 201,
					"nodeType": "ExpressionStatement",
					"src": "2934:61:0"
				  },
				  {
					"expression": {
					  "id": 209,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 202,
							"name": "map",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 13,
							"src": "3009:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							  "typeString": "mapping(address => uint8[81] storage ref)"
							}
						  },
						  "id": 206,
						  "indexExpression": {
							"expression": {
							  "id": 203,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "3013:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 204,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "3013:10:0",
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
						  "src": "3009:15:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint8_$81_storage",
							"typeString": "uint8[81] storage ref"
						  }
						},
						"id": 207,
						"indexExpression": {
						  "id": 205,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 161,
						  "src": "3025:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3009:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 208,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3033:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3009:25:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"id": 210,
					"nodeType": "ExpressionStatement",
					"src": "3009:25:0"
				  },
				  {
					"expression": {
					  "id": 215,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "--",
					  "prefix": false,
					  "src": "3046:25:0",
					  "subExpression": {
						"baseExpression": {
						  "id": 211,
						  "name": "housesCount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 17,
						  "src": "3046:11:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 214,
						"indexExpression": {
						  "expression": {
							"id": 212,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3058:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 213,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3058:10:0",
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
						"src": "3046:23:0",
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
					"id": 216,
					"nodeType": "ExpressionStatement",
					"src": "3046:25:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 222,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"baseExpression": {
						  "id": 217,
						  "name": "housesCount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 17,
						  "src": "3086:11:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 220,
						"indexExpression": {
						  "expression": {
							"id": 218,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3098:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 219,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3098:10:0",
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
						"src": "3086:23:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 221,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3113:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3086:28:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 231,
					"nodeType": "IfStatement",
					"src": "3083:93:0",
					"trueBody": {
					  "id": 230,
					  "nodeType": "Block",
					  "src": "3116:60:0",
					  "statements": [
						{
						  "expression": {
							"id": 228,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "baseExpression": {
								"id": 223,
								"name": "isStaking",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 26,
								"src": "3131:9:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								  "typeString": "mapping(address => bool)"
								}
							  },
							  "id": 226,
							  "indexExpression": {
								"expression": {
								  "id": 224,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "3141:3:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 225,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "3141:10:0",
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
							  "src": "3131:21:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "hexValue": "66616c7365",
							  "id": 227,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "bool",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "3155:5:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  },
							  "value": "false"
							},
							"src": "3131:29:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "id": 229,
						  "nodeType": "ExpressionStatement",
						  "src": "3131:29:0"
						}
					  ]
					}
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 233,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3201:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 234,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3201:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"baseExpression": {
							  "id": 235,
							  "name": "structures",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 22,
							  "src": "3213:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								"typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							  }
							},
							"id": 237,
							"indexExpression": {
							  "id": 236,
							  "name": "currentStruct",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 169,
							  "src": "3224:13:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "3213:25:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_struct$_Structure_$49_storage",
							  "typeString": "struct Builder.Structure storage ref"
							}
						  },
						  "id": 238,
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "price",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 44,
						  "src": "3213:31:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
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
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 232,
						"name": "Unstake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 584,
						"src": "3193:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 239,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3193:52:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 240,
					"nodeType": "EmitStatement",
					"src": "3188:57:0"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 241,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "3264:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 167,
					"id": 242,
					"nodeType": "Return",
					"src": "3257:11:0"
				  }
				]
			  },
			  "documentation": {
				"id": 159,
				"nodeType": "StructuredDocumentation",
				"src": "2357:315:0",
				"text": " @dev Removes a structure from the map, stops farming, returns\n staked tokens.  \n \n Returns a boolean value indicating whether the operation succeeded.\n Emits an {Unstake} event.\n Requirements:\n - sender must have tokens staked. "
			  },
			  "functionSelector": "975542a1",
			  "id": 244,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 164,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 163,
					"name": "staking",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 572,
					"src": "2736:7:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2736:7:0"
				}
			  ],
			  "name": "removeStructure",
			  "nameLocation": "2689:15:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 162,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 161,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "2711:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 244,
					"src": "2705:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 160,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "2705:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2704:12:0"
			  },
			  "returnParameters": {
				"id": 167,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 166,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 244,
					"src": "2753:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 165,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "2753:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2752:6:0"
			  },
			  "scope": 589,
			  "src": "2680:597:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 319,
				"nodeType": "Block",
				"src": "3668:529:0",
				"statements": [
				  {
					"assignments": [
					  257
					],
					"declarations": [
					  {
						"constant": false,
						"id": 257,
						"mutability": "mutable",
						"name": "currentStruct",
						"nameLocation": "3687:13:0",
						"nodeType": "VariableDeclaration",
						"scope": 319,
						"src": "3681:19:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						},
						"typeName": {
						  "id": 256,
						  "name": "uint8",
						  "nodeType": "ElementaryTypeName",
						  "src": "3681:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 264,
					"initialValue": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 258,
						  "name": "map",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 13,
						  "src": "3703:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							"typeString": "mapping(address => uint8[81] storage ref)"
						  }
						},
						"id": 261,
						"indexExpression": {
						  "expression": {
							"id": 259,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3707:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 260,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3707:10:0",
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
						"src": "3703:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint8_$81_storage",
						  "typeString": "uint8[81] storage ref"
						}
					  },
					  "id": 263,
					  "indexExpression": {
						"id": 262,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 247,
						"src": "3719:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "3703:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3681:43:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  },
					  "id": 267,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 265,
						"name": "currentStruct",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 257,
						"src": "3739:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 266,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3756:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3739:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 272,
					"nodeType": "IfStatement",
					"src": "3736:43:0",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "456d7074792074696c65",
							"id": 269,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "3766:12:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							},
							"value": "Empty tile"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							}
						  ],
						  "id": 268,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "3759:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 270,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "3759:20:0",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 271,
					  "nodeType": "ExpressionStatement",
					  "src": "3759:20:0"
					}
				  },
				  {
					"assignments": [
					  274
					],
					"declarations": [
					  {
						"constant": false,
						"id": 274,
						"mutability": "mutable",
						"name": "timeStaked",
						"nameLocation": "3801:10:0",
						"nodeType": "VariableDeclaration",
						"scope": 319,
						"src": "3793:18:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 273,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3793:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 287,
					"initialValue": {
					  "arguments": [
						{
						  "baseExpression": {
							"baseExpression": {
							  "id": 276,
							  "name": "stakedTime",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 36,
							  "src": "3847:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
								"typeString": "mapping(address => uint256[81] storage ref)"
							  }
							},
							"id": 279,
							"indexExpression": {
							  "expression": {
								"id": 277,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "3858:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 278,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "3858:10:0",
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
							"src": "3847:22:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_array$_t_uint256_$81_storage",
							  "typeString": "uint256[81] storage ref"
							}
						  },
						  "id": 281,
						  "indexExpression": {
							"id": 280,
							"name": "_pos",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 247,
							"src": "3870:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "3847:28:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "expression": {
							"baseExpression": {
							  "id": 282,
							  "name": "structures",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 22,
							  "src": "3891:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								"typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							  }
							},
							"id": 284,
							"indexExpression": {
							  "id": 283,
							  "name": "_sId",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 249,
							  "src": "3902:4:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "3891:16:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_struct$_Structure_$49_storage",
							  "typeString": "struct Builder.Structure storage ref"
							}
						  },
						  "id": 285,
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "time",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 46,
						  "src": "3891:21:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 275,
						"name": "calculateYieldTime",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 352,
						"src": "3814:18:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256,uint256) returns (uint256)"
						}
					  },
					  "id": 286,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3814:109:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3793:130:0"
				  },
				  {
					"expression": {
					  "id": 295,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 288,
							"name": "stakedTime",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 36,
							"src": "3935:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
							  "typeString": "mapping(address => uint256[81] storage ref)"
							}
						  },
						  "id": 292,
						  "indexExpression": {
							"expression": {
							  "id": 289,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "3946:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 290,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "3946:10:0",
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
						  "src": "3935:22:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint256_$81_storage",
							"typeString": "uint256[81] storage ref"
						  }
						},
						"id": 293,
						"indexExpression": {
						  "id": 291,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 247,
						  "src": "3958:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3935:28:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 294,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3966:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3935:32:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 296,
					"nodeType": "ExpressionStatement",
					"src": "3935:32:0"
				  },
				  {
					"assignments": [
					  298
					],
					"declarations": [
					  {
						"constant": false,
						"id": 298,
						"mutability": "mutable",
						"name": "reward",
						"nameLocation": "3997:6:0",
						"nodeType": "VariableDeclaration",
						"scope": 319,
						"src": "3989:14:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 297,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3989:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 303,
					"initialValue": {
					  "arguments": [
						{
						  "id": 300,
						  "name": "timeStaked",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 274,
						  "src": "4036:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "id": 301,
						  "name": "_sId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 249,
						  "src": "4062:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						],
						"id": 299,
						"name": "calculateReward",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 380,
						"src": "4006:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint8_$returns$_t_uint256_$",
						  "typeString": "function (uint256,uint8) view returns (uint256)"
						}
					  },
					  "id": 302,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4006:71:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3989:88:0"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "expression": {
							"id": 307,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "4100:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 308,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "4100:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 309,
						  "name": "reward",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 298,
						  "src": "4112:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
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
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 304,
						  "name": "SEED",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 42,
						  "src": "4090:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_ISeedToken_$599",
							"typeString": "contract ISeedToken"
						  }
						},
						"id": 306,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "mint",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 598,
						"src": "4090:9:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256) external"
						}
					  },
					  "id": 310,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4090:29:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 311,
					"nodeType": "ExpressionStatement",
					"src": "4090:29:0"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 313,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "4152:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 314,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "4152:10:0",
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
						"id": 312,
						"name": "YieldWithdraw",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 588,
						"src": "4138:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
						  "typeString": "function (address)"
						}
					  },
					  "id": 315,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4138:25:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 316,
					"nodeType": "EmitStatement",
					"src": "4133:30:0"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 317,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "4184:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 255,
					"id": 318,
					"nodeType": "Return",
					"src": "4177:11:0"
				  }
				]
			  },
			  "documentation": {
				"id": 245,
				"nodeType": "StructuredDocumentation",
				"src": "3285:284:0",
				"text": " @dev Withdraw yield of {Seed} from the structure. \n \n Returns a boolean value indicating whether the operation succeeded.\n Emits a {YieldWithdraw} event.\n Requirements:\n - sender must have tokens staked. "
			  },
			  "functionSelector": "5574f577",
			  "id": 320,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 252,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 251,
					"name": "staking",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 572,
					"src": "3645:7:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3645:7:0"
				}
			  ],
			  "name": "withdrawTileYield",
			  "nameLocation": "3586:17:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 250,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 247,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "3610:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 320,
					"src": "3604:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 246,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "3604:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 249,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "3622:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 320,
					"src": "3616:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 248,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "3616:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3603:24:0"
			  },
			  "returnParameters": {
				"id": 255,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 254,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 320,
					"src": "3662:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 253,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "3662:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3661:6:0"
			  },
			  "scope": 589,
			  "src": "3577:620:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 351,
				"nodeType": "Block",
				"src": "4387:177:0",
				"statements": [
				  {
					"assignments": [
					  331
					],
					"declarations": [
					  {
						"constant": false,
						"id": 331,
						"mutability": "mutable",
						"name": "yieldTime",
						"nameLocation": "4406:9:0",
						"nodeType": "VariableDeclaration",
						"scope": 351,
						"src": "4398:17:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 330,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4398:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 336,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 335,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"expression": {
						  "id": 332,
						  "name": "block",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967292,
						  "src": "4418:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_block",
							"typeString": "block"
						  }
						},
						"id": 333,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "timestamp",
						"nodeType": "MemberAccess",
						"src": "4418:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "-",
					  "rightExpression": {
						"id": 334,
						"name": "start",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 323,
						"src": "4436:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4418:23:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4398:43:0"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "id": 338,
						  "name": "start",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 323,
						  "src": "4474:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "expression": {
							"id": 339,
							"name": "block",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967292,
							"src": "4481:5:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_block",
							  "typeString": "block"
							}
						  },
						  "id": 340,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "timestamp",
						  "nodeType": "MemberAccess",
						  "src": "4481:15:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 337,
						"name": "calculatedYield",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 358,
						"src": "4458:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
						  "typeString": "function (uint256,uint256)"
						}
					  },
					  "id": 341,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4458:39:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 342,
					"nodeType": "EmitStatement",
					"src": "4453:44:0"
				  },
				  {
					"expression": {
					  "condition": {
						"components": [
						  {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 345,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "id": 343,
							  "name": "yieldTime",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 331,
							  "src": "4517:9:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": ">",
							"rightExpression": {
							  "id": 344,
							  "name": "bound",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 325,
							  "src": "4529:5:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4517:17:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  }
						],
						"id": 346,
						"isConstant": false,
						"isInlineArray": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "TupleExpression",
						"src": "4516:19:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "falseExpression": {
						"id": 348,
						"name": "yieldTime",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 331,
						"src": "4546:9:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 349,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "Conditional",
					  "src": "4516:39:0",
					  "trueExpression": {
						"id": 347,
						"name": "bound",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 325,
						"src": "4538:5:0",
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
					"functionReturnParameters": 329,
					"id": 350,
					"nodeType": "Return",
					"src": "4509:46:0"
				  }
				]
			  },
			  "documentation": {
				"id": 321,
				"nodeType": "StructuredDocumentation",
				"src": "4205:80:0",
				"text": " @dev Returns time while structure was accumulating tokens. "
			  },
			  "functionSelector": "15e63a9e",
			  "id": 352,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "calculateYieldTime",
			  "nameLocation": "4302:18:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 326,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 323,
					"mutability": "mutable",
					"name": "start",
					"nameLocation": "4329:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 352,
					"src": "4321:13:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 322,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4321:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 325,
					"mutability": "mutable",
					"name": "bound",
					"nameLocation": "4344:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 352,
					"src": "4336:13:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 324,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4336:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4320:30:0"
			  },
			  "returnParameters": {
				"id": 329,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 328,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 352,
					"src": "4378:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 327,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4378:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4377:9:0"
			  },
			  "scope": 589,
			  "src": "4293:271:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "anonymous": false,
			  "id": 358,
			  "name": "calculatedYield",
			  "nameLocation": "4577:15:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 357,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 354,
					"indexed": false,
					"mutability": "mutable",
					"name": "start",
					"nameLocation": "4601:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 358,
					"src": "4593:13:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 353,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4593:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 356,
					"indexed": false,
					"mutability": "mutable",
					"name": "end",
					"nameLocation": "4616:3:0",
					"nodeType": "VariableDeclaration",
					"scope": 358,
					"src": "4608:11:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 355,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4608:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4592:28:0"
			  },
			  "src": "4571:50:0"
			},
			{
			  "body": {
				"id": 379,
				"nodeType": "Block",
				"src": "4797:94:0",
				"statements": [
				  {
					"assignments": [
					  369
					],
					"declarations": [
					  {
						"constant": false,
						"id": 369,
						"mutability": "mutable",
						"name": "reward",
						"nameLocation": "4816:6:0",
						"nodeType": "VariableDeclaration",
						"scope": 379,
						"src": "4808:14:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 368,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4808:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 376,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 375,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 370,
						"name": "_stkTime",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 361,
						"src": "4826:8:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"expression": {
						  "baseExpression": {
							"id": 371,
							"name": "structures",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 22,
							"src": "4837:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
							  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							}
						  },
						  "id": 373,
						  "indexExpression": {
							"id": 372,
							"name": "_sId",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 363,
							"src": "4848:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "4837:16:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage",
							"typeString": "struct Builder.Structure storage ref"
						  }
						},
						"id": 374,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "rate",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 48,
						"src": "4837:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4826:32:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4808:50:0"
				  },
				  {
					"expression": {
					  "id": 377,
					  "name": "reward",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 369,
					  "src": "4876:6:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 367,
					"id": 378,
					"nodeType": "Return",
					"src": "4869:13:0"
				  }
				]
			  },
			  "documentation": {
				"id": 359,
				"nodeType": "StructuredDocumentation",
				"src": "4628:68:0",
				"text": " @dev Returns amount of yield from a structure. "
			  },
			  "id": 380,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "calculateReward",
			  "nameLocation": "4713:15:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 364,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 361,
					"mutability": "mutable",
					"name": "_stkTime",
					"nameLocation": "4737:8:0",
					"nodeType": "VariableDeclaration",
					"scope": 380,
					"src": "4729:16:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 360,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4729:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 363,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "4753:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 380,
					"src": "4747:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 362,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "4747:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4728:30:0"
			  },
			  "returnParameters": {
				"id": 367,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 366,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 380,
					"src": "4788:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 365,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4788:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4787:9:0"
			  },
			  "scope": 589,
			  "src": "4704:187:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 393,
				"nodeType": "Block",
				"src": "5018:43:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 388,
						"name": "map",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 13,
						"src": "5037:3:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
						  "typeString": "mapping(address => uint8[81] storage ref)"
						}
					  },
					  "id": 391,
					  "indexExpression": {
						"expression": {
						  "id": 389,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5041:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 390,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5041:10:0",
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
					  "src": "5037:15:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint8_$81_storage",
						"typeString": "uint8[81] storage ref"
					  }
					},
					"functionReturnParameters": 387,
					"id": 392,
					"nodeType": "Return",
					"src": "5030:22:0"
				  }
				]
			  },
			  "documentation": {
				"id": 381,
				"nodeType": "StructuredDocumentation",
				"src": "4899:52:0",
				"text": " @dev Returns player's gamemap. "
			  },
			  "functionSelector": "ad3de14c",
			  "id": 394,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getMap",
			  "nameLocation": "4968:6:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 382,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4974:2:0"
			  },
			  "returnParameters": {
				"id": 387,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 386,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 394,
					"src": "5000:16:0",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_array$_t_uint8_$81_memory_ptr",
					  "typeString": "uint8[81]"
					},
					"typeName": {
					  "baseType": {
						"id": 383,
						"name": "uint8",
						"nodeType": "ElementaryTypeName",
						"src": "5000:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "id": 385,
					  "length": {
						"hexValue": "3831",
						"id": 384,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "5006:2:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_81_by_1",
						  "typeString": "int_const 81"
						},
						"value": "81"
					  },
					  "nodeType": "ArrayTypeName",
					  "src": "5000:9:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint8_$81_storage_ptr",
						"typeString": "uint8[81]"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4999:18:0"
			  },
			  "scope": 589,
			  "src": "4959:102:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 405,
				"nodeType": "Block",
				"src": "5189:50:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 400,
						"name": "housesCount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 17,
						"src": "5207:11:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 403,
					  "indexExpression": {
						"expression": {
						  "id": 401,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5219:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 402,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5219:10:0",
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
					  "src": "5207:23:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 399,
					"id": 404,
					"nodeType": "Return",
					"src": "5200:30:0"
				  }
				]
			  },
			  "documentation": {
				"id": 395,
				"nodeType": "StructuredDocumentation",
				"src": "5070:58:0",
				"text": " @dev Returns amount of built houses. "
			  },
			  "functionSelector": "fd5f33ec",
			  "id": 406,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getHouses",
			  "nameLocation": "5145:9:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 396,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5154:2:0"
			  },
			  "returnParameters": {
				"id": 399,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 398,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 406,
					"src": "5180:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 397,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5180:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5179:9:0"
			  },
			  "scope": 589,
			  "src": "5136:103:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 419,
				"nodeType": "Block",
				"src": "5388:43:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 415,
						"name": "structures",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 22,
						"src": "5406:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
						  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
						}
					  },
					  "id": 417,
					  "indexExpression": {
						"id": 416,
						"name": "_sId",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 409,
						"src": "5417:4:0",
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
					  "src": "5406:16:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_struct$_Structure_$49_storage",
						"typeString": "struct Builder.Structure storage ref"
					  }
					},
					"functionReturnParameters": 414,
					"id": 418,
					"nodeType": "Return",
					"src": "5399:23:0"
				  }
				]
			  },
			  "documentation": {
				"id": 407,
				"nodeType": "StructuredDocumentation",
				"src": "5251:55:0",
				"text": " @dev Returns in-game structure.   "
			  },
			  "functionSelector": "5013d729",
			  "id": 420,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getStructure",
			  "nameLocation": "5323:12:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 410,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 409,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "5341:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 420,
					"src": "5336:9:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 408,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "5336:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5335:11:0"
			  },
			  "returnParameters": {
				"id": 414,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 413,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 420,
					"src": "5370:16:0",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_struct$_Structure_$49_memory_ptr",
					  "typeString": "struct Builder.Structure"
					},
					"typeName": {
					  "id": 412,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 411,
						"name": "Structure",
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 49,
						"src": "5370:9:0"
					  },
					  "referencedDeclaration": 49,
					  "src": "5370:9:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
						"typeString": "struct Builder.Structure"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5369:18:0"
			  },
			  "scope": 589,
			  "src": "5314:117:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 431,
				"nodeType": "Block",
				"src": "5553:48:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 426,
						"name": "isStaking",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 26,
						"src": "5571:9:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
						  "typeString": "mapping(address => bool)"
						}
					  },
					  "id": 429,
					  "indexExpression": {
						"expression": {
						  "id": 427,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5581:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 428,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5581:10:0",
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
					  "src": "5571:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 425,
					"id": 430,
					"nodeType": "Return",
					"src": "5564:28:0"
				  }
				]
			  },
			  "documentation": {
				"id": 421,
				"nodeType": "StructuredDocumentation",
				"src": "5439:53:0",
				"text": " @dev Returns isStaking mapping. "
			  },
			  "functionSelector": "702376a7",
			  "id": 432,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getIsStaking",
			  "nameLocation": "5509:12:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 422,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5521:2:0"
			  },
			  "returnParameters": {
				"id": 425,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 424,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 432,
					"src": "5547:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 423,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "5547:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5546:6:0"
			  },
			  "scope": 589,
			  "src": "5500:101:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 443,
				"nodeType": "Block",
				"src": "5729:45:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 438,
						"name": "staked",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 30,
						"src": "5747:6:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 441,
					  "indexExpression": {
						"expression": {
						  "id": 439,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5754:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 440,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5754:10:0",
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
					  "src": "5747:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 437,
					"id": 442,
					"nodeType": "Return",
					"src": "5740:25:0"
				  }
				]
			  },
			  "documentation": {
				"id": 433,
				"nodeType": "StructuredDocumentation",
				"src": "5609:59:0",
				"text": " @dev Returns amount of staked tokens. "
			  },
			  "functionSelector": "c59abf9f",
			  "id": 444,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getStaked",
			  "nameLocation": "5685:9:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 434,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5694:2:0"
			  },
			  "returnParameters": {
				"id": 437,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 436,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 444,
					"src": "5720:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 435,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5720:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5719:9:0"
			  },
			  "scope": 589,
			  "src": "5676:98:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 459,
				"nodeType": "Block",
				"src": "5923:55:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 452,
						  "name": "stakedTime",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 36,
						  "src": "5941:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
							"typeString": "mapping(address => uint256[81] storage ref)"
						  }
						},
						"id": 455,
						"indexExpression": {
						  "expression": {
							"id": 453,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "5952:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 454,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "5952:10:0",
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
						"src": "5941:22:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint256_$81_storage",
						  "typeString": "uint256[81] storage ref"
						}
					  },
					  "id": 457,
					  "indexExpression": {
						"id": 456,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 447,
						"src": "5964:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "5941:28:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 451,
					"id": 458,
					"nodeType": "Return",
					"src": "5934:35:0"
				  }
				]
			  },
			  "documentation": {
				"id": 445,
				"nodeType": "StructuredDocumentation",
				"src": "5782:66:0",
				"text": " @dev Returns time when structure was staked. "
			  },
			  "functionSelector": "a8a26730",
			  "id": 460,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getStakedTime",
			  "nameLocation": "5865:13:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 448,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 447,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "5885:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 460,
					"src": "5879:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 446,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "5879:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5878:12:0"
			  },
			  "returnParameters": {
				"id": 451,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 450,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 460,
					"src": "5914:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 449,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5914:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5913:9:0"
			  },
			  "scope": 589,
			  "src": "5856:122:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 504,
				"nodeType": "Block",
				"src": "6167:302:0",
				"statements": [
				  {
					"assignments": [
					  469
					],
					"declarations": [
					  {
						"constant": false,
						"id": 469,
						"mutability": "mutable",
						"name": "currentStruct",
						"nameLocation": "6185:13:0",
						"nodeType": "VariableDeclaration",
						"scope": 504,
						"src": "6179:19:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						},
						"typeName": {
						  "id": 468,
						  "name": "uint8",
						  "nodeType": "ElementaryTypeName",
						  "src": "6179:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 476,
					"initialValue": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 470,
						  "name": "map",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 13,
						  "src": "6201:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							"typeString": "mapping(address => uint8[81] storage ref)"
						  }
						},
						"id": 473,
						"indexExpression": {
						  "expression": {
							"id": 471,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "6205:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 472,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "6205:10:0",
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
						"src": "6201:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint8_$81_storage",
						  "typeString": "uint8[81] storage ref"
						}
					  },
					  "id": 475,
					  "indexExpression": {
						"id": 474,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 463,
						"src": "6217:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "6201:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6179:43:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  },
					  "id": 479,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 477,
						"name": "currentStruct",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 469,
						"src": "6238:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 478,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6255:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "6238:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 484,
					"nodeType": "IfStatement",
					"src": "6235:43:0",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "456d7074792074696c65",
							"id": 481,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "6265:12:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							},
							"value": "Empty tile"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							}
						  ],
						  "id": 480,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "6258:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 482,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "6258:20:0",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 483,
					  "nodeType": "ExpressionStatement",
					  "src": "6258:20:0"
					}
				  },
				  {
					"expression": {
					  "components": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 501,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"baseExpression": {
								  "baseExpression": {
									"id": 486,
									"name": "stakedTime",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 36,
									"src": "6335:10:0",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
									  "typeString": "mapping(address => uint256[81] storage ref)"
									}
								  },
								  "id": 489,
								  "indexExpression": {
									"expression": {
									  "id": 487,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "6346:3:0",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 488,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "6346:10:0",
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
								  "src": "6335:22:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_array$_t_uint256_$81_storage",
									"typeString": "uint256[81] storage ref"
								  }
								},
								"id": 491,
								"indexExpression": {
								  "id": 490,
								  "name": "_pos",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 463,
								  "src": "6358:4:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_uint8",
									"typeString": "uint8"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "6335:28:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  {
								"expression": {
								  "baseExpression": {
									"id": 492,
									"name": "structures",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 22,
									"src": "6379:10:0",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
									  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
									}
								  },
								  "id": 494,
								  "indexExpression": {
									"id": 493,
									"name": "currentStruct",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 469,
									"src": "6390:13:0",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint8",
									  "typeString": "uint8"
									}
								  },
								  "isConstant": false,
								  "isLValue": true,
								  "isPure": false,
								  "lValueRequested": false,
								  "nodeType": "IndexAccess",
								  "src": "6379:25:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_struct$_Structure_$49_storage",
									"typeString": "struct Builder.Structure storage ref"
								  }
								},
								"id": 495,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "time",
								"nodeType": "MemberAccess",
								"referencedDeclaration": 46,
								"src": "6379:30:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								},
								{
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  ],
							  "id": 485,
							  "name": "calculateYieldTime",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 352,
							  "src": "6302:18:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
								"typeString": "function (uint256,uint256) returns (uint256)"
							  }
							},
							"id": 496,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "6302:122:0",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"expression": {
							  "baseExpression": {
								"id": 497,
								"name": "structures",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 22,
								"src": "6428:10:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
								}
							  },
							  "id": 499,
							  "indexExpression": {
								"id": 498,
								"name": "currentStruct",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 469,
								"src": "6439:13:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint8",
								  "typeString": "uint8"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "6428:25:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_struct$_Structure_$49_storage",
								"typeString": "struct Builder.Structure storage ref"
							  }
							},
							"id": 500,
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "time",
							"nodeType": "MemberAccess",
							"referencedDeclaration": 46,
							"src": "6428:30:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "6302:156:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						}
					  ],
					  "id": 502,
					  "isConstant": false,
					  "isInlineArray": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "TupleExpression",
					  "src": "6301:158:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 467,
					"id": 503,
					"nodeType": "Return",
					"src": "6294:165:0"
				  }
				]
			  },
			  "documentation": {
				"id": 461,
				"nodeType": "StructuredDocumentation",
				"src": "5988:105:0",
				"text": " @dev Returns boolean whether building finished accumulating\n tokens or not.  "
			  },
			  "functionSelector": "94148d4f",
			  "id": 505,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "isReadyForWithdraw",
			  "nameLocation": "6111:18:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 464,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 463,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "6136:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 505,
					"src": "6130:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 462,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6130:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6129:12:0"
			  },
			  "returnParameters": {
				"id": 467,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 466,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 505,
					"src": "6161:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 465,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "6161:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6160:6:0"
			  },
			  "scope": 589,
			  "src": "6102:367:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 517,
				"nodeType": "Block",
				"src": "6560:100:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 512,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 509,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "6579:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 510,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "6579:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"id": 511,
							"name": "owner",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 7,
							"src": "6593:5:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "6579:19:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "43616e27742063616c6c206f776e65722066756e6374696f6e",
						  "id": 513,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "6610:27:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_5e6d34edc3b68a0300847aeb5f6c6a74c0f89a014206bf2daa42b34dc69a4d02",
							"typeString": "literal_string \"Can't call owner function\""
						  },
						  "value": "Can't call owner function"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_5e6d34edc3b68a0300847aeb5f6c6a74c0f89a014206bf2daa42b34dc69a4d02",
							"typeString": "literal_string \"Can't call owner function\""
						  }
						],
						"id": 508,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "6571:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 514,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6571:67:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 515,
					"nodeType": "ExpressionStatement",
					"src": "6571:67:0"
				  },
				  {
					"id": 516,
					"nodeType": "PlaceholderStatement",
					"src": "6650:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 506,
				"nodeType": "StructuredDocumentation",
				"src": "6477:56:0",
				"text": " @dev Requires sender to be owner.  "
			  },
			  "id": 518,
			  "name": "onlyOwner",
			  "nameLocation": "6550:9:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 507,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6560:0:0"
			  },
			  "src": "6541:119:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 535,
				"nodeType": "Block",
				"src": "6769:114:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 530,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 524,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "6788:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 525,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "value",
							"nodeType": "MemberAccess",
							"src": "6788:9:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"expression": {
							  "baseExpression": {
								"id": 526,
								"name": "structures",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 22,
								"src": "6801:10:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
								}
							  },
							  "id": 528,
							  "indexExpression": {
								"id": 527,
								"name": "_sId",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 521,
								"src": "6812:4:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint8",
								  "typeString": "uint8"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "6801:16:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_struct$_Structure_$49_storage",
								"typeString": "struct Builder.Structure storage ref"
							  }
							},
							"id": 529,
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "price",
							"nodeType": "MemberAccess",
							"referencedDeclaration": 44,
							"src": "6801:22:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "6788:35:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "446966666572656e742076616c7565206174746163686564",
						  "id": 531,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "6835:26:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde",
							"typeString": "literal_string \"Different value attached\""
						  },
						  "value": "Different value attached"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde",
							"typeString": "literal_string \"Different value attached\""
						  }
						],
						"id": 523,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "6780:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 532,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6780:82:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 533,
					"nodeType": "ExpressionStatement",
					"src": "6780:82:0"
				  },
				  {
					"id": 534,
					"nodeType": "PlaceholderStatement",
					"src": "6873:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 519,
				"nodeType": "StructuredDocumentation",
				"src": "6668:65:0",
				"text": " @dev Requires price to be in price mapping. "
			  },
			  "id": 536,
			  "name": "priced",
			  "nameLocation": "6750:6:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 522,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 521,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "6763:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 536,
					"src": "6757:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 520,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6757:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6756:12:0"
			  },
			  "src": "6741:142:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 556,
				"nodeType": "Block",
				"src": "7004:120:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  },
						  "id": 551,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "baseExpression": {
								"id": 544,
								"name": "map",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 13,
								"src": "7023:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
								  "typeString": "mapping(address => uint8[81] storage ref)"
								}
							  },
							  "id": 547,
							  "indexExpression": {
								"expression": {
								  "id": 545,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "7027:3:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 546,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "7027:10:0",
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
							  "src": "7023:15:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_array$_t_uint8_$81_storage",
								"typeString": "uint8[81] storage ref"
							  }
							},
							"id": 549,
							"indexExpression": {
							  "id": 548,
							  "name": "_pos",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 539,
							  "src": "7039:4:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "7023:21:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"id": 550,
							"name": "_sId",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 541,
							"src": "7048:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "src": "7023:29:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "596f75206861766520616c7265616479206275696c74207468697320616e642068657265",
						  "id": 552,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7063:38:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a",
							"typeString": "literal_string \"You have already built this and here\""
						  },
						  "value": "You have already built this and here"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a",
							"typeString": "literal_string \"You have already built this and here\""
						  }
						],
						"id": 543,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "7015:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 553,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7015:87:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 554,
					"nodeType": "ExpressionStatement",
					"src": "7015:87:0"
				  },
				  {
					"id": 555,
					"nodeType": "PlaceholderStatement",
					"src": "7114:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 537,
				"nodeType": "StructuredDocumentation",
				"src": "6891:65:0",
				"text": " @dev Requires price to be in price mapping. "
			  },
			  "id": 557,
			  "name": "unique",
			  "nameLocation": "6973:6:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 542,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 539,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "6986:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 557,
					"src": "6980:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 538,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6980:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 541,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "6998:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 557,
					"src": "6992:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 540,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6992:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6979:24:0"
			  },
			  "src": "6964:160:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 571,
				"nodeType": "Block",
				"src": "7224:123:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 566,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 561,
							  "name": "isStaking",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 26,
							  "src": "7243:9:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								"typeString": "mapping(address => bool)"
							  }
							},
							"id": 564,
							"indexExpression": {
							  "expression": {
								"id": 562,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "7253:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 563,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "7253:10:0",
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
							"src": "7243:21:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"hexValue": "74727565",
							"id": 565,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "bool",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "7268:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"value": "true"
						  },
						  "src": "7243:29:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "596f752063616e277420776974686472617720696620796f75206469646e2774207374616b65",
						  "id": 567,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7284:40:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a",
							"typeString": "literal_string \"You can't withdraw if you didn't stake\""
						  },
						  "value": "You can't withdraw if you didn't stake"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a",
							"typeString": "literal_string \"You can't withdraw if you didn't stake\""
						  }
						],
						"id": 560,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "7235:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 568,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7235:90:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 569,
					"nodeType": "ExpressionStatement",
					"src": "7235:90:0"
				  },
				  {
					"id": 570,
					"nodeType": "PlaceholderStatement",
					"src": "7337:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 558,
				"nodeType": "StructuredDocumentation",
				"src": "7132:65:0",
				"text": " @dev Requires price to be in price mapping. "
			  },
			  "id": 572,
			  "name": "staking",
			  "nameLocation": "7214:7:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 559,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7221:2:0"
			  },
			  "src": "7205:142:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "anonymous": false,
			  "id": 578,
			  "name": "Stake",
			  "nameLocation": "7363:5:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 577,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 574,
					"indexed": true,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "7385:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 578,
					"src": "7369:20:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 573,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7369:7:0",
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
					"id": 576,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "7399:6:0",
					"nodeType": "VariableDeclaration",
					"scope": 578,
					"src": "7391:14:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 575,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "7391:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7368:38:0"
			  },
			  "src": "7357:50:0"
			},
			{
			  "anonymous": false,
			  "id": 584,
			  "name": "Unstake",
			  "nameLocation": "7420:7:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 583,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 580,
					"indexed": true,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "7444:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 584,
					"src": "7428:20:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 579,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7428:7:0",
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
					"id": 582,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "7458:6:0",
					"nodeType": "VariableDeclaration",
					"scope": 584,
					"src": "7450:14:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 581,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "7450:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7427:38:0"
			  },
			  "src": "7414:52:0"
			},
			{
			  "anonymous": false,
			  "id": 588,
			  "name": "YieldWithdraw",
			  "nameLocation": "7479:13:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 587,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 586,
					"indexed": true,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "7509:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 588,
					"src": "7493:20:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 585,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7493:7:0",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7492:22:0"
			  },
			  "src": "7473:42:0"
			}
		  ],
		  "scope": 590,
		  "src": "476:7043:0",
		  "usedErrors": []
		}
	  ],
	  "src": "39:7480:0"
	},
	"legacyAST": {
	  "absolutePath": "/C/Github/SeedFarm/contracts/Builder.sol",
	  "exportedSymbols": {
		"Builder": [
		  589
		],
		"Context": [
		  1409
		],
		"ERC20": [
		  1284
		],
		"IERC20": [
		  1362
		],
		"IERC20Metadata": [
		  1387
		],
		"ISeedToken": [
		  599
		],
		"Ownable": [
		  738
		],
		"SeedToken": [
		  633
		]
	  },
	  "id": 590,
	  "license": "GPL-3.0",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 1,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".7"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "39:23:0"
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/SeedToken.sol",
		  "file": "./SeedToken.sol",
		  "id": 2,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 590,
		  "sourceUnit": 634,
		  "src": "67:25:0",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "/C/Github/SeedFarm/contracts/ISeedToken.sol",
		  "file": "./ISeedToken.sol",
		  "id": 3,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 590,
		  "sourceUnit": 600,
		  "src": "95:26:0",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "id": 4,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 590,
		  "sourceUnit": 1285,
		  "src": "124:55:0",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": false,
		  "baseContracts": [],
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "documentation": {
			"id": 5,
			"nodeType": "StructuredDocumentation",
			"src": "187:285:0",
			"text": " @dev Contract for game handling.\n Places buildings on map, stakes $ONE tokens and \n mints rewards for farmers. Each player has 81 \n tiles where they can build. Each tile has a timestamp \n making each building independent farming unit.  "
		  },
		  "fullyImplemented": true,
		  "id": 589,
		  "linearizedBaseContracts": [
			589
		  ],
		  "name": "Builder",
		  "nameLocation": "485:7:0",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "constant": false,
			  "functionSelector": "8da5cb5b",
			  "id": 7,
			  "mutability": "mutable",
			  "name": "owner",
			  "nameLocation": "518:5:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "503:20:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 6,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "503:7:0",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "9dfb94ba",
			  "id": 13,
			  "mutability": "mutable",
			  "name": "map",
			  "nameLocation": "570:3:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "533:40:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
				"typeString": "mapping(address => uint8[81])"
			  },
			  "typeName": {
				"id": 12,
				"keyType": {
				  "id": 8,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "541:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "533:29:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
				  "typeString": "mapping(address => uint8[81])"
				},
				"valueType": {
				  "baseType": {
					"id": 9,
					"name": "uint8",
					"nodeType": "ElementaryTypeName",
					"src": "552:5:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					}
				  },
				  "id": 11,
				  "length": {
					"hexValue": "3831",
					"id": 10,
					"isConstant": false,
					"isLValue": false,
					"isPure": true,
					"kind": "number",
					"lValueRequested": false,
					"nodeType": "Literal",
					"src": "558:2:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_rational_81_by_1",
					  "typeString": "int_const 81"
					},
					"value": "81"
				  },
				  "nodeType": "ArrayTypeName",
				  "src": "552:9:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_array$_t_uint8_$81_storage_ptr",
					"typeString": "uint8[81]"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "75c30a9f",
			  "id": 17,
			  "mutability": "mutable",
			  "name": "housesCount",
			  "nameLocation": "616:11:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "581:46:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 16,
				"keyType": {
				  "id": 14,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "589:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "581:27:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 15,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "600:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "9e3cb488",
			  "id": 22,
			  "mutability": "mutable",
			  "name": "structures",
			  "nameLocation": "670:10:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "636:44:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
				"typeString": "mapping(uint256 => struct Builder.Structure)"
			  },
			  "typeName": {
				"id": 21,
				"keyType": {
				  "id": 18,
				  "name": "uint",
				  "nodeType": "ElementaryTypeName",
				  "src": "644:4:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				},
				"nodeType": "Mapping",
				"src": "636:26:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
				  "typeString": "mapping(uint256 => struct Builder.Structure)"
				},
				"valueType": {
				  "id": 20,
				  "nodeType": "UserDefinedTypeName",
				  "pathNode": {
					"id": 19,
					"name": "Structure",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 49,
					"src": "652:9:0"
				  },
				  "referencedDeclaration": 49,
				  "src": "652:9:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
					"typeString": "struct Builder.Structure"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "6f49712b",
			  "id": 26,
			  "mutability": "mutable",
			  "name": "isStaking",
			  "nameLocation": "722:9:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "690:41:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 25,
				"keyType": {
				  "id": 23,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "698:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "690:24:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 24,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "709:4:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "98807d84",
			  "id": 30,
			  "mutability": "mutable",
			  "name": "staked",
			  "nameLocation": "774:6:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "739:41:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 29,
				"keyType": {
				  "id": 27,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "747:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "739:27:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 28,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "758:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "4aec48c9",
			  "id": 36,
			  "mutability": "mutable",
			  "name": "stakedTime",
			  "nameLocation": "826:10:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "787:49:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
				"typeString": "mapping(address => uint256[81])"
			  },
			  "typeName": {
				"id": 35,
				"keyType": {
				  "id": 31,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "795:7:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "787:31:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
				  "typeString": "mapping(address => uint256[81])"
				},
				"valueType": {
				  "baseType": {
					"id": 32,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "806:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "id": 34,
				  "length": {
					"hexValue": "3831",
					"id": 33,
					"isConstant": false,
					"isLValue": false,
					"isPure": true,
					"kind": "number",
					"lValueRequested": false,
					"nodeType": "Literal",
					"src": "814:2:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_rational_81_by_1",
					  "typeString": "int_const 81"
					},
					"value": "81"
				  },
				  "nodeType": "ArrayTypeName",
				  "src": "806:11:0",
				  "typeDescriptions": {
					"typeIdentifier": "t_array$_t_uint256_$81_storage_ptr",
					"typeString": "uint256[81]"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "c2ee3a08",
			  "id": 39,
			  "mutability": "mutable",
			  "name": "ONE",
			  "nameLocation": "859:3:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "846:16:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_contract$_ERC20_$1284",
				"typeString": "contract ERC20"
			  },
			  "typeName": {
				"id": 38,
				"nodeType": "UserDefinedTypeName",
				"pathNode": {
				  "id": 37,
				  "name": "ERC20",
				  "nodeType": "IdentifierPath",
				  "referencedDeclaration": 1284,
				  "src": "846:5:0"
				},
				"referencedDeclaration": 1284,
				"src": "846:5:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_contract$_ERC20_$1284",
				  "typeString": "contract ERC20"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "0edc4737",
			  "id": 42,
			  "mutability": "mutable",
			  "name": "SEED",
			  "nameLocation": "888:4:0",
			  "nodeType": "VariableDeclaration",
			  "scope": 589,
			  "src": "870:22:0",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_contract$_ISeedToken_$599",
				"typeString": "contract ISeedToken"
			  },
			  "typeName": {
				"id": 41,
				"nodeType": "UserDefinedTypeName",
				"pathNode": {
				  "id": 40,
				  "name": "ISeedToken",
				  "nodeType": "IdentifierPath",
				  "referencedDeclaration": 599,
				  "src": "870:10:0"
				},
				"referencedDeclaration": 599,
				"src": "870:10:0",
				"typeDescriptions": {
				  "typeIdentifier": "t_contract$_ISeedToken_$599",
				  "typeString": "contract ISeedToken"
				}
			  },
			  "visibility": "public"
			},
			{
			  "canonicalName": "Builder.Structure",
			  "id": 49,
			  "members": [
				{
				  "constant": false,
				  "id": 44,
				  "mutability": "mutable",
				  "name": "price",
				  "nameLocation": "1028:5:0",
				  "nodeType": "VariableDeclaration",
				  "scope": 49,
				  "src": "1020:13:0",
				  "stateVariable": false,
				  "storageLocation": "default",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  },
				  "typeName": {
					"id": 43,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "1020:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "visibility": "internal"
				},
				{
				  "constant": false,
				  "id": 46,
				  "mutability": "mutable",
				  "name": "time",
				  "nameLocation": "1053:4:0",
				  "nodeType": "VariableDeclaration",
				  "scope": 49,
				  "src": "1045:12:0",
				  "stateVariable": false,
				  "storageLocation": "default",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  },
				  "typeName": {
					"id": 45,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "1045:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "visibility": "internal"
				},
				{
				  "constant": false,
				  "id": 48,
				  "mutability": "mutable",
				  "name": "rate",
				  "nameLocation": "1076:4:0",
				  "nodeType": "VariableDeclaration",
				  "scope": 49,
				  "src": "1068:12:0",
				  "stateVariable": false,
				  "storageLocation": "default",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  },
				  "typeName": {
					"id": 47,
					"name": "uint256",
					"nodeType": "ElementaryTypeName",
					"src": "1068:7:0",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					}
				  },
				  "visibility": "internal"
				}
			  ],
			  "name": "Structure",
			  "nameLocation": "999:9:0",
			  "nodeType": "StructDefinition",
			  "scope": 589,
			  "src": "992:97:0",
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 90,
				"nodeType": "Block",
				"src": "1291:216:0",
				"statements": [
				  {
					"expression": {
					  "id": 59,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 56,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 7,
						"src": "1302:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 57,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "1310:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 58,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "1310:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "1302:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 60,
					"nodeType": "ExpressionStatement",
					"src": "1302:18:0"
				  },
				  {
					"expression": {
					  "id": 63,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 61,
						"name": "SEED",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 42,
						"src": "1334:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_ISeedToken_$599",
						  "typeString": "contract ISeedToken"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 62,
						"name": "_SEED",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 53,
						"src": "1341:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_contract$_ISeedToken_$599",
						  "typeString": "contract ISeedToken"
						}
					  },
					  "src": "1334:12:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_ISeedToken_$599",
						"typeString": "contract ISeedToken"
					  }
					},
					"id": 64,
					"nodeType": "ExpressionStatement",
					"src": "1334:12:0"
				  },
				  {
					"assignments": [
					  67
					],
					"declarations": [
					  {
						"constant": false,
						"id": 67,
						"mutability": "mutable",
						"name": "house",
						"nameLocation": "1378:5:0",
						"nodeType": "VariableDeclaration",
						"scope": 90,
						"src": "1360:23:0",
						"stateVariable": false,
						"storageLocation": "storage",
						"typeDescriptions": {
						  "typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
						  "typeString": "struct Builder.Structure"
						},
						"typeName": {
						  "id": 66,
						  "nodeType": "UserDefinedTypeName",
						  "pathNode": {
							"id": 65,
							"name": "Structure",
							"nodeType": "IdentifierPath",
							"referencedDeclaration": 49,
							"src": "1360:9:0"
						  },
						  "referencedDeclaration": 49,
						  "src": "1360:9:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 71,
					"initialValue": {
					  "baseExpression": {
						"id": 68,
						"name": "structures",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 22,
						"src": "1386:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
						  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
						}
					  },
					  "id": 70,
					  "indexExpression": {
						"hexValue": "31",
						"id": 69,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1397:1:0",
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
					  "src": "1386:13:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_struct$_Structure_$49_storage",
						"typeString": "struct Builder.Structure storage ref"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "1360:39:0"
				  },
				  {
					"expression": {
					  "id": 76,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"expression": {
						  "id": 72,
						  "name": "house",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 67,
						  "src": "1411:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure storage pointer"
						  }
						},
						"id": 74,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"memberName": "price",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 44,
						"src": "1411:11:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "302e31",
						"id": 75,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1425:9:0",
						"subdenomination": "ether",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100000000000000000_by_1",
						  "typeString": "int_const 100000000000000000"
						},
						"value": "0.1"
					  },
					  "src": "1411:23:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 77,
					"nodeType": "ExpressionStatement",
					"src": "1411:23:0"
				  },
				  {
					"expression": {
					  "id": 82,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"expression": {
						  "id": 78,
						  "name": "house",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 67,
						  "src": "1446:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure storage pointer"
						  }
						},
						"id": 80,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"memberName": "time",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 46,
						"src": "1446:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "34",
						"id": 81,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1459:7:0",
						"subdenomination": "hours",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_14400_by_1",
						  "typeString": "int_const 14400"
						},
						"value": "4"
					  },
					  "src": "1446:20:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 83,
					"nodeType": "ExpressionStatement",
					"src": "1446:20:0"
				  },
				  {
					"expression": {
					  "id": 88,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"expression": {
						  "id": 84,
						  "name": "house",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 67,
						  "src": "1478:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
							"typeString": "struct Builder.Structure storage pointer"
						  }
						},
						"id": 86,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"memberName": "rate",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 48,
						"src": "1478:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "31",
						"id": 87,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1491:7:0",
						"subdenomination": "ether",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_1000000000000000000_by_1",
						  "typeString": "int_const 1000000000000000000"
						},
						"value": "1"
					  },
					  "src": "1478:20:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 89,
					"nodeType": "ExpressionStatement",
					"src": "1478:20:0"
				  }
				]
			  },
			  "documentation": {
				"id": 50,
				"nodeType": "StructuredDocumentation",
				"src": "1102:151:0",
				"text": " @dev Sets contract address for {ONE} and {SEED} tokens. \n \n {structures} is initialized with available structures. "
			  },
			  "id": 91,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 54,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 53,
					"mutability": "mutable",
					"name": "_SEED",
					"nameLocation": "1284:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 91,
					"src": "1273:16:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_contract$_ISeedToken_$599",
					  "typeString": "contract ISeedToken"
					},
					"typeName": {
					  "id": 52,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 51,
						"name": "ISeedToken",
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 599,
						"src": "1273:10:0"
					  },
					  "referencedDeclaration": 599,
					  "src": "1273:10:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_ISeedToken_$599",
						"typeString": "contract ISeedToken"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1272:18:0"
			  },
			  "returnParameters": {
				"id": 55,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1291:0:0"
			  },
			  "scope": 589,
			  "src": "1261:246:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 157,
				"nodeType": "Block",
				"src": "2010:338:0",
				"statements": [
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "id": 113,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"baseExpression": {
						  "id": 108,
						  "name": "isStaking",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 26,
						  "src": "2034:9:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 111,
						"indexExpression": {
						  "expression": {
							"id": 109,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2044:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 110,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2044:10:0",
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
						"src": "2034:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "66616c7365",
						"id": 112,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2059:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "false"
					  },
					  "src": "2034:30:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 122,
					"nodeType": "IfStatement",
					"src": "2031:102:0",
					"trueBody": {
					  "id": 121,
					  "nodeType": "Block",
					  "src": "2066:67:0",
					  "statements": [
						{
						  "expression": {
							"id": 119,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "baseExpression": {
								"id": 114,
								"name": "isStaking",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 26,
								"src": "2081:9:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								  "typeString": "mapping(address => bool)"
								}
							  },
							  "id": 117,
							  "indexExpression": {
								"expression": {
								  "id": 115,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "2091:3:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 116,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "2091:10:0",
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
							  "src": "2081:21:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "hexValue": "74727565",
							  "id": 118,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "bool",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "2105:4:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  },
							  "value": "true"
							},
							"src": "2081:28:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "id": 120,
						  "nodeType": "ExpressionStatement",
						  "src": "2081:28:0"
						}
					  ]
					}
				  },
				  {
					"expression": {
					  "id": 130,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 123,
							"name": "map",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 13,
							"src": "2145:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							  "typeString": "mapping(address => uint8[81] storage ref)"
							}
						  },
						  "id": 127,
						  "indexExpression": {
							"expression": {
							  "id": 124,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "2149:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 125,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "2149:10:0",
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
						  "src": "2145:15:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint8_$81_storage",
							"typeString": "uint8[81] storage ref"
						  }
						},
						"id": 128,
						"indexExpression": {
						  "id": 126,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 94,
						  "src": "2161:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2145:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 129,
						"name": "_sId",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 96,
						"src": "2169:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "src": "2145:28:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"id": 131,
					"nodeType": "ExpressionStatement",
					"src": "2145:28:0"
				  },
				  {
					"expression": {
					  "id": 136,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "++",
					  "prefix": false,
					  "src": "2185:25:0",
					  "subExpression": {
						"baseExpression": {
						  "id": 132,
						  "name": "housesCount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 17,
						  "src": "2185:11:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 135,
						"indexExpression": {
						  "expression": {
							"id": 133,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2197:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 134,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2197:10:0",
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
						"src": "2185:23:0",
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
					"id": 137,
					"nodeType": "ExpressionStatement",
					"src": "2185:25:0"
				  },
				  {
					"expression": {
					  "id": 146,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 138,
							"name": "stakedTime",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 36,
							"src": "2224:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
							  "typeString": "mapping(address => uint256[81] storage ref)"
							}
						  },
						  "id": 142,
						  "indexExpression": {
							"expression": {
							  "id": 139,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "2235:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 140,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "2235:10:0",
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
						  "src": "2224:22:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint256_$81_storage",
							"typeString": "uint256[81] storage ref"
						  }
						},
						"id": 143,
						"indexExpression": {
						  "id": 141,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 94,
						  "src": "2247:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2224:28:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 144,
						  "name": "block",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967292,
						  "src": "2255:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_block",
							"typeString": "block"
						  }
						},
						"id": 145,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "timestamp",
						"nodeType": "MemberAccess",
						"src": "2255:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "2224:46:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 147,
					"nodeType": "ExpressionStatement",
					"src": "2224:46:0"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 149,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2295:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 150,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2295:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"id": 151,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2307:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 152,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "value",
						  "nodeType": "MemberAccess",
						  "src": "2307:9:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
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
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 148,
						"name": "Stake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 578,
						"src": "2289:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 153,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2289:28:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 154,
					"nodeType": "EmitStatement",
					"src": "2284:33:0"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 155,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "2335:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 107,
					"id": 156,
					"nodeType": "Return",
					"src": "2328:11:0"
				  }
				]
			  },
			  "documentation": {
				"id": 92,
				"nodeType": "StructuredDocumentation",
				"src": "1515:365:0",
				"text": " @dev Places a new structure on the map and sets up farming. \n \n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Stake} event.\n Requirements:\n - value attached must be equal to `_sid' price. \n - `_sId` at `_pos` must be different from current value."
			  },
			  "functionSelector": "c6313eb7",
			  "id": 158,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "id": 99,
					  "name": "_sId",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 96,
					  "src": "1962:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					}
				  ],
				  "id": 100,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 98,
					"name": "priced",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 536,
					"src": "1955:6:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1955:12:0"
				},
				{
				  "arguments": [
					{
					  "id": 102,
					  "name": "_pos",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 94,
					  "src": "1975:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					{
					  "id": 103,
					  "name": "_sId",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 96,
					  "src": "1981:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					}
				  ],
				  "id": 104,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 101,
					"name": "unique",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 557,
					"src": "1968:6:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1968:18:0"
				}
			  ],
			  "name": "placeStructure",
			  "nameLocation": "1897:14:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 97,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 94,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "1918:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 158,
					"src": "1912:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 93,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "1912:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 96,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "1930:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 158,
					"src": "1924:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 95,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "1924:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1911:24:0"
			  },
			  "returnParameters": {
				"id": 107,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 106,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 158,
					"src": "2004:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 105,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "2004:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2003:6:0"
			  },
			  "scope": 589,
			  "src": "1888:460:0",
			  "stateMutability": "payable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 243,
				"nodeType": "Block",
				"src": "2759:518:0",
				"statements": [
				  {
					"assignments": [
					  169
					],
					"declarations": [
					  {
						"constant": false,
						"id": 169,
						"mutability": "mutable",
						"name": "currentStruct",
						"nameLocation": "2778:13:0",
						"nodeType": "VariableDeclaration",
						"scope": 243,
						"src": "2772:19:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						},
						"typeName": {
						  "id": 168,
						  "name": "uint8",
						  "nodeType": "ElementaryTypeName",
						  "src": "2772:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 176,
					"initialValue": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 170,
						  "name": "map",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 13,
						  "src": "2794:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							"typeString": "mapping(address => uint8[81] storage ref)"
						  }
						},
						"id": 173,
						"indexExpression": {
						  "expression": {
							"id": 171,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2798:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 172,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2798:10:0",
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
						"src": "2794:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint8_$81_storage",
						  "typeString": "uint8[81] storage ref"
						}
					  },
					  "id": 175,
					  "indexExpression": {
						"id": 174,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 161,
						"src": "2810:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "2794:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "2772:43:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  },
					  "id": 179,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 177,
						"name": "currentStruct",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 169,
						"src": "2830:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 178,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2847:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "2830:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 184,
					"nodeType": "IfStatement",
					"src": "2827:43:0",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "456d7074792074696c65",
							"id": 181,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "2857:12:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							},
							"value": "Empty tile"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							}
						  ],
						  "id": 180,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "2850:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 182,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "2850:20:0",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 183,
					  "nodeType": "ExpressionStatement",
					  "src": "2850:20:0"
					}
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 186,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 161,
						  "src": "2902:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						{
						  "id": 187,
						  "name": "currentStruct",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 169,
						  "src": "2908:13:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  },
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						],
						"id": 185,
						"name": "withdrawTileYield",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 320,
						"src": "2884:17:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint8_$_t_uint8_$returns$_t_bool_$",
						  "typeString": "function (uint8,uint8) returns (bool)"
						}
					  },
					  "id": 188,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2884:38:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 189,
					"nodeType": "ExpressionStatement",
					"src": "2884:38:0"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "expression": {
							"baseExpression": {
							  "id": 196,
							  "name": "structures",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 22,
							  "src": "2963:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								"typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							  }
							},
							"id": 198,
							"indexExpression": {
							  "id": 197,
							  "name": "currentStruct",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 169,
							  "src": "2974:13:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "2963:25:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_struct$_Structure_$49_storage",
							  "typeString": "struct Builder.Structure storage ref"
							}
						  },
						  "id": 199,
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "price",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 44,
						  "src": "2963:31:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "arguments": [
							{
							  "expression": {
								"id": 192,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "2942:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 193,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "2942:10:0",
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
							"id": 191,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "2934:8:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_payable_$",
							  "typeString": "type(address payable)"
							},
							"typeName": {
							  "id": 190,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "2934:8:0",
							  "stateMutability": "payable",
							  "typeDescriptions": {}
							}
						  },
						  "id": 194,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "2934:19:0",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						"id": 195,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "transfer",
						"nodeType": "MemberAccess",
						"src": "2934:28:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
						  "typeString": "function (uint256)"
						}
					  },
					  "id": 200,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2934:61:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 201,
					"nodeType": "ExpressionStatement",
					"src": "2934:61:0"
				  },
				  {
					"expression": {
					  "id": 209,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 202,
							"name": "map",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 13,
							"src": "3009:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							  "typeString": "mapping(address => uint8[81] storage ref)"
							}
						  },
						  "id": 206,
						  "indexExpression": {
							"expression": {
							  "id": 203,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "3013:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 204,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "3013:10:0",
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
						  "src": "3009:15:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint8_$81_storage",
							"typeString": "uint8[81] storage ref"
						  }
						},
						"id": 207,
						"indexExpression": {
						  "id": 205,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 161,
						  "src": "3025:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3009:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 208,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3033:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3009:25:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"id": 210,
					"nodeType": "ExpressionStatement",
					"src": "3009:25:0"
				  },
				  {
					"expression": {
					  "id": 215,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "--",
					  "prefix": false,
					  "src": "3046:25:0",
					  "subExpression": {
						"baseExpression": {
						  "id": 211,
						  "name": "housesCount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 17,
						  "src": "3046:11:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 214,
						"indexExpression": {
						  "expression": {
							"id": 212,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3058:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 213,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3058:10:0",
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
						"src": "3046:23:0",
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
					"id": 216,
					"nodeType": "ExpressionStatement",
					"src": "3046:25:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 222,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"baseExpression": {
						  "id": 217,
						  "name": "housesCount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 17,
						  "src": "3086:11:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 220,
						"indexExpression": {
						  "expression": {
							"id": 218,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3098:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 219,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3098:10:0",
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
						"src": "3086:23:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 221,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3113:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3086:28:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 231,
					"nodeType": "IfStatement",
					"src": "3083:93:0",
					"trueBody": {
					  "id": 230,
					  "nodeType": "Block",
					  "src": "3116:60:0",
					  "statements": [
						{
						  "expression": {
							"id": 228,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "baseExpression": {
								"id": 223,
								"name": "isStaking",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 26,
								"src": "3131:9:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								  "typeString": "mapping(address => bool)"
								}
							  },
							  "id": 226,
							  "indexExpression": {
								"expression": {
								  "id": 224,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "3141:3:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 225,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "3141:10:0",
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
							  "src": "3131:21:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "hexValue": "66616c7365",
							  "id": 227,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "bool",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "3155:5:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  },
							  "value": "false"
							},
							"src": "3131:29:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "id": 229,
						  "nodeType": "ExpressionStatement",
						  "src": "3131:29:0"
						}
					  ]
					}
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 233,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3201:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 234,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3201:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"baseExpression": {
							  "id": 235,
							  "name": "structures",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 22,
							  "src": "3213:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								"typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							  }
							},
							"id": 237,
							"indexExpression": {
							  "id": 236,
							  "name": "currentStruct",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 169,
							  "src": "3224:13:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "3213:25:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_struct$_Structure_$49_storage",
							  "typeString": "struct Builder.Structure storage ref"
							}
						  },
						  "id": 238,
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "price",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 44,
						  "src": "3213:31:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
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
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 232,
						"name": "Unstake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 584,
						"src": "3193:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 239,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3193:52:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 240,
					"nodeType": "EmitStatement",
					"src": "3188:57:0"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 241,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "3264:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 167,
					"id": 242,
					"nodeType": "Return",
					"src": "3257:11:0"
				  }
				]
			  },
			  "documentation": {
				"id": 159,
				"nodeType": "StructuredDocumentation",
				"src": "2357:315:0",
				"text": " @dev Removes a structure from the map, stops farming, returns\n staked tokens.  \n \n Returns a boolean value indicating whether the operation succeeded.\n Emits an {Unstake} event.\n Requirements:\n - sender must have tokens staked. "
			  },
			  "functionSelector": "975542a1",
			  "id": 244,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 164,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 163,
					"name": "staking",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 572,
					"src": "2736:7:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2736:7:0"
				}
			  ],
			  "name": "removeStructure",
			  "nameLocation": "2689:15:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 162,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 161,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "2711:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 244,
					"src": "2705:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 160,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "2705:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2704:12:0"
			  },
			  "returnParameters": {
				"id": 167,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 166,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 244,
					"src": "2753:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 165,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "2753:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2752:6:0"
			  },
			  "scope": 589,
			  "src": "2680:597:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 319,
				"nodeType": "Block",
				"src": "3668:529:0",
				"statements": [
				  {
					"assignments": [
					  257
					],
					"declarations": [
					  {
						"constant": false,
						"id": 257,
						"mutability": "mutable",
						"name": "currentStruct",
						"nameLocation": "3687:13:0",
						"nodeType": "VariableDeclaration",
						"scope": 319,
						"src": "3681:19:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						},
						"typeName": {
						  "id": 256,
						  "name": "uint8",
						  "nodeType": "ElementaryTypeName",
						  "src": "3681:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 264,
					"initialValue": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 258,
						  "name": "map",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 13,
						  "src": "3703:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							"typeString": "mapping(address => uint8[81] storage ref)"
						  }
						},
						"id": 261,
						"indexExpression": {
						  "expression": {
							"id": 259,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3707:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 260,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3707:10:0",
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
						"src": "3703:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint8_$81_storage",
						  "typeString": "uint8[81] storage ref"
						}
					  },
					  "id": 263,
					  "indexExpression": {
						"id": 262,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 247,
						"src": "3719:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "3703:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3681:43:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  },
					  "id": 267,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 265,
						"name": "currentStruct",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 257,
						"src": "3739:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 266,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3756:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3739:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 272,
					"nodeType": "IfStatement",
					"src": "3736:43:0",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "456d7074792074696c65",
							"id": 269,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "3766:12:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							},
							"value": "Empty tile"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							}
						  ],
						  "id": 268,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "3759:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 270,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "3759:20:0",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 271,
					  "nodeType": "ExpressionStatement",
					  "src": "3759:20:0"
					}
				  },
				  {
					"assignments": [
					  274
					],
					"declarations": [
					  {
						"constant": false,
						"id": 274,
						"mutability": "mutable",
						"name": "timeStaked",
						"nameLocation": "3801:10:0",
						"nodeType": "VariableDeclaration",
						"scope": 319,
						"src": "3793:18:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 273,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3793:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 287,
					"initialValue": {
					  "arguments": [
						{
						  "baseExpression": {
							"baseExpression": {
							  "id": 276,
							  "name": "stakedTime",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 36,
							  "src": "3847:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
								"typeString": "mapping(address => uint256[81] storage ref)"
							  }
							},
							"id": 279,
							"indexExpression": {
							  "expression": {
								"id": 277,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "3858:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 278,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "3858:10:0",
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
							"src": "3847:22:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_array$_t_uint256_$81_storage",
							  "typeString": "uint256[81] storage ref"
							}
						  },
						  "id": 281,
						  "indexExpression": {
							"id": 280,
							"name": "_pos",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 247,
							"src": "3870:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "3847:28:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "expression": {
							"baseExpression": {
							  "id": 282,
							  "name": "structures",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 22,
							  "src": "3891:10:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								"typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							  }
							},
							"id": 284,
							"indexExpression": {
							  "id": 283,
							  "name": "_sId",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 249,
							  "src": "3902:4:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "3891:16:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_struct$_Structure_$49_storage",
							  "typeString": "struct Builder.Structure storage ref"
							}
						  },
						  "id": 285,
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "time",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 46,
						  "src": "3891:21:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 275,
						"name": "calculateYieldTime",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 352,
						"src": "3814:18:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256,uint256) returns (uint256)"
						}
					  },
					  "id": 286,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3814:109:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3793:130:0"
				  },
				  {
					"expression": {
					  "id": 295,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "baseExpression": {
							"id": 288,
							"name": "stakedTime",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 36,
							"src": "3935:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
							  "typeString": "mapping(address => uint256[81] storage ref)"
							}
						  },
						  "id": 292,
						  "indexExpression": {
							"expression": {
							  "id": 289,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "3946:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 290,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "3946:10:0",
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
						  "src": "3935:22:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_array$_t_uint256_$81_storage",
							"typeString": "uint256[81] storage ref"
						  }
						},
						"id": 293,
						"indexExpression": {
						  "id": 291,
						  "name": "_pos",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 247,
						  "src": "3958:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3935:28:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 294,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3966:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3935:32:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 296,
					"nodeType": "ExpressionStatement",
					"src": "3935:32:0"
				  },
				  {
					"assignments": [
					  298
					],
					"declarations": [
					  {
						"constant": false,
						"id": 298,
						"mutability": "mutable",
						"name": "reward",
						"nameLocation": "3997:6:0",
						"nodeType": "VariableDeclaration",
						"scope": 319,
						"src": "3989:14:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 297,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3989:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 303,
					"initialValue": {
					  "arguments": [
						{
						  "id": 300,
						  "name": "timeStaked",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 274,
						  "src": "4036:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "id": 301,
						  "name": "_sId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 249,
						  "src": "4062:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						],
						"id": 299,
						"name": "calculateReward",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 380,
						"src": "4006:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint8_$returns$_t_uint256_$",
						  "typeString": "function (uint256,uint8) view returns (uint256)"
						}
					  },
					  "id": 302,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4006:71:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3989:88:0"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "expression": {
							"id": 307,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "4100:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 308,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "4100:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 309,
						  "name": "reward",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 298,
						  "src": "4112:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
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
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 304,
						  "name": "SEED",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 42,
						  "src": "4090:4:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_ISeedToken_$599",
							"typeString": "contract ISeedToken"
						  }
						},
						"id": 306,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "mint",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 598,
						"src": "4090:9:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256) external"
						}
					  },
					  "id": 310,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4090:29:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 311,
					"nodeType": "ExpressionStatement",
					"src": "4090:29:0"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 313,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "4152:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 314,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "4152:10:0",
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
						"id": 312,
						"name": "YieldWithdraw",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 588,
						"src": "4138:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
						  "typeString": "function (address)"
						}
					  },
					  "id": 315,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4138:25:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 316,
					"nodeType": "EmitStatement",
					"src": "4133:30:0"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 317,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "4184:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 255,
					"id": 318,
					"nodeType": "Return",
					"src": "4177:11:0"
				  }
				]
			  },
			  "documentation": {
				"id": 245,
				"nodeType": "StructuredDocumentation",
				"src": "3285:284:0",
				"text": " @dev Withdraw yield of {Seed} from the structure. \n \n Returns a boolean value indicating whether the operation succeeded.\n Emits a {YieldWithdraw} event.\n Requirements:\n - sender must have tokens staked. "
			  },
			  "functionSelector": "5574f577",
			  "id": 320,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 252,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 251,
					"name": "staking",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 572,
					"src": "3645:7:0"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3645:7:0"
				}
			  ],
			  "name": "withdrawTileYield",
			  "nameLocation": "3586:17:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 250,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 247,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "3610:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 320,
					"src": "3604:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 246,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "3604:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 249,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "3622:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 320,
					"src": "3616:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 248,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "3616:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3603:24:0"
			  },
			  "returnParameters": {
				"id": 255,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 254,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 320,
					"src": "3662:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 253,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "3662:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3661:6:0"
			  },
			  "scope": 589,
			  "src": "3577:620:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 351,
				"nodeType": "Block",
				"src": "4387:177:0",
				"statements": [
				  {
					"assignments": [
					  331
					],
					"declarations": [
					  {
						"constant": false,
						"id": 331,
						"mutability": "mutable",
						"name": "yieldTime",
						"nameLocation": "4406:9:0",
						"nodeType": "VariableDeclaration",
						"scope": 351,
						"src": "4398:17:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 330,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4398:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 336,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 335,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"expression": {
						  "id": 332,
						  "name": "block",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967292,
						  "src": "4418:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_block",
							"typeString": "block"
						  }
						},
						"id": 333,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "timestamp",
						"nodeType": "MemberAccess",
						"src": "4418:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "-",
					  "rightExpression": {
						"id": 334,
						"name": "start",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 323,
						"src": "4436:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4418:23:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4398:43:0"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "id": 338,
						  "name": "start",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 323,
						  "src": "4474:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "expression": {
							"id": 339,
							"name": "block",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967292,
							"src": "4481:5:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_block",
							  "typeString": "block"
							}
						  },
						  "id": 340,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "timestamp",
						  "nodeType": "MemberAccess",
						  "src": "4481:15:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 337,
						"name": "calculatedYield",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 358,
						"src": "4458:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
						  "typeString": "function (uint256,uint256)"
						}
					  },
					  "id": 341,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4458:39:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 342,
					"nodeType": "EmitStatement",
					"src": "4453:44:0"
				  },
				  {
					"expression": {
					  "condition": {
						"components": [
						  {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 345,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "id": 343,
							  "name": "yieldTime",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 331,
							  "src": "4517:9:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": ">",
							"rightExpression": {
							  "id": 344,
							  "name": "bound",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 325,
							  "src": "4529:5:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4517:17:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  }
						],
						"id": 346,
						"isConstant": false,
						"isInlineArray": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "TupleExpression",
						"src": "4516:19:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "falseExpression": {
						"id": 348,
						"name": "yieldTime",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 331,
						"src": "4546:9:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "id": 349,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "Conditional",
					  "src": "4516:39:0",
					  "trueExpression": {
						"id": 347,
						"name": "bound",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 325,
						"src": "4538:5:0",
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
					"functionReturnParameters": 329,
					"id": 350,
					"nodeType": "Return",
					"src": "4509:46:0"
				  }
				]
			  },
			  "documentation": {
				"id": 321,
				"nodeType": "StructuredDocumentation",
				"src": "4205:80:0",
				"text": " @dev Returns time while structure was accumulating tokens. "
			  },
			  "functionSelector": "15e63a9e",
			  "id": 352,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "calculateYieldTime",
			  "nameLocation": "4302:18:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 326,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 323,
					"mutability": "mutable",
					"name": "start",
					"nameLocation": "4329:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 352,
					"src": "4321:13:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 322,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4321:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 325,
					"mutability": "mutable",
					"name": "bound",
					"nameLocation": "4344:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 352,
					"src": "4336:13:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 324,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4336:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4320:30:0"
			  },
			  "returnParameters": {
				"id": 329,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 328,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 352,
					"src": "4378:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 327,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4378:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4377:9:0"
			  },
			  "scope": 589,
			  "src": "4293:271:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "anonymous": false,
			  "id": 358,
			  "name": "calculatedYield",
			  "nameLocation": "4577:15:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 357,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 354,
					"indexed": false,
					"mutability": "mutable",
					"name": "start",
					"nameLocation": "4601:5:0",
					"nodeType": "VariableDeclaration",
					"scope": 358,
					"src": "4593:13:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 353,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4593:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 356,
					"indexed": false,
					"mutability": "mutable",
					"name": "end",
					"nameLocation": "4616:3:0",
					"nodeType": "VariableDeclaration",
					"scope": 358,
					"src": "4608:11:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 355,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4608:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4592:28:0"
			  },
			  "src": "4571:50:0"
			},
			{
			  "body": {
				"id": 379,
				"nodeType": "Block",
				"src": "4797:94:0",
				"statements": [
				  {
					"assignments": [
					  369
					],
					"declarations": [
					  {
						"constant": false,
						"id": 369,
						"mutability": "mutable",
						"name": "reward",
						"nameLocation": "4816:6:0",
						"nodeType": "VariableDeclaration",
						"scope": 379,
						"src": "4808:14:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 368,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4808:7:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 376,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 375,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 370,
						"name": "_stkTime",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 361,
						"src": "4826:8:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"expression": {
						  "baseExpression": {
							"id": 371,
							"name": "structures",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 22,
							"src": "4837:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
							  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
							}
						  },
						  "id": 373,
						  "indexExpression": {
							"id": 372,
							"name": "_sId",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 363,
							"src": "4848:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "isConstant": false,
						  "isLValue": true,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "IndexAccess",
						  "src": "4837:16:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Structure_$49_storage",
							"typeString": "struct Builder.Structure storage ref"
						  }
						},
						"id": 374,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "rate",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 48,
						"src": "4837:21:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4826:32:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4808:50:0"
				  },
				  {
					"expression": {
					  "id": 377,
					  "name": "reward",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 369,
					  "src": "4876:6:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 367,
					"id": 378,
					"nodeType": "Return",
					"src": "4869:13:0"
				  }
				]
			  },
			  "documentation": {
				"id": 359,
				"nodeType": "StructuredDocumentation",
				"src": "4628:68:0",
				"text": " @dev Returns amount of yield from a structure. "
			  },
			  "id": 380,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "calculateReward",
			  "nameLocation": "4713:15:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 364,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 361,
					"mutability": "mutable",
					"name": "_stkTime",
					"nameLocation": "4737:8:0",
					"nodeType": "VariableDeclaration",
					"scope": 380,
					"src": "4729:16:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 360,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4729:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 363,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "4753:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 380,
					"src": "4747:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 362,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "4747:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4728:30:0"
			  },
			  "returnParameters": {
				"id": 367,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 366,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 380,
					"src": "4788:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 365,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4788:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4787:9:0"
			  },
			  "scope": 589,
			  "src": "4704:187:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 393,
				"nodeType": "Block",
				"src": "5018:43:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 388,
						"name": "map",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 13,
						"src": "5037:3:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
						  "typeString": "mapping(address => uint8[81] storage ref)"
						}
					  },
					  "id": 391,
					  "indexExpression": {
						"expression": {
						  "id": 389,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5041:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 390,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5041:10:0",
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
					  "src": "5037:15:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint8_$81_storage",
						"typeString": "uint8[81] storage ref"
					  }
					},
					"functionReturnParameters": 387,
					"id": 392,
					"nodeType": "Return",
					"src": "5030:22:0"
				  }
				]
			  },
			  "documentation": {
				"id": 381,
				"nodeType": "StructuredDocumentation",
				"src": "4899:52:0",
				"text": " @dev Returns player's gamemap. "
			  },
			  "functionSelector": "ad3de14c",
			  "id": 394,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getMap",
			  "nameLocation": "4968:6:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 382,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4974:2:0"
			  },
			  "returnParameters": {
				"id": 387,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 386,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 394,
					"src": "5000:16:0",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_array$_t_uint8_$81_memory_ptr",
					  "typeString": "uint8[81]"
					},
					"typeName": {
					  "baseType": {
						"id": 383,
						"name": "uint8",
						"nodeType": "ElementaryTypeName",
						"src": "5000:5:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "id": 385,
					  "length": {
						"hexValue": "3831",
						"id": 384,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "5006:2:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_81_by_1",
						  "typeString": "int_const 81"
						},
						"value": "81"
					  },
					  "nodeType": "ArrayTypeName",
					  "src": "5000:9:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_array$_t_uint8_$81_storage_ptr",
						"typeString": "uint8[81]"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4999:18:0"
			  },
			  "scope": 589,
			  "src": "4959:102:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 405,
				"nodeType": "Block",
				"src": "5189:50:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 400,
						"name": "housesCount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 17,
						"src": "5207:11:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 403,
					  "indexExpression": {
						"expression": {
						  "id": 401,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5219:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 402,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5219:10:0",
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
					  "src": "5207:23:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 399,
					"id": 404,
					"nodeType": "Return",
					"src": "5200:30:0"
				  }
				]
			  },
			  "documentation": {
				"id": 395,
				"nodeType": "StructuredDocumentation",
				"src": "5070:58:0",
				"text": " @dev Returns amount of built houses. "
			  },
			  "functionSelector": "fd5f33ec",
			  "id": 406,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getHouses",
			  "nameLocation": "5145:9:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 396,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5154:2:0"
			  },
			  "returnParameters": {
				"id": 399,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 398,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 406,
					"src": "5180:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 397,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5180:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5179:9:0"
			  },
			  "scope": 589,
			  "src": "5136:103:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 419,
				"nodeType": "Block",
				"src": "5388:43:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 415,
						"name": "structures",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 22,
						"src": "5406:10:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
						  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
						}
					  },
					  "id": 417,
					  "indexExpression": {
						"id": 416,
						"name": "_sId",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 409,
						"src": "5417:4:0",
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
					  "src": "5406:16:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_struct$_Structure_$49_storage",
						"typeString": "struct Builder.Structure storage ref"
					  }
					},
					"functionReturnParameters": 414,
					"id": 418,
					"nodeType": "Return",
					"src": "5399:23:0"
				  }
				]
			  },
			  "documentation": {
				"id": 407,
				"nodeType": "StructuredDocumentation",
				"src": "5251:55:0",
				"text": " @dev Returns in-game structure.   "
			  },
			  "functionSelector": "5013d729",
			  "id": 420,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getStructure",
			  "nameLocation": "5323:12:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 410,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 409,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "5341:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 420,
					"src": "5336:9:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 408,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "5336:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5335:11:0"
			  },
			  "returnParameters": {
				"id": 414,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 413,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 420,
					"src": "5370:16:0",
					"stateVariable": false,
					"storageLocation": "memory",
					"typeDescriptions": {
					  "typeIdentifier": "t_struct$_Structure_$49_memory_ptr",
					  "typeString": "struct Builder.Structure"
					},
					"typeName": {
					  "id": 412,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 411,
						"name": "Structure",
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 49,
						"src": "5370:9:0"
					  },
					  "referencedDeclaration": 49,
					  "src": "5370:9:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_struct$_Structure_$49_storage_ptr",
						"typeString": "struct Builder.Structure"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5369:18:0"
			  },
			  "scope": 589,
			  "src": "5314:117:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 431,
				"nodeType": "Block",
				"src": "5553:48:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 426,
						"name": "isStaking",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 26,
						"src": "5571:9:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
						  "typeString": "mapping(address => bool)"
						}
					  },
					  "id": 429,
					  "indexExpression": {
						"expression": {
						  "id": 427,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5581:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 428,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5581:10:0",
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
					  "src": "5571:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 425,
					"id": 430,
					"nodeType": "Return",
					"src": "5564:28:0"
				  }
				]
			  },
			  "documentation": {
				"id": 421,
				"nodeType": "StructuredDocumentation",
				"src": "5439:53:0",
				"text": " @dev Returns isStaking mapping. "
			  },
			  "functionSelector": "702376a7",
			  "id": 432,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getIsStaking",
			  "nameLocation": "5509:12:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 422,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5521:2:0"
			  },
			  "returnParameters": {
				"id": 425,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 424,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 432,
					"src": "5547:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 423,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "5547:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5546:6:0"
			  },
			  "scope": 589,
			  "src": "5500:101:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 443,
				"nodeType": "Block",
				"src": "5729:45:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"id": 438,
						"name": "staked",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 30,
						"src": "5747:6:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 441,
					  "indexExpression": {
						"expression": {
						  "id": 439,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "5754:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 440,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "5754:10:0",
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
					  "src": "5747:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 437,
					"id": 442,
					"nodeType": "Return",
					"src": "5740:25:0"
				  }
				]
			  },
			  "documentation": {
				"id": 433,
				"nodeType": "StructuredDocumentation",
				"src": "5609:59:0",
				"text": " @dev Returns amount of staked tokens. "
			  },
			  "functionSelector": "c59abf9f",
			  "id": 444,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getStaked",
			  "nameLocation": "5685:9:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 434,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5694:2:0"
			  },
			  "returnParameters": {
				"id": 437,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 436,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 444,
					"src": "5720:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 435,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5720:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5719:9:0"
			  },
			  "scope": 589,
			  "src": "5676:98:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 459,
				"nodeType": "Block",
				"src": "5923:55:0",
				"statements": [
				  {
					"expression": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 452,
						  "name": "stakedTime",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 36,
						  "src": "5941:10:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
							"typeString": "mapping(address => uint256[81] storage ref)"
						  }
						},
						"id": 455,
						"indexExpression": {
						  "expression": {
							"id": 453,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "5952:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 454,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "5952:10:0",
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
						"src": "5941:22:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint256_$81_storage",
						  "typeString": "uint256[81] storage ref"
						}
					  },
					  "id": 457,
					  "indexExpression": {
						"id": 456,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 447,
						"src": "5964:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "5941:28:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 451,
					"id": 458,
					"nodeType": "Return",
					"src": "5934:35:0"
				  }
				]
			  },
			  "documentation": {
				"id": 445,
				"nodeType": "StructuredDocumentation",
				"src": "5782:66:0",
				"text": " @dev Returns time when structure was staked. "
			  },
			  "functionSelector": "a8a26730",
			  "id": 460,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getStakedTime",
			  "nameLocation": "5865:13:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 448,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 447,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "5885:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 460,
					"src": "5879:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 446,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "5879:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5878:12:0"
			  },
			  "returnParameters": {
				"id": 451,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 450,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 460,
					"src": "5914:7:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 449,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5914:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5913:9:0"
			  },
			  "scope": 589,
			  "src": "5856:122:0",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 504,
				"nodeType": "Block",
				"src": "6167:302:0",
				"statements": [
				  {
					"assignments": [
					  469
					],
					"declarations": [
					  {
						"constant": false,
						"id": 469,
						"mutability": "mutable",
						"name": "currentStruct",
						"nameLocation": "6185:13:0",
						"nodeType": "VariableDeclaration",
						"scope": 504,
						"src": "6179:19:0",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						},
						"typeName": {
						  "id": 468,
						  "name": "uint8",
						  "nodeType": "ElementaryTypeName",
						  "src": "6179:5:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 476,
					"initialValue": {
					  "baseExpression": {
						"baseExpression": {
						  "id": 470,
						  "name": "map",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 13,
						  "src": "6201:3:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
							"typeString": "mapping(address => uint8[81] storage ref)"
						  }
						},
						"id": 473,
						"indexExpression": {
						  "expression": {
							"id": 471,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "6205:3:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 472,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "6205:10:0",
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
						"src": "6201:15:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_array$_t_uint8_$81_storage",
						  "typeString": "uint8[81] storage ref"
						}
					  },
					  "id": 475,
					  "indexExpression": {
						"id": 474,
						"name": "_pos",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 463,
						"src": "6217:4:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "6201:21:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6179:43:0"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  },
					  "id": 479,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 477,
						"name": "currentStruct",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 469,
						"src": "6238:13:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint8",
						  "typeString": "uint8"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "==",
					  "rightExpression": {
						"hexValue": "30",
						"id": 478,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6255:1:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "6238:18:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 484,
					"nodeType": "IfStatement",
					"src": "6235:43:0",
					"trueBody": {
					  "expression": {
						"arguments": [
						  {
							"hexValue": "456d7074792074696c65",
							"id": 481,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "string",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "6265:12:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							},
							"value": "Empty tile"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_stringliteral_bab171768ed3b718f3712d45666fcc39948897f914d4e71bf23fb663ea5b7c19",
							  "typeString": "literal_string \"Empty tile\""
							}
						  ],
						  "id": 480,
						  "name": "revert",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [
							4294967277,
							4294967277
						  ],
						  "referencedDeclaration": 4294967277,
						  "src": "6258:6:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
							"typeString": "function (string memory) pure"
						  }
						},
						"id": 482,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "functionCall",
						"lValueRequested": false,
						"names": [],
						"nodeType": "FunctionCall",
						"src": "6258:20:0",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_tuple$__$",
						  "typeString": "tuple()"
						}
					  },
					  "id": 483,
					  "nodeType": "ExpressionStatement",
					  "src": "6258:20:0"
					}
				  },
				  {
					"expression": {
					  "components": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 501,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"baseExpression": {
								  "baseExpression": {
									"id": 486,
									"name": "stakedTime",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 36,
									"src": "6335:10:0",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint256_$81_storage_$",
									  "typeString": "mapping(address => uint256[81] storage ref)"
									}
								  },
								  "id": 489,
								  "indexExpression": {
									"expression": {
									  "id": 487,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "6346:3:0",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 488,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "6346:10:0",
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
								  "src": "6335:22:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_array$_t_uint256_$81_storage",
									"typeString": "uint256[81] storage ref"
								  }
								},
								"id": 491,
								"indexExpression": {
								  "id": 490,
								  "name": "_pos",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 463,
								  "src": "6358:4:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_uint8",
									"typeString": "uint8"
								  }
								},
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "IndexAccess",
								"src": "6335:28:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  {
								"expression": {
								  "baseExpression": {
									"id": 492,
									"name": "structures",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 22,
									"src": "6379:10:0",
									"typeDescriptions": {
									  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
									  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
									}
								  },
								  "id": 494,
								  "indexExpression": {
									"id": 493,
									"name": "currentStruct",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 469,
									"src": "6390:13:0",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint8",
									  "typeString": "uint8"
									}
								  },
								  "isConstant": false,
								  "isLValue": true,
								  "isPure": false,
								  "lValueRequested": false,
								  "nodeType": "IndexAccess",
								  "src": "6379:25:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_struct$_Structure_$49_storage",
									"typeString": "struct Builder.Structure storage ref"
								  }
								},
								"id": 495,
								"isConstant": false,
								"isLValue": true,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "time",
								"nodeType": "MemberAccess",
								"referencedDeclaration": 46,
								"src": "6379:30:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								},
								{
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  ],
							  "id": 485,
							  "name": "calculateYieldTime",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 352,
							  "src": "6302:18:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
								"typeString": "function (uint256,uint256) returns (uint256)"
							  }
							},
							"id": 496,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "6302:122:0",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"expression": {
							  "baseExpression": {
								"id": 497,
								"name": "structures",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 22,
								"src": "6428:10:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
								}
							  },
							  "id": 499,
							  "indexExpression": {
								"id": 498,
								"name": "currentStruct",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 469,
								"src": "6439:13:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint8",
								  "typeString": "uint8"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "6428:25:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_struct$_Structure_$49_storage",
								"typeString": "struct Builder.Structure storage ref"
							  }
							},
							"id": 500,
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "time",
							"nodeType": "MemberAccess",
							"referencedDeclaration": 46,
							"src": "6428:30:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "6302:156:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						}
					  ],
					  "id": 502,
					  "isConstant": false,
					  "isInlineArray": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "TupleExpression",
					  "src": "6301:158:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 467,
					"id": 503,
					"nodeType": "Return",
					"src": "6294:165:0"
				  }
				]
			  },
			  "documentation": {
				"id": 461,
				"nodeType": "StructuredDocumentation",
				"src": "5988:105:0",
				"text": " @dev Returns boolean whether building finished accumulating\n tokens or not.  "
			  },
			  "functionSelector": "94148d4f",
			  "id": 505,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "isReadyForWithdraw",
			  "nameLocation": "6111:18:0",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 464,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 463,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "6136:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 505,
					"src": "6130:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 462,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6130:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6129:12:0"
			  },
			  "returnParameters": {
				"id": 467,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 466,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 505,
					"src": "6161:4:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 465,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "6161:4:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6160:6:0"
			  },
			  "scope": 589,
			  "src": "6102:367:0",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 517,
				"nodeType": "Block",
				"src": "6560:100:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 512,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 509,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "6579:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 510,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "6579:10:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"id": 511,
							"name": "owner",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 7,
							"src": "6593:5:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "6579:19:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "43616e27742063616c6c206f776e65722066756e6374696f6e",
						  "id": 513,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "6610:27:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_5e6d34edc3b68a0300847aeb5f6c6a74c0f89a014206bf2daa42b34dc69a4d02",
							"typeString": "literal_string \"Can't call owner function\""
						  },
						  "value": "Can't call owner function"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_5e6d34edc3b68a0300847aeb5f6c6a74c0f89a014206bf2daa42b34dc69a4d02",
							"typeString": "literal_string \"Can't call owner function\""
						  }
						],
						"id": 508,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "6571:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 514,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6571:67:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 515,
					"nodeType": "ExpressionStatement",
					"src": "6571:67:0"
				  },
				  {
					"id": 516,
					"nodeType": "PlaceholderStatement",
					"src": "6650:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 506,
				"nodeType": "StructuredDocumentation",
				"src": "6477:56:0",
				"text": " @dev Requires sender to be owner.  "
			  },
			  "id": 518,
			  "name": "onlyOwner",
			  "nameLocation": "6550:9:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 507,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6560:0:0"
			  },
			  "src": "6541:119:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 535,
				"nodeType": "Block",
				"src": "6769:114:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 530,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 524,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "6788:3:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 525,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "value",
							"nodeType": "MemberAccess",
							"src": "6788:9:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"expression": {
							  "baseExpression": {
								"id": 526,
								"name": "structures",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 22,
								"src": "6801:10:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Structure_$49_storage_$",
								  "typeString": "mapping(uint256 => struct Builder.Structure storage ref)"
								}
							  },
							  "id": 528,
							  "indexExpression": {
								"id": 527,
								"name": "_sId",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 521,
								"src": "6812:4:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint8",
								  "typeString": "uint8"
								}
							  },
							  "isConstant": false,
							  "isLValue": true,
							  "isPure": false,
							  "lValueRequested": false,
							  "nodeType": "IndexAccess",
							  "src": "6801:16:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_struct$_Structure_$49_storage",
								"typeString": "struct Builder.Structure storage ref"
							  }
							},
							"id": 529,
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"memberName": "price",
							"nodeType": "MemberAccess",
							"referencedDeclaration": 44,
							"src": "6801:22:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "6788:35:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "446966666572656e742076616c7565206174746163686564",
						  "id": 531,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "6835:26:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde",
							"typeString": "literal_string \"Different value attached\""
						  },
						  "value": "Different value attached"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_5e2e615e37531677d16e43a99ad06197c8fec53f4872e0a9f7c36464c1713fde",
							"typeString": "literal_string \"Different value attached\""
						  }
						],
						"id": 523,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "6780:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 532,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6780:82:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 533,
					"nodeType": "ExpressionStatement",
					"src": "6780:82:0"
				  },
				  {
					"id": 534,
					"nodeType": "PlaceholderStatement",
					"src": "6873:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 519,
				"nodeType": "StructuredDocumentation",
				"src": "6668:65:0",
				"text": " @dev Requires price to be in price mapping. "
			  },
			  "id": 536,
			  "name": "priced",
			  "nameLocation": "6750:6:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 522,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 521,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "6763:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 536,
					"src": "6757:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 520,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6757:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6756:12:0"
			  },
			  "src": "6741:142:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 556,
				"nodeType": "Block",
				"src": "7004:120:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  },
						  "id": 551,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "baseExpression": {
								"id": 544,
								"name": "map",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 13,
								"src": "7023:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_uint8_$81_storage_$",
								  "typeString": "mapping(address => uint8[81] storage ref)"
								}
							  },
							  "id": 547,
							  "indexExpression": {
								"expression": {
								  "id": 545,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "7027:3:0",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 546,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "7027:10:0",
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
							  "src": "7023:15:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_array$_t_uint8_$81_storage",
								"typeString": "uint8[81] storage ref"
							  }
							},
							"id": 549,
							"indexExpression": {
							  "id": 548,
							  "name": "_pos",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 539,
							  "src": "7039:4:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "7023:21:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"id": 550,
							"name": "_sId",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 541,
							"src": "7048:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "src": "7023:29:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "596f75206861766520616c7265616479206275696c74207468697320616e642068657265",
						  "id": 552,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7063:38:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a",
							"typeString": "literal_string \"You have already built this and here\""
						  },
						  "value": "You have already built this and here"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_0389df09f441953c606b82cfaf32bef4a8de8665c4646733090c79420e73514a",
							"typeString": "literal_string \"You have already built this and here\""
						  }
						],
						"id": 543,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "7015:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 553,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7015:87:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 554,
					"nodeType": "ExpressionStatement",
					"src": "7015:87:0"
				  },
				  {
					"id": 555,
					"nodeType": "PlaceholderStatement",
					"src": "7114:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 537,
				"nodeType": "StructuredDocumentation",
				"src": "6891:65:0",
				"text": " @dev Requires price to be in price mapping. "
			  },
			  "id": 557,
			  "name": "unique",
			  "nameLocation": "6973:6:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 542,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 539,
					"mutability": "mutable",
					"name": "_pos",
					"nameLocation": "6986:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 557,
					"src": "6980:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 538,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6980:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 541,
					"mutability": "mutable",
					"name": "_sId",
					"nameLocation": "6998:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 557,
					"src": "6992:10:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint8",
					  "typeString": "uint8"
					},
					"typeName": {
					  "id": 540,
					  "name": "uint8",
					  "nodeType": "ElementaryTypeName",
					  "src": "6992:5:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint8",
						"typeString": "uint8"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6979:24:0"
			  },
			  "src": "6964:160:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 571,
				"nodeType": "Block",
				"src": "7224:123:0",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 566,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 561,
							  "name": "isStaking",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 26,
							  "src": "7243:9:0",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
								"typeString": "mapping(address => bool)"
							  }
							},
							"id": 564,
							"indexExpression": {
							  "expression": {
								"id": 562,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "7253:3:0",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 563,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "7253:10:0",
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
							"src": "7243:21:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"hexValue": "74727565",
							"id": 565,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "bool",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "7268:4:0",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"value": "true"
						  },
						  "src": "7243:29:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "596f752063616e277420776974686472617720696620796f75206469646e2774207374616b65",
						  "id": 567,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7284:40:0",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a",
							"typeString": "literal_string \"You can't withdraw if you didn't stake\""
						  },
						  "value": "You can't withdraw if you didn't stake"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_c9e6833a74ab60e2b31bf07002fa3356f9a9ccad0c61306f12240b9601cc6e3a",
							"typeString": "literal_string \"You can't withdraw if you didn't stake\""
						  }
						],
						"id": 560,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "7235:7:0",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 568,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7235:90:0",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 569,
					"nodeType": "ExpressionStatement",
					"src": "7235:90:0"
				  },
				  {
					"id": 570,
					"nodeType": "PlaceholderStatement",
					"src": "7337:1:0"
				  }
				]
			  },
			  "documentation": {
				"id": 558,
				"nodeType": "StructuredDocumentation",
				"src": "7132:65:0",
				"text": " @dev Requires price to be in price mapping. "
			  },
			  "id": 572,
			  "name": "staking",
			  "nameLocation": "7214:7:0",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 559,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7221:2:0"
			  },
			  "src": "7205:142:0",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "anonymous": false,
			  "id": 578,
			  "name": "Stake",
			  "nameLocation": "7363:5:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 577,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 574,
					"indexed": true,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "7385:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 578,
					"src": "7369:20:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 573,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7369:7:0",
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
					"id": 576,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "7399:6:0",
					"nodeType": "VariableDeclaration",
					"scope": 578,
					"src": "7391:14:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 575,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "7391:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7368:38:0"
			  },
			  "src": "7357:50:0"
			},
			{
			  "anonymous": false,
			  "id": 584,
			  "name": "Unstake",
			  "nameLocation": "7420:7:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 583,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 580,
					"indexed": true,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "7444:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 584,
					"src": "7428:20:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 579,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7428:7:0",
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
					"id": 582,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "7458:6:0",
					"nodeType": "VariableDeclaration",
					"scope": 584,
					"src": "7450:14:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 581,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "7450:7:0",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7427:38:0"
			  },
			  "src": "7414:52:0"
			},
			{
			  "anonymous": false,
			  "id": 588,
			  "name": "YieldWithdraw",
			  "nameLocation": "7479:13:0",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 587,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 586,
					"indexed": true,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "7509:4:0",
					"nodeType": "VariableDeclaration",
					"scope": 588,
					"src": "7493:20:0",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 585,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7493:7:0",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7492:22:0"
			  },
			  "src": "7473:42:0"
			}
		  ],
		  "scope": 590,
		  "src": "476:7043:0",
		  "usedErrors": []
		}
	  ],
	  "src": "39:7480:0"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.7+commit.e28d00a7.Emscripten.clang"
	},
	"networks": {
	  "5777": {
		"events": {},
		"links": {},
		"address": "0x3EDff3a6619f5B8612752d8013CE3A259cA19093",
		"transactionHash": "0xbc398a8852a43b23f4dc85232e5c939edcdc0e09629a698f967947258136cbd6"
	  }
	},
	"schemaVersion": "3.3.4",
	"updatedAt": "2022-01-02T22:53:17.331Z",
	"networkType": "ethereum",
	"devdoc": {
	  "details": "Contract for game handling. Places buildings on map, stakes $ONE tokens and  mints rewards for farmers. Each player has 81  tiles where they can build. Each tile has a timestamp  making each building independent farming unit.  ",
	  "kind": "dev",
	  "methods": {
		"calculateYieldTime(uint256,uint256)": {
		  "details": "Returns time while structure was accumulating tokens. "
		},
		"constructor": {
		  "details": "Sets contract address for {ONE} and {SEED} tokens.   {structures} is initialized with available structures. "
		},
		"getHouses()": {
		  "details": "Returns amount of built houses. "
		},
		"getIsStaking()": {
		  "details": "Returns isStaking mapping. "
		},
		"getMap()": {
		  "details": "Returns player's gamemap. "
		},
		"getStaked()": {
		  "details": "Returns amount of staked tokens. "
		},
		"getStakedTime(uint8)": {
		  "details": "Returns time when structure was staked. "
		},
		"getStructure(uint256)": {
		  "details": "Returns in-game structure.   "
		},
		"isReadyForWithdraw(uint8)": {
		  "details": "Returns boolean whether building finished accumulating tokens or not.  "
		},
		"placeStructure(uint8,uint8)": {
		  "details": "Places a new structure on the map and sets up farming.   Returns a boolean value indicating whether the operation succeeded. Emits a {Stake} event. Requirements: - value attached must be equal to `_sid' price.  - `_sId` at `_pos` must be different from current value."
		},
		"removeStructure(uint8)": {
		  "details": "Removes a structure from the map, stops farming, returns staked tokens.    Returns a boolean value indicating whether the operation succeeded. Emits an {Unstake} event. Requirements: - sender must have tokens staked. "
		},
		"withdrawTileYield(uint8,uint8)": {
		  "details": "Withdraw yield of {Seed} from the structure.   Returns a boolean value indicating whether the operation succeeded. Emits a {YieldWithdraw} event. Requirements: - sender must have tokens staked. "
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