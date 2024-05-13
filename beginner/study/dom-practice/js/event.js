//ページの読み込みが完了したらアラートを表示させよう！
window.onload = function () {
  alert("読み込みが完了しました");
};

//js-btnがクリックされた時にアラートを表示させよう！
document.querySelector("#js-btn").addEventListener("click", function () {
  alert("ボタンがクリックされました");
});
