export default {
  title: "blog",
  description: "Just playing around.",
  themeConfig: {
    siteTitle: false,
    // 头部导航栏
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    // 左侧侧边栏
    sidebar: [
      {
        text: "2022",
        collapsible: true, //是否可折叠
        collapsed: false, //默认打开
        items: [
          { text: "Introduction", link: "/2022/" },
          { text: "2022-08-16", link: "/2022/0816" },
        ],
      },
      {
        text: "2021",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "0526——原型与原型链", link: "/2021/0526" },
        ],
      },
      {
        text: "2020",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
