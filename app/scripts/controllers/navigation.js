'use strict';

angularFoodwatcherApp.controller('NavigationCtrl', [
	'$scope', 'Mensa',
	function($scope, Mensa) {
		$scope.mensas = Mensa.getAll();
	}
]);
