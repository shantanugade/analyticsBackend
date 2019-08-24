var express = require('express');
var router = express.Router();
import connection from "../db/connection";
/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("select * from spreadsheet", (err, result)=>{
   if(err){
    res.send(err)
  }
    res.send(result)

  })
});

module.exports = router;
