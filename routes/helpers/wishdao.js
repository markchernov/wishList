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
                var cursor = db.collection('practiceWishes').find({
                    'user.username': myParam.username
                });
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
        },

        updateUser: function (objectToUpdate, callback) {


            var objectToUpdate = objectToUpdate;

            console.log('inside DAO update user');
            console.log('This is my objectToUpdate.claimedItems');
            console.log(objectToUpdate.claimedItems);

            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('inside connection err: ' + err);
                }
                console.log('inside the connect');
                var confirmation = db.collection('users').update(

                    {
                        username: objectToUpdate.username
                    },

                    {

                        $set: {
                            "claimedItems": objectToUpdate.claimedItems
                        }

                    }
                );
                console.log('This is my confirmation:  ');
                console.log(confirmation);
                callback(confirmation);
            })
        },

        checkLogin: function (myParams, callback) {

            console.log('inside DAO checkLogin() ');
            console.log('This is myParams ');
            var myParams = myParams;
            console.log(myParams);

            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('insert connection error: ' + err);
                }
                
                console.log('inside DAO checkLogin connect');
                var cursor = db.collection('users').find(myParams);

                console.log('returned cursor before toArray ');
                console.log(cursor);

                cursor.toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        
                        console.log('result after toArray ');
                        console.log(result);
                        
                        callback(result.slice());
                    }
                    
                    else  {
                        
                        console.log('result after toArray with no match to user');
                        console.log(result); 
                        
                        callback("User not found");
                        
                    }
                    
                    
                    
                })



            })
        }

    });
}

module.exports = WishDAO;
