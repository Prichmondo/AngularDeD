//var App = (function(angular, $, window, documen){
    
    var App = angular.module('App', ['ngRoute']);
    
    App.provider('navMenuProvider', function NavMenuProvider() {
        this.$get = {
            home : {
                displayName : "Home",
                pageUrl     : "/",
                templateUrl : "app/views/home.html",
                controller  : "home"
            },
            characterSheet : {
                displayName : "Character Sheet",
                pageUrl     : "/character-sheet",
                templateUrl : "app/views/character-sheet.html",
                controller  : "charaterSheet"
            },
            something : {
                displayName : "Something Else",
                pageUrl     : "/something-else",
                templateUrl : "",
                controller  : "something"}
            }
    });

    App.config(['$routeProvider', '$locationProvider', 'navMenuProvider',
        function($routeProvider,   $locationProvider,   navMenuProvider) {
            
            console.log(navMenuProvider.$get());
            
            $routeProvider
                .when('/', {
                    templateUrl : 'app/views/home.html',
                    controller  : 'home'
                })
                .when('/character-sheet', {
                    templateUrl : 'app/views/character-sheet.html',
                    controller  : 'charaterSheet'
                })
                .otherwise({
                    redirectTo  : '/'
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