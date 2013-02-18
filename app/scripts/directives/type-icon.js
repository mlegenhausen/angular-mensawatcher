app.directive('typeIcon', function() {
	var mapping = {
		86: 'vegetarian',
		80: 'vegan',
		87: 'game',
		83: 'pig',
		70: 'fish',
		82: 'beef',
		71: 'chicken',
		76: 'lamb',
		79: 'spacer'
	};

	return {
		template: '<img ng-src="{{path}}" ng-show="path"/>',
		replace: true,
		restrict: 'E',
		scope: {
			type: '='
		},
		link: function(scope, element, attrs) {
			var value = mapping[scope.type];
			scope.path = value ? 'images/' + value + '.png' : null;
		}
	};
});