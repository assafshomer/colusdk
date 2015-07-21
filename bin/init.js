var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: null
}

var Colu = require('colu')
var colu = new Colu(settings)
colu.on('connect', function () {
    privateSeed = colu.hdwallet.getPrivateSeed()
    console.log("privateSeed: ",privateSeed)
});

colu.init()