window.addEventListener("load", function () {
  const xhr = new XMLHttpRequest();
  const htmlTourTag = ``;

  const tourSlide = ".tour-slide .swiper-wrapper";

  const tour = new Swiper(".tour-slide", {
    slidesPerView: 4,
    spaceBetween: 27,
    // 좌, 우측 버튼
    navigation: {
      nextEl: ".tour-slide-wrap .slide-next-bt",
      prevEl: ".tour-slide-wrap .slide-prev-bt",
    },
    // 4장씩 이동하라.
    slidesPerGroup: 4,
  });
});
