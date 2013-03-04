'use strict';

app.controller('MainCtrl', [
	'$scope', 'mensas',
	function($scope, mensas) {
		$scope.mensas = mensas;
	}
]);
