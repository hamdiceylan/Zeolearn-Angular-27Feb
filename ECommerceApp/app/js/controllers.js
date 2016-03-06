angular.module('app.controllers',[])

.controller('HomeCtrl',function($scope,$rootScope,$http,cardService,cardFactory){
  $scope.name = "My Name";
    
 $scope.getProducts = function(){
       debugger;
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
    
 $scope.getProducts();

    
 $scope.addToCard = function(product){
      debugger;
      //cardService.addToCard(product);
      cardFactory.addToCard(product);
  };
   
    
})

.controller('CategoryCtrl',function($scope){
     $scope.SingleSelect = true;

     $scope.ChangeSingleSelect = function () {
         $scope.SingleSelect = !$scope.SingleSelect;
     }
     $scope.GetSelectedCategories = function () {


     }

     $scope.checkbox = false;

     $scope.ShowStatus = function () {
        console.log($scope.checkbox);
     }











    console.log($scope.Name);
    $scope.PageName = "Welcome to Category Page2";

    $scope.Categories = [
        {
            categoryName : 'Electronic',
            productCount : '15',
            active : false
        },
        {
            categoryName : 'Furniture',
            productCount : '25',
            active : true
        },
        {
            categoryName : 'Toys',
            productCount : '125',
            active : true
        },
        {
            categoryName : 'Clothes',
            productCount : '100',
            active : false
        }
    ];

    $scope.Name = "Hamdi";
    console.log($scope.Name);
    $scope.SurName = "Ceylan";
    $scope.Message = "Hello";

    $scope.SaveForm = function(){

        console.log($scope.Name);

    }

 })

.controller('ProductDetailCtrl',function($scope,$rootScope,$routeParams){
    $scope.productId = $routeParams.productId;
    
    $rootScope.mainProducts.map(function(item){
        if (item.id == $scope.productId){
            $scope.selectedProduct = item;
        }
    });
})

.controller('CardCtrl',function($scope,$rootScope,cardService,cardFactory){
    debugger;
    $scope.cards = $rootScope.cardItems;
    
    $scope.RemoveFromCard = function(product){
        //cardService.RemoveFromCard(product);
        cardFactory.RemoveFromCard(product);
    };
    
})

.controller('CheckOutCtrl',function($scope,$rootScope){
    debugger;
    
    $scope.message = "I am in Checkout Page";
    
    $scope.form = {
        name : '',
        address : '',
        postCode: '',
        products : $rootScope.cardItems
    }
    
    $scope.completeShopping = function(){
            debugger;

        console.log($scope.form);
    };
    
    
})

.controller('productCrudCtrl',function($scope,$http,$rootScope){
    
    $scope.newProduct=   {
        "id": 0,
        "image": "img/product-3.jpg",
        "name": "",
        "oldPrice": "",
        "newPrice": "",
        "currency": "$"
    };

    $scope.AddProduct = function(){
        console.log($scope.newProduct);
        $http({
            method : 'POST',
            url : 'http://localhost:3000/products',
            data : $scope.newProduct,
            headers : { 'Content-Type' : 'application/json' }
        })
        .success(function(data){
            console.log(data);
            $scope.getProducts();
        })
        .error(function(err){
            console.log(err);
        });
    };
    
    $scope.getProducts = function(){
       debugger;
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
    
    $scope.DeleteProduct = function(product){
        debugger;
        $http({
            method : 'DELETE',
            url : 'http://localhost:3000/products/' +product.id,
            headers : { 'Content-Type' : 'application/json' }
        })
        .success(function(data){
            console.log(data);
            $scope.getProducts();
        })
        .error(function(err){
            console.log(err);
        });
    };
    
 $scope.getProducts();
    
}); 

