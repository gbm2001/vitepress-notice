/*
 * @Author: guo-bomin 2974463764@qq.com
 * @Date: 2024-01-16 16:56:07
 * @LastEditors: gbm2001 2974463764@qq.com
 * @LastEditTime: 2025-02-11 10:46:43
 * @FilePath: \vitepress-notice\docs\.vitepress\config.mts
 * @Description: 郭博民16670506200
 * 有问题微信同号询问，急事call我
 * Copyright (c) 2024 by 湖南習羽网络科技有限公司, All Rights Reserved.
 */
import { defineConfig } from 'vitepress';
import { nav, sidebar } from './relaConf';
// https://blog.csdn.net/www1577791638/article/details/126091280
import mdItCustomAttrs from 'markdown-it-custom-attrs'; // 用来放大图片
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-notice/',
  title: 'gbm666',
  lang: 'zh-CN',
  description: '2024年10月21日16:23:37',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: nav,
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/gbm2001/vitepress-notice' }],
    outline: {
      level: [2, 6],
      label: '目录',
    },
    search: {
      provider: 'local',
    },
    i18nRouting: true,
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} <a href="https://blog.csdn.net/qq_51055690?spm=1018.2226.3001.5343" target="_blank">GBM666</a>`,
    },
  },
  markdown: {
    lineNumbers: true, // 开启代码行数
    image: {
      lazyLoading: true, // 开启图片懒加载
    },
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery', // 加在img标签上
      });
      // <!-- ![](图片地址) -->
      // <img src="图片地址" data-fancybox="gallery"/>
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    ['link', { rel: 'icon', href: '/vitepress-notice/favicon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    // 谷歌
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`,
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
    [
      'script',
      {},
      `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?abcdefgeggsdfsdf123123";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],
});
