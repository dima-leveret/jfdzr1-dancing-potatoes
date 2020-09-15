$(document).scroll(function(){
  var top = $(window).scrollTop();
  var find_class_small = $.contains('nav', '.small');

  if(top > 620 && find_class_small == false) { 
   $('nav').addClass('small'); 
  }
  else {
   $('nav').removeClass('small'); 
  }

});
$(document).scroll(function(){
  var top = $(window).scrollTop();
  var find_class_small = $.contains('nav', '.small');

  if(top > 50 && find_class_small == false) { 
   $('nav-menu a').addClass('active'); 
  }
  else {
   $('nav-menu a').removeClass('active'); 
  }

});

jQuery(document).ready(function() {

  var btn = $('#button-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() < 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

$('#menu').onePageNav({
  currentClass: 'current',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing'
});