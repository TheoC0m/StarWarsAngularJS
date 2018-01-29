angular.module('StarWarsAngularJS')
	.controller('StarshipsController', ['$scope', '$location', '$routeParams', 'StarshipsService', 'ToolsFactory',
	 function($scope, $location, $routeParams, StarshipsService, ToolsFactory){


		$scope.getAllStarships = function(){
			StarshipsService.getAllStarships($scope.pageNumber)
				.then(function(response){
					if(response != undefined){
						$scope.starships = response;
						console.log($scope.starships);
					}
				})
		}

		$scope.getStarships = function(){
			StarshipsService.getStarships($routeParams.starshipId)
				.then(function(response){
					if(response != undefined){
						$scope.starship = response;
						console.log($scope.starship);
					}
				})
		}

		$scope.searchStarships = function(){
			StarshipsService.searchStarships($scope.starshipsSearched)
				.then(function(response){
					if(response != undefined){
						console.log(response);
						console.log($scope.starshipsSearched);
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
				$scope.getAllStarships();
		}

		$scope.pageNumberDecrement = function(){
				if($scope.pageNumber > 0)
				$scope.pageNumber --;
				$scope.getAllStarships();
		}

		$scope.start = function(){
			console.log($routeParams);
			$scope.starshipsSearched = null;
			$scope.searchResult = null;
			if($routeParams.starshipId){
				$scope.starship = null;
				$scope.getStarships();

			}
			else{
				$scope.starships = null;
				$scope.pageNumber = 1;
				$scope.getAllStarships();
			}
		}

		$scope.start();

	}])
