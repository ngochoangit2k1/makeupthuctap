$(document).ready(function() {
    // When the button is clicked
    $('#video-btn').click(function() {
      // Show the modal
      $('#video-modal').fadeIn();
    });
  
    // When the close button is clicked
    $('.close').click(function() {
      // Hide the modal
      $('#video-modal').fadeOut();
      // Pause the video
      $('iframe').attr('src', $('iframe').attr('src'));
    });
  
    // When the user clicks outside of the modal
    $(window).click(function(e) {
      if ($(e.target).is('#video-modal')) {
        // Hide the modal
        $('#video-modal').fadeOut();
        // Pause the video
        $('iframe').attr('src', $('iframe').attr('src'));
      }
    });
  });
  
  
  
  function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.now();
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
      var daysSpan = clock.querySelector('.days >.value');
      var hoursSpan = clock.querySelector('.hours >.value');
      var minutesSpan = clock.querySelector('.minutes >.value');
      var secondsSpan = clock.querySelector('.seconds >.value');
      var timer = document.querySelector('.countday');
      
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        timer.innerHTML= Math.floor(t.days);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    // count down timer:
    var countday= 1;
    var deadline = new Date(Date.now() + countday * 30 * 60 * 60 * 1000);
    
    initializeClock('clockdiv', deadline);