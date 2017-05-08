angular.module("cadastroCapacitacao").factory("AuthService", function ($http, AppConfig, SessionService) {

    function _createSession(response) {
        SessionService.createSession(response.data);
        return response;
    }

    function _getToken() {
        return SessionService.id;
    }

    function _logout() {
        SessionService.destroy();
    }

    function _login(credentials) {
        return $http.post(AppConfig.baseUrl + "auth", credentials).then(_createSession);
    }

    function _isAuthenticated() {
        return !!SessionService.id;
    }

    function _isAuthorized(authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles]
        }
        return _isAuthenticated() && authorizedRoles.indexOf(SessionService.user.role) != -1;
    }

    return {
        createSession : _createSession,
        getToken : _getToken,
        logout : _logout,
        login : _login,
        isAuthenticated : _isAuthenticated,
        isAuthorized : _isAuthorized()
    }

});