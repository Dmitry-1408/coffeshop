"use strict";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    forceToAxis: true,
  },
});


const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  keyboard: {
    enabled: false,
  },
  mousewheel: {
    enabled: false,
  },
});

/* зависимость второго слайдера от первого */
swiper.controller.control = swiper2;
swiper2.controller.control = swiper;

