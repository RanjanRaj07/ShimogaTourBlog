var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  var swiper = new Swiper(".parSwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });