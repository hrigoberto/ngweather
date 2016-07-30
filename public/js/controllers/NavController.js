(function() {
  angular.module('ngweather')
         .controller('NavController', NavController);

  NavController.$inject = ['$scope', 'LocationService','WeatherService', 'GeoLocation'];

  function NavController($scope, LocationService, WeatherService, GeoLocation){
    // $scope.updateLocation = updateLocation;
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;
    $scope.formattedAddress = GeoLocation.formattedAddress;
    $scope.units = "F";
    $scope.changeUnits = changeUnits;
    $scope.switchUnits = switchUnits;

    function switchUnits(){
      if($scope.units === "F"){
        $scope.units === "C";
      } else {
        $scope.units === "F";
      }
    };

    function changeUnits(number, unit){
      if(unit === "C"){
        return (9/5)(number) + 32;
      } else {
        return number
      ;}
    };


    $scope.$watch(function(){
      return GeoLocation.formattedAddress;
    }, function(value){
      $scope.formattedAddress = value;
    });

    function updateHourly(location){
      console.log('Location:', location);
      GeoLocation.getLocationData(location)
                 .then(function(locationFromGoogle){
                    console.log('responseFromGoogle', locationFromGoogle);
                    var lat = locationFromGoogle.lat;
                    var lon = locationFromGoogle.lng;
                    return WeatherService.getHourlyData(lat, lon);
                  })
                 .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                  });
    };

    function updateMinutely(location){
      console.log('Location:', location);
      GeoLocation.getLocationData(location)
                 .then(function(locationFromGoogle){
                    console.log('responseFromGoogle', locationFromGoogle);
                    var lat = locationFromGoogle.lat;
                    var lon = locationFromGoogle.lng;
                    return WeatherService.getMinutelyData(lat, lon);
                 })
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    });
    };

    function updateDaily(location){
      console.log('Location:', location);
      GeoLocation.getLocationData(location)
                 .then(function(locationFromGoogle){
                   console.log('responseFromGoogle', locationFromGoogle);
                   var lat = locationFromGoogle.lat;
                   var lon = locationFromGoogle.lng;
                   return WeatherService.getDailyData(lat, lon);
                 })
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    });
    }

    // function updateLocation(latitude, longitude){
    //   LocationService.updateLocation(latitude, longitude);
    // }
  };

}());
