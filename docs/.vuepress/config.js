import { defaultTheme } from '@vuepress/theme-default'
import navbar from './config/navbar'

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'iaine2',
  description: '个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/img/logo.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  theme: defaultTheme({
    // 在这里进行配置
    // 默认主题配置
    navbar,
    sidebarDepth: 2, // 侧边栏显示2级
    logo: '/img/logo.png',
  })
}