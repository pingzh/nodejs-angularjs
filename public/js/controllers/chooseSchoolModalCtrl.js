function chooseSchoolModalCtrl($scope, $uibModal, $log) {
  //call api to get schools
  $scope.schools = [
    {name: 'school1', id: 1},
    {name: 'school2', id: 2},
    {name: 'school3', id: 3}
  ];

  $scope.animationsEnabled = true;

  $scope.open = function() {
    $uibModal.open({
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

angular.module("psi").controller('chooseSchoolModalCtrl', chooseSchoolModalCtrl);

angular.module("psi").controller('modalInstanceCtrl', function ($scope, $uibModalInstance, $http, schools) {
  $scope.schools = schools;
  $scope.selected = $scope.schools[0];

  $scope.ok = function () {
    $uibModalInstance.close();
    $http.post('/api/set_current_school', $scope.selected)
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
