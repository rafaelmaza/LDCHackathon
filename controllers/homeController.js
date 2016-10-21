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
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 100
    });
    $('select').material_select();
    this.step = 0;
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
        delay: "0.2s",
        selected: 0
    }, {
        fileName: "icon2.png",
        for: 3,
        delay: "0.5s",
        selected: 0
    }, {
        fileName: "icon3.png",
        for: 3,
        delay: "0.9s",
        selected: 0
    }, {
        fileName: "icon4.png",
        for: 3,
        delay: "0.3s",
        selected: 0
    }, {
        fileName: "icon5.png",
        for: 3,
        delay: "0.4s",
        selected: 0
    }, {
        fileName: "icon6.png",
        for: 3,
        delay: "0.8s",
        selected: 0
    }, {
        fileName: "icon7.png",
        for: 3,
        delay: "0.7s",
        selected: 0
    }, {
        fileName: "icon8.png",
        for: 3,
        delay: "0.2s",
        selected: 0
    }, {
        fileName: "icon9.png",
        for: 3,
        delay: "0.1s",
        selected: 0
    }, {
        fileName: "icon10.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon11.png",
        for: 3,
        delay: "0.5s",
        selected: 0
    }];

    this.peopleIconSelection = peopleIconSelection

    function peopleIconSelection(peopleIcon) {
        if (peopleIcon.selected == 0) {
            peopleIcon.selected = 1
        } else {
            peopleIcon.selected = 0
        }
    }

}
