angular.module('InfoMap')
  .directive('post', function(UserService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/post.html',
      scope: {
        post: '='
      },
      controller: function($scope) {
        $scope.getAvatar = function(username) {
          return UserService.getTrain()[username].avatar;
        };
      },
      link: function($scope) {

      }
    }
  });
