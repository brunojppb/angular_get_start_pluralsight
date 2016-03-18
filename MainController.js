(function(){

  var myApp = angular.module('myApp');

  myApp.controller('MainController',
                  ['$scope', '$interval', '$location',
                  function($scope, $interval, $location) {

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
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      // move to another controller
      // using $location service
      $location.path("/user/" + username);
    }

    $scope.githubUser = 'brunojppb';
    $scope.countdown = 15;
    startCountdown();
  }]);

}());
