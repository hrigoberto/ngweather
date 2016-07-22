(function(){
  angular.module('ngweather')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      template: 'home'
    })
    .when('/hourly', {
      template: 'hourly'
    })
    .when('/minutely', {
      template: 'minutely'
    })
    .when('/daily', {
      template: 'daily'
    });

    // $locationProvider.html5Mode(true);
  }
})();
