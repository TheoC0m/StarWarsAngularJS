angular.module('StarWarsAngularJS')
    .factory('ToolsFactory', [function () {
     return{
         extractUrlId : function(string){
             var tab = string.split("/");
             return tab[tab.length - 2];
            }
        }
}])
