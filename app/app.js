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
	 .when('/vehicles', {
		templateUrl: 'app/vehicles/vehicles.html', controller: 'VehiclesController'

	})
		.when('/vehicles/:vehicleId', {
	   templateUrl: 'app/vehicles/vehicles.html', controller: 'VehiclesController'

   	})
		.when('/films', {
	   templateUrl: 'app/films/films.html', controller: 'FilmsController'

	})
		.when('/films/:filmId', {
	  templateUrl: 'app/films/films.html', controller: 'FilmsController'

	})
	   .otherwise({
		   redirectTo: '/'
	   });

}
