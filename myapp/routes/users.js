var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/kavyanjali', function(req, res, next) {
  res.send('anuj');
});

module.exports = router;
