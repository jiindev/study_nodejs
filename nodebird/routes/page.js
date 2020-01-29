const express = require('express');
const router = express.Router();

//프로필 페이지
router.get('/profile', (req,res)=>{
    res.render('profile', {title: 'NodeBird - 프로필', user:null});
});
//회원가입 페이지
router.get('/join', (req, res)=>{
    res.render('join', {
        title: 'NodeBird - 회원가입',
        user: null,
        joinError: req.flash('joinError')
    });
});

//메인 페이지
router.get('/', (req, res, next)=>{
    res.render('main', {
        title: 'NodeBird',
        twits:[],
        user: null,
        loginError: req.flash('loginError'),
    })
});
module.exports = router;