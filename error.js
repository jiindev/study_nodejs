const fs = require('fs');

// setInterval(()=>{
//     console.log('시작');
//     try{
//         throw new Error('서버를 고장내주마');
//     }catch (error){
//         console.error(error);
//     }
    
// }, 1000);

// setInterval(()=>{
//     fs.unlink('./asdfasdf.js', (err)=>{
//         if(err){
//             console.log('시작');
//             console.log(err);
//             console.log('끝');
//         }
//     })
    
// }, 1000);
// //노드 내장 객체에서 발생하는 에러는 딱히 멈추게 하진 않는다.

process.on('uncaughtException', (err)=>{
    console.error('예기치 못한 에러', err);
})

setInterval(()=>{
    throw new Error('서버를 고장내주마');
}, 1000);

setTimeout(()=>{
    console.log('실행됩니다');
}, 2000);