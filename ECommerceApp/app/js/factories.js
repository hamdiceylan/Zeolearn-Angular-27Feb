angular.module('app.factories',[])

.factory('cardFactory',function($rootScope){
    debugger;
    var cardObject = {};
    
    cardObject.addToCard = function(product){   
      $rootScope.cardItems.push(product);
      console.log($rootScope.cardItems);
      $rootScope.totalAmount += parseInt(product.newPrice);
    };
    cardObject.RemoveFromCard = function(product){
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
    
    return cardObject;
});