$(document).ready(function () {
  async function getDogs() {
    dogImages = await fetch("https://dog.ceo/api/breeds/image/random/3").then(
      (res) => res.json()
    );

    dogImages.message.forEach((element, idx) => {
      $(".mentions")[idx].src = element;
    });
  }
  getDogs();

  $(window).scroll(function () {
    Sticknav();
  });
});

function Sticknav() {
  const navHeight = Math.floor($("nav").outerHeight());

  const scrollength = $(this).scrollTop();

  if (navHeight / 2 < scrollength) {
    $("nav").addClass("stickNav");
    $("header").css("margin-top", navHeight.toString() + "px");
  } else {
    console.log("waiting");
    $("nav").removeClass("stickNav");
    $("header").css("margin-top", "0px");
  }
}
// ======functions
