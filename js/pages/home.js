// Slider functionality
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 64,
  navigation: {
    prevEl: '.testimonial-controllers__controller--prev',
    nextEl: '.testimonial-controllers__controller--next',
  },
});
