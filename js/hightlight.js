$(document).scroll(function(){
    var top = $(window).scrollTop();
    var lighting = $.contains('nav-menu-contact', '.light');
  
    if(top > 620 && lighting == false) { 
     $('nav-menu-contact').addClass('light'); 
    }
    else {
     $('nav-menu-contact').removeClass('light'); 
    }
  
  });