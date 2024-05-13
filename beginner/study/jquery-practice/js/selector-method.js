/**
 * メソッドを使った要素の指定（子要素、孫要素）
 */

// #js-sectionを起点に子孫要素のpタグを操作
jQuery("#js-section").find("p").css("color", "red");

// #js-sectionを起点に子要素のpタグを操作
jQuery("#js-section").children("p").css("color", "blue");
