window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-menu").style.top = "50";
  } else {
    document.getElementById("nav-menu").style.top = "0";
  }
}