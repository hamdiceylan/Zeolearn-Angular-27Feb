angular.module('app.directives',[])

.directive('basket', function () {
    return{
        restrict : 'E',
        scope : {
          products : '='
        },
        templateUrl : 'views/cardDetailDirective.html',
        replace : true,
        controller : function ($scope) {
            console.log($scope.products);
        }
    }
 });

