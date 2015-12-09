(function() {
	'use strict';
	Array.prototype.containsArray = function (array /*, index, last*/) {
		var index;
		var last;
		if (arguments[1]) {
			index = arguments[1];
			last = arguments[2];
		} else {
			index = 0;
			last = 0;
			this.sort();
			array.sort();
		}

		return index == array.length || (last = this.indexOf(array[index], last)) > -1 && this.containsArray(array, ++index, ++last);
	};

})();

(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('filterByTag', filterByTag);

	function filterByTag() {
		/* Filter by multiple tags */
		var byTags = function(filterTags) {
			return function(statement) {
				var tagList = statement.tags;
				var tagListContainsFilterTags = false;

				if ((!filterTags) || (filterTags.length === 0)) {
					return true;
				}

				if (tagList) {
					tagListContainsFilterTags = tagList.containsArray(filterTags);
				}

				return tagListContainsFilterTags;
			};
		};

		return function(statements, filterTag) {
			if (!statements) {
				return [];
			}
			return statements.filter(byTags(filterTag));
		};
	}

})();
