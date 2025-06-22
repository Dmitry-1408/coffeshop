"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".products__btn");

  // Функция переключения активной кнопки
  function activateButton(btn) {
    buttons.forEach((b) => b.classList.remove("btm-active"));
    btn.classList.add("btm-active");
  }

  // Устанавливаем слушатели событий
  buttons.forEach((btn) => {
    // Наведение мышью
    btn.addEventListener("mouseenter", () => {
      activateButton(btn);
    });

    // Касание пальцем
    btn.addEventListener(
      "touchstart",
      () => {
        activateButton(btn);
      },
      { passive: true }
    );
  });

  // Убедимся, что по умолчанию активна первая
  activateButton(buttons[0]);
});
