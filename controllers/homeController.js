angular
    .module('hackathon')
    .controller('HomeController', ['$scope', '$location', '$cookies', '$window', '$http', HomeController])
    .config(['$routeProvider', routes]);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        });
}

function HomeController($location, $cookies, $window, $http) {
    this.eventDate = "Próximo evento: 29/11/2016";
    this.terms = "Conhece nosso regulamento? Clique Aqui";
    this.bubbles = [{
        text: "'Foi uma experiência única!'",
        color: "white",
        textColor: "black-text",
        dataDelay: "0.1s"
    }, {
        text: "'Sem dúvidas foi um dia bacana'",
        color: "red",
        textColor: "white-text",
        dataDelay: "0.5s"
    }, {
        text: "'Adorei! Quero muito trabalhar com essa equipe'",
        color: "blue",
        textColor: "white-text",
        dataDelay: "0.3s"
    }, {
        text: "'O melhor foi a pizza! hahaha'",
        color: "green",
        textColor: "white-text",
        dataDelay: "0.6s"
    },
    {
        text: "'Aprendi muito em tão pouco tempo :)'",
        color: "purple",
        textColor: "white-text",
        dataDelay: "0.9s"
    },
    {
        text: "",
        color: "",
        textColor: "",
        dataDelay: "0.9s"
    }];
}
