'use strict';

angular.module('games').factory('Players', [
	function() {
		// Players service logic
		// ...
        
        var _score = 0;

		// Public API
		return {
			getScore: function() {
				return _score;
            },
            setScore: function (score) {
                _score = score;
            }
		};
	}
]);