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

        $scope.selectMonth = function(month) {
          $scope.selection = month;
          $scope.selection.type = 'month';
        };

        $scope.selectWeek = function(week) {
          $scope.selection = week;
          $scope.selection.type = 'week';
        };
      },
      link: function($scope, elem, attrs) {
        
      }
    }
  });