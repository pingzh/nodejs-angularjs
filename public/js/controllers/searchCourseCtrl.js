'use strict';

function searchCourseCtrl($scope, $http, $location) {
  $scope.selectedCourse = undefined;

  //define css
  $scope.searchBoxRow = "row main-search";
  $scope.searchBoxCol = "col-md-6 col-md-offset-0 col-sm-6 col-sm-offset-0 col-xs-8 col-xs-offset-0"

  $scope.getCourses = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };
  //$http calls api to get data

  //fire a search
  $scope.fireSearch = function() {
    if($scope.selectedCourse != null) {
      console.log($scope.selectedCourse);
      //go to search result
      $location.path('/search').search({selectedCourse: $scope.selectedCourse});;
    }
  }

  $scope.didPressEnter = function(keyEvent) {
    if(keyEvent.which == 13) {
      $scope.fireSearch();
    }
  }
}

angular.module("psi").controller("searchCourseCtrl", searchCourseCtrl);
