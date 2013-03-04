'use strict';

var app = angular.module('app', ['ui.bootstrap', 'analytics'])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.responseInterceptors.push('HttpLoadingInterceptor');
	}])
	.config(['AnalyticsProvider', function(AnalyticsProvider) {
		AnalyticsProvider.account = 'UA-38989467-1';
	}])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				resolve: {
					mensas: ['Mensa', function(Mensa) {
						return Mensa.getAll();
					}]
				}
			})
			.when('/mensa/:id', {
				templateUrl: 'views/mensa.html',
				controller: 'MensaCtrl',
				resolve: {
					mensa: ['$route', 'Mensa', function($route, Mensa) {
						return Mensa.get($route.current.params.id);
					}],
					isClosed: ['Mensa', function(Mensa) {
						return Mensa.isClosed();
					}],
					nextMonday: ['DateTime', function(DateTime) {
						return DateTime.getNextMonday();
					}]
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
