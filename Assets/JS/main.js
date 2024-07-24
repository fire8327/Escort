/* hero-slider */
const swiper = new Swiper('.hero-slider', {
    loop: true,
    navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        320: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 7,
        },
    }
});
/* card-slider */
const swiper1 = new Swiper('.card-slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: '.card-pagination'
    }
});


/* card tabs */
$("#card-tabs").tabs();