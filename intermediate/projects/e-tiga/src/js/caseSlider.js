export const caseSlider = () => {
  const caseSwiper = new Swiper("#js-case-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",

    // If we need pagination
    pagination: {
      el: ".p-case-swiper__pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".p-case-swiper__next",
      prevEl: ".p-case-swiper__prev",
    },

    spaceBetween: 18,

    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      834: {
        slidesPerView: "auto",
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
};
