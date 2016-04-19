angular.module('test', []).controller('myCtrl', function ($scope, $http) {

    /*******************************************************  
    CONSTRUCTORS
  ******************************************************* */

    function WishList(name, description, myItems) {
        var self = this;

        self.name = name;
        self.description = description;
        self.myItems = myItems;
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

    function User(name, password) {
        var self = this;

        self.name = name;
        self.password = password;

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

        if ($scope.selectedWish.myItems) {

            $scope.selectedWish.myItems.push($scope.selectedItem);

        } else {
            var myItems = [];
            myItems.push($scope.selectedItem);
            $scope.selectedWish.myItems = myItems;

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

    var getData = function () {

        $http.get(
            '/myWishListRoute/find',
            null, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            //console.log(response);
            if (response.status === 200) {

                $scope.wishListArray = [];


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



                    $scope.wishListArray.push(new WishList(obj.name, obj.description, obj.myItems))

                }


            }
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });

    };


    getData(); //   onload



    $scope.createWishList = function () {
        $http.post(
            '/myWishListRoute/insert', {
                name: $scope.name,
                description: $scope.description
            }, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            console.log(response);

            $scope.wishListArray.push(new WishList($scope.name, $scope.description));
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });



    };






    $scope.updateWishList = function () {


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



    };




    $scope.deleteWishList = function () {
        $http.delete(
            '/myWishListRoute/delete/' + $scope.selectedWish.name, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            console.log(response);

        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });

        getData();

    };



    /*  ------------------------
             Items
       ------------------------*/

    (function getItems() {

        $http.get(
            '/myItemRoute/item',
            null, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            console.log(response);
            if (response.status === 200) {

                $scope.itemsArray = [];


                for (var pos in response.data) {

                    var obj = response.data[pos];

                    $scope.itemsArray.push(new Item(obj.name, obj.description))

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
            console.log('in success call back: ');
            console.log(response);
            if (response.status === 200) {

                $scope.usersArray = [];


                for (var pos in response.data) {

                    var userObj = response.data[pos];

                    $scope.usersArray.push(new Item(userObj.name, userObj.password))

                }


            }
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });

    })();







});
