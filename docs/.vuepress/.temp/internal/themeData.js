export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"前端知识体系\",\"children\":[{\"text\":\"CSS\",\"link\":\"/frontendocs/css/\"},{\"text\":\"Javascript\",\"link\":\"/frontendocs/js/\"},{\"text\":\"手写js\",\"link\":\"/frontendocs/jscode1/\"},{\"text\":\"Vue\",\"link\":\"/frontendocs/vue/\"},{\"text\":\"计算机网络\",\"link\":\"/frontendocs/computernet/\"},{\"text\":\"浏览器渲染原理\",\"link\":\"/frontendocs/browserrender/\"},{\"text\":\"webpack原理\",\"link\":\"/frontendocs/webpack/\"},{\"text\":\"Git团队协作\",\"link\":\"/frontendocs/git/\"}]},{\"text\":\"工具箱\",\"children\":[{\"text\":\"在线编辑\",\"children\":[{\"text\":\"图片压缩\",\"link\":\"https://tinypng.com/\"}]},{\"text\":\"在线服务\",\"children\":[{\"text\":\"阿里云\",\"link\":\"https://www.aliyun.com/\"},{\"text\":\"腾讯云\",\"link\":\"https://cloud.tencent.com/\"}]},{\"text\":\"博客指南\",\"children\":[{\"text\":\"掘金\",\"link\":\"https://juejin.im/\"},{\"text\":\"CSDN\",\"link\":\"https://blog.csdn.net/\"}]}]}],\"sidebarDepth\":2,\"logo\":\"/img/logo.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
