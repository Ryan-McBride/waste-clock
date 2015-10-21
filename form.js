(function(){
  angular
    .module('wasteClock.form', ['wasteClock'])
    .controller('FormController', function(saleng, $location){
      var session = this;

      session.set = function(info){
        saleng.engineers = info.engineers;
        saleng.salary = info.salary;
        $location.path('/clock');
      };

    });
})();
