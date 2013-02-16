'use strict';

angularFoodwatcherApp.controller('MensaCtrl', [
	'$scope', 'DateTime', 'mensa',
	function($scope, DateTime, mensa) {
		var today = DateTime.getCurrentDay() - 1;
		angular.forEach(mensa.menues, function(menu, index) {
			menu.selected = index === today;
		});

		$scope.mensa = mensa;
	}
]);
