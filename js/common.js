window.onload = function(){
  var navBlock = document.querySelector(".page-nav__items");
  var navToggle = document.querySelector(".header__menu-button");
  var closeNav = function () {
    navBlock.classList.remove("page-nav__items--opened");
    navBlock.classList.add("page-nav__items--closed");
    navToggle.classList.remove("header__menu-button--cross");
    navToggle.classList.add("header__menu-button--hamburger");
  }
  var openNav = function () {
    navBlock.classList.remove("page-nav__items--closed");
    navBlock.classList.add("page-nav__items--opened");
    navToggle.classList.remove("header__menu-button--hamburger");
    navToggle.classList.add("header__menu-button--cross");
  }

  closeNav();
  navToggle.addEventListener("click", function() {
    if (navBlock.classList.contains("page-nav__items--closed")) {
      openNav();
    } else {
      closeNav();
    }
  });
};
