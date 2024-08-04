import { gsap } from "gsap";

export const animeLoading = () => {
  setTimeout(() => {
    return;
  }, 3000);
  const bubbleWrapper = document.querySelector("[data-id='bubbleWrapper']");
  const bubble = document.querySelector("[data-id='bubble']");
  const bubbleLogo = document.querySelector("[data-id='bubbleLogo']");
  const bubbleLogoImg = document.querySelector("[data-id='bubbleLogoImg']");

  const bubbleLength = 40;

  [...Array(bubbleLength).keys()].forEach((i) => {
    const cloneBubble = bubble.cloneNode(true);
    bubbleWrapper.appendChild(cloneBubble);
  });

  const bubbleList = document.querySelectorAll("[data-id='bubble']");
  bubbleList.forEach((bubble, index) => {
    gsap.set(bubble, {
      width: "random(70, 200, 1)",
      aspectRatio: 1,
      opacity: gsap.utils.random(0.5, 1, 0.1),

      left: `${(100 / bubbleLength) * index}%`,
      x: "-50%",
      bottom: "random(0, 100, 1)%",
      rotate: "random(0, 360, 1)",
      y: "130dvh",
    });

    gsap.set(bubbleLogo, {
      scale: 5,
      "--_bg-opacity": 0,
      opacity: 1,
    });

    gsap.set(bubbleLogoImg, {
      autoAlpha: 0,
      y: -20,
      scale: 1.2,
    });

    gsap
      .timeline()
      .to(bubble, gsap.utils.random(6, 12, 1), {
        y: "-100dvh",
      })
      .to(
        bubble,
        gsap.utils.random(4, 8, 1),
        {
          x: 1,
          repeat: 1,
          yoyoEase: true,
          ease: "back.inOut(1.7)",
        },
        "<+1"
      )
      .to(
        bubbleLogo,
        {
          scale: 1,
          "--_bg-opacity": 1,
        },
        "<"
      )
      .to(
        bubbleLogo,
        1,
        {
          scale: 1,
          "--_bg-opacity": 0,
        },
        ">"
      )
      .to(
        bubbleLogoImg,
        0.5,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        },
        ">-0.5"
      );
  });
};
