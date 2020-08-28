App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  loading: false,
  tokenPrice: 100000000000000,
  numSoldTokens: 0,
  tokensFree: 800000,

  init: function() {
    console.log("App starting...")
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // check if web3 is not defined => no metamask

      App.web3Provider = web3.currentProvider;

      web3 = new Web3(web3.currentProvider);
    } else {
      // otherwise it already has
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContracts();

  },

  initContracts: function() {
    $.getJSON("FilmChainTokenSales.json", function(filmChainTokenSales) {
      App.contracts.FilmChainTokenSales = TruffleContract(filmChainTokenSales);

      App.contracts.FilmChainTokenSales.setProvider(App.web3Provider);

      App.contracts.FilmChainTokenSales.deployed().then(function(filmChainTokenSales) {
        console.log("FilmChain Token Sale Address:", filmChainTokenSales.address);
      });
    }).done(function() {
      $.getJSON("FilmChainToken.json", function(filmChainToken) {
        App.contracts.FilmChainToken = TruffleContract(filmChainToken);

        App.contracts.FilmChainToken.setProvider(App.web3Provider);

        App.contracts.FilmChainToken.deployed().then(function(filmChainToken) {
          console.log("FilmChain Token Address:", filmChainToken.address);
        });
        App.listenForEvents();
        return App.render();
      });
    })
  },

  listenForEvents: function() {
    App.contracts.FilmChainTokenSales.deployed().then(function(instance) {
      instance.TokensSell({}, {
          fromBlock: 0,
          toBlock: 'latest'
      }).watch(function(error, event) {
        console.log("Tokens Sell event emitted", event);
        App.render();
      })
    })
  },

  buyTokens: function() {
    $('#content').hide();
    $('#loader').show();

    var numberTokens = $('#numberOfTokens').val();
    App.contracts.FilmChainTokenSales.deployed().then(function(instance) {
      return instance.buyTokens(numberTokens, {
        from: App.account,
        value: numberTokens * App.tokenPrice,
        gas: 600000
      });
    }).then(function(result) {
      console.log("Tokens bought");
      $('form').trigger('reset');


    })
  },

  render: function() {
    if (App.loading){
      return;
    }

    App.loading = true;

    var loader = $('#loader');
    var content = $('#content');

    loader.show();
    content.hide();

    web3.eth.getCoinbase(function(err, account) {
      if(err === null) {
        App.account = account;
        $('#accountAddress').html("Your Account: " + account);
      }
    })

    App.contracts.FilmChainTokenSales.deployed().then(function(instance) {
      filmChainTokenSalesInstance = instance;
      return filmChainTokenSalesInstance.tokenPrice();
    }).then(function(tokenPrice) {
      App.tokenPrice = tokenPrice;
      $('.token-price').html(web3.fromWei(App.tokenPrice, "ether").toNumber());
      return filmChainTokenSalesInstance.numSoldTokens();
    }).then(function(numSoldTokens) {
      App.numSoldTokens = numSoldTokens.toNumber();
      $('.num-sold-tokens').html(App.numSoldTokens);
      $('.tokens-free').html(App.tokensFree);

      var progressStatus = (App.numSoldTokens / App.tokensFree) * 100;
      $('#progress').css('width', progressStatus + '%');


      App.contracts.FilmChainToken.deployed().then(function(instance) {
        filmChainTokenInstance = instance;
        console.log("Token address", filmChainTokenInstance.address);
        return filmChainTokenInstance.balanceOf(App.account);
      }).then(function(balance) {
        $('.ftc-balance').html(balance.toNumber());

        App.loading = false;
        loader.hide();
        content.show();
      })
    })
  }


}



$(function() {
  $(window).load(function() {
    App.init();
  })
}) ;
