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

    function Item(name, description) {
        var self = this;

        self.name = name;
        self.description = description;
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



    /*******************************************************  
    REST CALLS
  ******************************************************* */

    /*  ------------------------
            WishList
      ------------------------*/

    var getData = function()   {
    
    $http.get(
        '/db/find',
        null, null
    ).then(function successCallback(response) {
        console.log('in success call back: ');
        console.log(response);
        if (response.status === 200) {

            $scope.wishListArray = [];


            for (var pos in response.data) {

                var obj = response.data[pos];

                $scope.wishListArray.push(new WishList(obj.name, obj.description, obj.myItems))

            }


        }
    }, function errorCallback(response) {
        console.log('in error call back: ' + response);
    });

    };
    
    
    getData();
    
    

    $scope.createWishList = function () {
        $http.post(
            '/db/insert', {
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
        $http.put(
            '/db/update', $scope.selectedWish, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            console.log(response);

        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });



    };
    
    
    
    
        $scope.deleteWishList = function () {
        $http.delete(
            '/db/delete/' + $scope.selectedWish.name, null
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
        '/db/item',
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


});