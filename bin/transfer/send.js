var Colu = require('colu')
// var assert = require('assert')

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = '1af0d2500cee79344a84bcf374c04b85835390d8a3e8565e594d307a28efb656'

var assetId = 'LKPaEDCyELaMbxLnxJu6YogSyQU5T579YrXtj'


var fromAddress = 'mk9gANEvrfg2p21mVez3s7sL5GKCFvHjQ5';
var toAddress = 'mj5kxkcec992pDkxveqrgiYJUTUVMFbqys'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var colu = new Colu(settings)
colu.on('connect', function () {
    var args = {
        from: fromAddress,
        fee: 1000,
        to: [{
            address: toAddress,
            assetId: assetId,
            amount: 1
        }]
    }
	
    colu.financedSend(args, function (err, body) {
        if (err) return console.error(err)

        console.log("Body: ",body)
    })
})

colu.init()