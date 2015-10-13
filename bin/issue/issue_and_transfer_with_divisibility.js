
var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var asset = {
    amount: 100,
    divisibility:1,
    transfer: [{
        address: 'miPznpFr7xQpWXp3dfYXBXKiVcdLKNPazT', amount: 1
    },{
        address: 'mmf1tBpqZqsKuHsrADZTYbm8sdCznci8nn', amount: 10
    }]
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
Body:  { txHex: '010000000164cca9e24675e2448fcf16d3d9af1f1949f46747e78f964e4c67f15ad6bf20e50000000000ffffffff0558020000000000001976a9141f978c90a1bf14a9f65ec9d24f07050a7242fde388ac58020000000000001976a914435713f35be02b0cd541d20ef55d87cea01ffcb088ac58020000000000001976a9144f5a837573766e16244dd953dbe08d504a26e97688ac0000000000000000106a0e4343010520130001010a02259030c8000000000000001976a9144f5a837573766e16244dd953dbe08d504a26e97688ac00000000',
  assetId: 'LJja9jcs6g7iDxHfaAECzwfLbq1YuZbvR9jXs',
  multisigOutputs: [],
  txid: '25cea5a15841525d5d4105714cf43216a5f008c26c62995657fbfb40d4f79372',
  receivingAddresses: 
   [ { address: 'miPznpFr7xQpWXp3dfYXBXKiVcdLKNPazT', amount: 1 },
     { address: 'mmf1tBpqZqsKuHsrADZTYbm8sdCznci8nn', amount: 10 },
     { address: 'mnkY7CR2qe4g4WXxH7CAcwioxkyBRyto4y', amount: 89 } ],
  issueAddress: 'mnkY7CR2qe4g4WXxH7CAcwioxkyBRyto4y' }
*/