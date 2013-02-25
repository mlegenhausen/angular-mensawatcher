'use strict';

app.service('Mensa', [
	'$q', '$http', 'persistenceCache', 'DateTime',
	function($q, $http, persistenceCache, DateTime) {
		var cache = persistenceCache('mensa');
		var mensas = {
			air: {
				name: 'Airport',
				title: 'Mensa am Airport'
			},
			bhv: {
				name: 'Bremerhaven',
				title: 'Mensa in Bremerhaven'
			},
			gw2: {
				name: 'Cafeteria GW2',
				title: 'Cafeteria GW2 in der Uni'
			},
			hsb: {
				name: 'Neustadtwall',
				title: 'Mensa am Neustadtwall'
			},
			uni: {
				name: 'Uniboulevard',
				title: 'Mensa am Uniboulevard'
			},
			wer: {
				name: 'Werderstrasse',
				title: 'Mensa in der Werderstrasse'
			}
		};

		this.get = function(id) {
			var year = DateTime.getCurrentYear();
			var week = DateTime.getCurrentWeek();

			var result = cache.get(id);
			
			if (result) {
				return $q.when(result);
			}

			return $http({
				method: 'JSONP',
				url: 'http://foodspl.appspot.com/mensa',
				params: {
					format: 'json',
					year: year,
					week: week,
					id: id,
					callback: 'JSON_CALLBACK'
				}
			}).then(function(response) {
				var mensa = response.data;
				angular.extend(mensa, mensas[id]);
				angular.forEach(mensa.menues, function(menu, index) {
					var day = DateTime.getCurrentDay() - 1;
					menu.date = DateTime.getDaysOfWeek(year, week, index);
					menu.active = day === index || (index === 4 && day > 4);
				});
				cache.put(id, mensa);
				return mensa;
			});
		};

		this.getAll = function() {
			return $q.when(mensas);
		};

		this.isClosed = function() {
			return DateTime.getCurrentDay() > 5;
		};

		this.clear = function() {
			cache.removeAll();
		};
	}
]);
