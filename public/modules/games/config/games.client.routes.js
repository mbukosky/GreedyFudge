'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function ($stateProvider) {
        // Articles state routing
        $stateProvider.
		state('game', {
            url: '/game',
            templateUrl: 'modules/games/views/board.client.view.html'
        }).
        state('endGame', {
            url: '/endGame',
            templateUrl: 'modules/games/views/end.client.view.html'
        });
    }
]);