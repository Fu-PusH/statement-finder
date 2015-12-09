(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('filterByGroup', filterByGroup);

	function filterByGroup() {
		var byGroup = function(group) {
			return function(statement) {
				var noFilter = !group || (group === '');
				var statementContainsGroupTag = statement && statement.group === group;
				return noFilter || statementContainsGroupTag;
			};
		};

		return function(statements, group) {
			if (!statements) {
				return [];
			}
			return statements.filter(byGroup(group));
		};
	}
})();
