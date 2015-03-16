angular.module('InfoMap')
  .directive('listView', function(DataService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/listView.html',
      scope: {
        selection: '='
      },
      controller: function($scope) {
        $scope.data = DataService.get()
      },
      link: function($scope, elem, attrs) {
        
      }
    }
  });