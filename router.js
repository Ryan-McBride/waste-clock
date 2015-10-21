(function(){
  'use strict';
  angular
    .module('router', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'FormController as form',
          templateUrl: 'form.html'
        })
        .when('/clock', {
          controller: 'ClockController as clock',
          templateUrl: 'clock.html'
        })
        .otherwise({
          redirectTo: '/'
        });
      });
})();

