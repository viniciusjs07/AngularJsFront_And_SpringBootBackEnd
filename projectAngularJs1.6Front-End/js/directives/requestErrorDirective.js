angular.module("cadastroCapacitacao").directive("requestError", function () {
    return {
        templateUrl: "view/components/request-error.html",
        replace: true,
        restrict: "E",
        transclude: true,
        scope: false
    };
});