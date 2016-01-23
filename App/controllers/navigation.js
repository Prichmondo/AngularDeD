(function(angular, $, window, document, App){
    App
    .directive('pfNavigation', function(){
        return {
            restrict: 'A',
            controller: ['$scope', 'menu', function($scope, menu){

                $scope.navigation = menu;

            }],
            templateUrl: 'App/views/navigation.html'
        };
    });
    
})(angular, window.jQuery, window, document, App);