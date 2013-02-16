'use strict';

angularFoodwatcherApp.controller('NavigationCtrl', [
	'$scope', 'Mensa',
	function($scope, Mensa) {
		$scope.mensas = Mensa.getAll();

		$scope.loading = false;
		$scope.$on('event:http:loading', function() {
			$scope.loading = true;
		});

		$scope.$on('event:http:loaded', function() {
			$scope.loading = false;
		});
	}
]);
