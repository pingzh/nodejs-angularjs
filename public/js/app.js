// Create a app called scotchTodo
// Create controllers under public/js/controllers/
// Create directives under public/js/directives/
var psi = angular.module("psi", ['ui.bootstrap', 'ngRoute']);

psi.config(function($routeProvider) {

  $routeProvider
  .when("/", {
    controller: "searchCourseCtrl",
  })
  .when("/search", {
    controller: "courseSearchResultCtrl",
    templateUrl: "js/views/courseSearchResult.html"
  })
  .otherwise({
    redirectTo: "/"
  });

});

