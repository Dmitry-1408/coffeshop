"use strict";

const hamburgerBtn = document.querySelector(".hamburger-btn");
const headerMenu = document.querySelector(".menu");
const hamburgerActive = document.querySelector(".hamburger-active");
const hamburger = document.querySelector(".hanburger");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");

  const existingMenu = document.querySelector(".hamb");

  if (existingMenu) {
    closeMenu(existingMenu);
  } else {
    openMenu();
  }
});

// Функция для открытия меню
function openMenu() {
  headerMenu.insertAdjacentHTML("afterbegin", hambClass);
  const hambElement = document.querySelector(".hamb");

  // Даем время на рендеринг
  setTimeout(() => {
    hambElement.classList.add("hamb--active");
  }, 10);

  // Назначаем обработчик клика для закрытия меню
  hambElement.addEventListener("click", () => closeMenu(hambElement));
}

// Функция для закрытия меню
function closeMenu(hambElement) {
  if (hambElement) {
    hambElement.classList.add("hamb--closing");

    // Ждем завершения анимации перед удалением элемента
    setTimeout(() => {
      hambElement.remove();
    }, 500);
  }

  hamburgerBtn.classList.remove("hamburger-active");
}

const hambClass = `
  <nav class="hamb">

    <div class="registr-hamb">
      <a class="registration__start" href="#">Log in</a>
      <button class="btn">Try For Free</button>
    </div>
    <ul class="menu-list">
      <li class="list__wrap"><a href="#" class="list__link">Home</a></li>
      <li class="list__wrap"><a href="#" class="list__link">Features</a></li>
      <li class="list__wrap"><a href="#" class="list__link">Testimonial</a></li>
      <li class="list__wrap"><a href="#" class="list__link">FAQ</a></li>
    </ul>

  </nav>
`;
