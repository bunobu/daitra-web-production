/**
 * idでHTML要素を取得
 */
const title1 = document.querySelector("#js-title").outerHTML;
const title2 = document.getElementById("js-title");

/**
 * Class名で取得
 */
const text1 = document.querySelector(".text").outerHTML;
const text2 = document.getElementsByClassName("text");

// すべてのClassを取得
const elements = document.querySelectorAll(".text");
for (const element of elements) {
  console.log(element.outerHTML);
}

/**
 * タグで取得
 */
const h1 = document.querySelector("h1").outerHTML;
const h1a = document.getElementsByTagName("h1");

/**
 * 属性で取得
 */
const href = document.querySelector(
  '[ href="https://www.daily-trial.com/"]'
).outerHTML;
