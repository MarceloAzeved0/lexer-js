const readFile = require('./readFile');
const runLexer = require('./runLexer');

const nameFile = process.argv[2];

console.log(`Entrada Arquivo - ${nameFile}\n`)
const file1 = new readFile(__dirname  + '/tests/' + nameFile );

console.log(runLexer(file1.content()));