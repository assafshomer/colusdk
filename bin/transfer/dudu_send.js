//var Colu = require(__dirname + '/../src/colu.js')
var Colu = require('colu')
//var assert = require('assert')
//var expect = require('chai').expect

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var privateSeed = '1af0d2500cee79344a84bcf374c04b85835390d8a3e8565e594d307a28efb656'
var assetId = 'LCC37rBg5qJX1qdQxGcB6QxMRqc3fC256FCho'
var fromAddress = 'mzxb8Br8HgVzNHEAG7zuBfNvpAgyazLeAY';
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
//		fee: 1000,
		to: [{
			address: toAddress,
			assetId: assetId,
			amount: 1
		}],
        metadata: {        
            'assetName': 'Mission Impossible 16',
            'issuer': 'Fox Theater',
            'description': 'Movie ticket to see the New Tom Cruise flick again'
        }
	}
	
	colu.financedSend(args, function (err, body) {
		if (err) return console.error(err)

		console.log("Body: ",body)
	})
})

colu.init()
