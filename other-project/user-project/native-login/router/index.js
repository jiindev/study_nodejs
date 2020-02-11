const express = require('express');
const router = express.Router();

const login = require('./login');
const join = require('./join');

router.get('/', (req, res)=>{
    res.render('main.ejs', {name:'', id:''});
});
router.use('/login', login)
router.use('/join', join)

module.exports = router;