// 미리 이벤트리스너를 만들어두고,
//  (이벤트 리스너는 특정 이벤트 발생 시 어떤 동작 할지 정의하는 부분)
//  예시) 사람들이 서버에 방문(이벤트)하면 html파일을 줄거야.

const EventEmitter = require('events');
//생성자.

const myEvent = new EventEmitter();
myEvent.addListener('방문',()=>{
    console.log('방문해주셔서 감사합니다.');
});
myEvent.on('종료', ()=>{
    console.log('안녕히 가세요');
});
myEvent.on('종료', ()=>{
    console.log('제발 가세요');
})
myEvent.once('특별이벤트', ()=>{
    console.log('한 번만 실행됩니다.');
});

myEvent.emit('방문');
myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.emit('특별이벤트');
myEvent.on('계속', ()=>{
    console.log('계속 리스닝');
});

myEvent.on('종료1', ()=>{
    console.log('종료1입니다');
});
const callback = ()=>{
    console.log('종료1이오');
};
myEvent.on('종료1',callback);

myEvent.removeAllListeners('계속');
myEvent.emit('계속');
//이벤트리스너 전체 삭제
myEvent.removeListener('종료1', callback);
myEvent.emit('종료1');
//특정 이벤트리스너 삭제

console.log(myEvent.listenerCount('종료1'));
//이벤트리스너 갯수