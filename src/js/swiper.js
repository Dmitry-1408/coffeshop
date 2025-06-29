"use strict";

/* swiper-1 */
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 23,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 👉 Включаем управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true, // работает только если Swiper в видимой части экрана
  },
  // Включаем свайпы 
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1023: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    /* 425: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }, */
  },
});

/* swiper-2 */
const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 👉 Включаем управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true, // работает только если Swiper в видимой части экрана
  },
  // Включаем свайпы 
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  breakpoints: {
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1023: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    /* 425: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }, */
  }
});
