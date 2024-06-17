$("#drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#drawer-icon").toggleClass("drawer-icon--checked");
  jQuery("#drawer-content").toggleClass("drawer-content--checked");
});
