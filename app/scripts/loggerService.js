angular.module('InfoMap')
  .factory('LoggerService', function($interval) {
    'use strict';

    var participantName = null,
        logger = null,
        completion = {
          graphical: {
            train: false,
            task: false
          },
          list: {
            train: false,
            task: false
          }
        };


    return {
      setName: function(name) {
        participantName = name;
      },
      getName: function() {
        return participantName;
      },
      getCompletion: function() {
        return completion;
      },
      start: function() {
        logger = $interval(function() {
          console.log('---logger:');
          console.log('  name: ' + participantName);
          console.log('  compl: ');
          console.log(completion);
        }, 5000).$$intervalId;
      },
      stop: function() {
        clearInterval(logger);
      }
    }
  });
