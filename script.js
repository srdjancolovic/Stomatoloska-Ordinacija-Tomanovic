"use-strict";

const mobileMenu = document.querySelector(".nav__links");
const menuToggler = document.querySelector(".menu-toggler");
const navigationBar = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".nav__links ul li a");
const socialLinks = document.querySelector(".social__links__btns");
const topBtn = document.querySelector(".top__btn");
const buttons = document.querySelectorAll(".btn");
const html = document.querySelector("html");
const closeMenuBtn = document.querySelector(".close__menu");
const preloader = document.querySelector(".preloader");

//REMOVE PRELOADER AND START ANIMATIONS WHEN PAGE IS LOADED

$(window).on("load", () => {
  console.log("loaded");
  $(preloader).fadeOut();

  $(function () {
    function onScrollInit(items, trigger) {
      items.each(function () {
        var osElement = $(this),
          osAnimationClass = osElement.attr("data-animation"),
          osAnimationDelay = osElement.attr("data-delay");

        osElement.css({
          //change css of element
          "-webkit-animation-delay": osAnimationDelay,
          "-moz-animation-delay": osAnimationDelay,
          "animation-delay": osAnimationDelay,
        });

        var osTrigger = trigger ? trigger : osElement;

        osTrigger.waypoint(
          function () {
            //scroll upwards and downwards
            osElement.addClass("animated").addClass(osAnimationClass);
          },
          {
            triggerOnce: true,
            offset: "85%",
          }
        );
      });
    }

    onScrollInit($(".os-animation"));
    onScrollInit(
      $(".staggered-animation"),
      $(".staggered-animation-container")
    );
  });
});

//OPEN AND CLOSE MENU BUTTONS
$(menuToggler).click(() => {
  $(mobileMenu).toggleClass("show__menu");
  $(buttons).addClass("disable__btn");
});

$(closeMenuBtn).click(() => {
  $(mobileMenu).toggleClass("show__menu");
  $(buttons).removeClass("disable__btn");
});

////CLOSE MENU ON MOBILE DEVICES ON LINK CLICK

$(navLinks).click(() => {
  $(mobileMenu).removeClass("show__menu");
  $(buttons).removeClass("disable__btn");
});

//////////ADD/REMOVE CLASSES/STYLES ON SCROLL
const checkScroll = () => {
  if ($(window).scrollTop() >= 250) {
    $(navigationBar).addClass("navigation-add-bg");
    $(topBtn).addClass("show");
    $(topBtn).css("z-index", 99000);
  } else {
    $(navigationBar).removeClass("navigation-add-bg");
    $(topBtn).removeClass("show");
    $(topBtn).css("z-index", -1000);
  }
};
$(document).ready(() => {
  checkScroll();
  $(window).scroll(checkScroll);
});

////SMOOTH SCROLL
$(".link, .arrow").on("click", function (e) {
  if (this.hash !== "") {
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000
    );
  }
});

//////PRICE SWIPER
const priceSwiper = new Swiper(".price__list", {
  spaceBetween: 40,
  loop: true,
  clickable: true,
  speed: 1000,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".price-pagination",
    clickable: true,
  },
});

///////TOURSIM SLIDER
const tourism = new Swiper(".tourism__slider", {
  clickable: true,
  loop: true,
  speed: 1200,
  pagination: {
    el: ".toursim-pagination",
  },
  autoplay: {
    delay: 2000,
  },
});

//////BRANDS SWIPER
const swiper = new Swiper(".brands", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".brands-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
});
