export const loading = () => {
  // loadingの要素を取得
  const loading = document.getElementById("loading");

  // ローディング画面が既に表示されたかどうかをチェック
  if (sessionStorage.getItem("loadingShow")) {
    console.log("aaaa");
    document.body.classList.add("is-loaded");
    return; // 既に表示されている場合、関数を終了
  }

  // ローディング画面を表示
  document.body.classList.add("is-loaded");
  loading.classList.add("is-visible");

  // progressの要素を取得
  const progressBar = loading.querySelector(".p-progress__bar");
  const progressCircle = loading.querySelector("circle");
  const progressCount = loading.querySelector(".p-progress__count");
  // circleTextの要素を取得
  const textCircle = loading.querySelector(".p-circle-text");
  const textCircleText = textCircle.querySelector("textPath");
  const textCircleTextList = textCircleText.textContent.split("");

  // circleのr属性を取得(半径)
  let radius = progressBar.getAttribute("r");
  // circleの長さを計算
  const lengthOfCircle = Math.round(2 * Math.PI * radius);

  // circleTextの文字列を分割してspanタグで囲む
  textCircleText.textContent = "";
  let outputTextCircleText = "";
  textCircleTextList.forEach((el, index) => {
    if (el === " ") {
      outputTextCircleText += " ";
    } else {
      outputTextCircleText += `<tspan>${el}</tspan>`;
    }
  });
  textCircleText.innerHTML = outputTextCircleText;

  const textCircleTextInline = textCircleText.querySelectorAll("tspan");

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: "power4.out",
    },
  });
  tl.set(loading, {
    opacity: 1,
  })
    .set(progressCircle, {
      strokeDasharray: lengthOfCircle,
    })
    .add("start")
    .to(
      progressBar,
      {
        strokeDashoffset: 0,
        onStart: () => {
          document.body.classList.add("is-fixed");
        },
      },
      "start"
    )
    .to(
      progressCount,
      {
        duration: 1,
        textContent: 100 + "%",
        "--border-width": "100px",
        snap: {
          textContent: 1,
          "--border-width": 1,
        },
      },
      "start"
    )
    .to(
      textCircleTextInline,
      {
        attr: {
          dx: 10,
        },
        stagger: {
          amount: 0,
        },
      },
      "start"
    )
    .to(
      textCircle,
      {
        rotation: 360,
        scale: 0.9,

        onComplete: () => {
          gsap.to(loading, {
            opacity: 0,
          });

          document.body.classList.remove("is-fixed");

          // ローディング画面が表示されたことを記録
          sessionStorage.setItem("loadingShow", "true");
        },
      },
      "<"
    );

  tl.add(() => {
    setTimeout(() => {
      loading.classList.remove("is-visible");
    }, 500);
  });
};
