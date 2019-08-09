var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/anuj', function(req, res, next) {
  res.render('index', { title: 'express router 1234',myname: "chroma campus" });
});

module.exports = router;
