"use strict";

/* Синхронизировать высоту слайдов по высоте самого высокого */
const slides = document.querySelectorAll(".swiper-slide");
let maxHeight = 0;

// Найдём максимальную высоту среди всех слайдов
slides.forEach((slide) => {
  const height = slide.scrollHeight;
  if (height > maxHeight) {
    maxHeight = height;
  }
});

// Установим всем слайдам одинаковую высоту
slides.forEach((slide) => {
  slide.style.height = `${maxHeight}px`;
});