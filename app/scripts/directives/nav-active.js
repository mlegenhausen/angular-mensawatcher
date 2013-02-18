app.directive('navActive', [
	'$rootScope', '$location',
	function($rootScope, $location) {
		return {
			link: function(scope, element, attrs) {
				$rootScope.$on('$routeChangeSuccess', function() {
					element.toggleClass('active', attrs.navActive === $location.path());
				});
			}
		};
	}
]);