function WishDAO() {
    console.log('inside wish dao');
    var mongoDB = require('mongodb').MongoClient;

    var connection = {
        url: 'mongodb://localhost:27017/wishList'
    };
    return ({
        
        getAllWishLists: function (callback) {
            console.log('inside get all wish lists');
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('inside connection err: ' + err);
                }
                console.log('inside the connect');
                var cursor = db.collection('practiceWishes').find();
                cursor.toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        callback(result.slice());
                    }
                })
            })
        },
        
        getWishListsByUser: function (myParam, callback) {
            console.log('inside DAO getWishListsByUser');
            console.log('Parameter coming in: ');
            console.log(myParam);
            
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('inside connection err: ' + err);
                }
                console.log('inside the connect');
                var cursor = db.collection('practiceWishes').find({'user.username': myParam.username});
                cursor.toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        callback(result.slice());
                    }
                })
            })
        },        

        updateWishList: function (objectToUpdate, callback) {


           var objectToUpdate = objectToUpdate;
           
            console.log('inside update wish list');
            console.log('This is my objectToUpdate.myItems');
            console.log(objectToUpdate.myItems);

            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('inside connection err: ' + err);
                }
                console.log('inside the connect');
                var confirmation = db.collection('practiceWishes').update(

                    {
                        name: objectToUpdate.name
                    },

                    {

                        $set: {
                            "myItems": objectToUpdate.myItems
                        }

                    }
                );
                console.log('This is my confirmation:  ');
                console.log(confirmation);
                callback(confirmation);
            })
        },

        saveWishList: function (wishlist, callback) {
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('insert connection error: ' + err);
                }
                var insertReturn = db.collection('practiceWishes').insert(wishlist);
                callback(insertReturn);
            })
        },
        
        getAllItemsList: function (callback) {
            console.log('inside get all items lists');
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('inside connection err: ' + err);
                }
                console.log('inside the connect');
                var cursor = db.collection('items').find();
                cursor.toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        callback(result.slice());
                    }
                })
            })
        },

        deleteWishList: function (myParam, callback) {
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('insert connection error: ' + err);
                }
                var deleteReturn = db.collection('practiceWishes').remove(myParam);
                callback(deleteReturn);
            })
        },

         getAllUsersList: function (callback) {
            console.log('inside get all users lists');
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('inside connection err: ' + err);
                }
                console.log('inside the connect');
                var cursor = db.collection('users').find();
                cursor.toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        callback(result.slice());
                    }
                })
            })
        },
        
        saveUser: function (user, callback) {
            
            var userToSave = user;
            
            console.log('inside DAO saveUser() ');
            console.log('This is userToSave ');
            console.log(userToSave);
            
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('insert connection error: ' + err);
                }
                console.log('before callback ');
                callback(db.collection('users').insert(user));
            })
        }





    });
}

module.exports = WishDAO;
