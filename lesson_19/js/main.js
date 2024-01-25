$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easins: "ease",
    // autoplay: true,
    autoplaySpeed: 1500,
    touchThereshold: 10,
    // centerMode: false,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });
});
