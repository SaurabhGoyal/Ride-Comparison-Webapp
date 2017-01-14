app.controller("ComparisonController", ["$scope", "ComparisonService", function($scope, ComparisonService){
    $scope.start_lat = 0.000000;
    $scope.start_long = 0.000000;
    $scope.end_lat = 0.000000;
    $scope.end_long = 0.000000;
    $scope.rideEstimates =  null;
    $scope.getRideEstimates = function(){
        console.log("Getting ride estimates... from ("+$scope.start_lat+", "+$scope.start_long+") to ("+$scope.end_lat+", "+$scope.end_long+").");
        $scope.rideEstimates = ComparisonService.getRideEstimates($scope.start_lat, $scope.start_long, $scope.end_lat, $scope.end_long);
        console.log("got - "+$scope.rideEstimates);
    ;}
}]);
