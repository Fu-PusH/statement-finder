(function() {
	'use strict';

	angular
		.module('app.statement-detail')
		.controller('StatementDetail', StatementDetail);

	StatementDetail.$inject = ['$scope', '$location', '$window', '$routeParams', 'statementDataService', 'stateService'];

	function StatementDetail($scope, $location, $window, $routeParams, statementDataService, stateService) {

		$scope.id = $routeParams.id;

		statementDataService.async().then(function(data) {
			var result = $.grep(data, function(each) { return each.id == $routeParams.id; });
			$scope.statement = result[0];
		});

		$scope.permanentURL = $location.absUrl();

		$scope.go = function(tag) {
			stateService.clearAllTags();
			stateService.addTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.gotoInterview = function(tag) {
			stateService.setInterviewTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.gotoDiscipline = function(tag) {
			stateService.setDisciplineTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.gotoGroup = function(tag) {
			stateService.setGroupTag(tag);
			$window.location.hash = '/statements/';
		};
	}

})();
