(function(){
  'use strict';
  angular
    .module('wasteClock', [
      'wasteClock.clock',
      'wasteClock.form',
      'ui.router'])
    .factory('saleng', function(){
      return {salary: 1000000,
      engineers: 0,
      mMeeting: false,
      };
    })
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('form', {
          url: '/',
          controller: 'FormController as form',
          templateUrl: 'public/form/form.html'
        })
        .state('clock', {
          url: '/clock',
          controller: 'ClockController as clock',
          templateUrl: 'public/clock/clock.html'
        })
        .otherwise({
          redirectTo: '/'
        });
      });
})();
