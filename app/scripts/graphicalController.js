angular.module('InfoMap')
  .controller('graphicalController', function($scope, $timeout, $routeParams, DataService, HostService, UserService) {
    'use strict';

    var task = $routeParams.task;

    if (task == 'train') {
      $scope.resources = DataService.getGraphicalTrain();
      $scope.hosts = HostService.getTrain();
      $scope.users = UserService.getTrain();
    } else {
      $scope.resources = DataService.getGraphicalTask();
      $scope.hosts = HostService.getTask();
      $scope.users = UserService.getTask();
    }

    $scope.details = null;

    var baselineSpacing = 12,
        height = $(window).height(), // - baselineSpacing * 8,
        width = $(window).width(), // - baselineSpacing * 29,
        detailsPopup = $('#details-popup'),
        counter;

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
        .data(data.nodes( $scope.resources ))
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
        .attr('class', 'svg-circle--leaf')
        .attr('r', function(d) { return d.r; })
        .style('fill', function(d) { 
          var value = $scope.hosts[d.key].color;

          return 'rgba(' + value.slice(4, value.length - 1) + ', 0.5)'; 
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

        var postCircleDimensions = $('#group-' + i + ' .svg-circle--leaf').position(),
            size = post.values.length > 1 ? post.r*1.8 : post.r * 1.2,
            offset = post.values.length > 1 ? post.r*0.2/2 : post.r*0.8/2;

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
          .nodes(post)
          .filter(function(d) {
            return d.depth > 0;
          });

        usersData
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
          });

        svg.selectAll('#group-' + i + ' .svg-user')
          .data(usersData)
          .enter().append('circle')
          .attr('class', 'svg-user')
          .attr('cx', function(d) { return d.x + postCircleDimensions.left + offset; })
          .attr('cy', function(d) { return d.y + postCircleDimensions.top + offset; })
          .attr('r',  function(d) { return d.r; })
          .style('fill', function(d) { return 'url(#bg-user-' + d.user + ')' });
      });          

    $scope.doSearch = function(e) {
      // debugger;
      clearTimeout(counter);

      counter = $timeout(function() {
        console.log($scope.filter);

        d3.selectAll('.svg-user')
          .style('opacity', function(d) {
            if ( (d.host.toLowerCase().indexOf($scope.filter.toLowerCase()) == -1) && 
                 (d.user.toLowerCase().indexOf($scope.filter.toLowerCase()) == -1) ) {
              return 0.1;
            } else {
              return 1;
            }
          });
      }, 200).$$timeoutId;
    }
  });