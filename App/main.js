//var App = (function(angular, $, window, documen){
    
    var App = angular.module('App', ['ngRoute', 'ngResource']);
    
    App.provider('menu', function () {
        
        var menu = {};
        return {
            setMenu : function(data){
                menu = data;
            },
            $get : function(){
                return menu;
            }
        };
        
    });
    
    App.factory('Characters', ['$http',
        function($http){
            return $http({url:'/AngularDeD/assets/moks/characters.json'});
        }
    ]);

    App.config( ['$routeProvider', '$httpProvider', '$locationProvider', 'menuProvider',
        function( $routeProvider,   $httpProvider,   $locationProvider,   menuProvider) {
            
            var menu;
             
            $.ajax({
                url   : '/AngularDeD/assets/moks/navigation.json',
                async : false 
            }).success(function(response){
                menu = response;
            }).error(function(response){
                //do something
            })
            
            menuProvider.setMenu(menu);
            
            $routeProvider
                .when(menu.home.pageUrl, {
                    templateUrl : menu.home.templateUrl,
                    controller  : menu.home.controller
                })
                .when(menu.characterSheet.pageUrl, {
                    templateUrl : menu.characterSheet.templateUrl,
                    controller  : menu.characterSheet.controller
                })
                .otherwise({
                    redirectTo  : menu.home.templateUrl
                });
            
            $locationProvider
                .html5Mode({
                    enabled: false,
                    requireBase: false   
                });
                
        }
    ]);
    
    
//     return App;
// 
// }(angular, window.jQuery, window, document));