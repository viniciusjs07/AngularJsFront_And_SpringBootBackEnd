angular.module("cadastroCapacitacao").factory("AuthInterceptor").config(function ($httpProvider) {
    var authInterceptor = function ($location, $q, SessionService) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (SessionService.id) {
                    config.headers["Authorization"] = SessionService.id;
                }

                return config;
            },

            responseError: function (response) {
                return $q.reject(response);
            }
        }
    }

    $httpProvider.interceptors.push(authInterceptor);
});

