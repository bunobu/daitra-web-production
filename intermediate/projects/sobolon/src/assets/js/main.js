import { viewportSwitch } from "./viewportSwitch";
import { AnimeParallax } from "./animeParallax";
import { animeLoading } from "./animeLoading";

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (sessionStorage.getItem("loadingShow") === "true") {
    loading.dataset.isFirstShow = "true";
  } else {
    animeLoading();

    setTimeout(() => {
      loading.dataset.isHidden = "true";
      sessionStorage.setItem("loadingShow", "true");
    }, 3000);
  }
});

const imgSetAttributeSize = () => {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("width", `${img.naturalWidth}`);
    img.setAttribute("height", `${img.naturalHeight}`);
  });
};

imgSetAttributeSize();
viewportSwitch(375);
AnimeParallax();

window.addEventListener("resize", () => {
  AnimeParallax();
  imgSetAttributeSize();
});

const body = document.body;
const bodyFixedAdd = () => {
  const scrollY = window.scrollY;
  const topPosition = scrollY ? parseFloat(scrollY) * -1 : 0;

  body.style.cssText = `
    position: fixed;
    top: ${topPosition}px;
    width: 100%;
    overflow: hidden;
  `;
};

const bodyFixedRemove = () => {
  let topPosition = parseFloat(body.style.top) * -1;

  body.style.cssText = `
    position: "";
    overflow: auto;
  `;

  window.scrollTo({
    top: topPosition,
    left: 0,
  });

  return topPosition;
};

const headerHeightMarginAdd = () => {
  const header = document.getElementById("header");
  const headerFixedSpacer = () => {
    const headerHeight = header.offsetHeight;
    const main = document.getElementById("headerSpacer");
    main.style.marginBlockStart = `${headerHeight}px`;
  };

  const headerResizeObserver = new ResizeObserver(function () {
    headerFixedSpacer();
  });
  headerResizeObserver.observe(header);
};

headerHeightMarginAdd();

let drawerMenuFlag = false;
const drawerMenuToggle = () => {
  const hamburger = document.getElementById("hamburger");
  const drawerMenu = document.getElementById("drawerMenu");
  hamburger.addEventListener("click", () => {
    if (hamburger.getAttribute("data-open") === "true") {
      hamburger.setAttribute("data-open", "false");
      drawerMenu.setAttribute("data-show", "false");
      drawerMenuFlag = false;

      bodyFixedRemove();
    } else {
      const headerHeight = document.getElementById("header").offsetHeight;
      drawerMenu.style.height = `calc(100dvh - ${headerHeight}px)`;
      hamburger.setAttribute("data-open", "true");
      drawerMenu.setAttribute("data-show", "true");
      drawerMenuFlag = true;

      bodyFixedAdd();
    }
  });
};

drawerMenuToggle();

const anchorSmoothScroll = () => {
  const anchorList = document.querySelectorAll('a[href^="#"]');
  anchorList.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      let currentPosition = window.scrollY;
      const targetPosition = target.getBoundingClientRect().top;
      const headerHeight = document.getElementById("header").offsetHeight;
      let distance;

      if (drawerMenuFlag) {
        const topPosition = bodyFixedRemove();
        drawerMenuFlag = false;
        currentPosition = topPosition;
        distance = targetPosition + currentPosition - headerHeight;
      } else {
        distance = targetPosition + currentPosition - headerHeight;
      }

      window.scrollTo({
        top: distance,
        behavior: "smooth",
      });

      if (Math.floor(distance) === Math.floor(window.scrollY)) {
        return;
      }

      const timerId = setInterval(() => {
        if (Math.floor(distance) - 1 <= Math.floor(window.scrollY)) {
          clearInterval(timerId);
          hamburger.setAttribute("data-open", "false");
          drawerMenu.setAttribute("data-show", "false");
        }
        // 16ミリ秒は最近のブラウザのリフレッシュレートに合わせた値
        // 60fpsの場合、1000ms / 60fps = 16.666666666666668ms
      }, 16);
    });
  });
};

anchorSmoothScroll();
