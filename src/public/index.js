(function(){
  'use strict';
  angular
    .module('wasteClock', [
      'wasteClock.clock',
      'wasteClock.form',
      'ngRoute'])
    .factory('saleng', function(){
      return {salary: 1000000,
      engineers: 0,
      mMeeting: false,
      };
    })
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'FormController as form',
          templateUrl: 'public/form/form.html'
        })
        .when('/clock', {
          controller: 'ClockController as clock',
          templateUrl: 'public/clock/clock.html'
        })
        .otherwise({
          redirectTo: '/'
        });
      });
})();
