(function(){
  angular.module('ngweather')
         .controller('DailyController', DailyController)

  DailyController.$inject = ['$scope','WeatherService'];

  function DailyController(){
    $scope.dailyData = WeatherService.weather;


    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });

  }
})();
