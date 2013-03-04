'use strict';

app.controller('MensaCtrl', [
	'$scope', 'mensa', 'isClosed', 'nextMonday',
	function($scope, mensa, isClosed, nextMonday) {
		$scope.mensa = mensa;
		$scope.isClosed = isClosed;
		$scope.nextMonday = nextMonday;
	}
]);
