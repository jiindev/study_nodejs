const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
var path = require('path');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: 'secret code',
    cookieParser: {
        httpOnly: true,
        secure:false
    }
}));
app.use(flash());

app.use((req, res, next)=>{
    console.log('첫번째 미들웨어');
    next();
}, (req, res, next)=>{
    console.log('두번째 미들웨어');
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
