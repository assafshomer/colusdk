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
        'assetName': 'Accept Me (feat. Ryan Levine)',
        'issuer': 'Revalator',
        'description': 'Song',
        userData:{
            meta:[
                {key: 'Registration', value: '{"Overview":{"Asset Summary":"","General Info":{"Metadata Language":"English"},},"Assets":{"Work Info":{"Work Title":"Accept Me (feat. Ryan Levine)","Alternative Name(s)":"","Work Content Type":"Music & Lyrics","Work Type":"Original Work","Language":"English","Copyright Date":"","Copyright Number":"","Work Created on":"1/152010","Recorded Status":"Recording exists & is public"},"Work Attributes":{"Genre":"","Tags":"","Musical Key":"","Key Type":""},"Work Registration & Identifiers":{"ISWC":"","Archived ISWC":"","Registration Internal Code":"","Common Works Registration ID":"","Rights Society Type":"Both Performing & Mechanical Rights","Rights Society Name":"BMI","Registration Date":"","Performance %":"100","Mechanical %":"100","Territory":"United States"},"Writers":{"Writer Name":"Bruno Guez","IPI No.":"","Role":"Author/Composer","Writer %":"25","PRO":"BMI","PRO Member ID":"","MRO":"BMI","MRO Member ID":""},"Publishers":{"Publisher Name":"Quango Selector","IPI No.":"1164365","Agreement Type":"Administrator","Territories":"United States","Publisher Performing Rights Affiliation Society":"BMI","Publisher Mechanical Rights Affiliation Society":"BMI","Publisher Synchronization Rights Affiliation Society":"","Publisher Performing Rights Ownership %":"100","Publisher Performing Rights Colection %":"100","Publisher Mechanical Rights Ownership %":"100","Publisher Mechanical Rights Collection %":"100","Publisher Synchronization Rights Ownership %":"","Publisher Synchronization Rights Collection %":""},"Recordings":{"Performer":"Bruno Guez","Title":"Accept Me (feat. Ryan Levine)","ISRC":"USBBW1100007","Duration (mm:ss)":"","Related Asset ID":"","Related ISRC":""},"Online Services":{"Service":"","ID":"","Asset ID":"","URL":""},"Appears On":{"Album Cover Art":"","Album Name":"Love Is Possible","Album Genre":"Electronic, Soul","Album Label":"Quango","Album UPC":"182784103655","Album Release Date":"12/8/2015","Album Format":"Digital","Album Copyright":"(P) 2011 Quango Music Group, Inc.","Artwork Copyright":"(C) 2015 Quango Music Group, Inc."}}}', type: "String"}           
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