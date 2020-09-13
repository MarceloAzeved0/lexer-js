const readFile = require('./readFile');

const nameFile = process.argv[2];

console.log(`Entrada Arquivo - ${nameFile}`)
const file1 = new readFile(__dirname  + '/tests/' + nameFile );

console.log('Linha: ', file1.content() + '\n');