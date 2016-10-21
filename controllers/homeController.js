angular
    .module('hackathon')
    .controller('HomeController', ['$scope', 'helperService', '$location', '$cookies', '$window', '$http', HomeController])
    .config(['$routeProvider', routes]);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        });
}

function HomeController($location, helperService, $cookies, $window, $http) {
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
    }, {
        text: "'Aprendi muito em tão pouco tempo :)'",
        color: "purple",
        textColor: "white-text",
        dataDelay: "0.9s"
    }, {
        text: "",
        color: "",
        textColor: "",
        dataDelay: "0.9s"
    }];

    this.sexo = "masculino";
    this.peopleIconsPath = helperService.peopleIconsPath
    this.peopleIcons = [{
        fileName: "icon1.png",
        for: 3,
        delay: "0.2s"
    }, {
        fileName: "icon2.png",
        for: 3,
        delay: "0.5s"
    }, {
        fileName: "icon3.png",
        for: 3,
        delay: "0.9s"
    }, {
        fileName: "icon4.png",
        for: 3,
        delay: "0.3s"
    }, {
        fileName: "icon5.png",
        for: 3,
        delay: "0.4s"
    }, {
        fileName: "icon6.png",
        for: 3,
        delay: "0.8s"
    }, {
        fileName: "icon7.png",
        for: 3,
        delay: "0.7s"
    }, {
        fileName: "icon8.png",
        for: 3,
        delay: "0.2s"
    }, {
        fileName: "icon9.png",
        for: 3,
        delay: "0.1s"
    }, {
        fileName: "icon10.png",
        for: 3,
        delay: "1s"
    }, {
        fileName: "icon11.png",
        for: 3,
        delay: "0.5s"
    }];

}
