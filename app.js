'use strict';

angular
	.module('hackathon', [
	  'ngRoute',
	  'ngCookies',
		'ngMessages',
		'naif.base64',
		'facebook',
		'ngVidBg'
  ])
  .config(routesConfig)
  .config(['$httpProvider', resetHeaders])
	.config(function(FacebookProvider) {
		FacebookProvider.init('1798131777068500');
 });

function routesConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}

function resetHeaders($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}
