angular.module('app-templates', ['templates/calendar.html']);

angular.module("templates/calendar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/calendar.html",
    "<ul class=\"l-list l-list--collapsed\">\n" +
    "  <li class=\"l-list__item\" ng-repeat=\"month in months\">\n" +
    "    <div class=\"l-justified\">\n" +
    "      <div class=\"l-justified__item\"><button>{{month.name}}</button></div>\n" +
    "\n" +
    "      <div class=\"l-justified__item\">\n" +
    "        <ul class=\"l-list l-list--collapsed\">\n" +
    "          <li class=\"l-list__item\" ng-repeat=\"week in month.weeks\">\n" +
    "            <button>\n" +
    "              <div class=\"l-list-inline l-list-inline--collapsed\">\n" +
    "                <div class=\"l-list-inline__item\" ng-repeat=\"day in week.days\">{{day}}</div>\n" +
    "\n" +
    "                <div class=\"l-list-inline__item\">%graph%</div>\n" +
    "              </div>\n" +
    "            </button>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </li>\n" +
    "</ul>");
}]);
