$(document).scroll(function(){
    var top = $(window).scrollTop();
    var find_class_small = $.contains('nav', '.small');
  
    if(top > 50 && find_class_small == false) { // tu zmieniamy wysokosc - gdy strona zjedzie 50px w dol
     $('nav').addClass('small'); // nawigacja otrzyma klase small
    }
    else {
     $('nav').removeClass('small'); // w przeciwnym wypadku usuwamy klase small
    }
    
    
  });
  $(document).scroll(function(){
    var pot = $(window).scrollTop();
    var find_class_font = $.contains('.font', '.small');
  
    if(pot > 50 && find_class_font == false) { // tu zmieniamy wysokosc - gdy strona zjedzie 50px w dol
     $('.font').addClass('small'); // nawigacja otrzyma klase small
    }
    else {
     $('.font').removeClass('small'); // w przeciwnym wypadku usuwamy klase small
    }
  
  });
