const http = require('http');
const fs = require('fs');
const users = {

};

const router = {
    get: {
        '/': (req, res) => {
            return fs.readFile('./restFront.html', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        },
        '/users': (req, res) => {
            res.end(JSON.stringify(users));
        },
        '*': (req, res) => {
            fs.readFile(`.${req.url}`, (err, data) => {
                return res.end(data);
            });
        },
    },
    post: {
        '/users': (req, res) => {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                console.log('POST 본문(body)', body);
                const {
                    name
                } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201, {
                    'Content-Type': 'text/html; charset = utf-8'
                });
                res.end('사용자 등록 성공');
            });
        },
    },
    put: {
        '/users': (req, res) => {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return req.on('end', () => {
                console.log('put', body);
                users[id] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        },
    },
    delete: {
        '/users': (req, res) => {
            const id = req.url.split('/')[2];
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            return req.on('end', () => {
                console.log('delete', body);
                delete users[id];
                return res.end(JSON.stringify(users));
            });
        },
    },
};

http.createServer((req, res) => {
    console.log(req.url, req.method);
    const matchedUrl = router[req.method.toLowerCase()]['/'+(req.url.split('/')[1]||'')];
    (matchedUrl || router[req.method.toLowerCase()]['*'])(req, res);
}).listen(8005, () => {
    console.log('8005 번 포트에서 서버 대기 중');
});



// const http = require('http');
// const fs = require('fs');

// const users = {};

// http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     if (req.url === '/') {
//       return fs.readFile('./restFront.html', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         res.end(data);
//       });
//     } else if (req.url === '/about') {
//       return fs.readFile('./about.html', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         res.end(data);
//       });
//     } else if (req.url === '/users') {
//       return res.end(JSON.stringify(users));
//     }
//     return fs.readFile(`.${req.url}`, (err, data) => {
//       if (err) {
//         res.writeHead(404, 'NOT FOUND');
//         return res.end('NOT FOUND');
//       }
//       return res.end(data);
//     });
//   } else if (req.method === 'POST') {
//     if (req.url === '/users') {
//       let body = '';
//       req.on('data', (data) => {
//         body += data;
//       });
//       return req.on('end', () => {
//         console.log('POST 본문(Body):', body);
//         const { name } = JSON.parse(body);
//         const id = Date.now();
//         users[id] = name;
//         res.writeHead(201);
//         res.end('등록 성공');
//       });
//     }
//   } else if (req.method === 'PUT') {
//     if (req.url.startsWith('/users/')) {
//       const key = req.url.split('/')[2];
//       let body = '';
//       req.on('data', (data) => {
//         body += data;
//       });
//       return req.on('end', () => {
//         console.log('PUT 본문(Body):', body);
//         users[key] = JSON.parse(body).name;
//         return res.end(JSON.stringify(users));
//       });
//     }
//   } else if (req.method === 'DELETE') {
//     if (req.url.startsWith('/users/')) {
//       const key = req.url.split('/')[2];
//       delete users[key];
//       return res.end(JSON.stringify(users));
//     }
//   }
//   res.writeHead(404, 'NOT FOUND');
//   return res.end('NOT FOUND');
// })
//   .listen(8085, () => {
//     console.log('8085번 포트에서 서버 대기중입니다');
//   });