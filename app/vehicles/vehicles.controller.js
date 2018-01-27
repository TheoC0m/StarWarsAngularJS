angular.module('StarWarsAngularJS')
	.controller('VehiclesController', ['$scope', '$location', '$routeParams', 'VehiclesService', 'ToolsFactory',
	 function($scope, $location, $routeParams, VehiclesService, ToolsFactory){


		$scope.getAllVehicles = function(){
			VehiclesService.getAllVehicles($scope.pageNumber)
				.then(function(response){
					if(response != undefined){
						$scope.vehicles = response;
						console.log($scope.vehicles);
					}
				})
		}

		$scope.getVehicles = function(){
			VehiclesService.getVehicles($routeParams.vehicleId)
				.then(function(response){
					if(response != undefined){
						$scope.vehicle = response;
						console.log($scope.vehicle);
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
				$scope.getAllVehicles();
		}

		$scope.pageNumberDecrement = function(){
				if($scope.pageNumber > 0)
				$scope.pageNumber --;
				$scope.getAllVehicles();
		}

		$scope.start = function(){
			console.log($routeParams);
			if($routeParams.vehicleId){
				$scope.vehicle = null;
				$scope.getVehicles();

			}
			else{
				$scope.vehicles = null;
				$scope.pageNumber = 1;
				$scope.getAllVehicles();
			}
		}

		$scope.start();

	}])
