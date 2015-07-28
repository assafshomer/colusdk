var fs = require('fs');
var path = require('path');
var log_file_name = path.basename(__filename,'.js')+'_'+Date.now()+'.txt';

require('../../helpers/bitcoin_helper.js')();

var testnetApi = 'https://testnet.api.coloredcoins.org';
var coluHost = 'https://testnet.engine.colu.co';
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982';

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
};

var assetId = 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr';
var fromAddress = 'mgrhPJzH37YctFsNtZGAHgvgEhJQ2A62ss';
var toArray = []

for (i = 1; i < 5; i++) { 
    toArray.push({address: newAddress(),assetId: assetId,amount: i});
}

var send = {
    from: fromAddress,
    to: toArray,
    metadata: {        
        'assetName': '1 Ticket to see the Chicago Musical on 1/1/2016 at 8 PM',
        'issuer': 'Ticket booth on Times Square',
        'description': 'Seat 12 at row 10'
    }
};

var Colu = require('colu');
var colu = new Colu(settings);

colu.on('connect', function () {
    colu.financedSend(send, function (err, body) {
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