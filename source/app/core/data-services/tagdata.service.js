(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('tagDataService', tagDataService);

	tagDataService.$inject = ['$http'];

	function tagDataService ($http) {
		var promise;
		var myService = {
			async: function() {
				if (!promise) {
					// $http returns a promise, which has a then function, which also returns a promise
					promise = $http.get('data/tags.json').then(function (response) {
						// The then function here is an opportunity to modify the response
						// The return value gets picked up by the then in the controller.
						return response.data;
					});
				}
				// Return the promise to the controller
				return promise;
			}
		};
		return myService;
	}

})();
