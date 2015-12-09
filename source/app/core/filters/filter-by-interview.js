(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('filterByInterview', filterByInterview);

	function filterByInterview() {
		var byInterview = function(interview) {
			return function(statement) {
				var noFilter = !interview || (interview === 0);
				var statementContainsInterviewTag = statement && statement.interview === interview;
				return noFilter || statementContainsInterviewTag;
			};
		};

		return function(statements, interview) {
			if (!statements) {
				return [];
			}
			return statements.filter(byInterview(interview));
		};
	}
})();
