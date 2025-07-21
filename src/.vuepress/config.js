module.exports = {
  title: "我的博客",
  description: "XXX",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  base: "/interview/",
  themeConfig: {
    nav: [],
    subSidebar: "auto",
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "vue基础篇",
        path: "/vue-blog/diff算法",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/vue-blog/diff算法" },
          { title: "第二篇", path: "/vue-blog/双向绑定" },
        ],
      },
      {
        title: "vue进阶篇",
        path: "/vue-blog/diff算法",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/vue-blog/diff算法" },
          { title: "第二篇", path: "/vue-blog/双向绑定" },
        ],
      },
      {
        title: "react基础篇",
        path: "/react-blog/diff算法",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/react-blog/diff算法" },
          { title: "第二篇", path: "/react-blog/合成事件" },
        ],
      },
    ],
  },
};
