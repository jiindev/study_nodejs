#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.clear();
const answerCallBack = (answer) =>{
    if(answer === 'y'){
        console.log('수고하시네요.');
        rl.close();
    }else if (answer === 'n'){
        console.log('한번 해보세요.');
        rl.close();
    }else{
        console.clear();
        console.log('y 또는 n만 입력하세요.');
        rl.question('cli 예제를 하고 계신가요? (y/n)', answerCallBack);
    }
}


rl.question('cli 예제를 하고 계신가요? (y/n)', answerCallBack);