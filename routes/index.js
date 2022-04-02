var express = require('express');
var router = express.Router();

var groceriesdb = require('../data/groceriesdb');
var groceriesCtrl = require('../controllers/groceries')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// changed this below to router from app (trial and error)
// router.get('/', function(req, res) {
//   res.render('/', {
//     list: groceries-db.getAll()
//   });
  
// });


router.get('/list', function(req, res) {
  res.render('list/index', {
    list: groceriesdb.getAll()
  });
});

//router.get('/', groceriesCtrl.show);
router.post('/list', groceriesCtrl.create);  // add this route


module.exports = router;
