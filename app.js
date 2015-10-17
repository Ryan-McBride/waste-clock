$(document).ready(function(){
  var eng = 0;
  var sal = 0;
  $('form').submit(function(event){
    event.preventDefault();
    eng = $('#engineers').val();
    sal = $('#salary').val();
    startClock(eng, sal);
  });

  $('body', '.reset').on('click', function(event){
    console.log('yolooo');
    startClock(eng, sal);
  });

});

var startClock = function(engie, salary){
  salary = salary || 100000;
  var start=0;
  var perSec = (parseInt(engie) * parseInt(salary)) / 2080 / 60 / 60;
  
  $('center').html('<div class="time">$0.00</div><button class="reset">RESET</button>');

  setInterval(function(){
    $('.time').text('$' + (start += perSec).toFixed(2));
  }, 1000);
};
