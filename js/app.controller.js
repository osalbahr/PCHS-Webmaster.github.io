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

		{ src: "img/vex/1.jpg" },

		{ src: "img/vex/2.jpg" },

		{ src: "img/vex/3.jpg" },

		{ src: "img/vex/4.jpg" },

		{ src: "img/vex/5.jpg" }	

	];

	$scope.cteImages = [

		{ src: "img/school/1.jpg" },

		{ src: "img/school/2.jpg" },

		{ src: "img/school/3.jpg" },

		{ src: "img/school/4.jpg" },

		{ src: "img/school/5.jpg" }

	];

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

	];

	$scope.officers = [
		{
			firstName: "Surya",
			lastName: " Makthal",
			photo: "img/officers/surya.png",
			bio:"Surya Makthal is a senior and the president of Panther Creek's TSA chapter. He enjoys playing soccer, cricket, music, and video games. He enjoys math, science, and CTE courses and hopes to study electrical engineering in college."
		},

		{
			firstName: "Nicholas",
			lastName: " Lisi",
			photo: "img/officers/nick.png",
			bio: "Nicholas Lisi is the secretary of Panther Creek TSA's chapter. His favorite subject is math, and he is planning to major in sports managing. Some of his hobbies include fishing, basketball, and watching all sports."
		},

		{
			firstName: "Bryce",
			lastName: "Junkins",
			photo: "img/officers/bryce.png",
			bio: "Bryce Junkins is the parlimentarian of Panther Creek TSA's chapter. He enjoys playing video game and coding. In his free time he enjoys mountain biking and watching documentaries."
		},

		{
			firstName: "Ian",
			lastName: "Holmes",
			photo: "img/officers/ian.png",
			bio: "Ian Holmes is the sergeant-at-arms of Panther Creek TSA's chapter. He enjoys playing video games and is also the leader of the E-Sports club. In addition he enjoys running, political science, and collecting Pokemon cards."

		},

		{
			firstName: "Matthew",
			lastName: "Pinto",
			photo: "img/officers/matthew.png",
			bio:"Matthew Pinto is the reporter of Panther Creek's TSA chapter. His favorite subjects are math and science, and he is planning to major in computer engineering. He enjoys programming, gaming, and running."

		}
	];

	$scope.courseInfo = [
		{
			name: "MSITA: Word and PowerPoint",
			info: "Students enrolled in Microsoft IT Academy courses benefit from the use of world-class Microsoft curriculum and software tools to tackle real-world challenges in the classroom and have the opportunity to apply their skills and knowledge to earn industry-recognized credentials. In this course, students will learn to use the latest versions of Microsoft Word and Microsoft PowerPoint to create, enhance, customize, share, and deliver complex documents and presentations, such as those used in business and industry. Microsoft Publisher, OneNote, and Outlook are supplemental competencies for this course. Students enrolled in this course are expected to take the Microsoft Office Specialist (MOS) certification exam for Microsoft Word and Microsoft PowerPoint."
		},

		{
			name: "MSITA: Excel and Access",
			info: "Students enrolled in Microsoft IT Academy courses benefit from the use of world-class Microsoft curriculum and software tools to tackle real-world challenges in the classroom and have the opportunity to apply their skills and knowledge to earn industry-recognized credentials. In this course, students will learn to use the latest versions of Microsoft Excel to analyze, manipulate, and present various types of data and Microsoft Access to create, modify, and locate information, as well as how to create programmable elements and share and distribute database information. Students enrolled in this course are expected to take the Microsoft Office Specialist (MOS) certification exam for Microsoft Excel and Microsoft Access."
		},

		{
			name: "Computer Programming I",
			info: "This course is designed to introduce the concepts of programming, application development, and writing software solutions in the Visual Studio environment. Emphasis is placed on the software development process, principles of user interface design, and the writing of a complete Visual Basic program including obtaining and validating user input, logical decision making and processing, graphics, and useful output."
		},

		{
			name: "Computer Programming II (H)",
			info: "This Honors-level course is designed to teach students advanced programming concepts. Including class structures, multimedia programming, advanced arrays, and file structures. Students will apply course concepts through the development of XNA Game Studio computer games. Students that successfully complete this course will earn Honors credit. Students will be expected to take and pass the appropriate industry certification exam associated with the course, if available."
		},

		{
			name: "Principles of Business & Finance",
			info: "This course introduces students to topics related to business, finance, management, and marketing to cover business in the global economy, functions of business organization and management, marketing basics, and significance of business financial and risk management."
		},

		{
			name: "Technology Engineering & Design",
			info: "This course focuses on the nature and core concepts of technology, engineering, and design. Through engaging activities and hands-on project-based activities, students are introduced to the following concepts: elements and principles of design, basic engineering, problem solving, and teaming. Students apply research and development skills and produce physical and virtual models."
		},

		{
			name: "Scientific and Technical Visualization I",
			info: "This course introduces students to the use of complex graphic tools. Emphasis is placed on the principles, concepts, and use of complex graphic and visualization tools as applied to the study of science and technology. Students use complex 2D graphics, animation, editing, and image analysis tools to better understand, illustrate, explain, and present technical, mathematical, and/or scientific concepts and principles. Emphasis is placed on the use of computer-enhanced images to generate both conceptual and data-driven models, data-driven charts and animations."
		},

		{
			name: "Digital Media",
			info: "This course provides students with industry knowledge and skills in the overall digital media design field. Areas covered in these two courses include graphics, animation, video, and web design. Industry certifications are used to align curriculum with industry needs. An emphasis is placed on the concepts of graphic design, various digital media technologies, non-linear editing, product development and design, and career development."
		},

		{
			name: "Principles of Family & Human Services",
			info: "Students learn core functions of the human services field; individual, family, and community systems; and life literacy skills for human development. Emphasis is placed on professional skills, human ecology, diversity, analyzing community issues, and life management skills. Activities engage students in exploring various helping professions, while building essential life skills they can apply in their own lives to achieve optimal wellbeing."
		},

		{
			name: "Apparel I",
			info: "In this course students are introduced to clothing production in the areas of preparation for clothing construction, basic clothing construction techniques, consumer decisions, textiles, historical perspectives and design, and career opportunities. Emphasis is placed on students applying these construction and design skills to apparel and home fashion."
		},

		{
			name: "Apparel II",
			info: "In this course students are introduced to advanced clothing and housing apparel development skills. The use of fibers and fabrics is combined with design and construction techniques to develop and produce clothing or housing apparel products."
		},

		{
			name: "Marketing",
			info: "In this course, students develop an understanding of the processes involved from the creation to the consumption of products/services. Students develop an understanding and skills in the areas of distribution, marketing-information management, market planning, pricing, product/service management, promotion, and selling. Students develop an understanding of marketing functions applications and their impact on business operations."
		},

		{
			name: "Sports & Entertainment Marketing I",
			info: "In this course, students are introduced to the industry of sports, entertainment, and event marketing. Students acquire transferable knowledge and skills among related industries for planning sports, entertainment, and event marketing. Topics included are branding, licensing, and naming rights; business foundations; concessions and on-site merchandising; economic foundations; human relations; and safety and security."
		},

		{
			name: "Sports & Entertainment Marketing II (H)",
			info: "In this course, students acquire an understanding of sports, entertainment, and event marketing. Emphasis is on business management, career development, client relations, contracts, ethics, event management, facilities management, legal issues, and sponsorships."
		},

		{
			name: "Entrepreneurship I (H)",
			info: "In this course students evaluate the concepts of going into business for themselves and working for or operating a small business. Emphasis is on the exploration of feasible ideas of products/services, research procedures, business financing, marketing strategies, and access to resources for starting a small business. Students develop components of a business plan and evaluate startup requirements."
		},

		{
			name: "Strategic Marketing (H)",
			info: "This fast-paced course challenges students by combining into one course the content taught in the Marketing and Marketing Management courses. The curriculum, activities, and resources utilized in this course are written at the freshman college level. The Strategic Marketing course focuses on the impact of marketing on society, procedures used in buying behavior, procedures to manage marketing information, procedures to develop and manage products, pricing procedures, promotion, marketing channels, supply chain management, retail operations, and global marketing."
		},

		{
			name: "Multimedia & Webpage Design",
			info: "This course focuses on desktop publishing, graphic image design, computer animation, virtual reality, multimedia production, and webpage design. Communication skills and critical thinking are reinforced through software applications."
		},

		{
			name: "SAS Programming I (H)",
			info: "This course is the entry point for students to learn SAS programming. Students will learn how to plan and write SAS programs to solve common data analysis problems. Instruction provides practice running and debugging programs. The emphasis is placed on reading input data, creating list and summary reports, defining new variables, executing code conditionally, reading raw data files and SAS data sets, and writing the results to SAS data sets."
		},

		{
			name: "Advanced Digital Media",
			info: "This course provides students with industry knowledge and skills in the overall digital media design field. Areas covered in these two courses include graphics, animation, video, and web design. An emphasis is placed on the fundamental concepts of graphic design, various digital media technologies, non-linear editing, product development and design, and career development."
		},

		{
			name: "Accounting I",
			info: "This course is designed to help students understand the basic principles of the accounting cycle. Emphasis is placed on the analysis and recording of business transactions, preparation, and interpretation of financial statements, accounting systems, banking and payroll activities, basic types of business ownership, and an accounting career orientation."
		},

		{
			name: "Accounting II (H)",
			info: "This honors-level course is designed to provide students with an opportunity to develop in-depth knowledge of accounting procedures and techniques utilized in solving business problems and making financial decisions.  Emphasis includes departmental accounting, corporate accounting, cost accounting, and inventory control systems, managerial accounting and budgeting, and further enhancement of accounting skills."
		},

		{
			name: "Project Management",
			info: "This course will introduce students to the principles, concepts, and software applications used in the management of projects. Through project-based learning, students will understand how to use the framework of initiating, planning, executing, monitoring and controlling, and closing a project in authentic situations."
		},
		
		{
			name: "Scientific and Technical Visualization II (H)",
			info: "This course provides students with advanced skills in the use of complex visualization tools for the study of science, technology, or mathematical concepts. Students design and develop increasingly complex data and concept-driven visualization models. Students use complex 2D and 3D graphics, animation, editing, and image analysis tools to better understand, illustrate, and explain concepts."
		},
		
		{
			name: "Game Art Design",
			info: "This course introduces students to techniques used in the electronic game industry. Students will focus on the principles used in game design including mathematical and virtual modeling. Emphasis is placed on areas related to art, history, ethics, plot development, storyboarding, programming, 2D visual theory, and interactive play technologies. Students develop physical and virtual games using hands-on experiences and a variety of software."
		},
		
		{
			name: "Advanced Game Art Design",
			info: "This course is a continuation in the study of game design and interactivity. Emphasis is placed on visual design, evaluating, scripting and networking protocols, and legal issues as well as 3D visual theory. Students compile a game portfolio. Advanced topics include the use of audio and visual effects, rendering, modeling, and animation techniques. Students work in collaborative teams to develop a final 3D game project."
		},
		
		{
			name: "Foods I",
			info: "This course examines the nutritional needs of the individual. Emphasis is placed on the relationship of diet to health, kitchen and meal management, food preparation and sustainability for a global society, and time and resource management."
		},
		
		{
			name: "Foods II Enterprise",
			info: "This course focuses on advanced food preparation techniques while applying nutrition, food science, and test kitchen concepts using new technology. Food safety and sanitation receive special emphasis, with students taking the exam for a nationally recognized food safety credential.  Students develop skills in preparing foods such as beverages, salads and dressing, yeast breads, and cake fillings and frostings. A real or simulated in-school food business component allows students to apply instructional strategies."
		},
		
		{
			name: "Personal Finance",
			info: "This course prepares students to understand economic activities and challenges of individuals and families, the role of lifestyle goals in education and career choices, procedures in a successful job search, financial forms used in independent living, and shopping options and practices for meeting consumer needs. The course also prepares students to understand consumer rights, responsibilities, and information, protect personal and family resources, and apply procedures for managing personal finances."
		},
		
		{
			name: "Business Law",
			info: "This course is designed to acquaint students with the basic legal principles common to all aspects of business and personal law.  Business topics include contract law, business ownership including intellectual property, financial law, and national and international laws. Personal topics include marriage and divorce law, purchasing appropriate insurance, renting and owning real estate, employment law, and consumer protection laws."
		},
		
		{
			name: "Interior Design",
			info: "This course focuses on housing needs and options of individuals and families at various stages of the life cycle.  Emphasis is placed on selecting goods and services and creating functional, pleasing living environments using sound financial decisions and principles of design. Topics of study include elements and principles of design, backgrounds and furnishings, architectural styles and features, and functional room design."
		},
		
		{
			name: "Interior Design II",
			info: "This course prepares students for entry-level and technical work opportunities in the residential and non-residential interior design fields.  Students deepen their understanding of design fundamentals and theory by designing interior plans to meet living space needs of specific individuals or families.  Topics include application of design theory to interior plans and production, selection of materials, and examination of business procedures."
		},
		
		{
			name: "AP Computer Science",
			info: "This is a college-level introductory course in computer science. Because the design and implementation of computer programs to solve problems involves skills that are fundamental to the study of computer science, a large part of the course is built around the development of computer programs that correctly solve a given problem. These programs should be understandable, adaptable, and when appropriate, reusable. At the same time, the design and implementation of computer programs is used as a context for introducing other important aspects of computer science, including the development and analysis of algorithms, the development and use of fundamental data structures, the study of standard algorithms and typical applications, and the use of logic and formal methods. In addition, the responsible use of these systems is an integral part of the course."
		},
		
		{
			name: "AP Computer Science Principles",
			info: "This course is an introduction to the principles of computer science, including the history, social implications, and future of computing and how computing empowers discovery and progress in other fields. The relevance of computing to the student and society will be emphasized. Students will learn the joy of programming a computer using a friendly, graphical language, and will complete a substantial team programming project related to their interests."
		}

	];



}]);
