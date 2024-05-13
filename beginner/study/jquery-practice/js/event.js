/**
 * イベント
 * 特定のイベントをきっかけに処理を行う
 *
 * jQuery("セレクタ").on("イベント名", function() {})
 */

// Clickイベント
jQuery("#js-btn").on("click", function () {
  jQuery("#js-title").text("Clickでタイトルを変更したよ");
});

// Hoverイベント
jQuery("#js-title").on({
  // hoverされた時
  mouseenter: function () {
    jQuery(this).css("color", "orange");
  },

  // hoverが外れた時
  mouseleave: function () {
    jQuery(this).css("color", "#082b48");
  },
});
