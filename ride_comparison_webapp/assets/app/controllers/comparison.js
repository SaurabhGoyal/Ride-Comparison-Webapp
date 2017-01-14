app.controller("ComparisonController", ["$scope", "ComparisonService", function($scope, ComparisonService){

    $scope.start_lat = 28.4781029;
    $scope.start_long = 77.0493641;
    $scope.end_lat = 28.496481;
    $scope.end_long = 77.085328;
    $scope.rideEstimates =  null;

    $scope.getRideEstimates = function(){
        console.log("Getting ride estimates... from ("+$scope.start_lat+", "+$scope.start_long+") to ("+$scope.end_lat+", "+$scope.end_long+").");
        ComparisonService.getRideEstimates($scope.start_lat, $scope.start_long, $scope.end_lat, $scope.end_long, $scope);
    ;}
}]);
