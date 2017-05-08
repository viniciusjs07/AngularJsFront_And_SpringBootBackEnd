angular.module("cadastroCapacitacao").controller("UsersCtrl", function ($scope, StudentsApiService, CoachesApiService) {
    var self = this;

    if ($scope.currentUser.role == $scope.userRoles.student) {
        CoachesApiService.getCoaches().then(successGetUsers, $scope.requestError);
    } else if ($scope.currentUser.role == $scope.userRoles.coach) {
        StudentsApiService.getStudents().then(successGetUsers, $scope.requestError);
    }

    self.getAge = function () {
        return "";
    };

    function successGetUsers(response) {
        self.users = response.data;
        $scope.deleteError();
    }

    function sucessRemoveStudent(response) {
        var idx = self.users.indexOf(self.tempStudent);
        self.users.splice(idx, 1);
        $scope.deleteError();
        delete self.tempStudent;
    }

    self.remove = function (student) {
        self.tempStudent = student;
        StudentsApiService.remove(student).then(sucessRemoveStudent, $scope.requestError);
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDeOrdenacao = !$scope.direcaoDeOrdenacao;
    }

});