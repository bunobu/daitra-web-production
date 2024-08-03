import { viewportSwitch } from "./viewportSwitch";

viewportSwitch(375);

const a = document.querySelector("[data-id='hamburger']");
a.addEventListener("click", () => {
  let active = a.getAttribute("data-open");
  if (active === "false") {
    a.setAttribute("data-open", "true");
    return;
  } else {
    a.setAttribute("data-open", "false");
  }
});

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
