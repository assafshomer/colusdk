
var testnetApi = 'https://testnet.api.coloredcoins.org';
var coluHost = 'https://dev.engine.colu.co';
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982';

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
};

var address = 'mghsS8vg72BKavmaH1AZyuCZhrnfCsJaSU'

var Colu = require('colu');
var colu = new Colu(settings);

colu.hdwallet.getAddressPrivateKey(address,function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })