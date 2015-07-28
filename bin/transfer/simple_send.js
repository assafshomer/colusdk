
var testnetApi = 'https://testnet.api.coloredcoins.org';
var coluHost = 'https://testnet.engine.colu.co';
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982';

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
};

var assetId = 'U831iMR6M2aXdDSSmY3tyY7ZqpaCqLXQZKWJt';
var fromAddress = 'mw7hLtuo9vnBNCs9PL7i2h7oqDfs4j8NJG';
var toAddress = 'mhwp7pbxvBuAmCuu1oE4mcS9xNFmnFatPF';

var send = {
    from: fromAddress,
    to: [{
        address: toAddress,
        assetId: assetId,
        amount: 1000
    }]
};

var Colu = require('colu');
var colu = new Colu(settings);

// colu.hdwallet.getAddressPrivateKey(fromAddress,function (err, body) {
//         if (err) return console.error(err)        
//         console.log("Body: ",body)
//     })

colu.on('connect', function () {
    colu.financedSend(send, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

/*
Body:  { txHex: '0100000001035b2ba5868052175c6b60e7ca857006cc04e531b8198ddb7c71ab5ac7e8e323020000001976a914ab1bf706f8b437c269b3551e58b6279a117417d388acffffffff0358020000000000001976a9141aa3d3457d2d5ec58cf0cfaf9fe5f65d6de730cf88ac0000000000000000096a0743430115002013e8030000000000001976a914ab1bf706f8b437c269b3551e58b6279a117417d388ac00000000',
  multisigOutputs: [],
  txid: 'd99143893ececc95cad4208465b47b536705817e91e8ab01d3433020eeb50a13' }
  */