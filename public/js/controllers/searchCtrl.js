function searchCtrl($scope, $http) {

  $scope.selectedCourse = undefined;
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
    }
  }

  $scope.didPressEnter = function(keyEvent) {
    if(keyEvent.which == 13) {
      $scope.fireSearch();
    }
  }
}

angular.module("psi").controller("searchCtrl", searchCtrl);
