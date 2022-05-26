// Slider functionality
const swiper = new Swiper('.swiper', {
  // >=
  breakpoints: {
    0: {
      slidesPerView: 1,
      /* If space between is not added, the next element will appear
         next to current in the same view.
       */
      spaceBetween: 80,
    },

    601: {
      slidesPerView: 2,
      spaceBetween: 80,
    },

    951: {
      slidesPerView: 3,
      spaceBetween: 64,
    },
  },
  navigation: {
    prevEl: '.testimonial-controllers__controller--prev',
    nextEl: '.testimonial-controllers__controller--next',
  },
});
