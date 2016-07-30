(function(){
  angular.module('ngweather')
         .controller('HourlyController', HourlyController)

  HourlyController.$inject = ['$scope','WeatherService', 'LocationService', 'GeoLocation'];

  function HourlyController($scope, WeatherService, LocationService, GeoLocation){
    $scope.hourlyData = WeatherService.weather;
    $scope.latitude = LocationService.latStore
    $scope.longitude = LocationService.lonStore;
    $scope.summaryLookup = {
      'Drizzle': 'There will be a light drizzle',
      'Partly Cloudy': 'It will be partly cloudy',
      'Light Rain': 'There will be light rain',
      'Rain': 'There will be rain',
      'Clear': 'Clear skies'
    };
    $scope.changeUnits = changeUnits;
    $scope.unit = WeatherService.units


    function changeUnits(number, unit){
        if(WeatherService.units === "C"){
          return (9/5)(number) + 32;
        } else {
          return number;
        }
      };

    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });



  }
})();
