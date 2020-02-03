const express = require('express');
const app = express();
app.listen(3000, ()=>{
    console.log('서버 연결');
});

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('search.ejs');
});

app.post('/ajax_search', (req, res)=>{
    let responseData = {'result':'ok', 'searchWord' : req.body.searchWord};
    console.log(responseData);
    res.json(responseData);
});