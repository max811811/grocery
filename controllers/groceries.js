var groceriesdb = require('../data/groceriesdb');

module.exports = {
  index,
  create

};
	
function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    groceriesdb.create(req.body);
    res.redirect('/list');
  }


function index(req, res) {
    res.render('list/index', {
      list: groceriesdb.getAll(),
      time: req.time
    });
  }