const A = require('./globalA');
global.message = '안녕하세요?';
console.log(A());

//global 객체는 전역객체이므로 모든 파일에서 접근가능함을 알 수 있다.