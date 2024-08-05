const baseData = {
  breakPoints: {
    md: "(min-width: 768px)",
  },
};

const pageDate = {
  "/index.html": {
    meta: {
      isHome: true,
      title: "indexページだよ",
      description: "indexページの説明文だよ",
    },
    breakPoints: baseData.breakPoints,
  },
  "/about.html": {
    meta: {
      isHome: false,
      title: "hogeページだよ",
      description: "hogeページの説明文だよ",
    },
  },
};

export { pageDate };
