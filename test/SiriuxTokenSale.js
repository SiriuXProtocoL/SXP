var SiriuxToken = artifacts.require("./SiriuxToken.sol");
var SiriuxTokenSale = artifacts.require("./SiriuxTokenSale.sol")

contract('SiriuxTokenSale', function(accounts){

    var tokenSaleInstance;
    var tokenInstance;
    var admin = accounts[0];
    var buyer = accounts[1];
    var tokenPrice = 1000000000000000; //in wei
    var tokensAvalible = 750000; //ie 75% of 1 million
    var numberOfTokens;

    it('initializes the contract with the correct values', function() {
        return SiriuxTokenSale.deployed().then(function(instance) {
            tokenSaleInstance = instance;
            return tokenSaleInstance.address
        }).then(function(address){
            assert.notEqual(address, 0x0, 'has contract address');
            return tokenSaleInstance.tokenContract();
        }).then(function(address){
            assert.notEqual(address, 0x0, 'has token contract address');
            return tokenSaleInstance.tokenPrice();
        }).then(function(price) {
            assert.equal(price, tokenPrice, 'token Price is Correct');
        });
    });

    //To Buy Tokens
    it('facilitates token buying', function() {
        return SiriuxToken.deployed().then(function(instance) {
            //Grab token Instance First
            tokenInstance = instance;
            return SiriuxTokenSale.deployed();
        }).then(function(instance) {
            //Then Grab token Sale Instance
            tokenSaleInstance = instance;
            //Provision 75% of all tokens to tokenSale
            return tokenInstance.transfer(tokenSaleInstance.address, tokensAvalible, {from: admin});
        }).then(function(receipt) {
            numberOfTokens = 10;
            return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice})
        }).then(function(receipt){
            assert.equal(receipt.logs.length,1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Sell','should be the "Sell" event');
            assert.equal(receipt.logs[0].args._buyer, buyer, 'logs the account that purchased the tokens');
            assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'logs the numberOfTokens purchased');
            return tokenSaleInstance.tokensSold();
        }).then(function(amount){
            assert.equal(amount.toNumber(), numberOfTokens, 'increments the number of tokens sold');
            return tokenInstance.balanceOf(buyer);
        }).then(function(balance){
            assert.equal(balance.toNumber(), numberOfTokens);
            return tokenInstance.balanceOf(tokenSaleInstance, address);
        }).then(function(balance){
            assert.equal(balance.toNumber(), tokensAvalible - numberOfTokens);
            //try to buy tokens diffenent from the entered value
            return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: 1}) //very less money
        }).then(assert.fail).catch(function(error){
            //check later
            assert(error.message, 'msg.value must be equal number of values in wei');
            return tokenSaleInstance.buyTokens(800000, { from: buyer, value: numberOfTokens * tokenPrice}); //very less money
        }).then(assert.fail).catch(function(error){
            //check later
            assert(error.message, 'cannot purchase more tokens than avaliable');
        });
    });


    //Ending Sale
    it('Ends token Sale',function(){
        return SiriuxToken.deployed().then(function(instance) {
            //Grab token Instance First
            tokenInstance = instance;
            return SiriuxTokenSale.deployed();
        }).then(function(instance) {
            //Then Grab token Sale Instance
            tokenSaleInstance = instance;
            //Try to end sale from other than the admin
            return tokenSaleInstance.endSale({ from: buyer});
            }).then(assert.fail).catch(function(error) {
                assert(error.message, 'must be admin to end sale');
                //End sale as Admin
                return tokenSaleInstance.endSale({ from: admin });
            }).then(function(receipt) {
                return tokenInstance.balanceOf(admin);
            }).then(function(balance) {
                assert.equal(balance.toNumber(),1000000,'returns all unsold Siriux Tokens to admin');
                //check that contract has no balance
               //balance = web3.eth.getBalance(tokenSaleInstance.address);
               //assert.equal(balance, 0);
            });
    });
});