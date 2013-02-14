'use strict';

var angularFoodwatcherApp = angular.module('angularFoodwatcherApp', ['ui.bootstrap'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NavigationCtrl'
      })
      .when('/mensa/:id', {
        templateUrl: 'views/mensa.html',
        controller: 'MensaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
