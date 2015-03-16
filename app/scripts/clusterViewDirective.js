angular.module('InfoMap')
  .directive('clusterView', function(DataService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/clusterView.html',
      scope: {
        selection: '='
      },
      controller: function($scope) {
        $scope.data = DataService.get();

        $scope.getViewLabel = function() {
          var res;

          if ($scope.selection.type == 'month') {
            res = $scope.selection.label;
          } else {
            res = 'the week of ' + moment($scope.selection.label).format('MMMM Do');
          }

          return res;
        };
      },
      link: function($scope, elem, attrs) {
      }
    }
  });