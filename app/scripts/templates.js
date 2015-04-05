angular.module('app-templates', ['templates/graphical.html', 'templates/list.html', 'templates/post.html']);

angular.module("templates/graphical.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/graphical.html",
    "<div id=\"cluster-encapsulated\"></div>\n" +
    "\n" +
    "<div class=\"searchbox\">\n" +
    "  <input class=\"searchbox__input\" placeholder=\"search here\" ng-model=\"filter\" ng-keydown=\"doSearch($event)\">\n" +
    "</div>\n" +
    "\n" +
    "<section id=\"details-popup\" class=\"details-popup\" ng-show=\"details\">\n" +
    "  <div class=\"l-block-small\">\n" +
    "    <h1 class=\"details-popup__title\">\n" +
    "      {{details.title}}\n" +
    "    </h1>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"l-media\">\n" +
    "    <div class=\"l-media__figure\">\n" +
    "      <div class=\"details-popup__thumb\" style=\"background-image: url({{details.thumb}});\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-media__body\">\n" +
    "      <div class=\"l-list-inline\" ng-if=\"details.activeLink\">\n" +
    "        <div class=\"l-list-inline__item\">{{details.activeLink.host}} by @{{details.activeLink.user}}</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>");
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
    "");
}]);

angular.module("templates/post.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/post.html",
    "<div class=\"lv-item\">\n" +
    "  <div class=\"l-media\">\n" +
    "    <div class=\"l-media__figure\">\n" +
    "      <div class=\"lv-item__avatar\" style=\"background-image: url({{getAvatar(post.user)}});\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"l-media__body\">\n" +
    "      <div class=\"lv-item__author\">@{{post.user}}</div>\n" +
    "\n" +
    "      <div class=\"l-block-small\">\n" +
    "        <div class=\"lv-item__text\">{{post.title}} <a class=\"lv-item__link\" href=\"\">see on {{post.host}}</a></div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"lv-item__thumb\" style=\"background-image: url({{post.thumb}});\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
