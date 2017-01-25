(function() {

  angular
    .module('app.navbar')
    .directive('mvNavbar', mvNavbar);

  function mvNavbar() {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'E',
	  //Add controllers method if there any assoicate with it
	  controller: NavbarController

    };
  }

  function NavbarController($firebaseObject, $scope, $rootScope, $location, $sce) {



  }


})();
