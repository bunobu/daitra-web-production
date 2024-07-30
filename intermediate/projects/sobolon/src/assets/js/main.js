import { viewportSwitch } from "./viewportSwitch";

viewportSwitch(375);

console.log("main");

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
const headerFixedSpacer = () => {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;
  const drawerMenu = document.getElementById("drawerMenu");
  console.log(headerHeight);
  const main = document.getElementById("headerSpacer");
  main.style.marginBlockStart = `${headerHeight}px`;
  drawerMenu.style.height = `calc(100vh - ${headerHeight}px)`;
};
headerFixedSpacer();
document.addEventListener("resize", () => {
  headerFixedSpacer();
});
