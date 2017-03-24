//Initialize app with all dependencies
var app = angular.module("PCHS-Webmaster", ["ngAnimate", "ngMaterial", "ngTouch", "ngRoute", "md.data.table", "jkAngularCarousel"]);

//Define routing behavior
app.config(function($routeProvider) {
	$routeProvider.when("/CTE-Program", {
		title: "CTE Program | Panther Creek High School TSA",
		templateUrl: "cteprogram.html"
	})
	.when("/TSA-Chapter", {
		title: "TSA Chapter | Panther Creek High School TSA",
		templateUrl: "tsachapter.html"
	})
	.when("/Augmented-Reality", {
		title: "Augmented Reality | Panther Creek High School TSA",
		templateUrl: "augmentedreality.html"
	})
	.otherwise({
		title: "Home | Panther Creek High School TSA",
		templateUrl: "home.html"
	});
})

.run(["$rootScope", "$route", "$mdSidenav", function($rootScope, $route, $mdSidenav) {
    $rootScope.$on("$routeChangeSuccess", function() {
    	document.body.scrollTop = 0;
        document.title = $route.current.title;
        $mdSidenav("left").close();
    });
}])

//Declare controller and its behavior
.controller("AppController", ["$scope", "$mdSidenav", "$sce", function($scope, $mdSidenav, $sce) {

	//Fired by right swipe event, opens side navigation on mobile
	$scope.openMenu = function() {
		$mdSidenav("left").open();
	}

	//Fired by left swipe event, closes side navigation on mobile
	$scope.closeMenu = function() {
		$mdSidenav("left").close();
	}

	//Converts an array of website URLs to HTML links to be displayed
	$scope.displayWebsites = function(sites) {

		var html = "";

		for (var i = 0; i < sites.length; i++) {

			if (i == sites.length - 1) {
				html += `<a href="${sites[i]}" target="_blank">${sites[i]}</a>`;
			} else {
				html += `<a href="${sites[i]}" target="_blank">${sites[i]}</a>, `;
			}
		}

		return $sce.trustAsHtml(html);
	}

	$scope.tsaImages = [

		{ src: "img/robot1.jpg" },

		{ src: "img/field.jpg" },

		{ src: "img/rankings.jpg" },

		{ src: "img/field2.jpg" },

		{ src: "img/awards.jpg" }	

	]

	$scope.teachers = [

		{
			firstName: "Maggie",
			lastName: "Banks",
			coursesTaught: "Interior Design I, Interior Design II, Principles of Family and Human Services",
			email: "mbanks2@wcpss.net",
			websites: ["http://msbanksfacs.weebly.com/"]
		},

		{
			firstName: "Thomasina",
			lastName: "Barnes",
			coursesTaught: "Multimedia and Webpage Design, Microsoft Word and Powerpoint",
			email: "tbarnes@wcpss.net",
			websites: ["http://soulstardesigns.altervista.org/parentpage.html"]
		},

		{
			firstName: "Joseph",
			lastName: "Bizzell",
			coursesTaught: "Personal Finance",
			email: "jbizzell2@wcpss.net",
			websites: ["http://josephbizzell.weebly.com/untitled.html"]
		},

		{
			firstName: "Melvin",
			lastName: "Blackwell",
			coursesTaught: "Microsoft Excel and Access, Principles of Business & Finance",
			email: "mblackwell@wcpss.net",
			websites: ["http://mrblackwellexcel.weebly.com/", "http://pcctewebsite.weebly.com/"]
		},

		{
			firstName: "Joe",
			lastName: "Busby",
			coursesTaught: "Technology Engineering and Design",
			email: "jbusby@wcpss.net",
			websites: ["http://sites.google.com/a/wcpss.net/panther-creek-technology-education/technology-engineering-design?pli=1"]
		},

		{
			firstName: "Kalpana",
			lastName: "Chudasuma",
			coursesTaught: "Computer Programming I",
			email: "kchudasuma@wcpss.net",
			websites: ["http://sites.google.com/a/wcpss.net/pchscp1/home"]
		},

		{
			firstName: "John",
			lastName: "Evans",
			coursesTaught: "Principles of Marketing, Strategic Marketing",
			email: "jevans3@wcpss.net",
			websites: ["http://sites.google.com/a/wcpss.net/mr---evans-marketing/"]
		},

		{
			firstName: "Amy",
			lastName: "Frisz-Conlon",
			coursesTaught: "Digital Media I, Digital Media II, Advanced Tech Studies",
			email: "afrisz-conlon@wcpss.net",
			websites: ["http://www.bluedesignlab.com/"]
		},

		{
			firstName: "Dana",
			lastName: "Kaushik",
			coursesTaught: "Microsoft Excel & Access, Principles of Business",
			email: "dkaushik@wcpss.net",
			websites: ["http://mrskaushikclass.weebly.com"]
		},

		{
			firstName: "Patrick",
			lastName: "Letts",
			coursesTaught: "Computer Programming I, Computer Programming II",
			email: "pletts@wcpss.net",
			websites: []
		},

		{
			firstName: "Nicole",
			lastName: "Maurakis",
			coursesTaught: "Principles of Business, Marketing",
			email: "nmaurakis@wcpss.net",
			websites: ["http://nmaurakis.weebly.com"]
		},

		{
			firstName: "Kristy",
			lastName: "McGaha",
			coursesTaught: "Business Law, Microsoft Word and Powerpoint",
			email: "kmcgaha@wcpss.net",
			websites: ["http://kmcgaha.weebly.com"]
		},

		{
			firstName: "Danielle",
			lastName: "Moore",
			coursesTaught: "Accounting 1, Microsoft Excel & Access",
			email: "dmoore6@wcpss.net",
			websites: ["http://coachmoorepchs.weebly.com/"]
		},

		{
			firstName: "Joyce",
			lastName: "Reiter",
			coursesTaught: "Apparel and Textile Production I & II, FACS Advanced Studies",
			email: "jreiter@wcpss.net",
			websites: ["http://panthercreekreiter.weebly.com"]
		},

		{
			firstName: "Denise",
			lastName: "Smith",
			coursesTaught: "Foods I",
			email: "dsmith11@wcpss.net",
			websites: ["http://foodssmith1.weebly.com"]
		},

		{
			firstName: "Amy",
			lastName: "Spruill",
			coursesTaught: "Foods I, Foods II",
			email: "aspruill@wcpss.net",
			websites: ["http://spruill-foods1.weebly.com/", "http://spruill-foods2.weebly.com/"]
		},

		{
			firstName: "Peter",
			lastName: "Styliadis",
			coursesTaught: "Microsoft Word & Powerpoint, Microsoft Excel & Access, Project Management, SAS Programming",
			email: "pstyliadis@wcpss.net",
			websites: ["http://mrstyliadis.weebly.com/"]
		},

		{
			firstName: "Anthony",
			lastName: "Sullivan",
			coursesTaught: "Sports & Entertainment Marketing I, Entrepreneurship I",
			email: "asullivan@wcpss.net",
			websites: ["http://coachsully.weebly.com"]
		},

		{
			firstName: "Shane",
			lastName: "Westhafer",
			coursesTaught: "Scientific and Technical Visualization I",
			email: "swesthafer@wcpss.net",
			websites: ["http://sites.google.com/a/wcpss.net/panther-creek-technology-education/scientific-technical-visualization"]
		},

		{
			firstName: "Chris",
			lastName: "White",
			coursesTaught: "Digital Media I",
			email: "cwhite@wcpss.net",
			websites: ["http://panthercreekdigitalmedia.com"]
		}	

	];

	$scope.advisors = [

		{
			firstName: "Joe",
			lastName: "Busby",
			email: "jbusby@wcpss.net",
			room: "1514"
		},

		{
			firstName: "Amy",
			lastName: "Frisz-Conlon",
			email: "afrisz-conlon@wcpss.net",
			room: "3511"
		},

		{
			firstName: "Shane",
			lastName: "Westhafer",
			email: "swesthafer@wcpss.net",
			room: "1516"
		},

		{
			firstName: "Chris",
			lastName: "White",
			email: "cwhite@wcpss.net",
			room: "3615"
		}

	]

	$scope.officers = [
		{
			firstName: "Surya",
			lastName: " Makthal",
			photo: "img/surya.png",
			bio:"Surya Makthal is a senior and the president of Panther Creek's TSA chapter. He enjoys playing soccer, cricket, music, and video games. He enjoys math, science, and CTE courses and hopes to study electrical engineering in college."
		},

		{
			firstName: "Nicholas",
			lastName: " Lisi",
			photo: "img/nick.png",
			bio: "Nicholas Lisi is the secretary of Panther Creek TSA's chapter. His favorite subject is math, and he is planning to major in sports managing. Some of his hobbies include fishing, basketball, and watching all sports."
		},

		{
			firstName: "Bryce",
			lastName: "Junkins",
			photo: "img/bryce.png",
			bio: "Bryce Junkins is the parlimentarian of Panther Creek TSA's chapter. He enjoys playing video game and coding. In his free time he enjoys mountain biking and watching documentaries."
		},

		{
			firstName: "Ian",
			lastName: "Holmes",
			photo: "img/ian.png",
			bio: "Ian Holmes is the sergeant-at-arms of Panther Creek TSA's chapter. He enjoys playing video games and is also the leader of the E-Sports club. In addition he enjoys running, political science, and collecting Pokemon cards."

		},

		{
			firstName: "Matthew",
			lastName: "Pinto",
			photo: "img/matthew.png",
			bio:"Matthew Pinto is the reporter of Panther Creek's TSA chapter. His favorite subjects are math and science, and he is planning to major in computer engineering. He enjoys programming, gaming, and running."

		}
	];
}]);
