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
    res.render('join.ejs', {'message':''});
});

router.post('/', (req, res)=>{
    const {userId, name, password, level} = req.body;
    let sql = {userId:userId, name:name, password:password, level:level};
    let query1 = connection.query('select * from access where userId=?',[userId], (err, rows)=>{
        if(err) throw err;
        if(rows.length){
            res.render('join.ejs', {'message':'ALREADY EXISTS'})
        }else{
            let query2 = connection.query('insert into access set ?', sql, (err, rows)=>{
                if(err) throw err;
                res.render('main.ejs', {'id':userId, 'name':name})
            });
        }
    });
    
})

module.exports = router;