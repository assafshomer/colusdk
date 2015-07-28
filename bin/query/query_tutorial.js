
var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet'
}
var assetId = 'LFid9kWyYj4S66kUMK8xVvQtsCV1njVf9XJGE'

var params = {
    assetId: assetId
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.coloredCoins.getassetdata(params,function (err, body) {
        if (err) return console.error(err)
        var util = require('util')        
        console.log("Body: ",util.inspect(body, {depth:10}))
    })
})

colu.init()