# 06-vite.config.js的配置项

## 一、解决`import {ref} from vue`大量引入

```shell
npm i -D unplugin-auto-import
```

## 二、环境变量env

`.env.dev`

根目录下，与vite.config.js同级

```shell
# 开发环境
NODE_ENV='dev'

# 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
# js中通过`import.meta.env.VITE_APP_BASE_API`取值
VITE_APP_PORT = 5173
VITE_APP_BASE_API = '/dev-api'
VITE_APP_BASE_FILE_API = '/dev-api/web/api/system/file/upload'

# 后端服务地址
VITE_APP_SERVICE_API = 'http://localhost:888'
```



再创建一个.env.prod，然后把dev改成prod



### 修改package.json

原

```json
  "scripts": {
    "dev": "vite", // [!code --]
    "build": "vite build",  // [!code --]
    "preview": "vite preview" 
  },
```

新

```json

  "scripts": {
    "dev": "vite --mode dev",// [!code ++]
    "prod": "vite --mode prod", // [!code ++]
    "build:prod": "vite build --mode prod", // [!code ++]
    "preview": "vite preview" 
  }

```

## 三、替换vite.config.js

由于vite.config.js的东西有点多，这里直接替换吧



```js
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取`.env`环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      ReactivityTransform(), // 启用响应式语法糖 $ref ...
      // 解决 `import { ref , reactive ..... } from 'vue'` 大量引入的问题
      AutoImport({
        imports: ['vue', 'vue-router'],
      }),
    ],
    // 反向代理解决跨域问题
    server: {
      // host: 'localhost', // 只能本地访问
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT),
      // 运行时自动打开浏览器
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    resolve: {
      // 配置路径别名
      alias: [
        // @代替src
        {
          find: '@',
          replacement: path.resolve('./src'),
        },
      ],
    },
    // 引入scss全局变量
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/color.scss";
          @import "@/styles/theme.scss";
          `,
        },
      },
    },
  };
});

```

## 四、解决免引入之后，ref报红

::: tip

因为我不想使用$ref，我就是想用.value，所以我去vite.config.js中注释了使用语句，然后我用回了ref的方式

:::

<img src=".\06-vite.config.js的配置项.assets\image-20240119142839986.png" alt="image-20240119142839986"  />

但是由于大量引入ref这些，安装插件之后不需要引入了。但是编辑器会报红。



`.eslintrc.cjs`

把这段复制一遍，然后粘贴到下面，并且把$去掉

  

```js
  globals: {
    $ref: 'readonly',
    $computed: 'readonly',
    $shallowRef: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
    ref: 'readonly',  // [!code ++]
    computed: 'readonly', // [!code ++]
    shallowRef: 'readonly', // [!code ++]
    customRef: 'readonly', // [!code ++]
    toRef: 'readonly', // [!code ++]
  },
```



<img src=".\06-vite.config.js的配置项.assets\image-20240119143227364.png" alt="image-20240119143227364"  />

