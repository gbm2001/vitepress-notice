# 去除$ref的.value

::: danger

去除.value看个人，不是每个项目都非得去除.value，看个人习惯。

用.value，就有它存在的意义

不想去除的可以跳过。个人习惯

下一篇【解决import {ref}大量引用】

:::



## 一、案例

::: tip 特别提示

只有在js中需要用.value，如果是在@click方法内改变，不需要.value

流程走完了不想使用？卸载插件，在vite.config.js删除使用语句即可

:::



原本的代码

```html
<template>
  <h1>{{ count }}</h1>
  <button @click="handleClick">click</button>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(0);

function handleClick() {
  count.value++;
}
</script>

```

去除.value赋值

```html
<template>
  <h1>{{ count }}</h1>
  <button @click="handleClick">click</button>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(0);

function handleClick() {
  count.value++; // [!code --]
  count++;// [!code ++]
}
</script>
```

## 二、配置方法

### 1、方法一（废弃）

> vue3.4版本之后废除

`vite.config.js`

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true, // 启用响应式语法糖 $ref $computed $toRef ... // [!code ++]
    })
  ]
})
```

### 2、方法二

安装插件



[插件官网](https://vue-macros.dev/zh-CN/features/reactivity-transform.html)

::: info

store (pinia版) 中使用 `$ref` 无法正常持久化数据！！！

:::

```shell
npm i -D @vue-macros/reactivity-transform
```



`vite.config.js`

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'; // [!code ++]

export default defineConfig({
  plugins: [
    vue(),
    ReactivityTransform(), // 启用响应式语法糖 $ref ... // [!code ++]
  ]
})
```

****

启用响应式语法糖 `$ref` 之后，声明变量就是`$ref`了

<img src=".\05-去除ref的value.assets\image-20240119114139328.png" alt="image-20240119114139328"  />

### 解决$ref报错

`.eslintrc.cjs`

```js
module.exports = {
  globals: { // [!code ++]
    $ref: 'readonly', // [!code ++]
    $computed: 'readonly', // [!code ++]
    $shallowRef: 'readonly', // [!code ++]
    $customRef: 'readonly', // [!code ++]
    $toRef: 'readonly', // [!code ++]
  }, // [!code ++]
};
```



## 三、注意事项

$ref 在以下情况无法直接使用

- store pinia
- watch 监听器