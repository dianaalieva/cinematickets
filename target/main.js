"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      576: {
        items: 3
      },
      768: {
        items: 3
      },
      1920: {
        items: 3
      }
    },
    dots: false,
    center: true
  });
});
$('.scroll__up').on('click', function () {
  $('html').animate({
    scrollTop: 0
  }, 3000);
});
//# sourceMappingURL=main.js.map