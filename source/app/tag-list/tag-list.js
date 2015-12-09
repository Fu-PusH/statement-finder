(function() {
	'use strict';

	angular
		.module('app.tag-list')
		.controller('TagList', TagList);

	TagList.$inject = ['$scope', '$window', 'stateService', 'tagDataService', 'categoryDataService'];

	function TagList($scope, $window, stateService, tagDataService, categoryDataService) {
		$scope.filterTags = stateService.tags();
		$scope.interviewTag = stateService.interviewTag();
		$scope.disciplineTag = stateService.disciplineTag();
		$scope.groupTag = stateService.groupTag();

		tagDataService.async().then(function(data) {
			$scope.tags = data;
		});

		categoryDataService.async().then(function(data) {
			$scope.categories = data;
		});

		$scope.clearTag = function(tag) {
			stateService.removeTag(tag);
		};

		$scope.go = function(tag) {
			stateService.addTag(tag);
			$window.location.hash = '/statements/';
		};

		$scope.clearInterviewTag = function() {
			stateService.clearInterviewTag();
		};

		$scope.clearDisciplineTag = function() {
			stateService.clearDisciplineTag();
		};

		$scope.clearGroupTag = function() {
			stateService.clearGroupTag();
		};

		$scope.tagCount = function(tagName) {
			var selectedTag = $.grep($scope.tags, function(e) {return e.tagName == tagName;});
			return selectedTag.tagCount;
		};
	}

})();
