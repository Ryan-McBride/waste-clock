(function(){
  angular
    .module('wasteClock.clock', ['wasteClock'])
    .controller('ClockController', function(saleng, $interval){
      var clock = this;
      var curr = 0;
      var perSec = (parseInt(saleng.engineers) * parseInt(saleng.salary)) / 7488000;
      clock.time = 0;

      $interval(function(){
        clock.time = '$' + (curr += perSec).toFixed(2);
      },1000);
    });
})();
