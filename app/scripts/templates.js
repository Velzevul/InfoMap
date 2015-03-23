angular.module('app-templates', ['templates/calendar.html', 'templates/clusterView.html', 'templates/clusterViewEncapsulated.html', 'templates/clusterViewStats.html', 'templates/listView.html']);

angular.module("templates/calendar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/calendar.html",
    "<div  class=\"calendar-item\" \n" +
    "      ng-class=\"{'calendar-item--selected': selection == month}\"\n" +
    "      ng-repeat=\"month in months\">\n" +
    "  <div class=\"l-block-small\">\n" +
    "    <div class=\"calendar-item__month\" ng-click=\"select(month)\">{{month.label}}</div>\n" +
    "  </div>\n" +
    "\n" +
    "  <ul class=\"l-list l-list--collapsed\">\n" +
    "    <li class=\"l-list__item\" ng-repeat=\"week in month.weeks\">\n" +
    "      <div  class=\"ci-week\" \n" +
    "            ng-class=\"{'ci-week--selected': selection == week}\"\n" +
    "            ng-click=\"select(week)\">\n" +
    "        <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "          <div class=\"l-list-inline__item is-middle-aligned\" ng-repeat=\"day in week.days\">\n" +
    "            <div class=\"ci-week__day\">{{day.label}}</div>\n" +
    "          </div>\n" +
    "      \n" +
    "          <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "            <div class=\"ci-shares\">\n" +
    "              <div class=\"ci-shares__inner\" style=\"width: {{100*week.nTweets/maxShares}}%\"></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div  class=\"calendar-item\"\n" +
    "      ng-class=\"{'calendar-item--selected': selection == current}\">\n" +
    "  <div class=\"calendar-item__month\" ng-click=\"select(current)\">{{current.label}}</div>\n" +
    "</div>");
}]);

angular.module("templates/clusterView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/clusterView.html",
    "<div class=\"cluster-view\">\n" +
    "  <div class=\"l-block-small\">\n" +
    "    <div class=\"cluster-view__title\">Summary for {{getViewLabel()}}</div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div \n" +
    "  ng-repeat=\"item in data | orderBy : item.totalShares : true\">\n" +
    "    <div class=\"cv-item\">\n" +
    "      <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "        <div class=\"l-list-inline__item\">\n" +
    "          <cluster-view-stats item=\"item\"></cluster-view-stats>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"l-list-inline__item\">\n" +
    "          <div class=\"cv-item__body\">\n" +
    "            <div class=\"l-block\">\n" +
    "              <div class=\"cv-item__title\">{{item.title}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            \n" +
    "            <div class=\"l-list-inline\">\n" +
    "              <div class=\"l-list-inline__item is-middle-aligned\" ng-repeat=\"thumb in item.thumbs\">\n" +
    "                <div class=\"cv-item__thumb\" style=\"background-image: url({{thumb}});\"></div>\n" +
    "              </div>\n" +
    "  \n" +
    "              <div class=\"l-list-inline__item is-middle-aligned\">\n" +
    "                <button class=\"cv-item__details-link\">see all posts</button>\n" +
    "              </div>\n" +
    "            </div>          \n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("templates/clusterViewEncapsulated.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/clusterViewEncapsulated.html",
    "<div id=\"cluster-encapsulated\"></div>\n" +
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

angular.module("templates/clusterViewStats.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/clusterViewStats.html",
    "<div class=\"ci-stats\" id=\"item-{{item.id}}\"></div>");
}]);

angular.module("templates/listView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/listView.html",
    "<div class=\"list-view\">\n" +
    "  <div class=\"l-block-small\">\n" +
    "    <div class=\"list-view__title\">Info this week:</div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"list-view__section\">\n" +
    "    <div ng-repeat=\"item in data\">\n" +
    "      <div ng-repeat=\"post in item.posts\">\n" +
    "        <div class=\"lv-item\" ng-repeat=\"user in post.users\">\n" +
    "          <div class=\"l-justified\">\n" +
    "            <div class=\"l-justified__item\">\n" +
    "              <div class=\"lv-item__title\">{{item.title}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"l-justified__item\">\n" +
    "              <span class=\"lv-item__user\">@{{user}}</span> on <a href=\"\" class=\"lv-item__host\">{{post.host}}</a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
