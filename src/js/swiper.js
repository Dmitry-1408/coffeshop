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
});
