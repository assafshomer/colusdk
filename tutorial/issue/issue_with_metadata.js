// http://documentation.colu.co/#IssuewithMetadata

var testnetApi = 'https://testnet.api.coloredcoins.org'
var coluHost = 'https://testnet.engine.colu.co'
var privateSeed = 'abcd4986fdac1b3a710892ef6eaa708d619d67100d0514ab996582966f927982'
var settings = {
    coloredCoinsHost: testnetApi,
    coluHost: coluHost,
    network: 'testnet',
    privateSeed: privateSeed
}

var asset = {
    amount: 1,
    metadata: {        
        'assetName': 'testing text values',
        'issuer': 'Assaf',
        'description': 'story',
        userData:{
            meta:[
                {key: 'story', value: "consider a legal contract describing the issuer's promise to redeem each unit for goods or services in the real world. That legal document file can be hosted on the issuer's company website and linked using the URL data field. A hash of the document can be stored as well to ensure that the issuer (or otherwise host of the data) did not alter it. Both issuers and holders of an asset can thus refer unambiguously to the original contract against which the asset was issued.", type: "String"}           
            ]
        }
    }
}

var Colu = require('colu')
var colu = new Colu(settings)

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()