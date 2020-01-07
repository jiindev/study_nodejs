const crypto = require('crypto');

crypto.randomBytes(64, (err,buf)=>{
    const salt = buf.toString('base64');
    console.log('salt', salt);
    console.time('암호화');
    crypto.pbkdf2('비밀번호',salt, 1002495, 64, 'sha512', (err, key)=>{
        console.log('password:', key.toString('base64'));
        console.timeEnd('암호화');
    })
})

//해시 충돌 공격을 어렵게 하기 위해서 salt라는 문자열을 원래 비밀번호에 추가하고 iteration 횟수를 높인다.

//실무에선 bcrypt, scrypt를 많이 사용

console.log(crypto.createHash('sha512').update('비밀번호').digest('base64'));
