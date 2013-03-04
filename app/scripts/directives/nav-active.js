app.directive('navActive', [
	'$rootScope', '$location', '$timeout',
	function($rootScope, $location, $timeout) {
		return {
			link: function(scope, element, attrs) {
				function activate() {
					element.toggleClass('active', attrs.navActive === $location.path());
				}

				$rootScope.$on('$routeChangeSuccess', activate);
				$timeout(activate);
			}
		};
	}
]);