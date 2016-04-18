var express = require('express');
var WishDAO = require('./helpers/wishdao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.get('/allUsers', function(req, resp, next) {
    console.log('inside user find route');
    WishDAO().getAllUsersList(function(obj) {
        console.log(obj);
        console.log('inside find route inside user.js');
        resp.send(obj);
    });
});



module.exports = router;
