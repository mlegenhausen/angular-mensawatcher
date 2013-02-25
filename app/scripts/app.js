'use strict';

var app = angular.module('app', ['ui.bootstrap'])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.responseInterceptors.push('HttpLoadingInterceptor');
  }])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NavigationCtrl'
      })
      .when('/mensa/:id', {
        templateUrl: 'views/mensa.html',
        controller: 'MensaCtrl',
        resolve: {
          mensa: function($route, Mensa) {
            return Mensa.get($route.current.params.id);
          },
          isClosed: function(Mensa) {
            return Mensa.isClosed();
          },
          nextMonday: function(DateTime) {
            return DateTime.getNextMonday();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
