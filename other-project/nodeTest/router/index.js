const express = require('express');
const routerapp = express();
const router = express.Router();
const path = require('path');
const email = require('./email/email');
const main = require('./main/main');
const join = require('./join');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.use('/main', main);
router.use('/email', email);
router.use('/join', join);

module.exports = router;