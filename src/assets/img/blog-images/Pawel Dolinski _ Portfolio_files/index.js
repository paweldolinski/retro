$(document).ready(function() {
  $(window).bind("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".nav").addClass("nav__scrolled");
    } else {
      $(".nav").removeClass("nav__scrolled");
    }
  });
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        900,
        "swing",
        function() {
          window.location.hash = target;
        }
      );
  });
});
