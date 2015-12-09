(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('filterByDiscipline', filterByDiscipline);

	function filterByDiscipline() {
		var byDiscipline = function(discipline) {
			return function(statement) {
				var noFilter = !discipline || (discipline === '');
				var statementContainsDisciplineTag = (statement && statement.discipline === discipline);
				return noFilter || statementContainsDisciplineTag;
			};
		};

		return function(statements, discipline) {
			if (!statements) {
				return [];
			}
			return statements.filter(byDiscipline(discipline));
		};
	}
})();
