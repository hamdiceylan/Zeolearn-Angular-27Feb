var eCommerceApp = angular.module("eCommerceApp",['ngRoute']);

eCommerceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cart', {
        templateUrl: '../../views/cart.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);

eCommerceApp.run(function(){

});

