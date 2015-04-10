angular.module('InfoMap')
  .directive('post', function(LoggerService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/post.html',
      scope: {
        post: '='
      },
      controller: function($scope) {
        $scope.log = function() {
          var reason = prompt('Please, justify why did you select this post'),
              logData = {};

          if (reason && reason != '') {
            logData.tutorialName = $scope.post.title;
            logData.tutorialHost = $scope.post.host;
            logData.reason = reason;
            logData.tutorialId = $scope.post.id;

            LoggerService.log(logData);
          } else if (reason == '') {
            alert('You must justify your selection');
          }
        };
      }
    }
  });
