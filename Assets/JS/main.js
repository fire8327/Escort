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
const swiper2 = new Swiper('.card-slider', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: '.card-pagination'
  }
});
/* girlPage-slider */
const swiper3 = new Swiper('.girlPage-slider2', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
const swiper4 = new Swiper('.girlPage-slider', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: '.girlPage-pagination'
  },
  thumbs: {
    swiper: swiper3,
  }
});


/* tabs */
$(".card-tabs").each(function(index) {
  let $this = $(this);
  let prefix = "tabs-" + index;

  $this.find("ul a").each(function(tabIndex) {
    let $tab = $(this);
    let tabId = prefix + "-tab-" + tabIndex;
    let panelId = prefix + "-panel-" + tabIndex;

    $tab.attr("href", "#" + panelId);
    $tab.closest("li").attr("id", tabId);
  });

  $this.find(".card-tab").each(function(panelIndex) {
    $(this).attr("id", prefix + "-panel-" + panelIndex);
  });

  $this.tabs();
});
