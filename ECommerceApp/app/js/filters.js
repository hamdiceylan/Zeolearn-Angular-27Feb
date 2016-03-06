angular.module('app.filters',[])
.filter('orderByInt',function(){
    return function(items, field,reverse) { 
        items.sort(function (a, b) {
            return (parseInt(a[field]) > parseInt(b[field]) ? 1 : -1);
        });
        if(reverse) item = items.reverse();    return items;
    };
});