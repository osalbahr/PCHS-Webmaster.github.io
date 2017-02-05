//Initialize app with all dependencies
var app = angular.module("PCHS-Webmaster", ["ngAnimate", "ngMaterial", "ngTouch", "ngRoute"]);

//Define routing behavior
app.config(function($routeProvider) {
	$routeProvider.when("/cteprogram", {
		title: "CTE Program | Panther Creek High School TSA",
		templateUrl: "cteprogram.html"
	})
	.when("/tsachapter", {
		title: "TSA Chapter | Panther Creek High School TSA",
		templateUrl: "tsachapter.html"
	})
	.when("/augmentedreality", {
		title: "Augmented Reality | Panther Creek High School TSA",
		templateUrl: "augmentedreality.html"
	})
	.otherwise({
		title: "Home | Panther Creek High School TSA",
		templateUrl: "home.html"
	});
})

.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}])

//Declare controller and its behavior
.controller("AppController", ["$scope", "$mdSidenav", function($scope, $mdSidenav) {

	//Fired by left swipe event, opens side navigation on mobile
	$scope.openMenu = function() {
		$mdSidenav("left").open();
	}

	//Fired by right swipe event, closes side navigation on mobile
	$scope.closeMenu = function() {
		$mdSidenav("left").close();
	}

}])
