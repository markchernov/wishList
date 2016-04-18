var express = require('express');
var WishDAO = require('./helpers/wishdao');
var router = express.Router();
/*router.post('/insert', function(req, resp, next) {
    console.log('inside insert route');
    console.log(req.body);
    console.log('request^');
    WishDAO().saveWishList(req.body, function(obj) {
        console.log(obj);
        console.log('inside insert route inside item.js');
        resp.send(obj);
    });
});*/
router.get('/item', function(req, resp, next) {
    console.log('inside item find route');
    WishDAO().getAllItemsList(function(obj) {
        console.log(obj);
        console.log('inside find route inside item.js');
        resp.send(obj);
    });
});
module.exports = router;
