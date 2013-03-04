'use strict';

app.controller('AppCtrl', [
	'$scope', '$route', 'Mensa',
	function($scope, $route, Mensa) {
		$scope.mensas = Mensa.getAll();

		// Show or hide loading indicator
		$scope.loading = false;
		$scope.$on('event:http:loading', function() {
			$scope.loading = true;
		});
		$scope.$on('event:http:loaded', function() {
			$scope.loading = false;
		});

		// When resources where not able to be resolved show error message
		$scope.$on('$routeChangeError', function($event, next) {
			// $scope.mensas is a promise
			$scope.mensaError = $scope.mensas.then(function(mensas) {
				return mensas[next.params.id];
			});
		});

		// Hide error on route change
		$scope.$on('$routeChangeStart', function() {
			$scope.mensaError = null;
		});

		$scope.refresh = function() {
			Mensa.clear();
			$route.reload();
		};
	}
]);
