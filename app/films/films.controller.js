angular.module('StarWarsAngularJS')
	.controller('FilmsController', ['$scope', '$location', '$routeParams', 'FilmsService', 'ToolsFactory',
	 function($scope, $location, $routeParams, FilmsService, ToolsFactory){


		$scope.getAllFilms = function(){
			FilmsService.getAllFilms($scope.pageNumber)
				.then(function(response){
					if(response != undefined){
						$scope.films = response;
						console.log($scope.films);
					}
				})
		}

		$scope.getFilms = function(){
			FilmsService.getFilms($routeParams.filmId)
				.then(function(response){
					if(response != undefined){
						$scope.film = response;
						console.log($scope.film);
					}
				})
		}

		$scope.extractUrlId = function(string){
			return ToolsFactory.extractUrlId(string);
		}

		$scope.pageNumberIncrement = function(){
				$scope.pageNumber ++;
				$scope.getAllFilms();
		}

		$scope.pageNumberDecrement = function(){
				if($scope.pageNumber > 0)
				$scope.pageNumber --;
				$scope.getAllFilms();
		}

		$scope.start = function(){
			console.log($routeParams);

			$scope.characterName = [];
			if($routeParams.filmId){
				$scope.film = null;
				$scope.getFilms();

			}
			else{
				$scope.films = null;
				$scope.pageNumber = 1;
				$scope.getAllFilms();
			}
		}

		$scope.start();

	}])
