angular.module('InfoMap')
  .controller('setupController', function($scope, $location, LoggerService) {
    'use strict';

    $scope.status = LoggerService.getStatus();

    $scope.setCounterbalancing = function(i,j) {
      LoggerService.setCounterbalancing(i,j);
      LoggerService.setSetupStage('name');
    };

    $scope.setName = function() {
      if ($scope.tempName) {
        LoggerService.setName($scope.tempName);
        LoggerService.setSetupStage('tasks');
      }
    };

    $scope.workOn = function(trial, task) {
      LoggerService.workOn(trial, task);
      $location.path('/' + [trial.condition, task].join('/'));
    };

    $scope.isCompleted = function(trial, task) {
      return $scope.status.completion[trial.condition][task];
    };
  });
