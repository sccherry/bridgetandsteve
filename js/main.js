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

  function carousel() {
    var $carousel = $('#carousel');

    $carousel.slick({
      lazyLoad: 'ondemand'
    });

    $('[data-link]').on('click', function (e) {
      var slide = $(this).data('link');

      $carousel.slick('slickGoTo', slide);
    });
  }

  function gallery() {
    var $gallery = $('#gallery'),
      $rows = $gallery.find('ul:hidden');
      $show = $gallery.find('#show-more');

    $('img.lazy').lazyload();

    $show.on('click', function (e) {
      $($rows[0]).show();

      $rows = $gallery.find('ul:hidden');

      if ($rows.length === 0) {
        $(this).remove();
      }
    });
  }

  // Call other functions
  $(document).ready(function () {
    countdown();
    carousel();
    gallery();
  });
})(jQuery);
