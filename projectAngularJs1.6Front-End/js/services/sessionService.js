angular.module("cadastroCapacitacao").service("SessionService", function ($window) {
    var self = this;

    self.createSession = function (data) {
        self.id = data.token;
        self.user = {};
        self.user.id = data.user.id;
        self.user.role = data.user.role;
        delete data.message;
        $window.sessionStorage.setItem("user-data", JSON.stringify(data));
    };

    self.destroy = function () {
        delete self.id;
        delete self.user;
        $window.sessionStorage.setItem("user-data", null);
    };

    var userData = JSON.parse($window.sessionStorage.getItem("user-data"));
    if (userData) {
        self.createSession(userData);
    }
});