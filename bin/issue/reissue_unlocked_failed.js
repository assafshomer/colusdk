var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

issueAddress = 'mpAUurhbWXFtczKVPn7iLf7rfcDhMdH6tH'

var asset = {
    amount: 1000000,
    issueAddress: issueAddress
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.financedIssue(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

/*
Body:  { txHex: '010000000188e3c612c364b89c350c2bd46f65e278b0293a3387bbfcea5a394fe56d29febe0000000000ffffffff0358020000000000001976a9145ed9f47408f7bc2567b8ef7da07c17e7e06f382c88ac00000000000000000c6a0a4343010526440026441078050000000000001976a9145ed9f47408f7bc2567b8ef7da07c17e7e06f382c88ac00000000',
  assetId: 'LCSo58kEAc6FuDh6HwqZkeMhqPVKpyVD7wa42',
  multisigOutputs: [],
  txid: 'fe1f7d4cb47d171ffd143dd70f5005f7ba54f62e0243a6c5bfdfacd3337e8ea9',
  receivingAddresses: 
   [ { address: 'mpAUurhbWXFtczKVPn7iLf7rfcDhMdH6tH',
       amount: 1000000 } ],
  issueAddress: 'mpAUurhbWXFtczKVPn7iLf7rfcDhMdH6tH' }
*/