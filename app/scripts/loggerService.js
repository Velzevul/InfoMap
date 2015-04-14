window.CONDITIONS = ['list', 'graphical'],
window.DATASETS   = ['3dmax', 'maya'];

angular.module('InfoMap')
  .factory('LoggerService', function($http) {
    'use strict';

    var status = {
          counterbalancing: [],
          participantName: null,
          currentTrial: null,
          currentTask: null,
          setupStage: null,
          completion: {}
        },
        serverUrl = 'http://haricot-01.cs.umanitoba.ca:5000/';

    status.completion[CONDITIONS[0]] = { train: false, task: false };
    status.completion[CONDITIONS[1]] = { train: false, task: false };

    window.doLog = function() {
      console.log('  counterbalancing:')
      console.log('    trial 1: ' + status.counterbalancing[0].condition + ' ' + status.counterbalancing[0].dataset);
      console.log('    trial 2: ' + status.counterbalancing[1].condition + ' ' + status.counterbalancing[1].dataset);
      console.log('  name: ');
      console.log('    ' + status.participantName);
      console.log('  completion:');
      console.log('    ' + CONDITIONS[0]);
      console.log('      train: ' + status.completion[CONDITIONS[0]].train);
      console.log('      task:  ' + status.completion[CONDITIONS[0]].task);
      console.log('    ' + CONDITIONS[1]);
      console.log('      train: ' + status.completion[CONDITIONS[1]].train);
      console.log('      task:  ' + status.completion[CONDITIONS[1]].task);
      console.log('  setup stage:');
      console.log('    ' + status.setupStage.stage);
    };

    return {
      getStatus: function() {
        return status;
      },
      setSetupStage: function(stage) {
        status.setupStage = stage;
      },
      setName: function(name) {
        status.participantName = name;
        console.log('name set: ' + status.participantName);
      },
      workOn: function(trial, task) {
        console.log('working on ' + task + ' for ' + trial.condition);
        status.completion[trial.condition][task] = true;
        status.currentTrial = trial;
        status.currentTask = task;
      },
      setCounterbalancing: function(conditionIndex, datasetIndex) {
        var firstTrial = {
              condition: CONDITIONS[conditionIndex],
              dataset: DATASETS[datasetIndex]
            },
            secondTrial = {
              condition: CONDITIONS[1 - conditionIndex],
              dataset: DATASETS[1 - datasetIndex]
            };

        status.counterbalancing.push(firstTrial);
        status.counterbalancing.push(secondTrial);

        console.log('counterbalancing set ' + status.counterbalancing[0].condition + ' ' + status.counterbalancing[0].dataset);
      },
      log: function(data) {
        data.participantName = status.participantName;
        data.condition = status.currentTrial.condition;
        data.counterbalancing = status.counterbalancing[0].condition + ' ' + status.counterbalancing[0].dataset;

        if (status.currentTask == 'task') {
          // $http({
          //   url: serverUrl + 'log',
          //   method: 'GET',
          //   headers: {'Content-Type': 'application/json'},
          //   data: JSON.stringify(data)
          // })
          //   .success(function() {
          //     console.log('log data saved');
          //   })
          //   .error(function() {
          //     console.error('Could not save the log');
          //   });
        } else {
          console.log('training data catched:');
          console.log(data);
        }
      }
    }
  });
