var fs = require('fs');
var path = require('path');
var log_file_name = path.basename(__filename,'.js')+'_'+Date.now()+'.json';

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}
var to_address = 'mjoiF7kmEyoxH4dmyeptMhkDh4haGN4KYp'
var asset = {
    amount: 1,
    divisibility: 1,
    fee: 1000,
    reissueable: true,
    transfer: [{
        address: to_address, amount: 2
    }],
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.financedIssue(asset, function (err, body) {
        if (err) return console.error(err);
        console.log("Body: ",body);        
        fs.writeFile(__dirname+'/../../log/'+log_file_name, JSON.stringify(body), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The reply was saved to the log file ["+ log_file_name+"]");
        });         
    })
})

colu.init()

// Body:  { txHex: '0100000001673d4e53c2469b0f37340365f658ece9d055e9b0ccf6636fe8bc20196a38a1a90000000000ffffffff0358020000000000001976a914f323d230df5328b692d7f37a0eb06db11cb3e9e288ac00000000000000000d6a0b43430105404d230027b06078050000000000001976a914f323d230df5328b692d7f37a0eb06db11cb3e9e288ac00000000',
//   assetId: 'UAEwXTLsvWyTgbZx34bhNwZMksXXCXb7snSYp',
//   txid: '193dc05ec4a0ecfd7f9c5650dea465c125d6d0d6c91c3cb7d94bb87055f97091' }