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
    // let dots = document.getElementsByClassName("dot");

    if (n > pages.length) {
        pageIndex = 1;
    }

    if (n < 1) {
        pageIndex = pages.length;
    }

    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }

    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace("active","");
    // }

    pages[pageIndex-1].style.display = "block";
    // dots[pageIndex-1].className += "active";
}
