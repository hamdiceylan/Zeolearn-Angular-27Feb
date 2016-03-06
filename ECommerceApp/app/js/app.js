
var eCommerceApp = angular.module('eCommerceApp',['ngRoute','ngMessages','app.controllers','app.services','app.directives','app.factories','app.filters']);


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
      when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller :  'CheckOutCtrl'
      }).
      when('/productDetail/:productId', {
        templateUrl: 'views/productDetail.html',
        controller : 'ProductDetailCtrl'
      }).
      when('/productCrud', {
        templateUrl: 'views/product-crud.html',
        controller : 'productCrudCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

