var SiriuxToken = artifacts.require("./SiriuxToken.sol");

contract('SiriuxToken', function(accounts){
    
    var tokenInstance;

    //Test To asssign Name ,Symbol & Standard to the Token
    it('initializes the contract with the correct values',function(){
        return SiriuxToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name,'SiriuX','Has the correct name');   
            return tokenInstance.Symbol();
        }).then(function(Symbol){
            assert.equal(Symbol,'SXP','Has the Correct Symbol');
            return tokenInstance.standard();
        }).then(function(standard){
            assert.equal(standard,'SiriuX Token V1.0','Has The Correct Standard');
    });
})


    //Test for checking the selected account has 1000000 as balance
    it('allocates the initial supply upon deployment',function(){
        return SiriuxToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1000000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance){
           assert.equal(adminBalance.toNumber(),1000000,'it allocates the initial supply to the admin account ');
        });
    });
    
    //test for transfer function
    it('transfers token ownership', function(){
        return SiriuxToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.transfer.call(accounts[1], 99999999999999999999999);
        }).then(assert.fail).catch(function(error){
          // check this line  
          //assert(error.message).indexOf('revert') >= 0, 'error message contains revert';
            return tokenInstance.transfer.call(accounts[1], 250000, { from: accounts[0] });
        }).then(function(success){
            assert.equal(success, true, 'it returns true');
         return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] });
        }).then(function(receipt){
            assert.equal(receipt.logs.length,1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Transfer','should be the "Transfer" event');
            assert.equal(receipt.logs[0].args._from, accounts[0], 'logs the account the tokens are transfered from');
            assert.equal(receipt.logs[0].args._to, accounts[1], 'logs the account the tokens are transfered to');
            assert.equal(receipt.logs[0].args._value,250000, 'logs the transfer amount');
            return tokenInstance.balanceOf(accounts[1]);
        }).then(function(balance){
            assert.equal(balance.toNumber(), 250000, 'add the amount to the receiving amount');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(balance){
            assert.equal(balance.toNumber(), 750000, 'deducts the amount from the sending account');
    });
});

    //Delagated Transfer with approve and allowance
    it('approves tokens for delagated transfer',function(){
        return SiriuxToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.approve.call(accounts[1], 100);
        }).then(function(success){
            assert.equal(success, true,'it returns true');
            return tokenInstance.approve(accounts[1], 100, {from: accounts[0] });
        }).then(function(receipt){
            assert.equal(receipt.logs.length,1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Approval','should be the "Approval" event');
            assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are authorized by');
            assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are authorized to');
            assert.equal(receipt.logs[0].args._value,100, 'logs the transfer amount'); 
            return tokenInstance.allowance(accounts[0],accounts[1]);
        }).then(function(allowance){
            assert.equal(allowance.toNumber(),100,'stores the allowance for delegated transfer');
        });
    });

    //Delegated Transfer with TransferFrom
    it('handles delegated token transfers',function(){
        return SiriuxToken.deployed().then(function(instance){
            tokenInstance = instance;
            fromAccount = accounts[2];
            toAccount = accounts[3];
            spendingAccount = accounts[4];
            //Transfer some tokens to from account
            return tokenInstance.transfer(fromAccount,100,{ from: accounts[0] });
        }).then(function(receipt){
            //Approve SpendingAccount to spend 10 tokens for fromAccount
            return tokenInstance.approve(spendingAccount,10, { from: fromAccount });
        }).then(function(receipt){
            //Try sending something larger than the spender balance
            return tokenInstance.transferFrom(fromAccount,toAccount,9999, {from: spendingAccount });
        }).then(assert.fail).catch(function(error){
            assert(error.meassage >= 0, 'cannot transfer a value larger than balance');
            //try transfering something larger than the approved amount
            return tokenInstance.transferFrom(fromAccount,toAccount,20, { from: spendingAccount });
        }).then(assert.fail).catch(function(error){
            assert(error.message) >= 0, 'cannot transfer value larger than approved amount';
            return tokenInstance.transferFrom.call(fromAccount,toAccount,10, {from: spendingAccount });
        }).then(function(success){
            assert.equal(success,true);
            return tokenInstance.transferFrom(fromAccount,toAccount,10, {from: spendingAccount });
        }).then(function(receipt){
            assert.equal(receipt.logs.length,1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Transfer','should be the "Transfer" event');
            assert.equal(receipt.logs[0].args._from, fromAccount, 'logs the account the tokens are transfered from');
            assert.equal(receipt.logs[0].args._to, toAccount, 'logs the account the tokens are transfered to');
            assert.equal(receipt.logs[0].args._value,10, 'logs the transfer amount'); 
            return tokenInstance.balanceOf(fromAccount);
        }).then(function(balance){
            assert.equal(balance.toNumber(),90,'deducts the amount from the sending account');
            return tokenInstance.balanceOf(toAccount);
        }).then(function(balance){
            assert.equal(balance.toNumber(),10,'adds the amount from the receiving account');
            return tokenInstance.allowance(fromAccount,spendingAccount);
        }).then(function(allowance){
            assert.equal(allowance.toNumber(),0,'deducts the amount from the allowance');
        });
});
});
