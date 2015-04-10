angular.module('InfoMap')
  .factory('DataService', function($q, $http, LoggerService) {
    'use strict';

    var colors = [
      'rgb(240,161,40)',
      'rgb(233,228,136)',
      'rgb(226,248,24)',
      'rgb(198,225,227)',
      'rgb(227,25,239)',
      'rgb(74,159,21)',
      'rgb(122,124,232)',
      'rgb(106,240,238)',
      'rgb(164,0,23)',
      'rgb(43,226,171)',
      'rgb(233,205,193)',
      'rgb(98,5,47)',
      'rgb(176,230,128)',
      'rgb(76,143,150)',
      'rgb(250,247,139)',
      'rgb(72,207,207)',
      'rgb(14,104,19)'
    ];

    function buildDataset() {
      var status = LoggerService.getStatus(),
          dataset,
          mask;

      if (status.currentTask == 'train') {
        dataset = window.dataTrain;
      } else {
        dataset = angular.copy(window.dataSkeleton);

        if (status.currentTrial.dataset == '3dmax') {
          mask = window.mask3dMax;
        } else if (status.currentTrial.dataset == 'maya') {
          mask = window.maskMaya;
        }

        dataset.data.forEach(function(item) {
          item.title = mask.data[item.id - 1].title;
          item.thumb = mask.data[item.id - 1].thumb;
        });

        dataset.users = mask.users;
        dataset.websites = mask.websites;
      }

      return dataset;
    }

    return {
      getGraphical: function() {
        var data = { children: [] },
            dataset = buildDataset();

        dataset.data.forEach(function(item) {
          var dataItem = {
            id: item.id,
            title: item.title,
            thumb: item.thumb
          };

          var hostUsers = [];

          item.posts.forEach(function(post) {
            post.users.forEach(function(user) {
              hostUsers.push({
                host: dataset.websites[post.id - 1],
                color: colors[post.id - 1],
                user: dataset.users[user.id - 1]
              });
            });
          });

          var nest = d3.nest()
            .key(function(d) { return d.host; })
            .entries(hostUsers);

          dataItem.children = nest;

          data.children.push(dataItem);
        });

        Math.seedrandom('shuffle the data');
        data.children = shuffle(data.children);
        return data;
      },
      getList: function() {
        var data = [],
            dataset = buildDataset();

        dataset.data.forEach(function(item) {
          item.posts.forEach(function(post) {
            post.users.forEach(function(user) {
              var dataItem = {
                id: item.id,
                title: item.title,
                thumb: item.thumb,
                user: dataset.users[user.id - 1],
                host: dataset.websites[post.id - 1],
                search: [item.title, dataset.users[user.id - 1].name, dataset.websites[post.id - 1]].join(' ')
              };

              data.push(dataItem);
            });
          });
        });

        Math.seedrandom('shuffle the data');
        return shuffle(data);
      }
    };
  });
