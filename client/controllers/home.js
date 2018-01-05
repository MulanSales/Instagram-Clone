angular.module('Instagram')
	.controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {

		$scope.isAuthenticated = function(){
			return $auth.isAuthenticated();
		};

		$scope.linkInstagram = function(){
			$auth.link('instagram')
			.then(function(response) {
				//Convert a JavaScript object into a string with JSON.stringify()
				$window.localStorage.currentUser = JSON.stringfy(response.data.user);
				//Parse the data with JSON.parse(), and the data becomes a JavaScript object
				$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
			});
		};
	});