angular.module('InfoMap')
  .controller('mainController', function($scope, DataService) {
    'use strict';

    $scope.data = [];

    $scope.selection = {
      label: ''
    };

    $scope.getSelectionLabel = function() {
      var res = $scope.selection.label;

      if ($scope.selection.type == 'w') {
        res = 'week of ' + moment($scope.selection.label).format('MMMM Do');
      }
      
      return res;
    };
  });