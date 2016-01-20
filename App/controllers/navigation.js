(function(angular, $, window, document, App){
    App
    .directive('pfNavigation', function(){
        return {
            restrict: 'A',
            controller: function($scope, navMenu){
             
                $scope.navigation = navMenu.mainNav;
                
            },
            templateUrl: 'App/views/navigation.html'
        };
    });
    
})(angular, window.jQuery, window, document, App);