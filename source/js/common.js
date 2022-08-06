let lightningRow = new Swiper(".lightning__row", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 700,
    fadeEffect: { crossFade: true },

    breakpoints: {
      688: {
        slidesPerView: 2,
        spaceBetween: 21,
        centeredSlides: false,
      },
      320: {
        slidesPerView: 1
      },
      1246: {
        slidesPerView: 'auto',
        spaceBetween: 21
      }
    },
});

