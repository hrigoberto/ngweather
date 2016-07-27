(function(){
  angular.module('ngweather')
         .controller('MinutelyController', MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService'];

  function MinutelyController($scope, WeatherService){
    $scope.minutelyData = WeatherService.weather;


    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.minutelyData = value;
    });

  }
})();
