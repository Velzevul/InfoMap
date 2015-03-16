angular.module('InfoMap')
  .directive('clusterViewStats', function($timeout, HostService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/clusterViewStats.html',
      scope: {
        item: '='
      },
      replace: true,
      controller: function($scope) {
        $scope.total = $scope.item.totalShares;

        $scope.itemData = [];
        $scope.itemHosts = [];
        $scope.item.posts.forEach(function(post) {
          $scope.itemHosts.push(post.host);
          $scope.itemData.push(post.users.length);
        });
      },
      link: function($scope, elem, attrs) {
        $timeout(function() {
          var h = elem.height(),
              w = elem.width(),
              hosts = HostService.get(),
              radius = h/2.8;

          var arc = d3.svg.arc()
            .innerRadius(radius-8)
            .outerRadius(radius);

          var pie = d3.layout.pie()
            .padAngle(.05);

          var svg = d3.select('#item-' + $scope.item.id)
            .append('svg')
              .attr('width', w)
              .attr('height', h)
            .append('g')
              .attr('transform', 'translate(' + w/2 + ', ' + h/2 + ')');

          svg.selectAll('path')
            .data(pie($scope.itemData))
            .enter().append('path')
            .style('fill', function(d,i) { return hosts.colors[i]; })
            .attr('d', arc);

          svg.append('text')
            .attr('class', 'ci-stats__count')
            .style('text-anchor', 'middle')
            .text(function() { return $scope.total; });

          svg.append('text')
            .attr('class', 'ci-stats__shares')
            .attr('dy', function(d){ return 18; })
            .style('text-anchor', 'middle')
            .text(function() { return $scope.total > 1 ? 'shares' : 'share'; });
        });
      }
    }
  });