const menuBtn = document.querySelector(".header__menu-btn");
const menuMobile = document.querySelector(".list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-open");
});
