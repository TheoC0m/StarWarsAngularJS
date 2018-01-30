angular.module('StarWarsAngularJS')
	.factory('ToolsFactory', ['$http', 'FilmsService', 'VehiclesService', 'PlanetsService', 'StarshipsService',
	 function($http, FilmsService, VehiclesService, PlanetsService, StarshipsService) {
		var methods = {

			extractUrlId: function(string) {
				var tab = string.split("/");
				return tab[tab.length - 2];
			},


			getFilmUrlName: function(filmsUrlArray) {
				var filmsUrlName = [];
				angular.forEach(filmsUrlArray, function(film) {
					FilmsService.getFilms(methods.extractUrlId(film)).then(function(response) {
						if (response != undefined)
							filmsUrlName.push({
								name: response.data.title,
								url: methods.extractUrlId(response.data.url)
							});
						else
							filmsUrlName.push({
								name: "unknow",
								url: "unknow"
							});
					});
				});
				return filmsUrlName;
			},

			getVehiclesUrlName: function(vehiclesUrlArray) {
				var vechiclesUrlName = [];
				angular.forEach(vehiclesUrlArray, function(vehicle){
					VehiclesService.getVehicles(methods.extractUrlId(vehicle)).then(function(response){
						if (response != undefined)
							vechiclesUrlName.push({name: response.data.name, url: methods.extractUrlId(response.data.url)});
						else
							vechiclesUrlName.push({name: "unknow", url: "unknow"});
					});
				});
				return vechiclesUrlName;
			},


			getPlanetsUrlName: function(planetsUrlArray) {
				if(!(planetsUrlArray instanceof Array)){
					var tmp = planetsUrlArray;
					var planetsUrlArray = [tmp];
				}
				var planetsUrlName = [];
				angular.forEach(planetsUrlArray, function(planet){
					PlanetsService.getPlanets(methods.extractUrlId(planet)).then(function(response){
						if (response != undefined)
							planetsUrlName.push({name: response.data.name, url: methods.extractUrlId(response.data.url)});
						else
							planetsUrlName.push({name: "unknow", url: "unknow"});
					});
				});
				return planetsUrlName;
			},

			getStarshipsUrlName: function(starshipsUrlArray) {
				var starshipsUrlName = [];
				angular.forEach(starshipsUrlArray, function(starship){
					StarshipsService.getStarships(methods.extractUrlId(starship)).then(function(response){
						if (response != undefined)
							starshipsUrlName.push({name: response.data.name, url: methods.extractUrlId(response.data.url)});
						else
							starshipsUrlName.push({name: "unknow", url: "unknow"});
					});
				});
				return starshipsUrlName;
			},




		}
		return methods
	}])
