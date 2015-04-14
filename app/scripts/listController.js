angular.module('InfoMap')
  .controller('listController', function($scope, $location, DataService, LoggerService) {
    'use strict';

    if (LoggerService.getStatus().participantName == null) {
      $location.path('/');
    }

    $scope.posts = DataService.getList();

    $scope.finishTask = function() {
      if (confirm('Please confirm completion of all tasks')) {
        $location.path('/');
      }
    };
  });
