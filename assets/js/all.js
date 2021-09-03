"use strict";

$(document).ready(function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
});
//# sourceMappingURL=all.js.map
