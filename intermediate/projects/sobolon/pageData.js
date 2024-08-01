const baseData = {
  assetsPathImg: "assets/img/",
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

const { assetsPathImg } = baseData;

const pageDate = {
  "/index.html": {
    meta: {
      isHome: true,
      title: "indexページだよ",
      description: "indexページの説明文だよ",
    },
    globalMenu: baseData.globalMenu,
    featureList: [
      {
        img: `${assetsPathImg}img-feature-1.jpg`,
        text: "素材は海で採れた<br/>マイクロプラスチック",
      },
      {
        img: `${assetsPathImg}img-feature-2.jpg`,
        text: "個性あふれる<br/>“可愛い”デザイン",
      },
      {
        img: `${assetsPathImg}img-feature-3.jpg`,
        text: "世界にひとつだけの<br/>一点物アクセサリー",
      },
    ],
    productsList: [
      {
        link: "#",
        img: `${assetsPathImg}img-product-1.jpg`,
        title:
          "【しかくイヤリング】海洋マイクロプラスチックを使ったハンドメイドイヤリング(全7色)",
        price: "￥3,695",
      },
      {
        link: "#",
        img: `${assetsPathImg}img-product-2.jpg`,
        title:
          "【しかく指輪】海洋マイクロプラスチックを使ったハンドメイドアクセサリー/ゆびわ(全7色)",
        price: "￥2,390",
      },
      {
        link: "#",
        img: `${assetsPathImg}img-product-3.jpg`,
        title:
          "【ピンバッジ】海洋マイクロプラスチックを使ったsobolonオリジナルピンバッジ(全6色)",
        price: "￥2,580",
      },
    ],
    newsList: [
      {
        link: "#",
        img: `${assetsPathImg}img-news-1.jpg`,
        date: "2020年2月4日",
        dateTime: "2020-02-04",
        title: "き業展終了！次回は2/11(火)フェスタ出店します。",
        text: "「き業展」2日目！大盛況に終わりました( ˆoˆ )/来てくださったみなさん本当にありがとうございました！やっぱり、地元多治見での出店はみ…",
      },
      {
        link: "#",
        img: `${assetsPathImg}img-news-2.jpg`,
        date: "2020年1月20日",
        dateTime: "2020-01-20",
        title:
          "“可愛い” で 地球を守る！ 海洋マイクロプラスチックを使ったハンドメイドアクセサリー屋さん 【sobolon】",
        text: "こんにちは！私は、「 “可愛い” で地球を守る！」をテーマに、昨今、環境問題として話題になっている、マイクロプラスチックを使ったアクセサリー…",
      },
      {
        link: "#",
        img: `${assetsPathImg}img-news-3.jpg`,
        date: "2020年1月20日",
        dateTime: "2020-01-20",
        title: "sobolonの矛盾",
        text: "こんにちは！“可愛い”で 地球を守る！マイクロプラスチックアクセサリー【 sobolon 】のリーダーひなこです！sobolonを知らない…",
      },
    ],
  },
};

export { pageDate };
