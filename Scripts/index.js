$(document).ready(function() {

    $('.box').hover(function() {
      $(this).toggleClass('box-hover');
    });
  

    $('.toggle-button').click(function() {
      $('.toggle-element').toggle();
    });
  });
  
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
  