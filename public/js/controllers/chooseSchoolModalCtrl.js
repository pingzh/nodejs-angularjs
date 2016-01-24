function chooseSchoolModalCtrl($scope, $uibModal, $log) {
  //call api to get schools
  $scope.schools = [
    {name: 'school1', id: 1},
    {name: 'school2', id: 2},
    {name: 'school3', id: 3}
  ];

  $scope.animationsEnabled = true;

  $scope.open = function() {
    console.log(6);
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'js/directives/chooseSchoolModal.html',
      controller: 'modalInstanceCtrl',
      resolve: {
        schools: function () {
          return $scope.schools;
        }
      }
    });

  };
  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}

angular.module("scotchTodoApp").controller('chooseSchoolModalCtrl', chooseSchoolModalCtrl);

angular.module('scotchTodoApp').controller('modalInstanceCtrl', function ($scope, $uibModalInstance, $http, schools) {
  console.log(1);
  //init data
  $scope.schools = schools;
  $scope.selected = $scope.schools[0];

  $scope.ok = function () {
    console.log(3);
    console.log($scope.selected);
    $uibModalInstance.close($scope.selected);
    $http.post('/api/set_current_school', $scope.selected)
    console.log(11);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
