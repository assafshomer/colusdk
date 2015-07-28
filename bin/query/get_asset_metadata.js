var fs = require('fs');
var path = require('path');
var log_file_name = path.basename(__filename,'.js')+'_'+Date.now()+'.json';

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet'   
}

var assetId = 'U831iMR6M2aXdDSSmY3tyY7ZqpaCqLXQZKWJt'
var utxo = 'f9fff185dc1df89ffe13cd7e5668a0af2953622176de91232ec1be975c6114c4:1'


var Colu = require('colu')
var colu = new Colu(settings)
console.log('connecting....')
colu.on('connect', function () {
    colu.coloredCoins.assetmetadata(assetId, utxo, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
        fs.writeFile(__dirname+'/../../log/'+log_file_name, JSON.stringify(body), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The reply was saved to the log file ["+ log_file_name+"]");
        });     
    })
})

colu.init()