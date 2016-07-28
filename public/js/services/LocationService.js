(function() {
  angular.module('ngweather')
         .factory('LocationService', LocationService)

  LocationService.$inject = [];

  function LocationService(){
    var service = {
      updateLocation: updateLocation,
      latStore: {},
      lonStore: {}
    };
    return service;

    function updateLocation(latitude, longitude){
      service.latStore = latitude;
      service.lonStore = longitude;
      console.log(service.latStore);
      console.log(service.lonStore);
    };



  }
}());
