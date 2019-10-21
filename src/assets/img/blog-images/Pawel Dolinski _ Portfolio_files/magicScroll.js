var imgElements = document.querySelectorAll(".portfolio__img");

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 1000
  }
});

imgElements.forEach(function(e) {
  console.log(e.nextElementSibling);
  new ScrollMagic.Scene({
    triggerElement: e
  })
    .setClassToggle(e, "active")
    .addTo(controller);
});

imgElements.forEach(function(e) {
  new ScrollMagic.Scene({
    triggerElement: e
  })
    .setClassToggle(e.nextElementSibling, "slideIn")
    .addTo(controller);
});
