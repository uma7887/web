angular.module('myApp')
.controller('Q&Acontroller',function($scope, $state,qaservices) {
	var init = function init() {
	
		qaservices.getAllQuestionAndSolution(qasuccess);
		$state.go('root.home.feedquestion');
		
		
	
	};
	
	function qasuccess (qasuccessdata) {
		$scope.qa = qasuccessdata.data;
		console.log($scope.qa);
	}
	init();
	
	$scope.getSolutionByQuestionID = function getSolutionByQuestionID (questionID) {
		
		$state.go('root.home.feedsolutionforquestion', {questionID:questionID});
			
	}
	
	$scope.updateQuestionLike = function updateQuestionLike(questionLike,questionID) {
		likeaddservice.updateQuestionLike(questionLike,questionID);
		$state.go('root.home.feedquestion');
		
	}
	
	
});

