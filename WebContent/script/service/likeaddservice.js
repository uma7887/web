angular.module('myApp')

.service("likeaddservice", function ($http) {
		this.updateQuestionLike = function updateQuestionLike(like,questionID) {
			$scope.like += 1; 
			var questionLike = $scope.questionlike;
			var url = "http://localhost:9999/StackOverflowWeb/rest/question/updateLike?questionLike?questionID"+questionLike,questionID;
		}
	});