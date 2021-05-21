$(document).ready(function(){
  
  $('#quiz-submit').on('click', function(){
    //alert("yo");
    var score = 0;
    
    // Loop through each question
    $('.question').each(function(){
      // hide quiz msg
      $('.quiz-msg', this).remove();
      
      // find correct option
      var correct = $(this).find(':checked[data-correct]').length;
      //console.log(correct);
      
      // check if correct or not
      if( correct == 1){
        // correct!
        // add 1 point to the score
        score++;
        var msgHTML = '<div class="quiz-msg correct">Correct!</div>';
        $(this).append(msgHTML);
      }else{
        // incorrect!
        //alert("incorrect!");
        var msgHTML = '<div class="quiz-msg incorrect">Incorrect!</div>';
        $(this).append(msgHTML);
      }
      
    });
    
    // Output score
    $('#score').text(score);
    
    
  });
  
}); // end document ready


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);