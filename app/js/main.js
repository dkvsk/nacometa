$(function () {
  /**
   * Burger
   */

  $(".burger").on("click", function () {
    $(this).children().toggleClass("active");
    $(".header__nav").slideToggle();
    return false;
  });

  $(window).on("resize", function (){
    if ($(window).width() > 991) {
      $(".header__nav").removeAttr("style")
    }
  })

  /**
   * init select lang
   */

  $('.js-lang').select2({
    minimumResultsForSearch: -1
  });
    
});

