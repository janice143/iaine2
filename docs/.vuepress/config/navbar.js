module.exports = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端知识体系",
    children: [
      { text: "CSS", link: "/frontendocs/css/" },
      { text: "Javascript", link: "/frontendocs/js/" },
      { text: "手写js", link: "/frontendocs/jscode1/" },
      { text: "Vue", link: "/frontendocs/vue/" },
      { text: "计算机网络", link: "/frontendocs/computernet/" },
      { text: "浏览器渲染原理", link: "/frontendocs/browserrender/" },
      { text: "webpack原理", link: "/frontendocs/webpack/" },
      { text: "Git团队协作", link: "/frontendocs/git/" },
    ],
  },
  {
    text: "工具箱",
    children: [
      {
        text: "在线编辑",
        children: [
          {
            text: "图片压缩",
            link: "https://tinypng.com/",
          },
        ],
      },
      {
        text: "在线服务",
        children: [
          {
            text: "阿里云",
            link: "https://www.aliyun.com/",
          },
          {
            text: "腾讯云",
            link: "https://cloud.tencent.com/",
          },
        ],
      },
      {
        text: "博客指南",
        children: [
          {
            text: "掘金",
            link: "https://juejin.im/",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/",
          },
        ],
      },
    ],
  },
];
