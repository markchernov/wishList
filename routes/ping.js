var express = require('express');
var router = express.Router();


require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}
 
	$ = require("jquery")(window);
});


router.get('/ping', function(request, response, next) {
	console.log('I was pinged brah');
    
    
    var myData;
    
    $.getJSON( "http://markche.com:8080/NutriTrac/rest/food/1225", function( data ) {
     
        myData = data;
        console.log("This is my data from GET to Java API");
        console.log(myData.name);
        
        response.send(myData);
     });

});

module.exports = router;