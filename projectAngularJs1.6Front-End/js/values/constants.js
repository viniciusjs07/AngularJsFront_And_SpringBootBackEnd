angular.module("cadastroCapacitacao").constant("USER_ROLES", {
    student: "ALUNO",
    coach: "COACH",
    all: ["ALUNO", "COACH"]
})
    .constant("AUTH_EVENTS", {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });