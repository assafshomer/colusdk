
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
    amount: 1,
    divisibility:3    
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
Body:  { txHex: '01000000012d741dd70e927582dc810613dad5fa532b118e270de8df78f13425cddccf879d0000000000ffffffff0358020000000000001976a91496086b626ddb0003826c98d3f9d7acb970da223688ac00000000000000000b6a0943430105201300017078050000000000001976a91496086b626ddb0003826c98d3f9d7acb970da223688ac00000000',
  assetId: 'LFiGGoWR3dQhGwCcnNEwaxubqPRr4zMZEHXTV',
  multisigOutputs: [],
  txid: '5c7a40c40a271fa67aeddb55d0e3d1d429a3f4c6932d5716dd42bef6f248c3bb',
  receivingAddresses: [ { address: 'muCFjpj3p1wCWYBRD7AS4CLr79LRwyMVa5', amount: 1 } ],
  issueAddress: 'muCFjpj3p1wCWYBRD7AS4CLr79LRwyMVa5' }
  */