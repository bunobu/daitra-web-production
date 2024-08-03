import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const AnimeParallax = () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    const isInView = document.querySelectorAll("[data-class='is-in-view']");
    isInView.forEach((el) => {
      gsap.set(el, {
        position: "relative",
        overflow: "hidden",
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",

        onEnter: () => {
          el.classList.add("is-parallax");

          document
            .querySelectorAll("[data-class='is-parallax']")
            .forEach((el) => {
              gsap.set(el, {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "120%",
              });

              gsap.to(el, {
                y: 50,
                scale: 1.05,
                scrollTrigger: {
                  trigger: el,
                  ease: "power4.out",
                  markers: true,
                  start: "start center-=100",
                  scrub: 0.3,
                },
              });
            });
        },
      });
    });
  } else {
    return;
  }
};
