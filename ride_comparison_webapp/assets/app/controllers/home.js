app.controller("HomeController", ["$scope", "$location", "HomeService", function($scope, $location, HomeService){
    $scope.welcome_msg = HomeService.getWelcomeMessage();
    $scope.goToComparisonPage = function(){
        console.log("Going...");
        $location.path("/comparison");
    ;}
}]);
