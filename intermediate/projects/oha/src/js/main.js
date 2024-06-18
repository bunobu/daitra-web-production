$("#drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#drawer-icon").toggleClass("drawer-icon--checked");
  jQuery("#drawer-content").toggleClass("drawer-content--checked");
});

$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("qa-box--open")) {
    $(this).parent().removeClass("qa-box--open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("qa-box--open");
    $(this).next().slideDown();
  }
});

const rootFontSize = getComputedStyle(document.documentElement).fontSize;
// const gallerySwiperBetWeen = parseInt(rootFontSize) * 4.375;
const gallerySwiperBetWeen = parseInt(rootFontSize) * 5;

const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: gallerySwiperBetWeen + 2,

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

$(".js-modal-open").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].showModal();
  $("body").css("overflow", "hidden");
});

$(".js-modal-close").on("click", function (e) {
  e.preventDefault();
  $("#js-about-modal")[0].close();
  $("body").css("overflow", "auto ");
});
