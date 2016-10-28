angular
    .module('hackathon')
    .controller('HomeController', ['$scope', '$location', 'helperService', '$cookies', '$window', '$http', 'Facebook', HomeController])
    .config(['$routeProvider', routes]);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        });
}

function HomeController($scope, $location, helperService, $cookies, $window, $http, Facebook) {
    var vm = this;
    vm.form = [];
    $scope.base64Picture = "";


    $scope.resources = [
        'assets/media/hack.mp4',
        'assets/media/hack.mp4'
    ];
    $scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster';
    $scope.fullScreen = true;
    $scope.muted = true;
    $scope.zIndex = '0';
    $scope.playInfo = {};
    $scope.pausePlay = true;




    /**
     * IntentLogin
     */
    $scope.IntentLogin = function() {
        Facebook.getLoginStatus(function(response) {
            if (response.status == 'connected') {
                $scope.logged = true;
                $scope.me();
            } else
                $scope.login();
        });
    };

    /**
     * Login
     */
    $scope.login = function() {
        Facebook.login(function(response) {
            if (response.status == 'connected') {
                $scope.logged = true;
                $scope.me();
            }

        });
    };

    /**
     * me
     */
    $scope.me = function() {
        Facebook.api('/me?fields=name,email,age_range,gender,locale,picture', {
            fields: 'email,name,gender,locale,age_range,picture'
        }, function(response) {
            $scope.$apply(function() {
                $scope.user = response;
                console.log(response);
                vm.form.name = $scope.user.name;
                vm.form.email = $scope.user.email;
                vm.form.picture = "https://graph.facebook.com/" + $scope.user.id + "/picture?type=large";
            });
        });
    };


    /**
     * Taking approach of Events
     */
    $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status == 'connected') {
            $scope.$apply(function() {
                console.log("logou");
                $scope.me();
            });
        } else {
            $scope.$apply(function() {
                console.log("Não Logou");
            });
        }
    });

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 100
    });
    $('select').material_select();
    this.spotify = false;
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

    vm.form.sexo = "masculino";
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
    }, {
        fileName: "icon12.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon13.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon14.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon15.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon16.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon17.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon18.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon19.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon20.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon21.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon22.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon23.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon24.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon25.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon26.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon27.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon28.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon29.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon30.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon31.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon32.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon33.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon34.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon35.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon36.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon37.png",
        for: 3,
        delay: "1s",
        selected: 0
    }];

    this.peopleIconSelection = peopleIconSelection

    function peopleIconSelection(peopleIcon) {
        if (peopleIcon.selected == 0) {
            peopleIcon.selected = 1;
        } else {
            peopleIcon.selected = 0;
        }
    }

    this.spotifyChange = spotifyChange;

    function spotifyChange() {
        if (this.spotify) {
            this.spotify = false;
        } else {
            this.spotify = true;
        }
    }

    vm.changeImage = changeImage;

    function changeImage() {
        vm.form.picture = "data:image/png;base64," + $scope.base64Picture.base64;
    }

    vm.submitSignupForm = submitSignupForm;
    $scope.droppedLike = [];
    $scope.droppedDislike = [];
    $scope.droppedMain = [];
    $scope.onDropLike = function(data, evt) {
        if ($scope.droppedLike.length > 2) {
            showMessage("Só pode selecionar 3");
            return;
        }
        var result = $.grep($scope.droppedLike, function(e) {
            return e.fileName == data.fileName;
        });
        if (result.length > 0) {
            showMessage("Você já adicionou este ícone");
            return;
        }
        var index = $scope.droppedLike.indexOf(data);
        $scope.droppedLike.push(data);
        console.log($scope.droppedLike);
    }
    $scope.onDropDislike = function(data, evt) {
        if ($scope.droppedDislike.length > 2) {
            showMessage("Só pode selecionar 3");
            return;
        }
        var result = $.grep($scope.droppedDislike, function(e) {
            return e.fileName == data.fileName;
        });
        if (result.length > 0) {
            showMessage("Você já adicionou este ícone");
            return;
        }
        var index = $scope.droppedDislike.indexOf(data);
        $scope.droppedDislike.push(data);
        console.log($scope.droppedDislike);
    }
    $scope.onDropMain = function(data, evt) {
        if ($scope.droppedMain.length > 0) {
            showMessage("Só pode selecionar 1");
            return;
        }
        var index = $scope.droppedMain.indexOf(data);
        $scope.droppedMain.push(data);
        console.log($scope.droppedMain);

    }
    $scope.removeDroppedLike = function(data) {
        for (var i = 0; i < $scope.droppedLike.length; i++) {
          if($scope.droppedLike[i].fileName == data.fileName) {
            $scope.droppedLike.splice(i,1);
          }
        }
    }
    $scope.removeDroppedDislike = function(data) {
      for (var i = 0; i < $scope.droppedDislike.length; i++) {
        if($scope.droppedDislike[i].fileName == data.fileName) {
          $scope.droppedDislike.splice(i,1);
        }
      }
    }
    $scope.removeDroppedMain = function(data) {
      for (var i = 0; i < $scope.droppedMain.length; i++) {
        if($scope.droppedMain[i].fileName == data.fileName) {
          $scope.droppedMain.splice(i,1);
        }
      }
    }

    function submitSignupForm(form) {
        console.log(vm.form);
    }


    vm.showMessage = showMessage;

    function showMessage(message) {
        $window.alert(message);
    }

}
