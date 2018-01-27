var app = angular.module('StarWarsAngularJS', ['ngRoute']);

app.config(config);
config.$inject = ['$routeProvider'];
function config($routeProvider){

	$routeProvider
	   .when('/', {
		   templateUrl: 'app/home/home.html', controller: 'HomeController'

	   })
	   .otherwise({
		   redirectTo: '/'
	   });

}
