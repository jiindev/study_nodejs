const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside:{
        inside:{
            key:'value'
        }
    }
};

console.time('전체 시간');

console.log('평범한 로그이며 쉼표로 여러가지 값을 찍을 수 있다.');
console.log(string, number, boolean);
console.error('에러메시지');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});
//object를 보여주는 방법. colors = 알록달록하게 표시 여부 , depth = n번째 depth까지 표현

console.time('시간 측정');
for (let i=0; i<100000; i++){
    continue;
}
console.timeEnd('시간 측정');

function b(){
    console.trace('에러 위치 추척');
}
function a(){
    b();
}
a();

console.timeEnd('전체 시간');