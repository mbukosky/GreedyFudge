'use strict';

angular.module('games').factory('Questions', [
	function() {
		// Questions service logic
		// ...

		// Public API
		return {
			getQuestions: function() {
				return [{ Definition: 'Abbey Road', Answers: [{ Response: 'Beatles', IsCorrect: true }, { Response: 'Metallica', IsCorrect: false }] }, { Definition: 'Appetite for Destruction', Answers: [{ Response: 'Beatles', IsCorrect: false }, { Response: 'Guns and Roses', IsCorrect: true }] }];
			}
		};
	}
]);