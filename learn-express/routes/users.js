var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
  res.send('Hello users');
});

router.delete('/', (req, res)=>{

});



module.exports = router;
