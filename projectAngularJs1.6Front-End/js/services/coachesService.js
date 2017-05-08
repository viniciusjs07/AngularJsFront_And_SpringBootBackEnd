angular.module("cadastroCapacitacao").service("CoachesApiService", function ($http, AppConfig) {
    this.getCoaches = function () {
        return $http.get(AppConfig.baseUrl + "coach");
    };

    this.getCoach = function (idCoach) {
        return $http.get(AppConfig.baseUrl + "coach/" + idCoach);
    }
});