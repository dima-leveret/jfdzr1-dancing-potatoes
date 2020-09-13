function pop2(){
    var blur = document.querySelector('.blur');
    blur.classList.toggle('active')
    var popup = document.querySelector('.pop2');
    popup.classList.toggle('active')
}


let pageIndex = 1;
showPages(pageIndex);

function plusPage(n) {
    showPages(pageIndex += n);
};

function currentPage(n) {
    showPages(pageIndex = n);
};

function showPages(n) {
    let pages = document.getElementsByClassName("instrukja-container__pages");

    if (n > pages.length) {
        pageIndex = 1;
    }

    if (n < 1) {
        pageIndex = pages.length;
    }

    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }

    pages[pageIndex-1].style.display = "block";
}
