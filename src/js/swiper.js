"use strict";

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
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
