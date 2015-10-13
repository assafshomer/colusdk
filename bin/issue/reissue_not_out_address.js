var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = 'bbcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

issueAddress = 'mpAUurhbWXFtczKVPn7iLf7rfcDhMdH6tH'

var asset = {
    amount: 1000000,
    reissueable: true,
    issueAddress: issueAddress
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

/*
Body:  { txHex: '0100000001a60a3017dd145682ba55e06fe8069cb10bbab0adf27d5493d36a9b04ea9719b70000000000ffffffff0358020000000000001976a9145ed9f47408f7bc2567b8ef7da07c17e7e06f382c88ac00000000000000000c6a0a4343010526440026440078050000000000001976a9145ed9f47408f7bc2567b8ef7da07c17e7e06f382c88ac00000000',
  assetId: 'U5haTxTknzcq94czuXQRHa7Nw38BUxnQWAX6w',
  multisigOutputs: [],
  txid: 'a9918d8081a13ba6550f0dc8f52266b810447d05df8395ad59919a2bcc54ae56',
  receivingAddresses: 
   [ { address: 'mpAUurhbWXFtczKVPn7iLf7rfcDhMdH6tH',
       amount: 1000000 } ],
  issueAddress: 'mpAUurhbWXFtczKVPn7iLf7rfcDhMdH6tH' }
*/