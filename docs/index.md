---
# https://vitepress.dev/reference/default-theme-home-page
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: gbm666-notice
titleTemplate: 你又来看我了
editLink: true
lastUpdated: true

hero:
  name: 'gbm666'
  text: '的学习笔记'
  tagline: /理工科/深漂/前端开发/
  image:
    # 首页右边的图片
    src: /logo.png
    # 图片的描述
    alt: avatar
  # 按钮相关
  actions:
    - theme: brand
      text: 进入主页
      link: /markdown-examples
    - theme: alt
      text: 个人成长
      link: /api-examples

# 按钮下方的描述
features:
  - icon: 🤹
    title: Vue3
    details: vite5+vue3从0-1搭建
    link: /column/views/vite/
  - icon: 📕
    title: project项目合集
    details: vue2，uniapp，微信小程序，项目展示
    link: /column/views/project/
  - icon: 1
    title: 面试题
    details: html5，css3，js，vue
    link: /column/questions/
  - icon: 📚
    title: 签到脚本
    details: 可能会用到阿里云函数、腾讯云函数、青龙面板或者docker
    link: /SignIn/BiliBiliToolPro.md
---

<!-- 自定义组件 -->
<script setup>
import home from './.vitepress/components/home.vue';
</script>

<home />
