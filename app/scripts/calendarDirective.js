angular.module('InfoMap')
  .directive('calendar', function(CalendarService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/calendar.html',
      scope: {
        selection: '='
      },
      controller: function($scope) {
        $scope.months = CalendarService.load();
        $scope.maxShares = CalendarService.getMax();

        $scope.current = {
          label: 'Current week'
        };

        $scope.select = function(target) {
          $scope.selection = target;
        };
      },
      link: function($scope, elem, attrs) {
        
      }
    }
  });