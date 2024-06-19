// ドロワー

$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("drawer-icon--checked");
  jQuery("#js-drawer-content").toggleClass("drawer-content--checked");
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

// スライダー
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

// モーダル
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

// スムーススクロール

$('#js-drawer-content a[href^="#"]').on("click", function (e) {
  // e.preventDefault();
  jQuery("#js-drawer-icon").removeClass("drawer-icon--checked");
  jQuery("#js-drawer-content").removeClass("drawer-content--checked");
});

$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const id = $(this).attr("href");
  const target = $("#" === id ? "html" : id);
  const position = $(target).offset().top;
  const speed = 1000;

  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or linear
  );
});

// スクロールしたらページTOPに戻るボタンを表示
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $("#js-page-top").addClass("page-top--show");
  } else {
    $("#js-page-top").removeClass("page-top--show");
  }
});

// スクロールに応じて要素を表示させる
const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});
