import $ from 'jquery';
import 'slick-carousel';

  $('.products-cards').slick({
    variableWidth: true,
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