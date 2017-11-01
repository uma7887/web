angular.module('myApp')
.controller('AnsController',function($scope,$http,$state) {
	$scope.ans = {};
	$scope.questionID = {};
	$scope.questionID = $state.params.questionID;
	console.log($scope.questionID );
	getSolutionByQuestionID();
	function getSolutionByQuestionID(){
		var url = "http://localhost:9999/StackOverflowWeb/rest/solution/getSolutionByQuestionID?questionID="+$scope.questionID;
		$http.get(url)
		.success(function(response) {
			var a =response.data;
			$scope.ans= response;
	});
	}
	
	
});
