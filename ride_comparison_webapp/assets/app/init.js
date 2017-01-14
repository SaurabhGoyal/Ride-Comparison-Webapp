
var app = angular.module("RideComparisonApp", [
    "ngRoute"
]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl : "/static/home.html"
    })
    .when("/comparison", {
        templateUrl : "/static/comparison.html"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);