(function(){
  angular.module('ngweather')
         .controller('MinutelyController', MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService', 'LocationService', 'GeoLocation'];

  function MinutelyController($scope, WeatherService, LocationService, GeoLocation){
    $scope.minutelyData = WeatherService.weather;



    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.minutelyData = value;
    });


  }
})();
