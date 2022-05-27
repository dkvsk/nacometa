$(function () {
  /**
   * Burger
   */

  $(".burger").on("click", function () {
    $(this).children().toggleClass("active");
    $(".header__nav").slideToggle();
    return false;
  });

  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $(".header__nav").removeAttr("style");
    }
  });

  /**
   * init select lang
   */

  $(".js-lang").select2({
    minimumResultsForSearch: -1,
  });

  /**
   * init feedback slider
   */

  const swiper = new Swiper(".swiper.js-feedback-slider", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
