var express = require('express');
var WishDAO = require('./helpers/wishdao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/allUsers', function(req, resp, next) {
    console.log('inside user find route');
    WishDAO().getAllUsersList(function(arrayOfUsers) {
        console.log('inside WishDAO().getAllUsersList() ');       
        console.log('response arrayOfUsers from inside WishDAO().getAllUsersList() callback ');
        console.log(arrayOfUsers);
        console.log('inside find route inside user.js');
        resp.send(arrayOfUsers);
    });
});

router.post('/insert', function(req, resp, next) {
    console.log('inside insert user route in users.js ');
    console.log('This is req.body coming in ');
    console.log(req.body);
    
    WishDAO().saveUser(req.body, function(obj) {
        console.log('inside WishDAO().saveUser() ');       
        console.log('response object from inside WishDAO().saveUser callback ');
        console.log(obj);
        resp.send(obj);
    });
});

module.exports = router;
