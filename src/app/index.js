'use strict';

angular.module('ryanair', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'angucomplete-alt', 'angular-datepicker'])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/mainPage/mainPage.html'
        });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
