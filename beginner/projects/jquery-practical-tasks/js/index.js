const device = $(window);
const topBackButton = $(".js-top-back");

const headerNavMenuToggle = () => {
  const headerNavMenu = $(".js-header-nav-menu");
  if (headerNavMenu.hasClass("is-slide-active")) {
    $(".js-header-nav-menu").on("click", function () {
      $(".js-header-nav-menu-sub").slideToggle();
    });
  }
};

const topBackFunc = () => {
  topBackButton.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
};

device.on("scroll", function () {
  if (device.scrollTop() >= 80) {
    topBackButton.fadeIn(300);
  } else {
    topBackButton.fadeOut(300);
  }
});

const menuModalToggle = () => {
  $(".js-menu-img").on("click", function () {
    $(".menu-modal-bg").html($(this).prop("outerHTML"));
    $(".menu-modal-bg").fadeIn(300);

    $("body").css("overflow", "hidden");
  });

  $(".menu-modal-bg").on("click", function () {
    $(".menu-modal-bg").fadeOut(300);
    $("body").css("overflow", "initial");
  });
};

headerNavMenuToggle();
topBackFunc();
menuModalToggle();
