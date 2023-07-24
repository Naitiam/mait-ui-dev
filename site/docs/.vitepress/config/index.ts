import { defineConfig } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';

export default defineConfig({
  base: '/docs/',
  title: 'maitui', //站点标题
  description: '一个vue3组件库', //mate标签description，多用于搜索引擎抓取摘要
  // 设置顶部导航栏
  themeConfig: {
    siteTitle: 'MaitUI',
    logo: '/logo.jpg',
    nav: nav,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/maiiitian/mait-ui',
      },
    ],
    sidebar: sidebar,
  },
});
