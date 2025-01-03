/*
 * @Author: guo-bomin 2974463764@qq.com
 * @Date: 2024-01-16 17:01:49
 * @LastEditors: gbm2001 2974463764@qq.com
 * @LastEditTime: 2024-12-09 16:27:36
 * @FilePath: \vitepress-notice\docs\.vitepress\relaConf\navbar.ts
 * @Description: 郭博民16670506200
 * 有问题微信同号询问，急事call我
 * Copyright (c) 2024 by 湖南習羽网络科技有限公司, All Rights Reserved.
 */
// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/', // 表示docs/index.md
  },
  {
    text: 'javascript',
    items: [
      {
        text: '入门',
        link: '/column/javascript/base/index.md', // 表示docs/column/javascript/base/index.md
      },
      {
        text: '进阶',
        link: '/column/Growing/', // 表示docs/column/Growing/index.md
      },
    ],
  },
  {
    text: 'Vue',
    items: [
      {
        text: '高德地图',
        link: '/column/vue/gdMap/', // 表示docs/column/vue/gdMap/index.md
      },
    ],
  },
  {
    text: '微信小程序',
    items: [
      {
        text: '基础',
        link: '/column/Travel/', // 表示docs/column/Travel/index.md
      },
    ],
  },
  {
    text: '关于我',
    items: [
      {
        text: 'CSDN',
        link: 'https://blog.csdn.net/qq_51055690?type=blog',
      },
      { text: 'Github', link: 'https://github.com/gbm2001' },
      {
        text: 'gitee',
        link: 'https://gitee.com/guo-bomin',
      },
    ],
  },
];

export const sidebar: DefaultTheme.Sidebar = {
  // vite从0-1
  '/column/views/vite/': [
    {
      text: '简介',
      link: '/column/views/vite/',
    },
    {
      text: '01-初始化项目',
      link: '/column/views/vite/01-初始化项目',
    },
    {
      text: '02-项目结构',
      link: '/column/views/vite/02-项目结构',
    },
    {
      text: '03-代码格式化prettier',
      link: '/column/views/vite/03-代码格式化prettier',
    },
    {
      text: '04-eslint规范',
      link: '/column/views/vite/04-eslint规范',
    },
    {
      text: '05-去除ref的value',
      link: '/column/views/vite/05-去除ref的value',
    },
    {
      text: '06-vite.config.js的配置项',
      link: '/column/views/vite/06-vite.config.js的配置项',
    },
    {
      text: '07-sass样式预渲染器',
      link: '/column/views/vite/07-sass样式预渲染器',
    },
    {
      text: '08-VueRouter路由集成',
      link: '/column/views/vite/08-VueRouter路由集成',
    },
    {
      text: '09-mixin混入',
      link: '/column/views/vite/09-mixin混入',
    },
    {
      text: '10-filters全局过滤器',
      link: '/column/views/vite/10-filters全局过滤器',
    },
    {
      text: '11-Element Plus集成',
      link: '/column/views/vite/11-Element Plus集成',
    },
    {
      text: '12-pinia缓存集成',
      link: '/column/views/vite/12-pinia缓存集成',
    },
    {
      text: '13-axios和api封装',
      link: '/column/views/vite/13-axios和api封装',
    },
    {
      text: '14-全局引入components组件',
      link: '/column/views/vite/14-全局引入components组件',
    },
    {
      text: '15-设置vscode的常用代码块',
      link: '/column/views/vite/15-设置vscode的常用代码块',
    },
    {
      text: '扩展',
      items: [
        {
          text: '16-高德地图',
          link: '/column/vue/gdMap/',
        },
      ],
    },
  ],

  // /column/javascript/base/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/javascript/base/': [
    {
      text: '基础语法',
      items: [
        {
          text: '简介',
          link: '/column/javascript/base/',
        },
        {
          text: '基础1',
          link: '/column/javascript/base/01',
        },
      ],
    },
  ],
  // TODO:高德地图
  '/column/vue/gdMap/': [
    {
      text: '高德地图-入门',
      items: [
        {
          text: '准备工作',
          link: '/column/vue/gdMap/',
        },
        {
          text: '01-简易实现页面展示',
          link: '/column/vue/gdMap/01-简易实现页面展示.md',
        },
        {
          text: '02-添加地图控件',
          link: '/column/vue/gdMap/02-添加地图控件.md',
        },
        {
          text: '03-添加点标记',
          link: '/column/vue/gdMap/03-添加点标记.md',
        },
      ],
    },
    {
      text: '高德地图-进阶',
      items: [
        {
          text: '04-添加信息窗体',
          link: '/column/vue/gdMap/04-添加信息窗体.md',
        },
        {
          text: '05-循环点标记并点击弹出窗体',
          link: '/column/vue/gdMap/05-循环点标记并点击弹出窗体.md',
        },
        {
          text: '06-折线',
          link: '/column/vue/gdMap/06-折线.md',
        },
        {
          text: '07-圆形绘制',
          link: '/column/vue/gdMap/07-圆形绘制.md',
        },
      ],
    },
  ],
  // TODO: 项目
  '/column/views/project/': [
    {
      text: '简介',
      link: '/column/views/project/',
    },
    {
      text: '移动端',
      items: [
        {
          text: '湘易办',
          link: '/column/views/project/湘易办.md',
        },
        {
          text: '在星沙',
          link: '/column/views/project/在星沙.md',
        },
      ],
    },
    {
      text: 'pc端',
      items: [
        {
          text: '乡村振兴',
          link: '/column/views/project/乡村振兴.md',
        },
        {
          text: '长沙县党员网',
          link: '/column/views/project/长沙县党员网.md',
        },
        {
          text: '城建档案查询系统',
          link: '/column/views/project/城建档案查询系统.md',
        },
      ],
    },
    {
      text: 'uniapp',
      items: [
        {
          text: '考核考评路长制',
          link: '/column/views/project/考核考评路长制.md',
        },
      ],
    },
    {
      text: '微信原生小程序',
      items: [
        {
          text: '吊车秘书',
          link: '/column/views/project/吊车秘书.md',
        },
      ],
    },
  ],
  // TODO: 面试题
  '/column/questions/': [
    {
      text: '基础',
      items: [
        {
          text: 'html5',
          link: '/column/questions/html5.md',
        },
        {
          text: 'css3',
          link: '/column/questions/css3.md',
        },
        {
          text: 'js',
          link: '/column/questions/js.md',
        },
        {
          text: 'js算法',
          link: '/column/questions/js算法.md',
        },
        {
          text: 'vue',
          link: '/column/questions/vue.md',
        },
      ],
    },
  ],
  // todo 签到教程
  '/SignIn/': [
    {
      text: 'BiliBiliToolPro',
      link: '/SignIn/BiliBiliToolPro.md',
    },
  ],
};
