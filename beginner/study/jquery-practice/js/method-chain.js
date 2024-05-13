/**
 * メソッドチェーン
 *
 * 複数メソッドをつなげて書くこともできる
 */
jQuery("#js-title").css("color", "red");
jQuery("#js-title").text("Daily Trial");

//　↓メソッドを繋げて書くと
jQuery("#js-title").css("color", "red").text("Daily Trial");

/**
 * メソッドチェーンを使ったアニメーション
 */

// .fadeIn()  フワッと表示。
jQuery("#js-title").fadeIn();

// .fadeOut()  フワッと消える。
jQuery("#js-btn").fadeOut();

// .slideDown()  スライドして表示。
jQuery("#js-title").slideDown();

// .slideUp()  スライドして消える。
jQuery("#js-btn").slideUp();
