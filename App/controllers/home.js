(function(angular, $, window, documen, App){
    
    App.controller('home', ['$scope', '$http', 'Characters',
        
        function ($scope, $http, Characters) {
            
            this.characters = []; 
            console.log("test");
            
            Characters.then(
                function success(response){
                    $scope.characters = response.data;
                },
                function error(response){
                    //do something
                }
            );
            
            this.title = "Pathfinder Character Sheet Manager";    
        }
        
    ]);

}(angular, window.jQuery, window, document, App));