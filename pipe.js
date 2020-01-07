const fs = require('fs');
const zlib = require('zlib');
//파일 압축 모듈

const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream('readme4.txt');
const writeStram = fs.createWriteStream('writeme5.txt');
readStream.pipe(zlibStream).pipe(writeStram);

// const readStream = fs.copyFile('./readme4.txt', './writeme4.txt', (err)=>{
//     console.log(err);
// })