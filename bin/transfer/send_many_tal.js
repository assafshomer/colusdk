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

var toArray = [ { address: 'mvPLR3FtUekCBvpikbVLvmw53XuT4FH7QV',
    assetId: 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr',
    amount: 1 },
  { address: 'mjgxtAdRDD5QHGAFyqLuwpuXWHpKwh3rHw',
    assetId: 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr',
    amount: 2 },
  { address: 'n4NLk9GLVgLzx7Uo5wwNGHEEU3BjiAF4zi',
    assetId: 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr',
    amount: 3 },
  { address: 'msqFcwt9GSNGo5N7LAFfkMkDDQN7nETJVH',
    assetId: 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr',
    amount: 4 } ]


var send = {
    from: fromAddress,
    to: toArray,
    metadata: {        
        'assetName': 'Testing 1234',
        'issuer': 'Assaf',
        'description': 'Why do I get an error {"error":"not enough satoshi in account for fees"}'
    }
};

var Colu = require('colu');
var colu = new Colu(settings);

colu.on('connect', function () {
    colu.financedSend(send, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})


colu.init()