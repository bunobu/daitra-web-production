/**
 * メソッドとパラメーター
 * jQuery("メソッド").("パラメーター")
 */

/**
 * Class操作
 */

// クラスの追加
jQuery("#js-btn").addClass("btn-register");

// クラスの削除
jQuery("#js-register").removeClass("btn-register");

/**
 * CSSプロパティ操作
 */

// CSSプロパティの設定
jQuery("#js-title").css("color", "red");
// CSSプロパティを複数行設定する
jQuery("#js-title").css({
  color: "red",
  fontSize: "40px",
});

/**
 * 文字列の操作
 */

// 文字列の変更
jQuery("#js-title").text("Daily Trial");
// テキストの取得
const title = jQuery("#js-title").text();

/**
 * HTML構造の操作
 */

// HTMLの構造を取得
const dom = jQuery("body").html();
// HTML構造の変更
// jQuery("body").html("<h1>こんにちは</h1>");

/**
 * 要素の挿入、削除
 */

// 要素の先頭にHTMLを追加
jQuery("#js-title").prepend("<p>タイトルの追加<p>");

// 要素の最後にHTMLを追加
jQuery("#js-title").append("<p>タイトルの追加<p>");

// 要素の削除
jQuery("#js-title").remove();

/**
 * 属性の操作
 */

// 属性の値を取得
jQuery("a#special-link").attr("href");

// 属性の値を変更
jQuery("a#special-link").attr("href", "https://xxxx.com");

// 属性の削除
jQuery("a#special-link").removeAttr("href");

/**
 * Fromの操作
 */

// フォームの入力値を取得する
jQuery("input#name").val();

// 入力値を変更する
jQuery("input#name").val("デイトラ");
