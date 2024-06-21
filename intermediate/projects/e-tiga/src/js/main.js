import { tamago } from "./tamago";

console.log("main");
tamago();

/**
 * デバイス幅400px以下の場合はviewportを固定
 * flagSize 固定を始めるデバイス幅
 */
(() => {
  const viewportSwitch = () => {
    const screenWidth = window.screen.width;
    const meta = document.querySelector("meta[name='viewport']");
    const flagSize = 400;
    console.log(meta);

    if (screenWidth >= flagSize) {
      meta.setAttribute(
        "content",
        "width=device-width,initial-scale=1.0,viewport-fit=cover"
      );
    } else {
      meta.setAttribute("content", `width=${flagSize}`);
    }
  };

  window.addEventListener("resize", viewportSwitch);
  viewportSwitch();
})();
