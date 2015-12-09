(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('stateService', stateService);

	function stateService () {
		var service = {};
		var _tags = [];
		var _interview = {number: 0}; // The object is necessary for Angular's updating mechanism
		var _discipline = {name: ''}; // The object is necessary for Angular's updating mechanism
		var _group = {name: ''}; // The object is necessary for Angular's updating mechanism

		/* Tags */
		service.tags = function() {
			return _tags;
		};

		service.clearAllTags = function() {
			_tags = [];
		};

		service.removeTag = function(tag) {
			var index = _tags.indexOf(tag);
			if (index > -1) {
				_tags.splice(index, 1);
			}
		};

		service.addTag = function(tag) {
			if (_tags.indexOf(tag) == -1) {
				_tags.push(tag);
			}
		};

		service.setTag = function(tag) {
			_tags = [];
			_tags.push(tag);
		};

		service.setTags = function(tags) {
			_tags = tags;
		};

		/* Interview */
		service.interviewTag = function() {
			return _interview;
		};

		service.clearInterviewTag = function() {
			_interview.number = 0;
		};

		service.setInterviewTag = function(tag) {
			_group.name = '';
			_discipline.name = '';
			_interview.number = tag;
		};

		/* Discipline */
		service.disciplineTag = function() {
			return _discipline;
		};

		service.clearDisciplineTag = function() {
			_discipline.name = '';
		};

		service.setDisciplineTag = function(tag) {
			_interview.number = 0;
			_group.name = '';
			_discipline.name = tag;
		};

		/* Group */
		service.groupTag = function() {
			return _group;
		};

		service.clearGroupTag = function() {
			_group.name = '';
		};

		service.setGroupTag = function(tag) {
			_interview.number = 0;
			_discipline.name = '';
			_group.name = tag;
		};

		/* Return service */
		return service;
	}

})();
