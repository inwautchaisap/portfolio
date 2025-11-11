// Header Scroll
// let nav = document.querySelector(".header");
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 0) {
//         nav.classList.add("header-scrolled");
//     } else {
//         nav.classList.remove("header-scrolled");
//     }
// }





// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

//testimonial
window.addEventListener('load', function () {
    let items = document.querySelectorAll('.carousel-item');
    let maxHeight = 0;

    items.forEach(item => {
        let h = item.offsetHeight;
        if (h > maxHeight) maxHeight = h;
    });

    items.forEach(item => {
        item.style.height = maxHeight + 'px';
    });
});