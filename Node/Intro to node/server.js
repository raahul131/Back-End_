// console.log(`hello world`);

// const { chownSync, copyFileSync } = require('fs');
// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// const path = require(`path`);

// console.log(path.parse(__filename));

const {add, subtract, multiply, divide} = require('./math')
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
