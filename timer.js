const timeout = setTimeout(()=>{
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(()=>{
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다.')
}, 3000);


setTimeout(()=>{
    clearTimeout(timeout2);
    clearInterval(interval);
},2500);

const imm = setImmediate(()=>console.log('즉시 실행'));
clearImmediate(imm);

// console.log(__filename, __dirname);
for  (let i = 0; i<100000; i++){
    console.log(i);
    process.exit();
}