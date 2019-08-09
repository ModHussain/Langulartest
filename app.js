var test = angular.module('exampleApp',['ui.router']);    
test.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
       
        $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .state('Home', {
            url: '/Home',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
    }])