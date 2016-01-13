(function() {
	'use strict';

	angular
		.module('app.statement-list')
		.controller('StatementList', StatementList);

	StatementList.$inject = ['$scope', '$window', '$location', 'statementDataService', 'stateService'];

	function StatementList($scope, $window, $location, statementDataService, stateService) {
		statementDataService.async().then(function(data) {
			$scope.statements = data;
		});

		$scope.filterTags = stateService.tags();
		$scope.interviewTag = stateService.interviewTag();
		$scope.disciplineTag = stateService.disciplineTag();
		$scope.groupTag = stateService.groupTag();

		var searchParameters = $location.search();

		if (searchParameters.group)
		{
			stateService.setGroupTag(searchParameters.group);
		}

		if (searchParameters.discipline)
		{
			stateService.setDisciplineTag(searchParameters.discipline);
		}

		if (searchParameters.interview)
		{
			if (!isNaN(searchParameters.interview))
			{
				stateService.setInterviewTag(parseInt(searchParameters.interview));
			}
		}

		if (searchParameters.tag)
		{
			var tags;
			if (searchParameters.tag.indexOf(',') > -1)
			{
				tags = searchParameters.tag.split(',');
				stateService.setTags(tags);
			} else
			{
				stateService.setTag(searchParameters.tag);
			}
			$scope.filterTags = stateService.tags();
		}

		$scope.filterBy = function(tag) {
			stateService.addTag(tag);
			$scope.updateURL();
		};

		$scope.clearAllTags = function() {
			stateService.clearAllTags();
			$scope.updateURL();
		};

		$scope.clearTag = function(tag) {
			stateService.removeTag(tag);
			$scope.updateURL();
		};

		$scope.clearInterviewTag = function() {
			stateService.clearInterviewTag();
			$scope.updateURL();
		};

		$scope.clearDisciplineTag = function() {
			stateService.clearDisciplineTag();
			$scope.updateURL();
		};

		$scope.clearGroupTag = function() {
			stateService.clearGroupTag();
			$scope.updateURL();
		};

		$scope.updateURL = function() {
			if ($scope.interviewTag.number !== 0) {$location.search('interview', $scope.interviewTag.number);} else {$location.search('interview', null);}
			if ($scope.groupTag.name !== '') {$location.search('group', $scope.groupTag.name);} else {$location.search('group', null);}
			if ($scope.disciplineTag.name !== '') {$location.search('discipline', $scope.disciplineTag.name);} else {$location.search('discipline', null);}
			if ($scope.filterTags.toString() !== '') {$location.search('tag', $scope.filterTags.toString());} else {$location.search('tag', null);}
		};

		$scope.updateURL();
	}

})();
