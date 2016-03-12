angular.module('starter.factories', [])

.factory('product',function($http,$rootScope){
    var productObject = {};
    debugger;
    productObject.getProducts = function(){
     $http({
         type : 'GET',
        url : 'http://localhost:3000/products',
        headers : { 'Content-Type' : 'application/json' }
     })
     .success(function(data){
        $rootScope.mainProducts = data;
        console.log(data);
     })
     .error(function(err){
      console.log(err); 
     });
        
    }; 
    return productObject;
});