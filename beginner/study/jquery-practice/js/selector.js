/**
 * セレクタの指定方法 / DOM操作
 * jQuery（"セレクタ"）.メソッド("パラメーター」");
 */

// IDで指定
jQuery("#js-title").css("color", "red");

// Classで指定
jQuery(".text").css("color", "blue");

// Tagで指定
jQuery("h1").css("color", "pink");

// 属性で指定
jQuery("[href]").css("color", "green");

// まとめてセレクタを指定
jQuery("h1, h2").css("color", "gray");

//グループセレクタ
//.hoge と .fuga
jQuery(".hoge, .fuga");

//子孫セレクター
//.hoge 配下の .fuga
jQuery(".hoge .fuga");

//子セレクター
//.hoge 直下の .fuga
jQuery(".hoge > .fuga");

//一致する全ての要素が取得される
const textList = jQuery(".text");

//個別に操作するためには繰り返し処理が必要
textList.each(function (index, element) {
  // element == this
  console.log(this);
  console.log(jQuery(this).text());
});
