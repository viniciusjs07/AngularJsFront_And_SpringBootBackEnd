angular.module("cadastroCapacitacao").controller("AppCtrl", function ($scope, USER_ROLES, AuthService, SessionService) {
    $scope.currentUser = SessionService.user;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };

    $scope.isCurrentUserCoach = function (user) {
        return user.role === USER_ROLES.coach;
    };

    $scope.isCurrentUserStudent = function (user) {
        return user.role === USER_ROLES.student;
    };

    $scope.requestError = function (response) {
        if (!response.data) {
            $scope.error = "Falha na comunicação com o servidor.";
        } else {
            $scope.error = response.data.message;
        }
    }

    $scope.isUserAuthenticated = function () {
        return AuthService.isAuthenticated();
    }

    $scope.deleteError = function () {
        delete $scope.error;
    }
});