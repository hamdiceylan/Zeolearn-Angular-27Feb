angular.module('app.controllers',[])

.controller('HomeCtrl',function($scope){
    $scope.name = "My Name";

    $scope.mainProducts = [
        {
            image : 'img/product-1.jpg',
            name : 'Samsung Galaxy s5',
            oldPrice : '$1.000',
            newPrice : '$700'
        },
        {
            image : 'img/product-2.jpg',
            name : 'Nokia Lumia 1320',
            oldPrice : '$1.200',
            newPrice : '$950'
        },
        {
            image : 'img/product-3.jpg',
            name : 'LG Leon 2015',
            oldPrice : '$700',
            newPrice : '$500'
        },
        {
            image : 'img/product-4.jpg',
            name : 'Sony microsoft',
            oldPrice : '$1.100',
            newPrice : '$900'
        },
        {
            image : 'img/product-5.jpg',
            name : 'Iphone 6 Plus',
            oldPrice : '$1.400',
            newPrice : '$1.100'
        },
        {
            image : 'img/product-1.jpg',
            name : 'Samsung Galaxy s6',
            oldPrice : '$900',
            newPrice : '$500'
        },
        {
            image : 'img/product-2.jpg',
            name : 'Nokia',
            oldPrice : '$800',
            newPrice : '$700'
        },
        {
            image : 'img/product-3.jpg',
            name : 'LG G3 2015',
            oldPrice : '$1.000',
            newPrice : '$700'
        }
    ];
    
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

 });

