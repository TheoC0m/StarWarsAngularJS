var app = angular.module('StarWarsAngularJS', ['ngRoute']);

app.config(config);
config.$inject = ['$routeProvider'];
function config($routeProvider){

	$routeProvider

	   .when('/', {
		   templateUrl: 'app/home/home.html', controller: 'HomeController'

	   })
	   .when('/people', {
		  templateUrl: 'app/people/people.html', controller: 'PeopleController'

	  })
	  .when('/people/:peopleId', {
		 templateUrl: 'app/people/people.html', controller: 'PeopleController'

	 })
	   .otherwise({
		   redirectTo: '/'
	   });

}
