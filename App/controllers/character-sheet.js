(function(angular, $, window, documen, App){
    
    App.controller('charaterSheet', ['$scope', '$http',

        function ($scope, $http) {
            $scope.title = "Character Sheet";
            this.test = "test";    
        }
        
    ]);
    
}(angular, window.jQuery, window, document, App));