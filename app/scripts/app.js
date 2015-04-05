(function(window) {
  'use strict';

  var app = angular.module('InfoMap', ['app-templates', 'ngRoute']);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/graphical/:task', {
          templateUrl: 'templates/graphical.html',
          controller: 'graphicalController'
        })
        .when('/list/:task', {
          templateUrl: 'templates/list.html',
          controller: 'listController'
        });
    }]);

  window.app = app;
})(window);