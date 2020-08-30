function toggle(){
    var blur = document.querySelector('.blur');
    blur.classList.toggle('active')
    var popup = document.querySelector('.popup');
    popup.classList.toggle('active')
}
function getName(){
    var y = document.getElementById('user')
    var x = document.getElementById('user-name').value;
    y.innerHTML=x;
}