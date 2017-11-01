var myapp = angular.module("myApp",['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){

	
$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('root', {
		abstract: true,
		url:''
	})
	.state('root.home',{
		url:'/home',
		controller:'Q&Acontroller',
		templateUrl:'views/home.html'
	})
	.state('root.home.about',{
		url:'/about',
		controller:'Q&Acontroller',
		templateUrl:'views/about.html'
	})
	.state('root.home.feedquestion',{
		url:'/feedquestion',
		controller:'Q&Acontroller',
		templateUrl:'views/feedquestion.html'
	})
	.state('root.home.feedsolutionforquestion',{
		url:'/feedsolutionforquestion/:questionID',
		controller:'AnsController',
		templateUrl:'views/feedsolutionforquestion.html'
	})
	.state('root.home.userAddQuestion',{
		url:'/userAddQuestion',
		controller:'homePageControl',
		templateUrl:'views/userAddQuestion.html'	
	})
	
	.state('root.home.userAddSolution',{
		url:'/userAddSolution',
		controller:'homePageControl',
		templateUrl:'views/userAddSolution.html'	
	})
	.state('root.home.login', {
		url:'/login',
		templateUrl:'views/login.html',
		controller:'loginPageControl'
	})
	
	.state('root.home.signup', {
		url:'/login',
		templateUrl:'views/signup.html',
		controller:'signUpPageControl'
	})
	
	.state('root.home.profile',{
		url:'/profile',
		templateUrl:'views/profile.html',
		controller:'profileController'
			  
	})
	
	.state('root.dashBoard.profile.question',{
		url:'/question',
		templateUrl:'views/question.html',
		controller:'questionController'
	})
	
	.state('root.dashBoard.profile.solution',{
		url:'/solution/:id',
		templateUrl:'views/brands.html',	
		controller:'brandCtrl'
	})
	
	.state('root.dashBoard.jobPost',{
		url:'/jobPost',
		templateUrl:'views/jobPost.html',
		controller:'jobPostController'
	})
	
	
	.state('root.dashBoard.jobDescription',{
		url:'/jobDescription',
		templateUrl:'views/jobDescription.html',
		controller:'jobDespController'
		
	})
})