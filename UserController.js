(function(){

  var myApp = angular.module('myApp');

  myApp.controller('UserController',
                  ['$scope', 'github', '$routeParams',
                  function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    }

    var onError = function(err) {
      $scope.error = "Could not fetch the user."
    }

    var onRepos = function(data) {
      $scope.repos = data;
    }

    $scope.repoSortOrder = '-stargazers_count';
    $scope.username = $routeParams.username

    github.getUser($scope.username).then(onUserComplete, onError);
  }]);

}());
