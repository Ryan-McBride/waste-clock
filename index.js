(function(){
  'use strict';
  angular
    .module('wasteClock', [
      'wasteClock.clock',
      'wasteClock.form',
      'ngRoute'])
    .factory('saleng', function(){
      return {salary: 1000000,
      engineers: 5,
      total: 0};
    })
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
