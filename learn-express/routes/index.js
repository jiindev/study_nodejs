var express = require('express');
var router = express.Router();

app.get('/', (req, res)=>{
  console.log('세번째 미들웨어');
  res.send('Hello express');
});

app.post('/', (req, res)=>{

});

app.delete('/users', (req, res)=>{

});

module.exports = router;
