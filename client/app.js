
/*The angular.module is a global place for creating, registering and retrieving AngularJS modules. 
All modules (AngularJS core or 3rd party) that should be available to an application must be 
registered using this mechanism.*/

//The first argument is the name of the module (in this case Instagram)
//and the second argument is an array of module dependencies(in this case ngRoute and ngMessages)
angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
	.config(function($routeProvider, $authProvider) {
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
			.when('/signup', {
				templateUrl: 'views/signup.html',
				controller: 'SignupCtrl'
			})
			//id tells it is a unique reference to a photo id
			.when('/photo/:id', {
				templateUrl: 'views/detail.html',
				controller: 'DetailCtrl'
			})
			.otherwise('/');

			//Oauth provider for instagram
			$authProvider.loginUrl = 'http://localhost:3000/auth/login';
			$authProvider.signupUrl = 'http://localhost:3000/auth/signup';
			$authProvider.oauth2({
				name: 'instagram',
				url: 'http://localhost:3000/auth/instagram',
  				redirectUri: 'http://localhost:8000',
  				clientId: '60b9e82ab4b44798af16c8ddf8eaf62c',
				requiredUrlParams: ['scope'],
				scope: ['likes'],
				scopeDelimiter: '+',
				authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
			});
	});	