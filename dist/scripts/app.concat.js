(function(window) {
  'use strict';

  var app = angular.module('InfoMap', ['app-templates', 'ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/setup.html',
        controller: 'setupController'
      })
      .when('/graphical/:task', {
        templateUrl: 'templates/graphical.html',
        controller: 'graphicalController'
      })
      .when('/list/:task', {
        templateUrl: 'templates/list.html',
        controller: 'listController'
      });
    });

  window.app = app;

})(window);

angular.module('app-templates', ['templates/graphical.html', 'templates/list.html', 'templates/post.html', 'templates/setup.html']);

angular.module("templates/graphical.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/graphical.html",
    "<div id=\"cluster-encapsulated\"></div>\n" +
    "\n" +
    "<div class=\"searchbox\">\n" +
    "  <input class=\"searchbox__input\" placeholder=\"search here\" ng-model=\"filter\" ng-keydown=\"doSearch($event)\">\n" +
    "</div>\n" +
    "\n" +
    "<section id=\"details-popup\" class=\"details-popup\" ng-show=\"hovered\">\n" +
    "  <div class=\"l-media\">\n" +
    "    <div class=\"l-media__figure\">\n" +
    "      <div class=\"details-popup__thumb\" style=\"background-image: url({{hovered.thumb}});\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-media__body\">\n" +
    "      <div class=\"l-block-small\">\n" +
    "        <h1 class=\"details-popup__title\">\n" +
    "          {{hovered.title}}\n" +
    "        </h1>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-if=\"hovered.post\">\n" +
    "        <div class=\"l-block-small\">\n" +
    "          post on <span class=\"details-popup__website\">{{hovered.post.key}}</span> by:</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"tweet in hovered.post.children\">\n" +
    "          <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "            <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "              <div class=\"details-popup__avatar\" style=\"background-image: url({{tweet.user.avatar}});\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"l-list-inline__item is-middle-aligned\">@{{tweet.user.name}}</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-if=\"!hovered.post\">\n" +
    "        posted on {{hovered.children.length}} websites\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "<button ng-click=\"finishTask()\" class=\"done-button\">Finish task</button>\n" +
    "");
}]);

angular.module("templates/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/list.html",
    "<div class=\"searchbox-fixed\">\n" +
    "  <input class=\"searchbox__input\" placeholder=\"search here\" ng-model=\"query\" ng-keydown=\"doSearch($event)\">\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"list-view\">\n" +
    "  <post post=\"post\" ng-repeat=\"post in posts | filter : {search: query}\"></post>\n" +
    "</div>\n" +
    "\n" +
    "<button ng-click=\"finishTask()\" class=\"done-button\">Finish task</button>\n" +
    "");
}]);

angular.module("templates/post.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/post.html",
    "<div class=\"lv-item\">\n" +
    "  <div class=\"l-media\">\n" +
    "    <div class=\"l-media__figure\">\n" +
    "      <div class=\"lv-item__avatar\" style=\"background-image: url({{post.user.avatar}});\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-media__body\">\n" +
    "      <div class=\"lv-item__author\">@{{post.user.name}}</div>\n" +
    "\n" +
    "      <div class=\"l-block-small\">\n" +
    "        <div class=\"lv-item__text\">{{post.title}} <button class=\"lv-item__link\" ng-click=\"log()\">see on {{post.host}}</button></div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"lv-item__thumb\" style=\"background-image: url({{post.thumb}});\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/setup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/setup.html",
    "<section class=\"setup-panel\">\n" +
    "  <div class=\"l-block\">\n" +
    "    <h1 class=\"setup-panel__title\">Setup</div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-show=\"!status.setupStage\">\n" +
    "    <div class=\"l-block-small\">\n" +
    "      <div class=\"setup-panel__subtitle\">Select counterbalancing</div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-list l-list--small\">\n" +
    "      <li class=\"l-list__item\"><button class=\"setup-panel__button\" ng-click=\"setCounterbalancing(0,0)\">List, 3d Studio Max</button></li>\n" +
    "      <li class=\"l-list__item\"><button class=\"setup-panel__button\" ng-click=\"setCounterbalancing(0,1)\">List, Maya</button></li>\n" +
    "      <li class=\"l-list__item\"><button class=\"setup-panel__button\" ng-click=\"setCounterbalancing(1,0)\">Graphical, 3d Studio Max</button></li>\n" +
    "      <li class=\"l-list__item\"><button class=\"setup-panel__button\" ng-click=\"setCounterbalancing(1,1)\">Graphical, Maya</button></li>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <form ng-submit=\"setName()\" ng-show=\"status.setupStage == 'name'\">\n" +
    "    <div class=\"l-list l-list--small\">\n" +
    "      <div class=\"l-list__item\">\n" +
    "        <label>\n" +
    "          <span class=\"setup-panel__label\">Full Name</span>\n" +
    "          <input type=\"text\" ng-model=\"tempName\" class=\"setup-panel__input\">\n" +
    "        </label>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"l-list__item\">\n" +
    "        <button class=\"setup-panel__button\">Set name</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "\n" +
    "  <div ng-show=\"status.setupStage == 'tasks'\">\n" +
    "    <div class=\"l-block\">\n" +
    "      participant name: <br>\n" +
    "      <strong>{{status.participantName}}</strong>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-list\">\n" +
    "      <div class=\"l-list__item\" ng-repeat=\"trial in status.counterbalancing\">\n" +
    "        <div class=\"l-block-small\">\n" +
    "          <div class=\"setup-panel__subtitle\">{{trial.condition}} condition ({{trial.dataset}})</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"l-block cf\">\n" +
    "          <ul class=\"l-list l-list--small\">\n" +
    "            <li class=\"l-list__item\"><button ng-disabled=\"isCompleted(trial, 'train')\" ng-click=\"workOn(trial, 'train')\" class=\"setup-panel__button\">training</button></li>\n" +
    "            <li class=\"l-list__item\"><button ng-disabled=\"isCompleted(trial, 'task' )\" ng-click=\"workOn(trial, 'task' )\" class=\"setup-panel__button\">task</button></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "");
}]);

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

        if (status.currentTrial.dataset == '3dmax') {
          dataset = angular.copy(window.dataSkeleton);
          mask = window.mask3dMax;
        } else if (status.currentTrial.dataset == 'maya') {
          dataset = angular.copy(window.dataSkeleton2);
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

angular.module('InfoMap')
  .factory('HostService', function() {
    'use strict';

    var mockTrain = [ 'youtube',
                      'visualfxhub',
                      'vimeo',
                      'avcgi360',
                      'scoop',
                      'quora',
                      'blogspot',
                      'wordpress',
                      'pandawhale',
                      'pinterest',
                      'cgvilla',
                      'cgmeetup',
                      'cgtrader',
                      'devianart',
                      'lesterbanks',
                      'itsart',
                      'cgterminal' ];

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

    return {
      get: function() {
        var mock = {};

        mockTrain.forEach(function(host, i) {
          mock[host] = {
            color: colors[i]
          }
        });

        return mock;
      }
    }
  });

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

angular.module('InfoMap')
  .factory('UserService', function() {
    'use strict';

    var mockTrain = {
      'raulpercy': {
        avatar: 'https://pbs.twimg.com/profile_images/1768824664/raul_400x400.jpg'
      },
      'MikeGibbowr': {
        avatar: 'https://pbs.twimg.com/profile_images/378800000775286849/5c7255b9f4b5a33401549da271ce4a98_400x400.jpeg'
      },
      'PESERT': {
        avatar: 'https://pbs.twimg.com/profile_images/2704599212/b2aaaf21292dd5098c03b0b63c44494f_400x400.png'
      },
      'YutaruHD': {
        avatar: 'https://pbs.twimg.com/profile_images/542936061219860481/e3xg_jA1_bigger.jpeg'
      },
      'santosh_n_naik': {
        avatar: 'https://pbs.twimg.com/profile_images/470267983202230272/dv1JaPtC_400x400.jpeg'
      },
      'probio_US': {
        avatar: 'https://pbs.twimg.com/profile_images/470882641009315840/uLCg29VU_400x400.jpeg'
      },
      'visualfxhub': {
        avatar: 'https://pbs.twimg.com/profile_images/514905717757591552/zjJ47Wz4_400x400.jpeg'
      },
      'warrenally': {
        avatar: 'https://pbs.twimg.com/profile_images/1772739000/Mw_again_400x400.jpg'
      },
      'ActKamal': {
        avatar: 'https://pbs.twimg.com/profile_images/527685818702249984/SN7CN4dT_400x400.jpeg'
      },
      'bhupifxartist': {
        avatar: 'https://pbs.twimg.com/profile_images/1324290593/me_400x400.jpg'
      },
      'ZodiakMotion': {
        avatar: 'https://pbs.twimg.com/profile_images/3380865881/f73b3687ff39b795db05fcaf35972270_bigger.jpeg'
      },
      'KipMcSkipster': {
        avatar: 'https://pbs.twimg.com/profile_images/1148675368/chin_CU1_400x400.jpg'
      },
      'Nick_OHLAS': {
        avatar: 'https://pbs.twimg.com/profile_images/469077575893921792/AxLE6Co0_400x400.jpeg'
      },
      'CG_trader': {
        avatar: 'https://pbs.twimg.com/profile_images/466221699252244480/XgPHY-XQ_400x400.jpeg'
      },
      'vilius_I': {
        avatar: 'https://pbs.twimg.com/profile_images/1705285318/IMG_1101_normal.JPG'
      },
      'Linko_3D': {
        avatar: 'https://pbs.twimg.com/profile_images/552815444067749889/mqj86uMZ_400x400.jpeg'
      },
      'Glary888': {
        avatar: 'https://pbs.twimg.com/profile_images/430115884980387840/cF51DvQZ_400x400.jpeg'
      },
      'lesterbanks': {
        avatar: 'https://pbs.twimg.com/profile_images/2763516653/0755d8171938f00a06a533f2995119fb_400x400.jpeg'
      },
      '3Dsurvival': {
        avatar: 'https://pbs.twimg.com/profile_images/1896400689/avatar_400x400.jpg'
      },
      'dafideff': {
        avatar: 'https://pbs.twimg.com/profile_images/518447381562408960/k3Io8vt5_400x400.jpeg'
      },
      'itsartmag': {
        avatar: 'https://pbs.twimg.com/profile_images/959015172/Image_2_400x400.png'
      },
      'NailTG': {
        avatar: 'https://pbs.twimg.com/profile_images/485151427530985472/DV7q8GZN_bigger.png'
      },
      '710Films': {
        avatar: 'https://pbs.twimg.com/profile_images/462832891202772992/spDfRYba_400x400.jpeg'
      },
      'JoeCyriac': {
        avatar: 'https://pbs.twimg.com/profile_images/462721582217965568/efo68CkR_400x400.jpeg'
      },
      'jisphording': {
        avatar: 'https://pbs.twimg.com/profile_images/3061517074/c5b5da524a296d43f29c66fac1799eee_400x400.jpeg'
      },
      'AiEnRobOtt': {
        avatar: 'https://pbs.twimg.com/profile_images/478511428832210946/zEaztc6C_bigger.jpeg'
      },
      'kizakiaoi': {
        avatar: 'https://pbs.twimg.com/profile_images/545596935982182401/ptr44Zfy_400x400.jpeg'
      }
    };

    return {
      get: function() {
        return mockTrain;
      }
    }
  });

angular.module('InfoMap')
  .controller('graphicalController', function($scope, $timeout, $routeParams, $location, DataService, LoggerService) {
    'use strict';

    if (LoggerService.getStatus().participantName == null) {
      $location.path('/');
    }

    $scope.resources = DataService.getGraphical();

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
          var value = d.values[0].color;

          return 'rgba(' + value.slice(4, value.length - 1) + ', 0.5)';
        })
        .style('stroke-color', function(d) {
          var value = d.values[0].color;

          return value;
        });

    posts
      .on('mousemove', function(d) {
        detailsPopup.css({'left': d3.event.clientX + 20, 'top': d3.event.clientY + 20});
      })
      .on('mouseover', function(d) {
        $scope.hovered = d.parent;
        $scope.hovered.post = d;
        $scope.$apply();
      })
      .on('mouseout', function(d) {
        $scope.hovered.post = null;
        $scope.hovered = null;
        $scope.$apply();
      })
      .on('click', function(d) {
        // var reason = prompt('Please, justify why did you select this post'),
        //     logData = {};

        // if (reason && reason != '') {
        //   logData.tutorialName = d.parent.title;
        //   logData.tutorialHost = d.key;
        //   logData.reason = reason;
        //   logData.tutorialId = d.parent.id;

        //   LoggerService.log(logData);
        // } else if (reason == '') {
        //   alert('You must justify your selection');
        // }
      });

    resources
      .on('mousemove', function(d) {
        detailsPopup.css({'left': d3.event.clientX + 20, 'top': d3.event.clientY + 20});
      })
      .on('mouseover', function(d) {
        $scope.hovered = d;
        $scope.$apply();
      })
      .on('mouseout', function(d) {
        $scope.hovered = null;
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
            if (!document.getElementById('bg-user-' + user.user.name)) {
              defs
                .append("pattern")
                  .attr("id", "bg-user-" + user.user.name)
                  .attr('width', user.r * 2)
                  .attr('height', user.r * 2)
                .append("image")
                  .attr("xlink:href", user.user.avatar)
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
          .style('fill', function(d) { return 'url(#bg-user-' + d.user.name + ')' });
      });

    $scope.doSearch = function(e) {
      clearTimeout(counter);

      counter = $timeout(function() {
        console.log($scope.filter);

        resources
          .each(function(d) {
            if (d.title.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
              d.match = true;
            } else {
              d.match = false;
            }
          })
          .style('opacity', function(d) {
            if ($scope.filter) {
              return d.match ? 1 : 0.2;
            } else {
              return 1;
            }
          });

        posts
          .each(function(d) {
            // console.log(d);
            if (d.parent.match || d.key.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
              d.match = true;
            } else {
              d.match = false;
            }
          })
          .style('opacity', function(d) {
            if ($scope.filter) {
              return d.match ? 1 : 0.2;
            } else {
              return 1;
            }
          });

        d3.selectAll('.svg-user')
          .each(function(d) {
            if (d.parent.match || d.user.name.toLowerCase().indexOf($scope.filter.toLowerCase()) > -1) {
              d.match = true;
            } else {
              d.match = false;
            }
          })
          .style('opacity', function(d) {
            if ($scope.filter) {
              return d.match ? 1 : 0.2;
            } else {
              return 1;
            }
          });
      }, 300).$$timeoutId;
    };

    $scope.finishTask = function() {
      if (confirm('Please confirm completion of all tasks')) {
        $location.path('/');
      }
    };
  });

angular.module('InfoMap')
  .controller('listController', function($scope, $location, DataService, LoggerService) {
    'use strict';

    if (LoggerService.getStatus().participantName == null) {
      $location.path('/');
    }

    $scope.posts = DataService.getList();

    $scope.finishTask = function() {
      if (confirm('Please confirm completion of all tasks')) {
        $location.path('/');
      }
    };
  });

angular.module('InfoMap')
  .controller('setupController', function($scope, $location, LoggerService) {
    'use strict';

    $scope.status = LoggerService.getStatus();

    $scope.setCounterbalancing = function(i,j) {
      LoggerService.setCounterbalancing(i,j);
      LoggerService.setSetupStage('name');
    };

    $scope.setName = function() {
      if ($scope.tempName) {
        LoggerService.setName($scope.tempName);
        LoggerService.setSetupStage('tasks');
      }
    };

    $scope.workOn = function(trial, task) {
      LoggerService.workOn(trial, task);
      $location.path('/' + [trial.condition, task].join('/'));
    };

    $scope.isCompleted = function(trial, task) {
      return $scope.status.completion[trial.condition][task];
    };
  });

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
          // var reason = prompt('Please, justify why did you select this post'),
          //     logData = {};

          // if (reason && reason != '') {
          //   logData.tutorialName = $scope.post.title;
          //   logData.tutorialHost = $scope.post.host;
          //   logData.reason = reason;
          //   logData.tutorialId = $scope.post.id;

          //   LoggerService.log(logData);
          // } else if (reason == '') {
          //   alert('You must justify your selection');
          // }
        };
      }
    }
  });
