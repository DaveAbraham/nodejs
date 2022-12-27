const path = require('path')
console.log(path.sep)

const filePath = path.join('content','subFolder','test.txt')
console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

const absolutePath = path.resolve('content','subfolder','test.txt')
console.log(absolutePath);
