pragma solidity >=0.4.21 <0.6.0;

import "./SiriuxToken.sol";

contract SiriuxTokenSale {

    address payable admin;
    SiriuxToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor (SiriuxToken _tokenContract, uint256 _tokenPrice) public {
        //assign an admin
        admin = msg.sender;
        //Assign the token contract
        tokenContract = _tokenContract;
        //Assign Token Price
        tokenPrice = _tokenPrice;

    }

    // Multiply function
    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0||(z = x * y) / y == x, "overflow");
    }

    //Buy Tokens
    function buyTokens(uint256 _numberOfTokens) public payable {
        //Require that the value is equal to the token
        require(msg.value == multiply(_numberOfTokens, tokenPrice), "Multiplyed");
        //Require that the contract has enough tokens
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, "contract has enough tokens?");
        //Require that a transfer is successful
        require(tokenContract.transfer(msg.sender, _numberOfTokens), "Successful?");
        //keep track of token sold
        tokensSold += _numberOfTokens;
        //trigger sell Event
        emit Sell(msg.sender, _numberOfTokens);
    }

    //Ending token SiriuxTokenSale
    function endSale() public {
        //Require only an admin to do this
        require(msg.sender == admin,"admin");
        //Transfer remaining SiriuxTokens back to admin
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))), "revert to admin");
        //Destroy the contract - not now
        //transfer balance to admin
        admin.transfer(address(this).balance);
    }
}