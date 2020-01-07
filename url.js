const url = require('url');

const URL = url.URL;
const myURL = new URL('https://music.naver.com/album/index.nhn?albumId=4363214');
console.log('new URL():', myURL);
//url 구성요소를 보여준다.  WHATWG방식, search 방식이 편리
console.log('url.format():', url.format(myURL));
//합쳐서 하나의 url로 만들어 준다.
console.log('---------------------------------');
const parseUrl = url.parse('https://music.naver.com/album/index.nhn?albumId=4363214');
console.log('url.parse():', parseUrl);
//기존 방식

//searchParams 참조