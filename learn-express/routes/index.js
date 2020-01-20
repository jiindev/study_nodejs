var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=>{
  console.log('세번째 미들웨어');
  res.render('test', {
    title:'express2',
    title2:'hello',
    fruits:['사과', '배', '오렌지']
  });
});

router.post('/', (req, res)=>{

});

router.delete('/users', (req, res)=>{

});

module.exports = router;
