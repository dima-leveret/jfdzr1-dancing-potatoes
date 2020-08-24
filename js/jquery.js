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
    var pot = $(window).scrollTop();
    var find_class_font = $.contains('.font', '.small');
  
    if(pot > 50 && find_class_font == false) { 
     $('.font').addClass('small'); 
    }
    else {
     $('.font').removeClass('small');
    }
  
  });
