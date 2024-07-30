const baseData = {
  globalMenu: [
    {
      title: "Concept",
      link: "#concept",
    },
    {
      title: "Feature",
      link: "#feature",
    },
    {
      title: "Products",
      link: "#products",
    },
    {
      title: "News",
      link: "#news",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ],
};

const pageDate = {
  "/index.html": {
    meta: {
      isHome: true,
      title: "indexページだよ",
      description: "indexページの説明文だよ",
    },
    globalMenu: baseData.globalMenu,
  },
};

export { pageDate };
