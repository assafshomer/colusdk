var fs = require('fs');
var path = require('path');
var log_file_name = path.basename(__filename,'.js')+'_'+Date.now()+'.txt';

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://dev.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var asset = {
    amount: 500,
    metadata: {        
        'assetName': 'Mission Impossible 15',
        'issuer': 'Fox Theatres',
        'description': 'Movie ticket to see the New Tom Cruise flick'
    }
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)
        var util = require('util')       
        console.log("Body: ",util.inspect(body, {depth:10}))
        fs.writeFile(__dirname+'/../../log/'+log_file_name, util.inspect(body, {depth:10}), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The reply was saved to the log file ["+ log_file_name+"]");
        });       
    })
})

colu.init()

