const express = require('express');
const router = express.Router;
const {User} = require('../models');
const bcrypt = require('bcrypt');

router.post('/join', (req, res, next)=>{
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

router.post('/login', (req, res, next)=>{

});

module.exports = router;