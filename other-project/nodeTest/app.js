const express = require('express');
const app = express();
const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    post:3306,
    user:'root',
    password:'qlalfqjsgh',
    database:'jsman'
});
connection.connect();

app.listen(3000, ()=>{
    console.log('start! express server');
});

app.use(express.static('public'));

//express에 내장된 body-parser 사용
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/public/main.html");
})


app.get('/main', (req, res)=>{
    res.sendFile(__dirname+"/public/main.html");
});

app.post('/email_post', (req, res)=>{
    res.render('email.ejs', {'email':req.body.email});
});

app.post('/ajax_send_email', (req, res)=>{
    let email = req.body.email;
    let responseData = {};
    let query = connection.query(`select name from user where email="${email}"`, (err, rows)=>{
        if(err) throw err;
        if(rows[0]){
            responseData.result='ok';
            responseData.name=rows[0].name;
        }else{
            responseData.result="none";
            responseData.name="";
        }
        res.json(responseData);
    })
})