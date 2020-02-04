const express = require('express');
const routerapp = express();
const router = express.Router();
const path = require('path');
const email = require('./email/email');
const main = require('./main/main');
const join = require('./join');
const login = require('./login');
const logout = require('./logout');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.use('/main', main);
router.use('/email', email);
router.use('/join', join);
router.use('/login', login);
router.use('/logout', logout);

module.exports = router;