import $ from 'jquery';
import 'slick-carousel';

$('.products-cards').slick({
  variableWidth: true,
  slidesToShow: 1,
  slideToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="prev-slide"><svg class="prev"><use xlink:href="#prev"></use></svg></button>',
  nextArrow: '<button type="button" class="next-slide"><svg class="next"><use xlink:href="#next"></use></svg></button>',
  responsive: [{
    breakpoint: 1180,
    settings: {
      arrows: false
    },
  }, ]
});     