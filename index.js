let ham = document.querySelector(".ham");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let navList = document.querySelector(".navlist");
let nav = document.querySelector(".nav");

ham.addEventListener("click", showMenu);

function showMenu() {
  bar1.classList.toggle("openBar1");
  bar2.classList.toggle("openBar2");
  bar3.classList.toggle("openBar3");
  navList.classList.toggle("menuList");
  nav.classList.toggle("toggleNav");
}

module.exports = showMenu;