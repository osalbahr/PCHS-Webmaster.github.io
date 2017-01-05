angular.module('PCHS-Webmaster', ['ngAnimate', 'ngMaterial'])
	.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

		$scope.openMenu = function() {
			$mdSidenav("left").open();
		}

		$scope.closeMenu = function() {
			$mdSidenav("left").close();
		}

	}]);
