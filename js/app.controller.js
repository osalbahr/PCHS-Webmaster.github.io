//Initialize app with all dependencies
var app = angular.module('PCHS-Webmaster', ['ngAnimate', 'ngMaterial', 'ngTouch']);
//Declare controller and its behavior
app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

		//Fired by left swipe event, opens side navigation on mobile
		$scope.openMenu = function() {
			$mdSidenav("left").open();
		}

		//Fired by right swipe event, closes side navigation on mobile
		$scope.closeMenu = function() {
			$mdSidenav("left").close();
		}

	}]);
