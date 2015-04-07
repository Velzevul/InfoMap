angular.module('InfoMap')
  .controller('listController', function($scope, $routeParams, $location, DataService, LoggerService) {
    'use strict';

    if (LoggerService.getName() == null) {
      $location.path('/setup');
    }

    var task = $routeParams.task,
      completion = LoggerService.getCompletion();

    if (task == 'train') {
      completion.list.train = true;
      $scope.posts = DataService.getListTrain();
    } else {
      completion.list.task = true;
      $scope.posts = DataService.getListTask();
    }

    $scope.finishTask = function() {
      if (confirm('Please confirm completion of all tasks')) {
        $location.path('/setup');
      }
    };
  });
