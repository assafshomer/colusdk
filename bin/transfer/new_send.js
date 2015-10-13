
var testnetApi = 'https://testnet.api.coloredcoins.org';
var coluHost = 'https://testnet.engine.colu.co';
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982';

var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
};

var asset = {
    amount: 400,
    metadata: {        
        'assetName': 'RHCP concert',
        'issuer': 'Live Nation',
        'description': 'Ticket to see the New RHCP concert'
    }
}

/*
{ txHex: '0100000001fef24bb5c5d5955452c4b4370b7b684e22ccc11319f7d59566ddccef51b826ea000000001976a91422864a4775cd0c5287cd1f2b0c7f2ae826f0288688acffffffff04ac0200000000000047512103ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2103a100c4a60b8b396fcc97947f1df318ab07d5c9192956fbb778defd45d8dcc5b852ae58020000000000001976a91422864a4775cd0c5287cd1f2b0c7f2ae826f0288688ac0000000000000000206a1e43430102fdbcc346fdf1df7d7548e0da8f132db00de15c11204201204210cc020000000000001976a91422864a4775cd0c5287cd1f2b0c7f2ae826f0288688ac00000000',
  assetId: 'LFid9kWyYj4S66kUMK8xVvQtsCV1njVf9XJGE',
  multisigOutputs: [],
  txid: '67936fefeb1bb4ab61af2279547490a8ce278363310f96ed2dfa617669063883',
  receivingAddresses: [ { address: 'mifW9DhB7UeSVHyESejrqqf8g9N7GNTxYK', amount: 400 } ],
  issueAddress: 'mifW9DhB7UeSVHyESejrqqf8g9N7GNTxYK' }
*/

var assetId = 'LFid9kWyYj4S66kUMK8xVvQtsCV1njVf9XJGE';
var fromAddress = 'mifW9DhB7UeSVHyESejrqqf8g9N7GNTxYK';
// var toAddress = 'mfhdwaZd9csRDGVPBGVZeup45JpEGvYqhA';
var toAddress = 'mqDdMJppxjVcyVN59YVRrd9mGmEfozzjuZ'

var send = {
    from: fromAddress,
    to: [{
        address: toAddress,
        assetId: assetId,
        amount: 5
    }],
    metadata: {        
        'assetName': 'RHCP ticket',
        'issuer': 'Ticekt booth at LAX',
        'description': 'Ticket to for the New RHCP concert. Show at 12/12/2015 seats 1-5 at row 2'
    }
};

var Colu = require('colu');
var colu = new Colu(settings);

// colu.on('connect', function () {
//     colu.issueAsset(asset, function (err, body) {
//         if (err) return console.error(err)        
//         console.log("Body: ",body)
//     })
// })

colu.on('connect', function () {
    colu.financedSend(send, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()

/*
Body:  { txHex: '0100000001035b2ba5868052175c6b60e7ca857006cc04e531b8198ddb7c71ab5ac7e8e323020000001976a914ab1bf706f8b437c269b3551e58b6279a117417d388acffffffff0358020000000000001976a9141aa3d3457d2d5ec58cf0cfaf9fe5f65d6de730cf88ac0000000000000000096a0743430115002013e8030000000000001976a914ab1bf706f8b437c269b3551e58b6279a117417d388ac00000000',
  multisigOutputs: [],
  txid: 'd99143893ececc95cad4208465b47b536705817e91e8ab01d3433020eeb50a13' }
  */