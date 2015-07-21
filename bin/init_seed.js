var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var seed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: seed
}

var Colu = require('colu')
var colu = new Colu(settings)
colu.on('connect', function () {
    privateSeed = colu.hdwallet.getPrivateSeed()
    console.log("privateSeed: ",privateSeed)
});

colu.init()