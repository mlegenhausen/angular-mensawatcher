'use strict';

angularFoodwatcherApp.controller('MensaCtrl', [
	'$scope', '$routeParams', 'DateTime', 'Mensa',
	function($scope, $routeParams, DateTime, Mensa) {
		$scope.mensa = Mensa.get($routeParams.id, $routeParams.year, $routeParams.week);

		$scope.mensa.then(function(mensa) {
			var today = DateTime.getCurrentDay() - 1;
			angular.forEach(mensa.menues, function(menu, index) {
				menu.selected = index === today;
			});
		});
	}
]);
