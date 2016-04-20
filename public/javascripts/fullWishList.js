angular.module('test', []).controller('myCtrl', function ($scope, $http) {

    /*******************************************************  
    CONSTRUCTORS
  ******************************************************* */

    function WishList(name, description, myItems, user) {
        var self = this;

        self.name = name;
        self.description = description;
        self.myItems = myItems;
        self.user = user;
    }

    function Item(name, description, claim, date) {
        var self = this;

        self.name = name;
        self.description = description;

        if (claim) {

            self.claim = claim;
        }

        if (date) {
            self.date = new Date(date);
        } else {
            self.date = new Date();
        }
    }

    function User(userid, username, password) {
        var self = this;
        if (userid) {
            self.userid = userid;
        } else {
            self.userid = null;
        }
        self.username = username;
        if (password) {
            self.password = password;
        } else {
            self.password = null;
        }

        self.claimedItems = [];


        self.addClaimedItem = function (item, index) {

            console.log('This is item parameter ');
            console.log(item);
            console.log('inside addClaimedItem() ');
            self.claimedItems.push(item);
            console.log('This is self.claimedItems Array');
            console.log(self.claimedItems);

            $scope.selectedWish.myItems[index].claim = self.username;

        };



    }
    /*******************************************************  
    ONCLICK FUNCTIONS
  ******************************************************* */

    $scope.addItemToWishList = function () {

        console.log('inside addItemToWishList ');
        console.log("this is selected wishList: ")
        console.log($scope.selectedWish)
        console.log("this is selected item: ")
        console.log($scope.selectedItem)

        if ($scope.selectedWish) {



            if ($scope.selectedWish.myItems) {

                $scope.selectedWish.myItems.push($scope.selectedItem);

            } else {
                var myItems = [];
                myItems.push($scope.selectedItem);
                $scope.selectedWish.myItems = myItems;

            }
        } else {
            alert('Please select WishList first');
        }

    };

    $scope.removeItemFromWishList = function ($index) {

        console.log('inside removeItemFromWishList ');
        console.log("this is selected Item: ");
        console.log($scope.deleteItem);

        console.log("this is $index: ");
        console.log($index);

        if ($index >= 0) {

            $scope.selectedWish.myItems.splice($index, 1);

        }
    };

    /*******************************************************  
    REST CALLS
  ******************************************************* */

    /*  ------------------------
            WishList
      ------------------------*/

    (function () {

        $http.get(
            '/myWishListRoute/find',
            null, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            //console.log(response);
            if (response.status === 200) {

                $scope.allWishListsArray = [];


                for (var pos in response.data) {

                    var obj = response.data[pos];


                    for (var position in obj.myItems) {


                        var item = obj.myItems[position];



                        console.log("This is item in get all wish lists: ")
                        console.log(item)

                        obj.myItems.splice(position, 1, new Item(item.name, item.description, item.claim, item.date));

                        // replace plain old JS object with obj of type Date in myItems Array

                        console.log("This is array in get all wish lists: ")
                        console.log(obj.myItems)

                    }



                    $scope.allWishListsArray.push(new WishList(obj.name, obj.description, obj.myItems, obj.user))

                }


            }
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });

    })();




    $scope.getWishListByUser = function () {

        $http.get(
            '/myWishListRoute/findByUser/' + $scope.selectedUser.username,
            null
        ).then(function successCallback(response) {
            console.log('in success Controller getWishListByUser() call back: ');
            console.log('This is response.data : ');
            console.log(response);

            if (response.status === 200) {

                $scope.wishListArray = [];


                for (var pos in response.data) {

                    var obj = response.data[pos];


                    for (var position in obj.myItems) {


                        var item = obj.myItems[position];



                        console.log("This is item in getWishListByUser: ")
                        console.log(item)

                        obj.myItems.splice(position, 1, new Item(item.name, item.description, item.claim, item.date));

                        // replace plain old JS object with obj of type Date in myItems Array

                        console.log("This is array in getWishListByUser: ")
                        console.log(obj.myItems)

                    }

                    console.log("This is userObj in getWishListByUser: ")
                    console.log(obj.user)

                    var userObj = new User(obj.user._id, obj.user.username, obj.user.password);
                    // obj.user._id is a MongoDB primary key for User BSON

                    $scope.wishListArray.push(new WishList(obj.name, obj.description, obj.myItems, userObj));

                }


            }
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });



    };



    $scope.createWishList = function () {
        $http.post(
            '/myWishListRoute/insert', {
                name: $scope.name,
                description: $scope.description,
                myItems: [],
                user: $scope.selectedUser
            }, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            console.log(response);

            var newWish = new WishList($scope.name, $scope.description, [], new User($scope.selectedUser.userid, $scope.selectedUser.username, $scope.selectedUser.password));
            $scope.selectedWish = newWish;

            if ($scope.wishListArray) {
                $scope.wishListArray.push(newWish);
            } else {

                $scope.wishListArray = [];
                $scope.wishListArray.push(newWish)

            }


        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });



    };


    $scope.updateWishList = function () {


        if ($scope.selectedWish) {


            for (var item in $scope.selectedWish) {

                var dateObj = new Date(item.date);
                console.log("This is my date object: ")
                console.log(dateObj)

                item.date = dateObj;

                console.log("This is item.date: ")
                console.log(item.date)

            }

            $http.put(
                '/myWishListRoute/update', $scope.selectedWish, null
            ).then(function successCallback(response) {
                console.log('in success call back: ');
                console.log(response);

            }, function errorCallback(response) {
                console.log('in error call back: ' + response);
            });

        } else {
            alert('Please select WishList first');
        }

    };




    $scope.deleteWishList = function () {

        if ($scope.selectedWish) {


            $http.delete(
                '/myWishListRoute/delete/' + $scope.selectedWish.name, null
            ).then(function successCallback(response) {
                console.log('in success call back: ');
                console.log(response);

            }, function errorCallback(response) {
                console.log('in error call back: ' + response);
            });

            var index = $scope.allWishListsArray.indexOf($scope.selectedWish);
            $scope.allWishListsArray.splice(index, 1);



        } else {
            alert('Please select WishList first');
        }
    };

    /*  ------------------------
             Items
       ------------------------*/

    (function getItems() {

        $http.get(
            '/myItemRoute/item',
            null, null
        ).then(function successCallback(response) {
            console.log('in Controller getItems() success call back: ');
            console.log(response);
            if (response.status === 200) {

                $scope.itemsArray = [];


                for (var pos in response.data) {

                    var itemObj = response.data[pos];

                    $scope.itemsArray.push(new Item(itemObj.name, itemObj.description))

                }


            }
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });

    })();


    /*  ------------------------
           Users
     ------------------------*/


    (function getUsers() {

        $http.get(
            '/myUserRoute/allUsers',
            null, null
        ).then(function successCallback(response) {
            console.log('in Controller getUsers()  success call back: ');
            console.log(response.data);
            if (response.status === 200) {

                $scope.usersArray = [];

                for (var p in response.data) {

                    var userObj = response.data[p];
                    var persistedUser = new User(userObj._id, userObj.username, userObj.password);

                    console.log('persited user inside the loop ');
                    console.log(persistedUser);

                    $scope.usersArray.push(persistedUser);

                    console.log('$scope.usersArray after push() ');
                    console.log($scope.usersArray);

                }


            }
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });

    })();


    $scope.createNewUser = function () {
        $http.post(
            '/myUserRoute/insert', {
                username: $scope.newUserName,
                password: $scope.newUserPassword
            }, null
        ).then(function successCallback(response) {
            console.log('This is response in createNewUser() Controller success call back: ');
            console.log(response);

            var newUser = new User(null, $scope.newUserName, $scope.newUserPassword);


            $scope.selectedUser = newUser;
            console.log('This is $scope.selectedUser in createNewUser() Controller success call back: ');
            console.log($scope.selectedUser);


            if ($scope.usersArray) {
                $scope.usersArray.push(newUser);
            } else {
                $scope.usersArray = [];
                $scope.usersArray.push(newUser);
            }

        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });



    };




});
