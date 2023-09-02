var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': 1, 'name': 'john', 'email': 'aaa'},
{ 'id': 2, 'name': 'james', 'email': 'dd'},
{ 'id': 100, 'name': 'david', 'email': 'nn'},
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub: 'abc', names: nameList  });
});

module.exports = router;
