app.controller("ComparisonController", ["$scope", "ComparisonService", function($scope, ComparisonService){

    $scope.start_lat = 28.4781029;
    $scope.start_long = 77.0493641;
    $scope.end_lat = 28.496481;
    $scope.end_long = 77.085328;
    $scope.rideEstimates =  null;

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: $scope.start_lat, lng: $scope.start_long},
        zoom: 11
    });

    $scope.start_marker = new google.maps.Marker({
        position: {lat: $scope.start_lat, lng: $scope.start_long},
        map: map
    });

    $scope.start_lat = 0;
    $scope.start_long = 0;
    $scope.end_lat = 0;
    $scope.end_long = 0;

    map.addListener("click", $scope.$apply(function(e) {
        map.panTo(e.latLng);
        var zoom = map.zoom;
        if(zoom<15){
            map.setZoom(zoom+2);
        }
        else{
            $scope.start_marker.setPosition(e.latLng);
            console.log($scope.start_lat+", "+$scope.start_long);
            console.log($scope.start_marker.position.lat()+", "+$scope.start_marker.position.lng());
            $scope.start_lat = $scope.start_marker.position.lat();
            $scope.start_long = $scope.start_marker.position.lng();
            console.log($scope.start_lat+", "+$scope.start_long);
        }
    }));

    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Pickup from here.');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? "Error: The Geolocation service failed." :
                        "Error: Your browser doesn\'t support geolocation.");
    }

    $scope.getRideEstimates = function(){
        console.log("Getting ride estimates... from ("+$scope.start_lat+", "+$scope.start_long+") to ("+$scope.end_lat+", "+$scope.end_long+").");
        ComparisonService.getRideEstimates($scope.start_lat, $scope.start_long, $scope.end_lat, $scope.end_long, $scope);
    ;}
}]);
