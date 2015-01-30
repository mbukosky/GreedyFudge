angular.module('articles').controller("GamesController", function ($scope,$location) {
    $scope.Score = 0;
    $scope.Round = 0;
    //$scope.userResponse = "";
    $scope.Questions = [{ Definition: 'Abbey Road', Answers: [{ Response: 'Beatles', IsCorrect: true }, { Response: 'Metallica', IsCorrect: false }] }, { Definition: 'Appetite for Destruction', Answers: [{ Response: 'Beatles', IsCorrect: true }, { Response: 'Metallica', IsCorrect: false }] }];
    

    $scope.SubmitAnswer = function () {
        //validate answer
        //if ($scope.userReponse != null) {
            ValidateResponse();
            $scope.Round++;

            // move to next round if there is a question. otherwise go to another view and say good job.
            if ($scope.Round >= $scope.Questions.length) {
                // how do we pass score?
                $location.path('endGame');
            }
        //}
    };
    $scope.NewGame = function () {
        //reset questions, score, round etc.
        console.log("new game");
        
        $location.path('/game');
    };

    ValidateResponse = function () {
        console.log($scope.userResponse);
        $scope.Score++;
    };
});