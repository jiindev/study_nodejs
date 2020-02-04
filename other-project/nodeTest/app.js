const express = require('express');
const app = express();
const router = require('./router/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');



app.listen(3000, () => {
    console.log('start! express server');
});

app.use(express.static('public'));

//express에 내장된 body-parser 사용
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(router);