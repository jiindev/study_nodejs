const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const mysql = require('mysql');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


let connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'qlalfqjsgh',
    database: 'jsman'
});
connection.connect();


router.get('/', (req, res) => {
    let msg;
    let errMsg = req.flash('error');
    if(errMsg) msg=errMsg;
    res.render('join.ejs',{'message':msg});
});

passport.serializeUser((user, done)=>{
    console.log('passport session save:', user.id);
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    console.log('passport session get id', id);
    done(null, id);
});

passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    let query = connection.query('select * from user where email=?',[email], (err, rows)=>{
        if(err) return done(err);
        if(rows.length){
            console.log('existed user');
            return done(null, false, {message: 'your email is aleady used'});
        }else{
            let sql = {email:email, password:password};
            let query = connection.query(`insert into user set ?`, sql, (err, rows)=>{
                if(err) throw err;
                return done(null, {'email':email, 'id':rows.insertId});
            });
        }
    })
}));

router.post('/', passport.authenticate('local-join', {
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash: true
}));
// router.post('/', (req, res) => {
//     const {email, name, password} = req.body;
//     let sql = {email:email, name:name, password:password};
//     let query = connection.query(`insert into user set ?`,sql, (err, rows)=>{
//         if(err) throw err;
//         res.render('welcome.ejs', {'email':req.body.email, 'name':name, 'id':rows.insertId});
//     });
// });


module.exports = router;