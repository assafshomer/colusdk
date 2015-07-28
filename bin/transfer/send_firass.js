var fs = require('fs');
var path = require('path');
var log_file_name = path.basename(__filename,'.js')+'_'+Date.now()+'.txt';

var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet',
    privateSeed: 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
};

var assetId = 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr';
var fromAddress = 'mgrhPJzH37YctFsNtZGAHgvgEhJQ2A62ss';
var toAddress = 'mt9QVuKiRswFVEFMGDaBTzDNqr7EKEe9MT'

var send = {
    from: fromAddress,
    to: [{
        address: toAddress,
        assetId: assetId,
        amount: 100
    }],
    metadata: {        
        'assetName': 'RHCP ticket',
        'issuer': 'Assaf',
        'description': '100 tickets to Firass'
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

