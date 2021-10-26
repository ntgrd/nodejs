// console.log(process.argv);
const colors = require('colors');
// const args = process.argv.slice(2);
const [from, to] = process.argv.slice(2);
// console.log(colors.green('Hello NodeJS from'), colors.yellow(process.argv[2]));
console.log(colors.green('Hello NodeJS from'), colors.yellow(from), 'to', colors.blue(to));
