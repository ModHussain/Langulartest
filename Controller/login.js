test.controller("LoginCtrl",["$scope","$state",function($scope, $state) {
$scope.$on('$viewContentLoaded', function() {

})

$scope.login=function(log)
{
    debugger;
    $scope.email=log.email;
    $scope.password=log.password;
    if($scope.email=="test@gmail.com"&&$scope.password=="test"){
        $state.go("Home");
    }
    else{
        alert("hai")
    }
}
}]);