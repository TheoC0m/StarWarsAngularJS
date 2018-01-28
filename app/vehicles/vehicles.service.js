angular.module("StarWarsAngularJS")
	.service("VehiclesService", ["$http", function($http){

		var service = {};

		service.getAllVehicles = function(pageNumber){
			return $http({
				method: "GET",
				url: "https://swapi.co/api/vehicles/?page="+pageNumber
			})
			.then(function(response){
				return response;
			})
			.catch(function(){
				return undefined;
			})
		}

		service.getVehicles = function(vehicleId){
			return $http({
				method: "GET",
				url: "https://swapi.co/api/vehicles/"+vehicleId+"/"
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
