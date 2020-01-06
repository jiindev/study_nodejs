const path = require('path');
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log(path.parse(__filename));
//파일정도 오브젝트로

console.log(path.format({
    root: '/',
    dir: '/Users/jiindawn/Desktop/code/study_nodejs',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}));
//하나로 합침

console.log(path.normalize('/Users//jiindawn/Desktop/code/study_nodejs/path.js'));
//경로를 제대로 만들어줌

console.log(path.isAbsolute('./'));
//절대경로인지, 상대경로인지

console.log(path.relative('/Users/jiindawn/Desktop/code/study_nodejs/path.js', '/Users'));
//첫번째 주소에서 두번째 주소로 가는 상대경로를 알려줌

console.log(path.join(__dirname, '..','..','/users','.','/ex'));
//절대경로 무시하고 합침

console.log(path.resolve(__dirname, '..','..','/users','.','/ex'));
//절대경로 고려하고 합침