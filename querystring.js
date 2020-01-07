const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://music.naver.com/album/index.nhn?albumId=4363214');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));