(function() {
  angular.module('ngweather')
         .controller('NavController', NavController);

  NavController.$inject = ['$scope', '$cookies', 'WeatherService'];

  function NavController($scope, $cookies, WeatherService)
      var locationCookie = $cookies.latlon;

      function updateLocation(latitude, longitude){
        $cookies.latlon
      }
}());
