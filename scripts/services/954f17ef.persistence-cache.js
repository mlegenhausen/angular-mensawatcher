app.factory('persistenceCache', [
	'$cacheFactory',
	function($cacheFactory) {
		return function(name, options) {
			var config = {
				name: name,
				adapter: 'dom'
			};
			var cache = $cacheFactory(name, options);
			// Restore cache
			var store = new Lawnchair(config, function(store) {
				store.all(function(entries) {
					entries.forEach(function(entry) {
						cache.put(entry.key, entry.value);
					});

					// Override put method so it stores via lawnchair
					var put = cache.put;
					cache.put = function(key, value) {
						store.save({
							key: key,
							value: value
						});
						return put(key, value);
					};
				});
			});

			var removeAll = cache.removeAll;
			cache.removeAll = function() {
				store.nuke();
				return removeAll();
			};

			return cache;
		};
	}
]);