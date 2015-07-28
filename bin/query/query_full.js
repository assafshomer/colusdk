var Colu = require('colu')
// var async = require('async');

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var privateSeed = '1af0d2500cee79344a84bcf374c04b85835390d8a3e8565e594d307a28efb656'

var assetId = 'LCC37rBg5qJX1qdQxGcB6QxMRqc3fC256FCho'
var addresses = ['mzKewG4Vo9HFqWRjcGpUVgaA1GrH1raP7q','mkvqtc25vKXp7Xf5SqqHVZYU5BAgwTas8B']

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var params = {
    assetId: assetId,
    addresses: null,
    numConfirmations: 0
}

var colu = new Colu(settings)
colu.on('connect', function () {
    colu.coloredCoins.getassetdata(params, function (err, body) {
        if (err) return console.error(err)

        console.log("assetData: ",JSON.stringify(body))
    })
})

colu.init()