var express = require('express');
var WishDAO = require('./helpers/wishdao');
var router = express.Router();

router.get('/find', function(req, resp, next) {
    console.log('inside find route');
    WishDAO().getAllWishLists(function(obj) {
        console.log(obj);
        console.log('inside find route inside wish.js');
        resp.send(obj);
    });
});


router.get('/findByUser/:name', function(req, resp, next) {
    console.log('inside findByUser route');
    WishDAO().getWishListsByUser(req.params,function(obj) {
        console.log('This is my request.params:  ')
        console.log(req.params);
        console.log('This is my response obj:  ')
        console.log(obj);
        console.log('inside findByUser route inside wish.js');
        resp.send(obj);
    });
});



router.post('/insert', function(req, resp, next) {
    console.log('inside insert route');
    console.log(req.body);
    console.log('request');
    WishDAO().saveWishList(req.body, function(obj) {
        console.log(obj);
        console.log('inside insert route inside wish.js');
        resp.send(obj);
    });
});

router.put('/update', function(req, resp, next) {
    console.log('inside update route');
    console.log('This is my req.body');
    console.log(req.body);
    
    WishDAO().updateWishList(req.body, function(obj) {
        console.log(obj);
        console.log('inside update route inside wish.js');
        resp.send(obj);
    });
});


router.delete('/delete/:name', function(req, resp, next) {
    console.log('inside delete route');
    console.log('This is my req.params');
    console.log(req.params);
    
    WishDAO().deleteWishList(req.params, function(obj) {
        console.log('This is my request.params:  ')
        console.log(req.params);
        console.log(obj);
        console.log('inside delete route inside wish.js');
        resp.send(obj);
    });
});

module.exports = router;
