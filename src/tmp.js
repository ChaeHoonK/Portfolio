const fs = require('fs')
const hi = fs.readFileSync('./src/hello.txt')
fs.writeFileSync('./src/hello.txt', hi + '\nhello')