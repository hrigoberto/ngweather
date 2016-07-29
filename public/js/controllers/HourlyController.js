(function(){
  angular.module('ngweather')
         .controller('HourlyController', HourlyController)

  HourlyController.$inject = ['$scope','WeatherService', 'LocationService', 'GeoLocation'];

  function HourlyController($scope, WeatherService, LocationService, GeoLocation){
    $scope.hourlyData = WeatherService.weather;
    $scope.latitude = LocationService.latStore
    $scope.longitude = LocationService.lonStore;
    $scope.formattedAddress = GeoLocation.formattedAddress;
    $scope.summaryLookup = {
      'Drizzle': 'There will be a light drizzle',
      'Partly Cloudy': 'It will be partly cloudy',
      'Light Rain': 'There will be light rain',
      'Rain': 'There will be rain',
      'Clear': 'Clear skies'
    };


    $scope.$watch(function(){
      console.log("value:", value);
      $scope.hourlyData = value;
    })
    $scope.$watch(function(){
      return GeoLocation.formattedAddress;
    }, function(value){
      $scope.formattedAddress = value;
    });

  }
})();
