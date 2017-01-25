(function() {

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',

      // Firebase modules.
      'firebase',

      // Custom modules.
      'app.navbar'


    ])
    .config(configFunction);


  function configFunction($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }


})();
