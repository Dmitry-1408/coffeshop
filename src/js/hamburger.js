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


    <ul class="list-hamb">
        <li class="list__wrap">
          <a href="#" class="paragraph-20 mod-ph">Products</a>
        </li>

        <li class="list__wrap">
          <a href="#" class="paragraph-20 mod-ph">About us</a>
        </li>

        <li class="list__wrap">
          <a href="#" class="paragraph-20 mod-ph">Testimonial</a>
        </li>

        <li class="list__wrap">
          <a href="#" class="paragraph-20 mod-ph">Contact</a>
        </li>
      </ul>


  </nav>
`;
