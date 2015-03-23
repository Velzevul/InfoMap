angular.module('InfoMap')
  .directive('clusterViewEncapsulated', function(DataService, HostService, UserService) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'templates/clusterViewEncapsulated.html',
      scope: {
        selection: '='
      },
      controller: function($scope) {
        $scope.resources = DataService.getGraphical();
        $scope.hosts = HostService.get();
        $scope.users = UserService.get();
        $scope.details = null;
      },
      link: function($scope, elem, attrs) {
        var baselineSpacing = 12,
            height = $(window).height() - baselineSpacing * 8,
            width = $(window).width() - baselineSpacing * 29,
            detailsPopup = $('#details-popup');

        var svg = d3.select('#cluster-encapsulated').append('svg')
          .attr('class', 'svg')
          .attr('width', width)
          .attr('height', height);

        var defs = svg.append('defs');          

        var data = d3.layout.pack()
          .padding(10)
          .sort(null)
          .size([width, height])
          .value(function(d) {
            return d.values.length;
          });
      
        var circles = svg.selectAll('.svg-node')
            .data(data.nodes($scope.resources))
          .enter().append('g')
            .attr('class', function(d) {
              var result;

              if (d.depth == 0) {
                result = 'svg-node svg-node--root';
              } else if (d.depth == 2) {
                result = 'svg-node svg-node--leaf';
              } else {
                result = 'svg-node';
              }
              
              return result;
            })
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        var resources = circles.filter(function(d) { return d.depth == 1; }),
            posts = circles.filter(function(d) { return d.depth == 2; });

        resources
          .append('circle')
            .attr('class', 'svg-circle')
            .attr('r', function(d) { return d.r; });

        posts
          .append('circle')
            .attr('class', 'svg-circle svg-circle--leaf')
            .attr('r', function(d) { return d.r; })
            .style('fill', function(d) { 
              var value = $scope.hosts[d.key].color;

              return 'rgba(' + value.slice(4, value.length - 1) + ', 0.3)'; 
            })
            .style('stroke-color', function(d) { 
              var value = $scope.hosts[d.key].color;

              return value; 
            });

        posts
          .on('mousemove', function(d) {
            $scope.details = d.parent;
            $scope.details.activeLink = d.children[0];
            $scope.$apply();
            detailsPopup.css({'left': d3.event.clientX + 20, 'top': d3.event.clientY + 20});
          })
          .on('mouseout', function(d) {
            $scope.details.activeLink = null;
            $scope.details = null;
            $scope.$apply();
          })
          .on('click', function(d) {
            alert('going to ' + d.host);
          });

        resources
          .on('mousemove', function(d) {
            $scope.details = d;
            $scope.$apply();
            detailsPopup.css({'left': d3.event.clientX + 20, 'top': d3.event.clientY + 20});
          })
          .on('mouseout', function(d) {
            $scope.details = null;
            $scope.$apply();
          });

        posts
          .each(function(post, i) {
            this.id = 'group-' + i;

            var postCircle = svg.select('#group-' + i),
                size = post.values.length > 1 ? post.r*1.8 : post.r * 1.2;

            var usersData = d3.layout.pack()
              .padding(2)
              .sort(null)
              .size([size, size])
              .children(function(d) {
                return d.values;
              })
              .value(function(d) {
                return 1;
              })
              .nodes(post);

            usersData
              .filter(function(d) {
                return d.depth > 0;
              })
              .forEach(function(user) {
                if (!document.getElementById('bg-user-' + user.user)) {

                  defs
                    .append("pattern")
                      .attr("id", "bg-user-" + user.user)
                      .attr('width', user.r * 2)
                      .attr('height', user.r * 2)
                    .append("image")
                      .attr("xlink:href", $scope.users[user.user].avatar)
                      .attr('width', user.r * 2)
                      .attr('height', user.r * 2);
                }

                postCircle
                  .append('circle')
                    .attr('class', 'svg-user')
                    .attr('cx', function() { return user.x - size/2; })
                    .attr('cy', function() { return user.y - size/2; })
                    .attr('r',  function() { return user.r; })
                    .style('fill', 'url(#bg-user-' + user.user + ')');
              });
          });
      }
    };
  });