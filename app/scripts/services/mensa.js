'use strict';

angularFoodwatcherApp.service('Mensa', function($q, $http, $cacheFactory, DateTime) {
	var cache = $cacheFactory('mensa');
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

	this.get = function(id, year, week) {
		var year = DateTime.getCurrentYear();
		var week = DateTime.getCurrentWeek();

		var cacheKey = id + ':' + year + ':' + week;
		var result = cache.get(cacheKey);
		
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
				menu.date = DateTime.getDaysOfWeek(year, week, index);
			});
			cache.put(cacheKey, mensa);
			return mensa;
		});
	};

	this.getAll = function() {
		return $q.when(mensas);
	};

	this.getComments = function(menukey) {
		return $http({
			method: 'JSONP',
			url: 'http://foodspl.appspot.com/comment',
			params: {
				format: 'json',
				menukey: menukey,
				callback: 'JSON_CALLBACK'
			}
		}).then(function(response) {
			return response.data;
		});
	};
});
