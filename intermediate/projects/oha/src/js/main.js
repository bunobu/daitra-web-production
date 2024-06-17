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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
