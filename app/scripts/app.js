'use strict';

var angularFoodwatcherApp = angular.module('angularFoodwatcherApp', ['ui.bootstrap'])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.responseInterceptors.push('LoadingHttpInterceptor');
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
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
