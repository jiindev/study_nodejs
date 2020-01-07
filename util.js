const util = require('util');
const crypto = require('crypto');

const dontuseme = util.deprecate((x, y)=>{
    console.log(x + y);
}, '이 함수는 12월 부로 지원하지 않습니다.');

//deprecated는 지원이 조만간 중단될 메서드임을 알려줄 때에 사용합니다.

dontuseme(1, 2);

const randomBytePromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

crypto.randomBytes(64, (err,buf)=>{
    const salt = buf.toString('base64');
    console.log('salt', salt);
    console.time('암호화');
    crypto.pbkdf2('비밀번호',salt, 1002495, 64, 'sha512', (err, key)=>{
        console.log('password:', key.toString('base64'));
        console.timeEnd('암호화');
    })
});

randomBytePromise(64)
    .then((buf)=>{
        const salt = buf.toString('base64');
        return pbkdf2Promise('비밀번호',salt, 1002495, 64, 'sha512');
    })
    .then((key)=>{
        console.log('password', key.toString('base64'));
    })
    .catch((err)=>{
        console.error(err);
    });

(async()=>{
    const buf = await randomBytePromise(64);
    const salt = buf.toString('base64');
    const key = await pbkdf2Promise('비밀번호',salt, 1002495, 64, 'sha512' );
    console.log('password', key.toString('base64'));
})();