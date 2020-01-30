const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {User} = require('../models');
const passport = require('passport');
const bcrypt = require('bcrypt');

const router = express.Router;

router.post('/join', isNotLoggedIn, async(req, res, next)=>{
    const {email, nick, password} = req.body;
    try{
        const exUser = await User.find({where: {email}});
        if(exUser){
            req.flash('joinError', '이미 가입된 이메일입니다.');
            return res.redirect("/join");
        }
        console.time('암호화시간');
        const hash = await bcrypt.hash(password, 12);
        console.timeEnd('암호화시간');
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next)=>{ //req.body.email, req.body.password
    passport.authenticate('local', (authError, user, info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            req.flash('loginError', info.message);
            return res.redirect('/');
        }
        return req.login(user, (loginError)=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        })
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res)=>{
    req.logout();
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;