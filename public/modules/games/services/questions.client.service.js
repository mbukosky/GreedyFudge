'use strict';

angular.module('games').factory('Questions', ['$http',
	function($http) {
		// Questions service logic
		// ...

		// Public API
		return {
			getQuestions: function() {
                var questions = [];
                
                for (var ctr = 0; ctr < 9; ctr++) {
                    $http.get('/question').success(function (data, status) {
                        questions.push(data);
                        //console.log(data);
                    
                    });
                }

                return questions;
               
                //return [{ Definition: 'Abbey Road', Answers: [{ Response: 'Beatles', IsCorrect: true }, { Response: 'Metallica', IsCorrect: false }] }, { Definition: 'Appetite for Destruction', Answers: [{ Response: 'Beatles', IsCorrect: false }, { Response: 'Guns and Roses', IsCorrect: true }] }];
			}
		};
	}
]);