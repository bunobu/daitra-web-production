import { swiper } from "./swiper";

// swiperの実行
swiper;

/**
 * デバイス幅400px以下の場合はviewportを固定
 * flagSize 固定を始めるデバイス幅
 */

(() => {
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
      width: 100%;
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
  });
};

/**
 * ドロワーボタンを押したらドロワーを開閉する
 */
let drawerFlag = false;
const drawerToggle = document.getElementById("js-drawer-toggle");
const drawer = document.getElementById("js-drawer");

if (drawerToggle) {
  drawerToggle.addEventListener("click", (e) => {
    e.preventDefault();
    drawerToggle.classList.toggle("is-active");
    drawer.classList.toggle("is-active");

    if (drawer.classList.contains("is-active")) {
      bodyFixedAdd();
      drawerFlag = true;
    } else {
      bodyFixedRemove();
      drawerFlag = false;
    }
  });
}

/**
 * QAアコーディオンの開閉
 */
(() => {
  // アコーディオンの要素を取得
  const accordion = document.querySelectorAll(".js-qa-accordion");
  if (accordion.length === 0) return;
  accordion.forEach((el) => {
    // アコーディオンの中身を取得
    const summary = el.querySelector(".js-summary");
    const content = el.querySelector(".js-content");

    // アニメーションのオプション
    const animationOption = {
      duration: 300,
      easing: "ease-in-out",
    };

    // summaryのクリックイベント
    summary.addEventListener("click", (e) => {
      e.preventDefault();

      // open属性がある場合
      if (el.getAttribute("open") !== null) {
        // アニメーションを実行
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

        // アニメーションが終わったらopen属性を削除
        closing.onfinish = () => {
          el.removeAttribute("open");
        };

        // open属性がない場合
      } else {
        // open属性を追加
        el.setAttribute("open", "true");

        // アニメーションを実行
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
})();

/**
 * TOPへ戻るボタンの表示・非表示
 */
(() => {
  const pageTop = document.getElementById("js-page-top");
  if (pageTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        pageTop.classList.add("is-active");
      } else {
        pageTop.classList.remove("is-active");
      }
    });
  }
})();

/**
 * スムーススクロール
 */

const anchors = document.querySelectorAll("a[href^='#']");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    console.log("click");
    e.preventDefault();

    // クリックしたリンクのhref属性を取得
    const href = this.getAttribute("href");

    // href属性が#だけの場合は処理を中断
    if (href === "#") return;

    // 目標のターゲットを取得
    const target = document.querySelector(href);

    // 表示されている画面上からターゲットのtop位置までの距離を取得
    const targetPosition = target.getBoundingClientRect().top;

    // 現在のスクロール位置を取得
    const currentPosition = window.scrollY;

    // headerの高さを取得
    // const headerHeight = document.querySelector("header").offsetHeight;

    // 現在位置からターゲットの位置までの距離を取得
    // const distance = targetPosition + currentPosition - headerHeight;
    const distance = targetPosition + currentPosition;

    // もしドロワーが開いていたら固定を解除して閉じる
    if (drawerFlag) {
      bodyFixedRemove();
      drawerToggle.classList.remove("is-active");
      drawer.classList.remove("is-active");
    }

    // スクロールアニメーションを実行
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  });
});
