const express = require('express');
const app = express();
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
    console.log(req.body.email);
    let responseData = {'result':'ok', 'email':req.body.email};
    res.json(responseData);
})