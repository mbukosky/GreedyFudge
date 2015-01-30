angular.module('articles').controller("GamesController",['$scope','$location','Questions','Players', function ($scope,$location, Questions,Players) {
    $scope.Score = 0;
    $scope.Round = 0;
    //$scope.userResponse = "";
    $scope.Questions = Questions.getQuestions();
        $scope.GetScore = Players.getScore();

    $scope.SubmitAnswer = function () {
        //validate answer
        //if ($scope.userReponse != null) {
            ValidateResponse();
            $scope.Round++;

            // move to next round if there is a question. otherwise go to another view and say good job.
            if ($scope.Round >= $scope.Questions.length) {
                // how do we pass score?
                Players.setScore($scope.Score);
                $location.path('endGame');
            }
        //}
    };
    $scope.NewGame = function () {
        //reset questions, score, round etc.        
        $scope.Score = 0;
        $scope.Round = 0;
        Players.setScore(0);

        $location.path('/game');
    };

    ValidateResponse = function () {
        var index, len;
        for (index = 0, len = $scope.Questions[$scope.Round].Answers.length; index < len; ++index) {
            //console.log($scope.Questions[$scope.Round].Answers[index].Response);
            
            if ($scope.userResponse === $scope.Questions[$scope.Round].Answers[index].Response && $scope.Questions[$scope.Round].Answers[index].IsCorrect) {
                $scope.Score++;
            }
        }
        //console.log($scope.userResponse);  
    };
}]);