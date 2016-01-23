function mainCtrl($scope, $http) {
  $scope.title = "awesome web"
  $scope.formData = {};

  // when landing on the page, get all todos and show them
  // TODO, delegate $http to model level, basically, create a Todo Service
  // $http.get('/api/todos')
  //   .success(function(data) {
  //     $scope.todos = data;
  //     console.log(data);
  //   })
  // .error(function(data) {
  //   console.log('Error: ' + data);
  // });

  // // when submitting the add form, send the text to the node API
  // $scope.createTodo = function() {
  //   $http.post('/api/todos', $scope.formData)
  //     .success(function(data) {
  //       $scope.formData = {}; // clear the form so our user is ready to enter another
  //       $scope.todos = data;
  //       console.log(data);
  //     })
  //   .error(function(data) {
  //     console.log('Error: ' + data);
  //   });
  // };

  // // delete a todo after checking it
  // $scope.deleteTodo = function(id) {
  //   $http.delete('/api/todos/' + id)
  //     .success(function(data) {
  //       $scope.todos = data;
  //       console.log(data);
  //     })
  //   .error(function(data) {
  //     console.log('Error: ' + data);
  //   });
  // };
}

angular.module("scotchTodoApp").controller('mainCtrl', mainCtrl);
