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

        updateWishList: function (objectToUpdate, callback) {


            var objectToUpdate = objectToUpdate;
            var myItemsValue = objectToUpdate.myItems;
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
                            "myItems": updateValue
                        }

                    }
                );
                console.log('This is my confirmation:  ');
                console.log(confirmation);
                callback(confirmation);
            })
        },





        saveWishList: function (list, callback) {
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('insert connection error: ' + err);
                }
                var insertReturn = db.collection('practiceWishes').insert(list);
                callback(insertReturn);
            })
        },
        getAllItemsLists: function (callback) {
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

        deleteWishList: function (myParamObj, callback) {
            mongoDB.connect(connection.url, function (err, db) {
                if (err) {
                    console.log('insert connection error: ' + err);
                }
                var insertReturn = db.collection('practiceWishes').remove(myParamObj);
                callback(deleteReturn);
            })
        }







    });
}

module.exports = WishDAO;
