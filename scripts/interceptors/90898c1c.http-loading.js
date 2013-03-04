'use strict';

app.factory('HttpLoadingInterceptor', [
	'$rootScope', '$q',
	function($rootScope, $q) {
		var pending = 0;
		return function(promise) {
			if (pending === 0) {
				$rootScope.$broadcast('event:http:loading');
			}
			pending++;
			return promise.then(function(response) {
				pending--;
				if (pending === 0) {
					$rootScope.$broadcast('event:http:loaded');
				}
				return response;
			}, function(response) {
				pending--;
				if (pending === 0) {
					$rootScope.$broadcast('event:http:loaded');
				}
				return $q.reject(response);
			});
		};
	}
]);