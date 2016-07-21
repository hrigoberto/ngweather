(function(){
  angular.module('ngweather')
         .controller('SimpleController', SimpleController)

  SimpleController.$inject = ['$scope'];

  function SimpleController($scope){
    $scope.message = 'Yooo';
  };

})();
