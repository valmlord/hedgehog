
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  
  $('.products-cards').slick({
    variableWidth: true,
    infinite:false,
    slidesToShow: 1,
    slideToScroll: 2,
    arrows : false,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows : false
        }
    }, ]
  });

}); 

// HAMBURGER

    const menu = document.querySelector(".header-menu__nav"),
        menuItem = document.querySelectorAll(".header-menu__list-link"),
        hamburger = document.querySelector(".header-menu__hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("header-menu__hamburger--active"),
        menu.classList.toggle("header-menu__nav--active")
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("header-menu__hamburger--active");
            menu.classList.toggle("header-menu__nav--active");
        });
    });

 


