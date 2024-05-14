/**
 * ボタンクリックでアラートの表示
 */

// JSでの実装
document.getElementById("js-button-alert").addEventListener("click", () => {
  alert("JS - ボタンがクリックされました！");
});

// jQueryでの実装
jQuery("#js-button-alert").on("click", () => {
  alert("jQuery - ボタンがクリックされました！");
});

/**
 * アコーディオンメニュー
 */
const accordionList = jQuery(".js-accordion");
accordionList.each(function (index, element) {
  jQuery(element).on("click", () => {
    jQuery(element).next().slideToggle();
  });
});

/**
 * TOPへ戻るボタン
 */
jQuery("#js-button-top").on("click", () => {
  // ブラウザによってはbody, htmlが対象になる方が異なる
  jQuery("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

/**
 * ドロワーメニュー
 */
jQuery("#js-button-drawer").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle();
  jQuery("body").toggleClass("is-fixed");
});
