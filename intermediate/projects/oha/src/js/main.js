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
