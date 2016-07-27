(function(){
  angular.module('ngweather')
         .controller('DailyController', DailyController)

  DailyController.$inject = ['$scope','WeatherService'];

  function DailyController($scope, WeatherService){
    $scope.dailyData = WeatherService.weather;


    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.dailyData = value;
    });

  }
})();
