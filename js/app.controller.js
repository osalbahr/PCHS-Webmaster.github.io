var app = angular.module('PCHS-Webmaster', ['ngAnimate', 'ngMaterial', 'ngTouch'])
app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

		$scope.openMenu = function() {
			$mdSidenav("left").open();
		}

		$scope.closeMenu = function() {
			$mdSidenav("left").close();
		}

	}]);
