const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const mysql = require('mysql');


let connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'qlalfqjsgh',
    database: 'jsman'
});
connection.connect();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/join.html'));
});

router.post('/', (req, res) => {
    const {email, name} = req.body;
    let sql = {email:email, name:name};
    let query = connection.query(`insert into user set ?`,sql, (err, rows)=>{
        if(err) throw err;
        res.render('welcome.ejs', {'email':req.body.email, 'name':name, 'id':rows.insertId});
    });
});


module.exports = router;