
var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet'
}
var assetId = 'U831iMR6M2aXdDSSmY3tyY7ZqpaCqLXQZKWJt'
var addresses = ['mw7hLtuo9vnBNCs9PL7i2h7oqDfs4j8NJG']


var params = {
    assetId: assetId
    addresses: addresses,
    numConfirmations: 0
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