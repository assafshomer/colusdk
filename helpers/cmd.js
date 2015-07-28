var path = require('path');
var log_file_name = __dirname+'_'+Date.now()+'.json';
var scriptName = path.basename(__filename,'.js');


console.log(__dirname)
console.log(scriptName)
console.log(__filename)

require('../helpers/bitcoin_helper.js')();
var assetId = 'LE5arg1fawheJDvZEs9saPBoq9AENQGNxN9zr';
var toArray = []

for (i = 1; i < 5; i++) { 
    toArray.push({address: newAddress(),assetId: assetId,amount: i});
}

console.log(toArray)