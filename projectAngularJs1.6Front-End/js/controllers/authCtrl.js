angular.module("cadastroCapacitacao").controller("AuthCtrl", function ($scope, $location, $state, AuthService) {

    var self = this;

    function loginSuccess(response) {
        $scope.setCurrentUser(response.data.user);
        $state.go("users");
        $scope.deleteError();
    }

    self.logout = function () {
        AuthService.logout();
        $state.go('login');
    }

    self.login = function (credenciais) {
        AuthService.login(credenciais).then(loginSuccess, $scope.requestError);
    };

    self.isAuthenticated = function () {
        AuthService.isAuthenticated();
    }
});