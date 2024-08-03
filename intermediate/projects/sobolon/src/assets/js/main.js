import { viewportSwitch } from "./viewportSwitch";

viewportSwitch(375);

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

// headerの高さ分コンテンツを下げる
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
