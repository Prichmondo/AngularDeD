(function(angular, $, window, documen, App){
    
    App.controller('home', ['$scope', '$http', 'navMenu',
        
        function ($scope, $http, $navMenu) {
            $scope.title = "Pathfinder Character Sheet Manager";    
        }
        
    ]);

}(angular, window.jQuery, window, document, App));