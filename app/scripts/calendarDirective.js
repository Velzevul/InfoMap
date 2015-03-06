angular.module('KnowledgeBits')
  .directive('calendar', function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/calendar.html',
      scope: {

      },
      controller: function($scope) {
        // prepopulate:
        $scope.months = [
          name: 'Dec 2014',
          weeks: [
            
          ]
        ];

        var mockWeeks = [
          {
            start: '2014-12-30',
            nTweets: 30
          },
          {
            start: '2015-01-06',
            nTweets: 26
          }
        ];

        function createDays(startStr) {
          var day = moment(startStr),
              color = randomColor({luminosity: 'light'}),
              week = [];

          for (var i = 0; i<7; i++) {

            week.push({
              day: day.date(),
              color: color
            });

            day.add(1, 'd');
          }

          return week;
        }

        $scope.weeks = [];
        angular.forEach(mockWeeks, function(item, index) {
          $scope.weeks.push({
            days: createDays(item.start),
            start: item.start,
            nTweets: item.nTweets,
            color: randomColor()
          });
        });

        $scope.selection = [];

        $scope.MonthsStartIndices = [];
        $scope.MonthsEndIndices = [];
      },
      link: function($scope, elem, attrs) {
        
      }
    }
  });