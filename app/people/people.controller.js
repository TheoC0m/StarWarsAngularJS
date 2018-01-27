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
				$scope.getAllPeople();
		}

		$scope.pageNumberDecrement = function(){
				if($scope.pageNumber > 0)
				$scope.pageNumber --;
				$scope.getAllPeople();
		}

		$scope.start = function(){
			console.log($routeParams);
			if($routeParams.peopleId){
				$scope.people = null;
				$scope.getPeople();

			}
			else{
				$scope.peoples = null;
				$scope.pageNumber = 1;
				$scope.getAllPeople();
			}
		}

		$scope.start();

	}])
