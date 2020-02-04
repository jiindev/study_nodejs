const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    let id = req.user;
    if(!id) res.redirect('/login');
    res.render('main.ejs', {'id':id});
});

module.exports = router;