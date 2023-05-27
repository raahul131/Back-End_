console.log(`hello world`);

const { chownSync, copyFileSync } = require('fs');
const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);