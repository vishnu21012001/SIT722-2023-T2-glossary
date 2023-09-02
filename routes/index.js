var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': 0, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 1, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 2, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 3, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 4, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 5, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 6, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 7, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 8, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 9, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},
{ 'id': 10, 'Term': 'john', 'Description': 'aaa' , 'Reference': 'bbb'},

];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub: 'my website showing a collection of DevOps terms and their brief description', names: nameList  });
});

module.exports = router;
