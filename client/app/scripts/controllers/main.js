(function(){
  'use strict';

  angular.module('clientApp')
    .controller('MainCtrl', function($scope, todoFactory){
      $scope.isValid = true;
      $scope.todo = todoFactory.build();
      $scope.todo.index(function(todos){$scope.todos = _.map(todos, function(t){return todoFactory.build(t);});});

      $scope.complete = function(todo){
        todo.complete();
      };

      $scope.destroy = function(todo){
        todo.destroy(function(todo){
          _.remove($scope.todos, function(t){return t._id === todo._id;});
        });
      };

      $scope.save = function(){
        $scope.isValid = $scope.todoForm.$valid;

        if($scope.isValid){
          $scope.todo.create(function(t){
            $scope.todos.push(t);
            $scope.todo = todoFactory.build();
          });
        }
      };
    });
})();
