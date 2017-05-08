angular.module("cadastroCapacitacao").config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {

    $urlRouterProvider.otherwise("nao-encontrado");

    $stateProvider.state("login", {
        url: "/",
        templateUrl: "view/login.html",
        controller: "AuthCtrl",
        controllerAs: "loginCtrl"
    });

    $stateProvider.state("not-found", {
        url: "/nao-encontrado",
        templateUrl: "view/not-found.html",
    });

    $stateProvider.state("not-authorized", {
        url: "/nao-autorizado",
        templateUrl: "view/not-authorized.html",
    });

    $stateProvider.state("users", {
        url: "/usuarios",
        templateUrl: "view/users.html",
        controller: "UsersCtrl",
        controllerAs: "usersCtrl",
        data: {
            authorizedRoles: USER_ROLES.all
        }
    });

    $stateProvider.state("view-user", {
        url: "/usuario/:idUser",
        templateUrl: "view/user.html",
        controller: "UserCtrl",
        controllerAs: "userCtrl",
        authorizedRoles: USER_ROLES.all
    });

    $stateProvider.state("add-user", {
        url: "/adicionar-usuario",
        templateUrl: "view/coach/add-user.html",
        controller: "UserCtrl",
        controllerAs: "userCtrl",
        data: {
            authorizedRoles: [USER_ROLES.coach]
        }
    });
})

    .run(function ($rootScope, $location, AUTH_EVENTS, AuthService) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            if (next.data) {
                var authorizedRoles = next.data.authorizedRoles;
                if (!AuthService.isAuthorized(authorizedRoles)) {
                    $location.path("/nao-autorizado").replace();
                }
                console.log(next);
                if (next.name === "login" && AuthService.isAuthenticated()) {
                    $location.path("/login");
                }
            }
        });
    });