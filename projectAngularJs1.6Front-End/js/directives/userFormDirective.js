angular.module("cadastroCapacitacao").directive("userForm", function () {
    return {
        templateUrl: "view/components/user-form.html",
        restrict: "E",
        bindToController: true,
        controller: "UserCtrl",
        controllerAs: "userCtrl"
    };
});