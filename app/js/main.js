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
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".feedback__button-next",
      prevEl: ".feedback__button-prev",
    },
  });

  /**
   * init reviews slider
   */

  const reviews = new Swiper(".swiper.js-reviews-slider", {
    loop: false,
    slidesPerView: 1.9,
    spaceBetween: 13,
    breakpoints: {
      575: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
      767: {
        slidesPerView: 3.5,
        spaceBetween: 18,
      },
      991: {
        slidesPerView: 4.5,
        spaceBetween: 18,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
    },
  });
});
