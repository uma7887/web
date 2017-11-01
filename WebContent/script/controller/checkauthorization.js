angular.module('myApp')
.controller('checkauthorization', function($scope, $http, $state, authservices) {
	authservice.getAuthorization(loginsuccess);
	$state.go('root.home.feedsolution');
	
	function loginsuccess (loginsuccess) {
		$scope.loginsuccessdata  = loginsuccess;
		
	}
});