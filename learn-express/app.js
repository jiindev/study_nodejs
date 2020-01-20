const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
var path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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
    // if(+new Date() % 2 === 0){
    //     next();
    // }else{
    //     res.send('50% 당첨');
    // }
    next();
}, (req, res, next)=>{
    console.log('두번째 미들웨어');
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

//404 not found

app.use((req, res, next)=>{
    res.status(404).send('NOT FOUND');
})

//500 ERROR
app.use(function(err, req, res){
    console.error(err);
    res.status(500).send('SERVER ERROR');
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    // res.status(err.status || 500);
    // res.render('error');
})

module.exports = app;
