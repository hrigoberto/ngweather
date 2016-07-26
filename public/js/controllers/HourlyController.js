(function(){
  angular.module('ngweather')
         .controller('HourlyController', HourlyController)

  HourlyController.$inject = ['$scope','WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be a light drizzle',
      'Partly Cloudy': 'It will be partly cloudy',
      'Light Rain': 'There will be light rain',
      'Rain': 'There will be rain',
      'Clear': 'Clear skies'
    };

    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });

  }
})();
