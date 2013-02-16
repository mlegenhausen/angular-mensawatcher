'use strict';

angularFoodwatcherApp.controller('MensaCtrl', [
	'$scope', 'DateTime', 'mensa', 'isClosed', 'nextMonday',
	function($scope, DateTime, mensa, isClosed, nextMonday) {
		$scope.mensa = mensa;
		$scope.isClosed = isClosed;
		$scope.nextMonday = nextMonday;
	}
]);
