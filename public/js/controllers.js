'use strict';

/* Controllers */

var exampleControllers = angular.module('exampleControllers', []);

exampleControllers.controller('ItemListCtrl', ['$scope', 'Item',
  function($scope, Item) {
    $scope.items = Item.query();
    $scope.orderProp = 'age';
  }]);

exampleControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
  function($scope, $routeParams, Item) {
    $scope.item = Item.get({itemId: $routeParams.itemId}, function(item) {
      $scope.mainImageUrl = item.images[0];
    });

    $scope.someFunction = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);