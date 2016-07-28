(function() {
  angular.module('ngweather')
         .controller('NavController', NavController);

  NavController.$inject = ['$scope', 'LocationService','WeatherService'];

  function NavController($scope, LocationService, WeatherService){
    // $scope.updateLocation = updateLocation;
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;

    function updateHourly(latitude, longitude){
      WeatherService.getHourlyData(latitude, longitude)
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    })
    };

    function updateMinutely(latitude, longitude){
      WeatherService.getMinutelyData(latitude, longitude)
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    });
    };

    function updateDaily(latitude, longitude){
      WeatherService.getDailyData(latitude, longitude)
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
