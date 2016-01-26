function searchCtrl($scope, $http) {

  $scope.departments = [
    "eecs",
    "mechang",
    "eecs",
    "ioe",
    "naval",
    "econ",
    "phy",
    "math",
    "stats"
  ];
  //$http calls api to get data
}
angular.module("psi").controller("searchCtrl", searchCtrl);

