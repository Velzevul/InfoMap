angular.module('InfoMap')
  .directive('appSidebar', function() {
    'use strict';

    return {
      restrict: 'A',
      link: function($scope, elem, attrs) {
        var header = $(elem).find('.as-header'),
            body = $(elem).find('.as-body');

        function updateOnResize() {
          body.outerHeight( $(window).innerHeight() - header.outerHeight() );
        }

        $(window).resize(updateOnResize);
        updateOnResize();
      }
    }
  });