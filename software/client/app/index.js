'use strict';

angular
  .module('xubatorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngTouch',
    'hateoas',
    require('./temperature').name
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'temperature/views/temperature.html',
        controller: 'TemperatureCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
