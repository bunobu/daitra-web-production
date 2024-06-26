/**
 * デバイス幅400px以下の場合はviewportを固定
 * flagSize 固定を始めるデバイス幅
 */

!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.screen.width > 400
        ? "width=device-width,initial-scale=1"
        : "width=400";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

/**
 * モーダル表示時の背景固定・解除する
 */
let scrollTop = window.scrollY;
const bodyFixedAdd = () => {
  scrollTop = window.scrollY;

  document.body.style.cssText = `
      position: fixed;
      top: -${scrollTop}px;
    `;

  console.log("fixed");
};

const bodyFixedRemove = () => {
  document.body.style.cssText = `
      position: "";
      top: "";
  `;
  window.scrollTo({
    top: scrollTop,
    left: 0,
    // behavior: "smooth",
  });
};

/**
 * ドロワーボタンを押したらドロワーを開閉する
 */
(() => {
  const drawerToggle = document.getElementById("js-drawer-toggle");
  const drawer = document.getElementById("js-drawer");

  if (drawerToggle) {
    drawerToggle.addEventListener("click", (e) => {
      e.preventDefault();
      drawerToggle.classList.toggle("is-active");
      drawer.classList.toggle("is-active");

      if (drawer.classList.contains("is-active")) {
        bodyFixedAdd();
      } else {
        bodyFixedRemove();
      }
    });
  }
})();
