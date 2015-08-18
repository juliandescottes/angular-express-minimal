'use strict';

/* App Module */
var exampleApp = angular.module('exampleApp', [
  'ngRoute',
  'exampleControllers',
  'exampleFilters',
  'exampleServices'
]);

exampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/items-list.html',
        controller: 'ItemsListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/items'
      });
  }]);