import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/DayDayUp/",
  title: "DayDayUp",
  description: "天天向上",
  lastUpdated: true,
  themeConfig: {
    outlineTitle: "页面导航",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/JavaScript/EventLoop' }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        collapsed: false,
        items: [
          { text: '事件循环', link: '/JavaScript/EventLoop' },
          { text: '原型与原型链', link: '/JavaScript/Prototype' }
        ]
      },
      {
        text: 'Vue',
        collapsed: false,
        items: [
          { text: '响应式原理', link: '/Vue/EventLoop' },
          { text: '模版编译原理', link: '/Vue/Prototype' }
        ]
      },
      {
        text: 'React',
        collapsed: false,
        items: [
          { text: '状态管理', link: '/React/EventLoop' },
          { text: '事务机制', link: '/React/Prototype' }
        ]
      },
      {
        text: '性能优化',
        collapsed: false,
        items: [
          { text: '性能指标', link: '/性能优化/性能指标' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wjr-dev/DayDayUp' }
    ]
  },
})
