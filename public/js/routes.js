(function(){
  angular.module('ngweather')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    var baseFolder = "/html/views/"
    $routeProvider
    .when('/', {
      templateUrl: baseFolder + 'home.html'
    })
    .when('/hourly', {
      templateUrl: baseFolder + 'hourly.html',
      controller: 'HourlyController'
    })
    .when('/minutely', {
      templateUrl: baseFolder + 'minutely.html',
      controller: 'MinutelyController'
    })
    .when('/daily', {
      templateUrl: baseFolder + 'daily.html',
      controller: 'DailyController'
    })
    .otherwise({
      redirectTo: '/'
    });

    // $locationProvider.html5Mode(true);
  }
})();
