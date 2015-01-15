$(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  
  $('.cover').css('background-position', 'left ' + ((scrolledY)) + 'px');
  
  var opacityCover = function() {
    if (scrolledY > 100 && scrolledY < 375)
      return -((scrolledY - 375) / 375);
    else if (scrolledY >= 375)
      return 0;
    else
      return 1;
  }
  $('.cover-text').css('opacity', opacityCover);
  
  if (scrolledY > 550) {
    $('.navbar-main').addClass('navbar-main-on');
  }
  else {
    $('.navbar-main').removeClass('navbar-main-on');
  }
});