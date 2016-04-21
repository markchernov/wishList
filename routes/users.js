var express = require('express');
var WishDAO = require('./helpers/wishdao');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login/:username/:password', function(req, resp, next) {
    console.log('inside user login route');
    console.log('req.params coming in ');
    console.log(req.params);
    
    
    req.session.wishListUser = req.params.username;
    
    WishDAO().checkLogin(req.params, function(loginUserArray) {
    
        console.log('response loginConfirmation from inside WishDAO().checkLogin() callback ');
        console.log(loginUserArray);
        
        resp.send(loginUserArray[0]);
        
    });
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

router.put('/update', function(req, resp, next) {
    console.log('inside update user route');
    console.log('This is my req.body');
    console.log(req.body);
    
    WishDAO().updateUser(req.body, function(obj) {
        console.log(obj);
        console.log('inside update route inside users.js');
        resp.send(obj);
    });
});






module.exports = router;
