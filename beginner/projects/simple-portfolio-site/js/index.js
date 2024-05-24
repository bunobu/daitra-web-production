// ボタンでドロワーメニューの開閉
const drawerToggle = () => {
  $("#js-button-drawer").on("click", function () {
    $(this).toggleClass("is-active");
    $("#js-drawer").slideToggle();
    $("body").toggleClass("is-fixed");
  });
};

// 機能の実行
drawerToggle();
