var Colu = require('colu')
var assert = require('assert')

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = '1af0d2500cee79344a84bcf374c04b85835390d8a3e8565e594d307a28efb656'
var assetId = 'LFJMdgGYpNkwos7L7YjLPAEG1v57Ujvq3enfm'
var address = 'mzKewG4Vo9HFqWRjcGpUVgaA1GrH1raP7q'
var txid = '6b89efcddc8ed97d5a511615688c44226dabbee9c604b1f6e26c4e93ace4d55e'
var utxo = txid+':1'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var colu = new Colu(settings)
colu.on('connect', function () {
	
    colu.coloredCoins.assetmetadata(assetId, utxo, function (err, body) {
        if (err) return console.error(err)

        console.log("Body: ",body)
    })
})

colu.init()