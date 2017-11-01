angular.module('myApp')
.service("qaservices", function ($http)
	{
			this.getAllQuestionAndSolution = function getAllQuestionAndSolution(qasuccess){
				var url = "http://localhost:9999/StackOverflowWeb/rest/question/getAllQuestion";
				$http.get(url).then(qasuccess,function(error) {
					return (error);
				});
			}
			
	});
	

