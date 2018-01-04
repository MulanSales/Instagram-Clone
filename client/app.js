
/*The angular.module is a global place for creating, registering and retrieving AngularJS modules. 
All modules (AngularJS core or 3rd party) that should be available to an application must be 
registered using this mechanism.*/

//The first argument is the name of the module (in this case Instagram)
//and the second argument is an array of module dependencies(in this case ngRoute and ngMessages)
angular.module('Instagram', ['ngRoute', 'ngMessages'])
	.config(function($routeProvider)) {

	});
