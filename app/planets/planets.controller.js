angular.module('StarWarsAngularJS')
	.controller('PlanetsController', ['$scope', '$location', '$routeParams', 'PlanetsService', 'ToolsFactory',
	 function($scope, $location, $routeParams, PlanetsService, ToolsFactory){


		$scope.getAllPlanets = function(){
			PlanetsService.getAllPlanets($scope.pageNumber)
				.then(function(response){
					if(response != undefined){
						$scope.planets = response;
						console.log($scope.planets);
					}
				})
		}

		$scope.getPlanets = function(){
			PlanetsService.getPlanets($routeParams.planetId)
				.then(function(response){
					if(response != undefined){
						$scope.planet = response;
						console.log($scope.planet);
					}
				})
		}

		$scope.searchPlanets = function(){
			PlanetsService.searchPlanets($scope.planetsSearched)
				.then(function(response){
					if(response != undefined){
						console.log(response);
						console.log($scope.planetsSearched);
						$scope.searchResult = response;
					}
				})
		}

		$scope.extractUrlId = function(string){
			return ToolsFactory.extractUrlId(string);
		}

		// $scope.extractUrlId = function(string){
		// 	var tab = string.split("/");
		// 	return tab[tab.length - 2];
		// }

		$scope.pageNumberIncrement = function(){
				$scope.pageNumber ++;
				$scope.getAllPlanets();
		}

		$scope.pageNumberDecrement = function(){
				if($scope.pageNumber > 0)
				$scope.pageNumber --;
				$scope.getAllPlanets();
		}

		$scope.start = function(){
			console.log($routeParams);
			$scope.planetsSearched = null;
			$scope.searchResult = null;
			if($routeParams.planetId){
				$scope.planet = null;
				$scope.getPlanets();

			}
			else{
				$scope.planets = null;
				$scope.pageNumber = 1;
				$scope.getAllPlanets();
			}
		}

		$scope.start();

	}])
