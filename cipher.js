const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('비밀번호', 'utf8', 'base64');
//utf8을 base64암호문으로 바꿔라
result += cipher.final('base64');
console.log('암호', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
//base64암호문을 utf8평문으로 바꿔라.

result2 += decipher.final('utf8');

console.log('평문', result2);
