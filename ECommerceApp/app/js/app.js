
var eCommerceApp = angular.module('eCommerceApp',['ngRoute','app.controllers']);


eCommerceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller : 'HomeCtrl'
      }).
      when('/cart', {
        templateUrl: 'views/cart.html'
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
      when('/productDetail', {
        templateUrl: 'views/productDetail.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

