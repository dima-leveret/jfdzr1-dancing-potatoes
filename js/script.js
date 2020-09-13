window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-menu").style.top = "50";
  } else {
    document.getElementById("nav-menu").style.top = "0";
  }
}

function WHCheckCookies(){
  if(!localStorage.cookies_accepted) {
    var cookies_message = document.getElementById("cookies-message"); 
    cookies_message.style.display="block" 
  } 
} 
window.onload = WHCheckCookies;
function WHCloseCookiesWindow(){ 
  localStorage.cookies_accepted = true
  document.getElementById("cookies-message-container").removeChild(document.getElementById("cookies-message"));

}


function activeLinkControl() {
  $('nav-menu a').onscroll(function() {
    $('nav-menu a').removeClass('active')
    $(this).closest('nav-menu a').addClass('active')
  })
}
