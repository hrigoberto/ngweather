(function(){
  angular.module('ngweather')
         .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var passphrase = 'i like cheese and bacon and some other things too';
    var baseUrl = 'https://quiet-bayou-88937.herokuapp.com/';
    var config = {
      headers: {
        'passphrase': passphrase
      }
    };
    var service = {
      getHourlyData: getHourlyData,
      getMinutelyData: getMinutelyData,
      getDailyData: getDailyData,
      weather: {}
    };
    return service;



    function getHourlyData(lat, lon){
      var url = baseUrl + 'forecast/hourly/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather, "UpdateHourly");
                  });
    }

    function getMinutelyData(lat, lon){
      var url = baseUrl + 'forecast/Minutely/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather);
                  });
    }

    function getDailyData(lat, lon){
      var url = baseUrl + 'forecast/Daily/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather);
                  });
    }
  };
})();
