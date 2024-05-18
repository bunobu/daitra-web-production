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

headerNavMenuToggle();
topBackFunc();
