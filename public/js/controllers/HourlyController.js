(function(){
  angular.module('ngweather')
         .controller('HourlyController', HourlyController)

  HourlyController.$inject = ['$scope','WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.seeWeather = seeWeather;

    function seeWeather(){
      console.log(WeatherService.weather);
    }

  }
})();
