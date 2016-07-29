(function() {
  angular.module('ngweather')
         .factory('GeoLocation', GeoLocation);

  GeoLocation.$inject = ['$http'];

  function GeoLocation($http){
    var baseUrlGoogleLocation = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var service = {
      getLocationData: getLocationData,
      formattedAddress: ''
    };
    return service;

    function getLocationData(location){
      return $http.get(baseUrlGoogleLocation + location)
                  .then(function(response){
                    console.log('GeoLocation Response:', response);
                    service.formattedAddress = response.data.results[0].formatted_address;
                    return response.data.results[0].geometry.location;
                  });
    }
  };
}());
