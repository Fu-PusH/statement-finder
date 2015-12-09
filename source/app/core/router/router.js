(function() {
	'use strict';

	angular
		.module('app.core')
		.config(router);

	router.$inject = ['$routeProvider'];

	function router ($routeProvider) {
		$routeProvider.
			when('/statements', {
				templateUrl: 'app/statement-list/statement-list.html',
				controller: 'StatementList'
			}).
			when('/statement/:id', {
				templateUrl: 'app/statement-detail/statement-detail.html',
				controller: 'StatementDetail'
			}).
			when('/tags', {
				templateUrl: 'app/tag-list/tag-list.html',
				controller: 'TagList'
			}).
			when('/interviews', {
				templateUrl: 'app/interview-list/interview-list.html',
				controller: 'InterviewList'
			}).
			when('/about', {
				templateUrl: 'app/about/about.html',
				controller: 'About'
			}).
			when('/imprint', {
				templateUrl: 'app/imprint/imprint.html'
			}).
			otherwise({
				redirectTo: '/statements'
			});
	}

})();
