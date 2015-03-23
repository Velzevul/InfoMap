angular.module('InfoMap')
  .factory('CalendarService', function() {
    'use strict';

    var mock = [
      {
        id: 1,
        type: 'm',
        label: 'Dec 2014',
        weeks: [
          {
            id: 1,
            type: 'w',
            label: '2014-12-28',
            nTweets: 30
          }
        ]
      },
      {
        id: 2,
        type: 'm',
        label: 'Jan 2015',
        weeks: [
          {
            id: 2,
            type: 'w',
            label: '2015-01-01',
            nTweets: 26
          },
          {
            id: 3,
            type: 'w',
            label: '2015-01-04',
            nTweets: 17
          },
          {
            id: 4,
            type: 'w',
            label: '2015-01-11',
            nTweets: 21
          },
          {
            id: 5,
            type: 'w',
            label: '2015-01-18',
            nTweets: 17
          },
          {
            id: 6,
            type: 'w',
            label: '2015-01-25',
            nTweets: 39
          }
        ]
      },
      {
        id: 3,
        type: 'm',
        label: 'Feb 2015',
        weeks: [
          {
            id: 7,
            type: 'w',
            label: '2015-02-01',
            nTweets: 5
          },
          {
            id: 8,
            type: 'w',
            label: '2015-02-08',
            nTweets: 12
          }
        ]
      }
    ];

    return {
      load: function() {
        angular.forEach(mock, function(month, monthIndex) {
          angular.forEach(month.weeks, function(week, weekIndex) {
            var weekIterator = moment(week.label),
                id = 1;

            week.days = [];

            for (var day = 0; day < weekIterator.day(); day++) {
              week.days.push({id: id, label: '-'});
              id++;
            }

            while (true) {
              week.days.push({id: id, label: weekIterator.date()});

              if ((weekIterator.day() == 6) || (weekIterator.date() == weekIterator.daysInMonth())) {
                break;
              } else {
                weekIterator.add(1, 'd');
                id++;
              }
            }

            for (var day = weekIterator.day(); day < 6; day++) {
              week.days.push({id: id, label: '-'});
              id++;
            }
          });
        });

        return mock;
      },
      getMax: function() {
        return 39;
      }
    }
  });