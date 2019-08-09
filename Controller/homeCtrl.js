test.controller('homeCtrl',["$scope",function($scope, $http) {
    $scope.$on('$viewContentLoaded', function() {    
        $scope.list();
})

$scope.list = function() {
    debugger;
    $http.get("sampleData.json").then(function (response) {
        $scope.myWelcome = response;
        console.log( $scope.myWelcome);
      });
}

} ]);