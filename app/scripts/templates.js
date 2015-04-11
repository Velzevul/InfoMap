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
