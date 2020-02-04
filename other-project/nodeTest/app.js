const express = require('express');
const app = express();
const router = require('./router/index');


app.listen(3000, () => {
    console.log('start! express server');
});

app.use(express.static('public'));

//express에 내장된 body-parser 사용
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.use(router);