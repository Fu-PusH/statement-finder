(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('filterByTextOrId', filterByTextOrId);

	function filterByTextOrId() {
		var byTextOrId = function(query) {
			return function(statement) {
				if ((!query) || (query === '')) {
					return true;
				}
				var statementContainsQueryText = (statement.text.toLowerCase().indexOf(query.toLowerCase()) > -1);
				var statementHasQueryID = (statement.id === parseInt(query));
				return statementContainsQueryText || statementHasQueryID;
			};
		};

		return function(statements, query) {
			if (!statements) {
				return [];
			}
			return statements.filter(byTextOrId(query));
		};
	}
})();
