"use strict";

import { caseSlider } from "./caseSlider";
import { loading } from "./loading";

loading();
caseSlider();
/**
 * デバイス幅400px以下の場合はviewportを固定
 * flagSize 固定を始めるデバイス幅
 */

(() => {
  // viewport属性の取得
  const viewport = document.querySelector('meta[name="viewport"]');
  // 固定するデバイス幅
  const staticWidth = 420;

  // viewportの切り替え関数
  function switchViewport() {
    const value =
      // window.screen.widthはデバイスの幅を取得
      window.screen.width > staticWidth
        ? // デバイス幅が条件より大きい場合はデバイス幅に合わせる
          "width=device-width,initial-scale=1"
        : // デバイス幅が条件より小さい場合は固定の幅に合わせる
          `width=${staticWidth}`;

    // viewportの値がvalueと異なる場合はvalueをセット
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  // リサイズ時にviewportを切り替え
  addEventListener("resize", switchViewport, false);
  // 初期読み込み時にviewportを切り替え
  switchViewport();
})();

/**
 * グローバル変数
 */

const body = document.querySelector("body");

let drawerFlag = false;
const drawerToggle = document.getElementById("js-drawer-toggle");
const drawer = document.getElementById("js-drawer");

/**
 * グローバル関数
 */

// bodyの固定をする
const bodyFixedAdd = () => {
  // スクロール位置を取得
  const scrollTop = window.scrollY;

  // bodyを固定して位置を保持
  body.style.cssText = `
      position: fixed;
      top: -${scrollTop}px;
      width: 100%;
    `;
};

// bodyの固定を解除する
const bodyFixedRemove = () => {
  // fixedのtopの位置を取得
  const scrollTop = body.style.top;

  // bodyの固定を解除
  body.style.cssText = `
      position: "";
      top: "";
  `;

  // スクロール位置にfixedのtopの位置を格納
  const scrollY = parseInt(scrollTop || "0") * -1;

  // 現在の位置までスクロール
  window.scrollTo(0, scrollY);
  // スクロール位置を返す
  return scrollY;
};

/**
 * ドロワーボタンを押したらドロワーを開閉する
 */
(() => {
  if (drawerToggle) {
    drawerToggle.addEventListener("click", (e) => {
      // デフォルトのイベントをキャンセル
      e.preventDefault();

      // ドロワーが開いている場合
      if (drawer.classList.contains("is-active")) {
        // bodyの固定を解除
        bodyFixedRemove();
        // ドロワーボタンのアクティブクラスを削除
        drawerToggle.classList.remove("is-active");
        // ドロワーのアクティブクラスを削除
        drawer.classList.remove("is-active");
        // フラグをfalseにする
        drawerFlag = false;

        // ドロワーが閉じている場合
      } else {
        // bodyを固定
        bodyFixedAdd();
        // ドロワーボタンにアクティブクラスを追加
        drawerToggle.classList.add("is-active");
        // ドロワーにアクティブクラスを追加
        drawer.classList.add("is-active");
        // フラグをtrueにする
        drawerFlag = true;
      }
    });
  }
})();

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
(() => {
  // ページ内リンクの要素を全て取得
  const anchors = document.querySelectorAll("a[href^='#']");
  // ページ内リンクがない場合は処理を中断
  if (anchors.length > 0) {
    // ページ内リンクの数だけ処理を繰り返す
    anchors.forEach((anchor) => {
      // ページ内リンクがクリックされたら処理を実行
      anchor.addEventListener("click", function (e) {
        // デフォルトのイベントをキャンセル
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
        let currentPosition = window.scrollY;

        // headerの高さを取得
        // const headerHeight = document.querySelector("header").offsetHeight;

        // 現在位置からターゲットの位置までの距離を取得
        // const distance = targetPosition + currentPosition - headerHeight;

        // ドロワーが開いている場合
        if (drawerFlag) {
          // bodyの固定を解除
          let top = bodyFixedRemove();
          // ドロワーボタンのアクティブクラスを削除
          drawerToggle.classList.remove("is-active");
          // ドロワーのアクティブクラスを削除
          drawer.classList.remove("is-active");
          // 現在の位置にドロワーのtop位置を格納
          currentPosition = top;
        }

        // 現在位置からターゲットの位置までの距離を取得
        const distance = targetPosition + currentPosition;

        // スクロールアニメーションを実行
        window.scrollTo({
          top: distance,
          behavior: "smooth",
        });
      });
    });
  }
})();

/**
 * 会社概要のタブクリックでコンテンツ切り替え
 */
(() => {
  const tabList = document.querySelectorAll(".js-company-tab");
  tabList.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const tabTargetDate = e.currentTarget.dataset.tab;

      const menuList = e.currentTarget.closest("#js-company-menu-list");
      const menuItems = menuList.querySelectorAll(".js-company-menu");

      tabList.forEach((item) => {
        item.classList.remove("is-active");
      });

      menuItems.forEach((item) => {
        const menuTargetDate = item.dataset.menu;
        if (tabTargetDate === menuTargetDate) {
          tab.classList.add("is-active");
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });
    });
  });
})();
