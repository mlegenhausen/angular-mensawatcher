'use strict';

app.controller('NavigationCtrl', [
	'$scope', '$route', 'Mensa',
	function($scope, $route, Mensa) {
		$scope.mensas = Mensa.getAll();

		$scope.loading = false;
		$scope.$on('event:http:loading', function() {
			$scope.loading = true;
		});

		$scope.$on('event:http:loaded', function() {
			$scope.loading = false;
		});

		$scope.refresh = function() {
			Mensa.clear();
			$route.reload();
		};
	}
]);
