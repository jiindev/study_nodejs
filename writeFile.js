const fs = require('fs');

fs.writeFile('./writeme.txt', '글을 써보세요', (err, data)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});