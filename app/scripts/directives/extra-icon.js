angularFoodwatcherApp.directive('extraIcon', function() {
	var mapping = {
		44: 'dessert',
		84: 'soup'
	};

	return {
		template: '<img ng-src="{{path}}" ng-show="path"/>',
		replace: true,
		restrict: 'E',
		scope: {
			extra: '='
		},
		link: function(scope, element, attrs) {
			var value = mapping[scope.extra];
			scope.path = value ? 'img/' + value + '.png' : null;
		}
	};
});