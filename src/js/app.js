//import * as utils from 'web3-utils';
App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    loading: false,
    tokenPrice: 10000000000000000,
    tokensSold: 0,
    tokensAvaliable: 750000,

    init: function() {
        console.log("App initialized...")
        return App.initWeb3();
    },

    initWeb3: function() {
        if(typeof web3 !== 'undefined') {
            //if a web3 instance is already provided by MetaMask
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            //Specify default instance if no web3 instance is provided
            App.web3Provider = new web3.Providers.HttpProvider('http://localhost:7545');
            web3 = new Web3(App.web3Provider);
        }
        
        return App.initContracts();
    },

    initContracts: function() {
      $.getJSON("SiriuxTokenSale.json", function(siriuxTokenSale) {
          App.contracts.SiriuxTokenSale = TruffleContract(siriuxTokenSale);
          App.contracts.SiriuxTokenSale.setProvider(App.web3Provider);
          App.contracts.SiriuxTokenSale.deployed().then(function(siriuxTokenSale) {
              console.log("SXP Token Sale Address:", siriuxTokenSale.address);
          });
        }).done(function() {
        $.getJSON("SiriuxToken.json", function(siriuxToken) {
            App.contracts.SiriuxToken = TruffleContract(siriuxToken);
            App.contracts.SiriuxToken.setProvider(App.web3Provider);
            App.contracts.SiriuxToken.deployed().then(function(siriuxToken) {
              console.log("SXP Token Address:", siriuxToken.address);
          });
         // App.listenForEvents();
          return App.render();
          
        });
      })  
    },

    //Listner for the events emitted from the contracts
    //listenForEvents: function() {
       // App.conracts.SiriuxTokenSale.deployed().then(function(instance) {
       //     instance.Sell({}, {
         //       fromBlock: 0,
           //     toBlock: 'latest',
            //}).watch(function(error,event) {
              //  console.log("event triggered", event);
                //App.render();
      //      })
    //    })
   // },

    render: function() {
        if(App.loading) {
            return;
        }
        App.loading = true;

        var loader  = $('#loader');
        var content = $('#content');
        
        loader.show();
        content.hide();
        // Load Account Data
        web3.eth.getCoinbase(function(err,account) {
            if(err === null) {
                App.account = account;
                $('#accountAddress').html("Your Account : " + account);
            }
        })
        //Load token sale contract
        App.contracts.SiriuxTokenSale.deployed().then(function(instance) {
            siriuxTokenSaleInstance = instance;
            return siriuxTokenSaleInstance.tokenPrice();
        }).then(function(tokenPrice) {
            //App.tokenPrice = tokenPrice.toNumber();
            console.log("tokenPrice", App.tokenPrice);
            //console.log(web3.fromWei(App.tokenPrice, 'ether').toNumber());
            //$('.token-price').html(App.tokenPrice.toNumber());
            $('.token-price').html(web3.fromWei(App.tokenPrice, 'ether'));
            return siriuxTokenSaleInstance.tokensSold();
        }).then(function(tokensSold) {
            App.tokensSold = tokensSold.toNumber();
            $('.tokens-sold').html(App.tokensSold);
            $('.tokens-avaliable').html(App.tokensAvaliable);

            var progressPercent = (Math.ceil(App.tokensSold) / App.tokensAvaliable) * 100;
            $('#progress').css('width', progressPercent + '%');

            //Loads token contract
            App.contracts.SiriuxToken.deployed().then(function(instance) {
                siriuxTokenInstance = instance;
                return siriuxTokenInstance.balanceOf(App.account);
            }).then(function(balance) {
                $('.sxp-balance').html(balance.toNumber());
                
                App.loading = false;
                loader.hide();
                content.show();
            })
        });
    },

    buyTokens: function() {
        $('#content').hide();
        $('#loader').show();
        var numberOfTokens = $('#numberOfTokens').val();
        App.contracts.SiriuxTokenSale.deployed().then(function(instance) {
            return instance.buyTokens(numberOfTokens, {
                from: App.account,
                value: numberOfTokens * App.tokenPrice,
                gas: 500000
            });
        }).then(function(result) {
            console.log("tokens bought....")
            $('from').trigger('reset') //reset no of tokens in from
            
            //Wait for sell event to trigger to render the page
        })
    }
}

$(function() {
    window.onload = function() {
        App.init();
    }
});