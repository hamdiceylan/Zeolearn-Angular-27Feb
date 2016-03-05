
var eCommerceApp = angular.module('eCommerceApp',['ngRoute','app.controllers','app.services','app.directives']);


eCommerceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller : 'HomeCtrl'
      }).
      when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CardCtrl' 
      }).
      when('/contact', {
        templateUrl: 'views/contact.html'
      }).
      when('/other', {
        templateUrl: 'views/other.html'
      }).
      when('/category', {
        templateUrl: 'views/category.html',
        controller :  'CategoryCtrl'
      }).
      when('/productDetail/:productId', {
        templateUrl: 'views/productDetail.html',
        controller : 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

