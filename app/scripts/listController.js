angular.module('InfoMap')
  .controller('listController', function($scope, $routeParams, DataService) {
    'use strict';

    $scope.posts = DataService.getListTrain();
  });
