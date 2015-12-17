var myApp = angular.module('myApp', ['ui.router', 'myApp.templates']);

myApp.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/homepage',
			templateUrl: 'templates/home.html',
			controller: 'HomeController' 
		})
		.state('user', {
			url: '/user',
			templateUrl: 'templates/user.html',
			controller: 'UserController'
		});

	$urlRouterProvider.otherwise('/homepage');	

});