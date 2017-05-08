angular.module("cadastroCapacitacao").directive("uiAlert", function () {
    return {
        templateUrl: "view/components/uiAlert.html",
        replace: true,
        restrict: "E",
        transclude: true,
        scope: {
            message: "@"
        }
    };
});