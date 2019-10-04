const path = require('path');
const unoconv = require('awesome-unoconv');
 
const sourceFilePath = path.resolve('./templateexcelpdf.xlsx');
const outputFilePath = path.resolve('./myDoc.pdf');

console.log(sourceFilePath)
 
unoconv
  .convert(sourceFilePath, outputFilePath)
  .then(result => {
    console.log(result); // return outputFilePath
  })
  .catch(err => {
    console.log(err);
  });

