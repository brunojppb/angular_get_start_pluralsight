(function(){

  var myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(function($routeProvider){

    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .when("user/:username/:repo", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .otherwise({
        redirectTo: "/main"
      });

  });

}());
