(function(){
  angular.module('ngweather')
         .controller('HourlyController', HourlyController)

  HourlyController.$inject = ['$scope','WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.seeWeather = seeWeather;

    function seeWeather(){
      $scope.weather = WeatherService.weather;
      $scope.latitude = WeatherService.weather.latitude;
      $scope.longitude = WeatherService.weather.longitude;
      $scope.hourly = WeatherService.weather.hourly;
      console.log($scope.longitude,$scope.hourly);
    }

  }
})();
