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

/**
 * QAアコーディオンの開閉
 */
document.querySelectorAll(".js-qa-accordion").forEach((el) => {
  const summary = el.querySelector(".js-summary");
  const content = el.querySelector(".js-content");

  const animationOption = {
    duration: 300,
    easing: "ease-in-out",
  };

  summary.addEventListener("click", (e) => {
    e.preventDefault();

    if (el.getAttribute("open") !== null) {
      const closing = content.animate(
        {
          height: [content.offsetHeight + "px", 0],
          opacity: [1, 0],
        },
        {
          duration: animationOption.duration,
          easing: animationOption.easing,
        }
      );

      closing.onfinish = () => {
        el.removeAttribute("open");
      };
    } else {
      el.setAttribute("open", "true");

      const opening = content.animate(
        {
          height: [0, content.offsetHeight + "px"],
          opacity: [0, 1],
        },
        {
          duration: animationOption.duration,
          easing: animationOption.easing,
        }
      );
    }
  });
});
