const http = require('http');
const https = require('https');
const http2 = require('http2');
//http의 두번째 버전, 속도에서 이점을 보인다.
const fs = require('fs');

http.createServer((req, res)=>{
    res.end('http server');
}).listen(80);

https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca:[
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ]
}, (req, res)=>{
    res.end('https server');
}).listen(443);

//무료중에서 제일 유명한 https 인증기관은 lets encrypt

http2.createSecureServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca:[
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ]
}, (req, res)=>{
    res.end('https server');
}).listen(443);