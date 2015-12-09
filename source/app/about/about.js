(function() {
	'use strict';

	angular
		.module('app.about')
		.controller('About', About);

	About.$inject = ['$scope', '$window', 'stateService'];

	function About($scope, $window, stateService) {
		$scope.disciplineTag = stateService.disciplineTag();
		$scope.groupTag = stateService.groupTag();

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
