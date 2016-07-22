(function(){
  angular.module('ngweather')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    var baseFolder = "/html/views/"
    $routeProvider
    .when('/', {
      templateUrl: baseFolder + 'home.html',
      controller: 'HomeController'
    })
    .when('/hourly', {
      templateUrl: baseFolder + 'hourly.html'
    })
    .when('/minutely', {
      templateUrl: baseFolder + 'minutely.html'
    })
    .when('/daily', {
      templateUrl: baseFolder + 'daily.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    // $locationProvider.html5Mode(true);
  }
})();
