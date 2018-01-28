angular.module("StarWarsAngularJS")
	.service("PlanetsService", ["$http", function($http){

		var service = {};

		service.getAllPlanets = function(pageNumber){
			return $http({
				method: "GET",
				url: "https://swapi.co/api/planets/?page="+pageNumber
			})
			.then(function(response){
				return response;
			})
			.catch(function(){
				return undefined;
			})
		}

		service.getPlanets = function(planetId){
			return $http({
				method: "GET",
				url: "https://swapi.co/api/planets/"+planetId+"/"
			})
			.then(function(response){
				return response;
			})
			.catch(function(){
				return undefined;
			})
		}


		return service;
	}])
