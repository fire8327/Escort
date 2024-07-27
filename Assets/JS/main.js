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
/* girlPage-slider */
const swiper2 = new Swiper('.girlPage-slider', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
/* card-slider */
const swiper3 = new Swiper('.card-slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
      el: '.card-pagination'
    },
    thumbs: {
      swiper: swiper2,
    }
});


/* card tabs */
$(".card-tabs").tabs();