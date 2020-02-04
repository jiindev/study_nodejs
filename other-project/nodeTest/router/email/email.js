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


router.post('/form', (req, res) => {
    res.render('email.ejs', {
        'email': req.body.email
    });
});

router.post('/ajax', (req, res) => {
    let email = req.body.email;
    let responseData = {};
    let query = connection.query(`select email from user where email="${email}"`, (err, rows) => {
        if (err) throw err;
        if (rows[0]) {
            responseData.result = 'ok';
            responseData.name = rows[0].email;
        } else {
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData);
    })
})

module.exports = router;