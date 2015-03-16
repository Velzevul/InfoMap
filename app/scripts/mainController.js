angular.module('InfoMap')
  .controller('mainController', function($scope, DataService) {
    'use strict';

    $scope.bits = DataService.get(1);    
  });