// import { tamago } from "./tamago";

// console.log("main");
// tamago();

/**
 * デバイス幅400px以下の場合はviewportを固定
 * flagSize 固定を始めるデバイス幅
 */

!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.screen.width > 428
        ? "width=device-width,initial-scale=1"
        : "width=428";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();
