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
      debugger;
         var index = 0;
         $rootScope.cardItems.map(function(item){
             if(item.id == product.id)
             {
                 $rootScope.totalAmount -= parseInt(item.newPrice);
                 console.log($rootScope.cardItems.splice(index,1)); 
             }
             index++;
         });
  };
});