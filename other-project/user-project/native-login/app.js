const express = require('express');
const app = express();
const router = require('./router/index');
const session = require('express-session');

app.listen(3000, ()=>{
    console.log('서버 시작');
})

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'native login',
    resave: false,
    saveUninitialized: true
}));

app.use(router);
