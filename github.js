// Github service
// using IIFE notation
(function() {

  var github = function($http) {

    var GITHUB_URL = 'https://api.github.com';

    var getUser = function(username) {
      var url = GITHUB_URL + "/users/" + username;
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepo = function(repoName) {
      return $http.get()
    }

    return {
      getUser: getUser,
      getRepos: getRepos
    };

  };

  // Register my custom service
  // to be available in my module
  var module = angular.module('myApp');
  module.factory('github', github);
}());
