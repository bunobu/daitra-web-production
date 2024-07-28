export const scrollAnimation = () => {
  const inViewItems = document.querySelectorAll(".js-in-view");
  inViewItems.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top bottom-=10%",
      stagger: 0.5,
      onEnter: () => {
        el.classList.add("--in-view");
      },
    });
  });
};
