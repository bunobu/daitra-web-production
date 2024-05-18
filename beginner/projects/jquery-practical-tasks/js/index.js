const headerNavMenu = $(".js-header-nav-menu");

const windowWidth = $(window).width();

if (headerNavMenu.hasClass("is-slide-active")) {
  $(".js-header-nav-menu").on("click", function () {
    $(".js-header-nav-menu-sub").slideToggle();
  });
}
