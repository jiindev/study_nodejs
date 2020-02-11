const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'qlalfqjsgh',
    database: 'jsman'
});
connection.connect();



router.get('/', (req, res)=>{
    res.render('login.ejs',{'message':''});
});

router.post('/', (req, res)=>{
    const {userId, password} = req.body;
    let query = connection.query(`select * from access where userId=? and password=?`, [userId, password], (err, rows)=>{
        if(err) throw err;
        if(rows.length){
            res.render('main.ejs', {'id':userId, 'name':rows[0].name});
        }else{
            res.render('login.ejs', {'message':'WRONG INSERT'});
        }
    })
})

module.exports = router;