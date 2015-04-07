angular.module('InfoMap')
  .controller('setupController', function($scope, $location, LoggerService) {
    'use strict';

    $scope.name = LoggerService.getName();
    $scope.nameIsSet = !($scope.name == null);
    $scope.completion = LoggerService.getCompletion();

    // LoggerService.start();

    $scope.setName = function() {
      if ($scope.name) {
        LoggerService.setName($scope.name);
        $scope.nameIsSet = true;
      }
    };

    $scope.goTo = function(path) {
      $location.path(path);
    };
  });
