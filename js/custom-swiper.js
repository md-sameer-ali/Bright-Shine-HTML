const swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 55,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".bannerSwiper", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper3 = new Swiper(".blogSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

