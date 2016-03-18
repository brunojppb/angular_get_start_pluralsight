var myApp = angular.module('myApp', []);

myApp.controller('HttpController',
                ['$scope', 'github', '$interval', '$log', '$location', '$anchorScroll',
                function($scope, github, $interval, $log, $location, $anchorScroll) {

  var onUserComplete = function(data) {
    $scope.user = data;
    github.getRepos($scope.user).then(onRepos, onError);
  }

  var onError = function(err) {
    $scope.error = "Could not fetch the user."
  }

  var onRepos = function(data) {
    $scope.repos = data;
    $location.hash("user-details");
    $anchorScroll();
  }

  var decrementCountdown = function() {
    $scope.countdown -= 1;
    if ($scope.countdown < 1) {
      $scope.searchGH($scope.githubUser);
    }
  }

  var countdownInterval = null;
  var startCountdown = function() {
    countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
  }

  $scope.searchGH = function(username) {
    $log.info('searching for ' + username);
    github.getUser(username).then(onUserComplete, onError);
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }
  }

  $scope.repoSortOrder = '-stargazers_count';
  $scope.countdown = 5;
  startCountdown();
}]);
