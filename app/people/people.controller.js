angular.module('StarWarsAngularJS')
	.controller('PeopleController', ['$scope', '$location', '$routeParams', 'PeopleService', 'ToolsFactory',
	 function($scope, $location, $routeParams, PeopleService, ToolsFactory){


		$scope.getAllPeople = function(){
			PeopleService.getAllPeople($scope.pageNumber)
				.then(function(response){
					if(response != undefined){
						$scope.peoples = response;
						console.log($scope.peoples);
					}
				})
		}

		$scope.getPeople = function(){
			PeopleService.getPeople($routeParams.peopleId)
				.then(function(response){
					if(response != undefined){

						$scope.people = response;
						console.log($scope.people);
						$scope.addFilmTitles();
					}
				})
		}

		$scope.addFilmTitles = function(){
			//filmArray = $scope.people.data.films

			console.log("filmarray avant: "+$scope.people.data.films);

			//pour chaque film du personnage
			for(var i = 0; i < $scope.people.data.films.length; i++){
				var ftitle = ToolsFactory.getFilmName($scope.extractUrlId($scope.people.data.films[i]))
					.then(function(filmTitle){
						if (filmTitle != undefined){


							console.log("filmName :"+filmTitle);
							title = filmTitle;
							$scope.people.data.films[i] = {'url': $scope.people.data.films[i], 'title': ftitle};

								console.log($scope.people.data.films[i]);

						}
				});

			}
			console.log($scope.people.data.films);
			console.log($scope.people);
		}

		$scope.searchPeople = function(){
			PeopleService.searchPeople($scope.peopleSearched)
				.then(function(response){
					if(response != undefined){
						console.log(response);
						console.log($scope.peopleSearched);
						$scope.searchResult = response;
					}
				})
		}

		// $scope.getFilmName = function(string){
		// 	console.log(string);
		//
		// 	PeopleService.getFilmName($scope.extractUrlId(string))
		// 		.then(function(response){
		// 			if(response != undefined){
		// 				console.log(response);
		//
		// 				//$scope.searchResult = response;
		// 				//return response.data;
		// 				$scope.filmName = response.data.title;
		// 				console.log($scope.filmName);
		// 			}
		// 		})
		// }

		$scope.extractUrlId = function(string){
			return ToolsFactory.extractUrlId(string);
		}

		$scope.pageNumberIncrement = function(){
				$scope.pageNumber ++;
				$scope.getAllPeople();
		}

		$scope.pageNumberDecrement = function(){
				if($scope.pageNumber > 0)
				$scope.pageNumber --;
				$scope.getAllPeople();
		}

		$scope.start = function(){
			console.log($routeParams);
			$scope.peopleSearched = "test";
			$scope.searchResult = null;
			$scope.people = null;
			$scope.peoples = null;
			$scope.filmNames = [];


			if($routeParams.peopleId){

				$scope.getPeople();

			}
			else{

				$scope.pageNumber = 1;
				$scope.getAllPeople();
			}
		}

		$scope.start();

	}])
