'use strict';

angularFoodwatcherApp.controller('NavigationCtrl', function($scope, Mensa) {
	$scope.mensas = Mensa.getAll();
});
