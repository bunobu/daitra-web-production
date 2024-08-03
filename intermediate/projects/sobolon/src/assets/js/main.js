import { viewportSwitch } from "./viewportSwitch";

viewportSwitch(375);
// headerの高さ分コンテンツを下げる
const headerHeightMarginAdd = () => {
  const header = document.getElementById("header");
  const headerFixedSpacer = () => {
    const headerHeight = header.offsetHeight;
    const drawerMenu = document.getElementById("drawerMenu");
    const main = document.getElementById("headerSpacer");
    main.style.marginBlockStart = `${headerHeight}px`;
    drawerMenu.style.height = `calc(100vh - ${headerHeight}px)`;
  };

  const headerResizeObserver = new ResizeObserver(function () {
    headerFixedSpacer();
    console.log("headerResizeObserver");
  });
  headerResizeObserver.observe(header);
};

headerHeightMarginAdd();

const drawerMenuToggle = () => {
  const hamburger = document.getElementById("hamburger");
  const drawerMenu = document.getElementById("drawerMenu");
  hamburger.addEventListener("click", () => {
    if (hamburger.getAttribute("data-open") === "true") {
      hamburger.setAttribute("data-open", "false");
      drawerMenu.setAttribute("data-show", "false");
    } else {
      hamburger.setAttribute("data-open", "true");
      drawerMenu.setAttribute("data-show", "true");
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

      const targetPosition = target.getBoundingClientRect().top;

      let currentPosition = window.scrollY;

      const headerHeight = document.getElementById("header").offsetHeight;

      const distance = targetPosition + currentPosition - headerHeight;

      window.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    });
  });
};

anchorSmoothScroll();
