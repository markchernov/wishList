var WishDAO = require('../../../routes/helpers/wishdao.js');


console.log( WishDAO());

var wishLists;

describe("View and Interact with WishLists", function() {


  beforeAll(function(done) {
    setTimeout(function() {
        
      wishLists = WishDAO().getAllWishLists(console.log(obj));        
          
      done();
    }, 5000)
  });






	it('check wishlists array', function(done) {
		

		expect(wishLists).toBeTruthy();;
		
		
	});
});
















