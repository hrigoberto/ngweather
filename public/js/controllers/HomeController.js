(function(){
  angular.module('ngweather')
         .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$cookies', 'WeatherService'];

  function HomeController($scope, $cookies, WeatherService){
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;
    $scope.weather = WeatherService.weather
    // $scope.latitude = ;
    // $scope.longitude = -82;

    function updateHourly(latitude, longitude){
      WeatherService.getHourlyData(latitude, longitude)
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    })
    }
    function updateMinutely(latitude, longitude){
      WeatherService.getMinutelyData(latitude, longitude)
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    });
    }
    function updateDaily(latitude, longitude){
      WeatherService.getDailyData(latitude, longitude)
                    .then(function(){
                      $scope.weather = WeatherService.weather;
                      console.log($scope.weather);
                    });
    }
  }
})();
