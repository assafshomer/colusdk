
var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var address = 'mjG2iiCbXvXLTMRPHXzVtUg21zbqt5m8Xc'

var asset = {
    amount: 1000000,
    // reissueable: true,
    // issueAddress: address
}

/*
Body:  { txHex: '010000000150d5d629b67fac7be55933266cb8f5ed1c1cec1190a208314fe762fc1a4d37d10000000000ffffffff0358020000000000001976a9147e3cb226f19b748c55edea658966c07b6f5b37de88ac00000000000000000c6a0a4343010526440026440078050000000000001976a9147e3cb226f19b748c55edea658966c07b6f5b37de88ac00000000',
  assetId: 'U6fKUdUKEotLV2eTCCRMZwAqFoqTF3AmqBzFh',
  multisigOutputs: [],
  txid: 'aeb19b9ebf6342c5407e1d56ad844d1af5e7090a53b661f2552eb96e8c3975bb',
  receivingAddresses: 
   [ { address: 'ms2S9T4gW6HWm2GdwNmXQUKr2gmqCRFKvV',
       amount: 1000000 } ],
  issueAddress: 'ms2S9T4gW6HWm2GdwNmXQUKr2gmqCRFKvV' }
*/

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

// Body:  { txHex: '0100000001673d4e53c2469b0f37340365f658ece9d055e9b0ccf6636fe8bc20196a38a1a90000000000ffffffff0358020000000000001976a914f323d230df5328b692d7f37a0eb06db11cb3e9e288ac00000000000000000d6a0b43430105404d230027b06078050000000000001976a914f323d230df5328b692d7f37a0eb06db11cb3e9e288ac00000000',
//   assetId: 'UAEwXTLsvWyTgbZx34bhNwZMksXXCXb7snSYp',
//   txid: '193dc05ec4a0ecfd7f9c5650dea465c125d6d0d6c91c3cb7d94bb87055f97091' }