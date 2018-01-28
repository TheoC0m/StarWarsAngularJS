angular.module('StarWarsAngularJS')
    .factory('ToolsFactory', ['$http', function ($http) {
     return{

         extractUrlId : function(string){
             var tab = string.split("/");
             return tab[tab.length - 2];
         },


		getPeopleName : function(peopleId){
            return $http({
				method: "GET",
				url: "https://swapi.co/api/people/"+peopleId+"/"
			})
			.then(function(response){
				return response.data.name;
			})
			.catch(function(){
				return undefined;
			})
			}


        }
}])
