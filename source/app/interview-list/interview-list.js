(function() {
	'use strict';

	angular
		.module('app.interview-list')
		.controller('InterviewList', InterviewList);

	InterviewList.$inject = ['$scope', '$window', 'stateService', 'interviewDataService'];

	function InterviewList($scope, $window, stateService, interviewDataService) {
		$scope.filterTags = stateService.tags();
		$scope.interviewTag = stateService.interviewTag();
		$scope.disciplineTag = stateService.disciplineTag();
		$scope.groupTag = stateService.groupTag();

		interviewDataService.async().then(function(data) {
			$scope.interviews = data;
		});

		$scope.orderBy = 'id';

		$scope.setOrder = function(order) {
			$scope.orderBy = order;
		};

		$scope.clearTag = function(tag) {
			stateService.removeTag(tag);
		};

		$scope.go = function(tag) {
			stateService.setInterviewTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.clearInterviewTag = function() {
			stateService.clearInterviewTag();
		};

		$scope.gotoDiscipline = function(tag) {
			stateService.setDisciplineTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.clearDisciplineTag = function() {
			stateService.clearDisciplineTag();
		};

		$scope.gotoGroup = function(tag) {
			stateService.setGroupTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.clearGroupTag = function() {
			stateService.clearGroupTag();
		};
	}

})();
