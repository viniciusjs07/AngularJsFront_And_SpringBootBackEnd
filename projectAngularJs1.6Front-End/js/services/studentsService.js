angular.module("cadastroCapacitacao").service("StudentsApiService", function ($http, AppConfig) {
    this.getStudents = function () {
        return $http.get(AppConfig.baseUrl + "student");
    }

    this.getById = function(idUser){
        return $http.get(AppConfig.baseUrl + "student/" + idUser);
    }

    this.remove = function (student) {
        return $http.delete(AppConfig.baseUrl + "coach/student/" + student.id);
    }

    this.add = function (student) {
        return $http.post(AppConfig.baseUrl + "coach/student", angular.toJson(student));
    }

    this.update = function (student) {
        return $http.put(AppConfig.baseUrl + "student", angular.toJson(student));
    }
});