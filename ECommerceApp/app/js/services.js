angular.module('app.services',[])

.service("cardService",function($rootScope){
  $rootScope.cardItems = [];
  $rootScope.totalAmount = 0; 
  $rootScope.currency = "$";
  this.addToCard = function(product){   
      $rootScope.cardItems.push(product);
      console.log($rootScope.cardItems);
      $rootScope.totalAmount += parseInt(product.newPrice);
  }; 
  this.RemoveFromCard = function(product){
      var arrayIndex = 0;
      var removeObjectIndex = 0;
      $rootScope.cardItems.map(function(item){
          arrayIndex++;
          if(item.id == product.id){
              removeObjectIndex = arrayIndex;
              $rootScope.totalAmount -= parseInt(item.newPrice);
          }
      });
      
      $rootScope.cardItems.splice(0,removeObjectIndex);
  };
    
});