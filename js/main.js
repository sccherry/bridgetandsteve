(function ($) {

  // Call Foundation plugins
  $(document).foundation();

  // Custom functions
  function countdown() {
    var $el = $('[data-bind="countdown"]'),
      then = new Date($el.data('datetime')).getTime();

    setInterval(function () {
      var now = new Date().getTime(),
        days, hourse, minutes, seconds, countdown;

      seconds = (now - then) / 1000;
      days = parseInt(seconds / 86400);
      seconds = seconds % 86400;
      hours = parseInt(seconds / 3600);
      seconds = seconds % 3600;
      minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);

      countdown = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';

      $el.text(countdown);
    }, 1000);
  }

  // Call other functions
  $(document).ready(function () {
    countdown();
  });
})(jQuery);
