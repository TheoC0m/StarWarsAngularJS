angular.module('StarWarsAngularJS')
    .factory('ToolsFactory', ['$http', function ($http) {
     return{

         extractUrlId : function(string){
             var tab = string.split("/");
             return tab[tab.length - 2];
         },


		getFilmName : function(filmId){
            return $http({
				method: "GET",
				url: "https://swapi.co/api/films/"+filmId+"/"
			})
			.then(function(response){
				return response.data.title;
			})
			.catch(function(){
				return undefined;
			})
			}


        }
}])
