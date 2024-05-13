/**
 * >>> HTML要素の追加
 */

/**
 * ボタンの追加
 */

// aタグの作成
const btn = document.createElement("a");

// textを追加
btn.innerText = "ログイン";

// classとhrefを追加
btn.setAttribute("class", "btn");
btn.setAttribute("href", "https://tokyofreelance.jp/");

document.getElementById("js-btn-wrap").appendChild(btn);

/**
 * <<< HTML要素の追加
 */
