app.service("ComparisonService", ["$http", function($http){
    return {
        getRideEstimates: function(start_lat, start_long, end_lat, end_long, scope){
            var api_domain = "http://localhost:8000";
            var end_point = "api/rides/estimate/";
            $http({
                method: "GET",
                url: `${api_domain}/${end_point}?start_lat=${start_lat}&start_long=${start_long}&end_lat=${end_lat}&end_long=${end_long}`
            }).then(function successCallback(response) {
                console.log(44+scope.rideEstimates);
                scope.rideEstimates = response.data;
                console.log(441+scope.rideEstimates);
            }, function errorCallback(response) {
                console.log(55+response.statusText);
            });
        }
    };
}]);
