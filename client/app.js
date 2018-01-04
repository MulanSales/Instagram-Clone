
/*The angular.module is a global place for creating, registering and retrieving AngularJS modules. 
All modules (AngularJS core or 3rd party) that should be available to an application must be 
registered using this mechanism.*/

//The first argument is the name of the module (in this case Instagram)
//and the second argument is an array of module dependencies(in this case ngRoute and ngMessages)
angular.module('Instagram', ['ngRoute', 'ngMessages'])
	.config(function($routeProvider) {
		$routeProvider
		/*when**() method above takes a relative URL path as its first argument and an object as 
		its second argument. When we visit the index route "/"Angular will load home.html from 
		the views directory and make HomeCtrl** controller available to that template.*/
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/signuṕ', {
				templateUrl: 'views/signuṕ.html',
				controller: 'SignupCtrl'
			})
			//id tells it is a unique reference to a photo id
			.when('/photo/:id', {
				templateUrl: 'views/detail.html',
				controller: 'DetailCtrl'
			})
			.otherwise('/');
	});	