const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark : 16});
//readme3.txt파일을 16바이트씩 스트리밍 방식으로 읽어들인다.
const data = [] ; 

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on('end', ()=>{
    console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', (err)=>{
    console.log('error', err);
})