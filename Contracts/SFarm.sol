// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7; 


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./SToken.sol"; 


contract SFarm {
    
    mapping(address => uint256) public mainBalance; 
    mapping(address => uint256) public stokeBalance; 
    mapping(address => bool) public isStaking; 
    mapping(address => uint256) public startTime; 

    mapping(address => uint256[9][9]) public maps;
    
    
    event Stake(address indexed from, uint256 amount);
    event Unstake(address indexed from, uint256 amount);
    event YieldCompound(address indexed from, uint256 amount); 
    event YieldWithdraw(address indexed to, uint256 amount); 
    
    
    IERC20 public mainToken; 
    SToken public stoke; 
    
    constructor(IERC20 _mainToken, SToken _stoke){
        mainToken = _mainToken; 
        stoke = _stoke; 
    }
    
    function stake(uint256 amount) external returns (bool) {
        require(amount > 0, "You cannot stake zero tokens"); 
        require(mainToken.balanceOf(msg.sender) >= amount, "You should have sufficient balance"); 
        
        if(isStaking[msg.sender] == true) {
            recompound();     
        }
        
        mainToken.transferFrom(msg.sender, address(this), amount);
        mainBalance[msg.sender] += amount;
        isStaking[msg.sender] = true;
        startTime[msg.sender] = block.timestamp; 
        
        emit Stake(msg.sender, amount);
        return true; 
        
    }
    
    function unstake(uint256 amount) external returns (bool) {
        require(isStaking[msg.sender] = true && mainBalance[msg.sender] >= amount, "Nothing to unstake");
    
        uint256 mainTransfer = amount;
        amount = 0;
        mainBalance[msg.sender] -= mainTransfer;
        mainToken.transfer(msg.sender, mainTransfer);
        
        recompound(); 
        
        if(mainBalance[msg.sender] == 0){
            isStaking[msg.sender] = false;
        }
        
        emit Unstake(msg.sender, mainTransfer);
        return true; 
    }
    
    function recompound() internal returns (bool) {
        if(isStaking[msg.sender] == true) {
            uint256 toTransfer = calculateYieldTotal(msg.sender);
            stokeBalance[msg.sender] += toTransfer;
            startTime[msg.sender] = block.timestamp;
            
            emit YieldCompound(msg.sender, stokeBalance[msg.sender]); 
        }
        return true;
    }
    
    function withdrawYield() external returns (bool) {
        uint256 toTransfer = calculateYieldTotal(msg.sender);

        require(toTransfer > 0 || stokeBalance[msg.sender] > 0, "Nothing to withdraw");
            
        if(stokeBalance[msg.sender] != 0){
            uint256 oldBalance = stokeBalance[msg.sender];
            stokeBalance[msg.sender] = 0;
            toTransfer += oldBalance;
        }
        
        startTime[msg.sender] = block.timestamp;
        //stoke.mint(msg.sender, toTransfer);
        
        emit YieldWithdraw(msg.sender, toTransfer);
        return true; 
    } 
    
    function calculateYieldTime(address user) internal view returns(uint256){
        uint256 end = block.timestamp;
        uint256 totalTime = end - startTime[user];
        return totalTime;
    }

    function calculateYieldTotal(address user) internal view returns(uint256) {
        uint256 time = calculateYieldTime(user) * 10**18;
        //TODO: get rate generated in game
        uint256 rate = 86400;
        uint256 timeRate = time / rate;
        //TODO: determine math 
        uint256 rawYield = (mainBalance[user] * timeRate) / 10**18;
        return rawYield;
    } 
    
}