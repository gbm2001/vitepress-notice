# eslint代码规范



## 一、安装

```
eslint => ESLint的核心代码
prettier => prettier插件的核心代码
eslint-plugin-vue => 为 Vue 使用 ESlint 的插件
eslint-config-prettier => 解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
eslint-plugin-prettier => 将prettier作为ESLint规范来使用
      
```

```shell
npm install --D eslint prettier eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier    
```

## 二、配置编码规范检查

###  1、.eslintrc.cjs

在根目录创建

```
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
  },
};
```

###  规则配置

规则中文解释 [http://eslint.cn/docs/rules/****](http://eslint.cn/docs/rules/)

```
rules: {
  '规则名': '规则值'
  // eg:
  'no-undef': 'off'
}
```

规则值:

- "off"或者0 => 关闭检测规则
- "warn"或者1 => 打开并把打开的检测规则作为警告（不影响退出代码）
- "error"或者2 => 打开并把检测规则作为一个错误（退出代码触发时为1）

####  2、.eslintignore忽略检查

```
node_modules
*.md
.vscode
.idea
dist
public
*.js
*.cjs
```

## 三、配置vite项目启动时检查

```
npm install -D vite-plugin-eslint
```

**vite.config.js**

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import eslint from "vite-plugin-eslint";  // [!code ++]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({ lintOnStart: true, cache: false }), // 项目运行时进行eslint检查  // [!code ++]
  ],
});
```

## 四、安装ESLint插件

<img src=".\04-eslint规范.assets\image-20240119111149895.png" alt="image-20240119111149895" style="zoom:80%;" />

## 五、检查是否有效

去App.vue中，看看是不是会这样，由于回车导致报错

<img src=".\04-eslint规范.assets\image-20240119111738653-1705634276962.png" alt="image-20240119111738653"  />

<img src=".\04-eslint规范.assets\image-20240119111940021.png" alt="image-20240119111940021" style="zoom: 80%;" />