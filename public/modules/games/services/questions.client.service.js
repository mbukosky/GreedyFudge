'use strict';

angular.module('games').factory('Questions', ['$http',
	function($http) {
		// Questions service logic
		// ...

		// Public API
		return {
			getQuestions: function() {
                var questions = [];
                var albums = [];

                for (var ctr = 0; ctr <= 9; ctr++) {
                    $http.get('/question').success(function (data, status) {
                        //if (albums.indexOf(data.albumTitle) == -1) {
                            questions.push(data);
                            albums.push(data.albumTitle);
                        //}
                        //console.log(data);
                    
                    });
                }
                //console.log(albums);
                //console.log(questions.length);
                return questions;
               
                //return [{ Definition: 'Abbey Road', Answers: [{ Response: 'Beatles', IsCorrect: true }, { Response: 'Metallica', IsCorrect: false }] }, { Definition: 'Appetite for Destruction', Answers: [{ Response: 'Beatles', IsCorrect: false }, { Response: 'Guns and Roses', IsCorrect: true }] }];
			}
		};
	}
]);