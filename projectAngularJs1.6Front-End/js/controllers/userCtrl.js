angular.module("cadastroCapacitacao").controller("UserCtrl", function ($scope, $location, $stateParams, StudentsApiService, CoachesApiService) {
    var self = this;

    function successAddStudent(response) {
        $scope.deleteError();
        $location.path("/usuarios");
    }

    function successGetUser(response) {
        $scope.deleteError();
        $scope.user = response.data;
        self.setEditMode(false);
    }

    function successSaveUser(response) {
        $scope.user = response.data;
        self.setEditMode(false);
    }

    self.requestError = function (error) {
        $scope.error = "Há campos obrigatórios não preenchidos e/ou inválidos.";
    };

    if ($stateParams.idUser) {
        if ($scope.currentUser.role == $scope.userRoles.coach) {
            StudentsApiService.getById($stateParams.idUser).then(successGetUser, $scope.requestError);
        } else {
            CoachesApiService.getCoach($stateParams.idUser).then(successGetUser, $scope.requestError);
        }
    }

    self.setEditMode = function (editMode) {
        $scope.editMode = editMode;
    };

    self.addUser = function (user) {
        StudentsApiService.add(user).then(successAddStudent(), self.requestError);
    };

    self.save = function (user) {
        if (user.role == $scope.userRoles.coach) {
            //chamar a api de coach pra salvar.
        } else if (user.userType == $scope.userRoles.student) {
            StudentsApiService.update(user).then(successSaveUser, $scope.requestError);
        }
    };

    self.setEditMode(true);
});