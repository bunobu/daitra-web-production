import { viewportSwitch } from "./viewportSwitch";

viewportSwitch(375);

const body = document.body;
const bodyFixedAdd = () => {
  const scrollY = window.scrollY;
  const topPosition = scrollY ? parseInt(scrollY) * -1 : 0;

  body.style.cssText = `
    position: fixed;
    left: 0;
    top: ${topPosition}px;
    width: 100%;
  `;
};

const bodyFixedRemove = () => {
  const topPosition = body.style.top;

  body.style.cssText = `
    position: initial;
  `;

  const scrollY = topPosition ? parseInt(topPosition) * -1 : 0;

  window.scrollTo(0, scrollY);
};

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

      bodyFixedRemove();
    } else {
      hamburger.setAttribute("data-open", "true");
      drawerMenu.setAttribute("data-show", "true");

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
