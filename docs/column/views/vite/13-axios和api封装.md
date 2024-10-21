# 13-axios和api封装

[axios中文网](http://www.axios-js.com/)

[axios中文网-链接2](http://axios-js.com/)

## 一、安装

```shell
npm install axios
```



## 二、封装request

### request.js

`utils/request.js`

这里放个简易版，这里是阉割了一些判断，例如防重复提交，需要完整，请看若依源码

[若依request 传送门](https://github.com/yangzongzhuan/RuoYi-Vue3/blob/master/src/utils/request.js)

```js
import axios from 'axios';
import { getToken } from '@/utils/auth';
import { ElNotification, ElMessageBox, ElMessage, ElLoading } from 'element-plus';

// 是否显示重新登录
export let isRelogin = { show: false };
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 10000,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = res.data.msg;
    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
      return res.data;
    }

    if (code === 401) {
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            isRelogin.show = false;
            useUserStore()
              .logOut()
              .then(() => {
                location.href = '/index';
              });
          })
          .catch(() => {
            isRelogin.show = false;
          });
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。');
    } else if (code === 500) {
      ElMessage({ message: msg, type: 'error' });
      return Promise.reject(new Error(msg));
    } else if (code === 601) {
      ElMessage({ message: msg, type: 'warning' });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      ElNotification.error({ title: msg });
      return Promise.reject('error');
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    console.log('err' + error);
    let { message } = error;
    if (message == 'Network Error') {
      message = '后端接口连接异常';
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时';
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常';
    }
    ElMessage({ message: message, type: 'error', duration: 5 * 1000 });
    return Promise.reject(error);
  }
);
export default service;

```



### auth.js

`utils/auth.js`

创建一个获取token的js

```js
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
```



### 安装js-cookie

```js
npm i js-cookie -S
```



## 三、使用

关于axios有2种使用习惯。

- 第一种就是，按需引入，在每个单页面中import方法，然后使用
- 第二种就是，获取所有api方法，挂载全局，我个人不习惯这个，因为方法不允许重名，这就导致命名的时候会过长，虽然方法可以按类型创建多个文件夹，但是一直挂载到一个api上，不习惯、



这里我贴的是按需引入，

例如下图

<img src=".\13-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.assets\image-20240123095855763.png" alt="image-20240123095855763" style="zoom:80%;" />



### 1.创建测试api接口

src下创建api文件夹

#### test.js

`src/api/test.js`

```
import request from '@/utils/request';

export function getUser(query) {
  return request({
    url: '/userInfo',
    method: 'get',
    params: query,
  });
}
```

#### App.vue

```html
<template>
  <button @click="handleClick">click</button>
  <router-view></router-view>
</template>

<script setup>
import { getUser } from '@/api/test.js';
async function handleClick() {
  getUser().then((res) => {
    console.log(`res -->`, res);
  });
}
</script>
```

::: tip

这里已经写了一个获取用户信息的接口，接口地址是userInfo，方法名是getUser

:::

没有接口怎么办?

我来教你

### 2.后端接口

创建一个新的vscode窗口

创建一个文件夹，里面写一个测试接口。

#### demo.js

```js
const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const pathname = url.parse(req.url, true).pathname;
    if (pathname == "/favicon.ico") {
      return;
    }
    const result = userInfo(pathname);
    res.end(result);
  })
  .listen(3000);

console.log("3000 启动");

function userInfo(pathname) {
  console.log(`pathname -->`, pathname);
  switch (pathname) {
    case "/userInfo":
      return JSON.stringify({
        code: 200,
        msg: "获取成功",
        data: {
          name: "张三",
          age: 18,
        },
      });
    default:
      return "404";
  }
}
```

::: info

这里使用了3000端口号来测试。同理，修改vite项目的.env.dev

:::

#### .env.dev

```js {11}
# 开发环境
NODE_ENV='dev'

# 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
# js中通过`import.meta.env.VITE_APP_BASE_API`取值
VITE_APP_PORT = 5000
VITE_APP_BASE_API = '/dev-api'
VITE_APP_BASE_FILE_API = '/dev-api/web/api/system/file/upload'

# 后端服务地址
VITE_APP_SERVICE_API = 'http://192.168.0.6:3000'
```

注意，这是我的本地ip地址，你的自己用cmd，ipconfig测试看看



如何运行那个demo.js?

<img src=".\13-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.assets\image-20240123101726067.png" alt="image-20240123101726067"  />

node 一下就好



回到页面,点击按钮

> <img src=".\13-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.assets\image-20240123101853461.png" alt="image-20240123101853461" style="zoom:80%;" />

<img src=".\13-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.assets\image-20240123101936127.png" alt="image-20240123101936127" style="zoom:80%;" />





## 四、写在最后

如果要看挂载到一个api上面，请看

[文档传送门](https://gitee.com/zhengqingya/java-developer-document/blob/master/%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%89%8D%E7%AB%AF/03-%E2%98%86%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%E2%98%86/web%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98/02-%E3%80%90%E7%AC%AC%E4%BA%8C%E7%89%88%E3%80%91vue3+vite4/small-web/doc/12-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.md)

[视频教程](https://www.bilibili.com/video/BV1Hz4y1j7Mw/?p=16&spm_id_from=333.880.my_history.page.click&vd_source=ac29c690d2b313af883b4a79c0e258cc)

原理很简单，统一写好，挂载到main.js，然后页面上使用

我这里贴一个vue2的案例就可以了。v3请看链接里的

- <img src=".\13-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.assets\image-20240123102238506.png" alt="image-20240123102238506"  />

- ```js
  // main.js
  import api from './api/index.js'
  Vue.prototype.$Api = api;
  ```

- <img src=".\13-axios%E5%92%8Capi%E5%B0%81%E8%A3%85.assets\image-20240123102405732.png" alt="image-20240123102405732"  />



想了下，怕链接丢失，还是cv一遍的好

### 1、获取所有api

`src/api/index.js`

```js
// 拿到所有api
const modulesFiles = import.meta.globEager('./*/*.*'); // vite4 // [!code --]
const modulesFiles = import.meta.glob('./*/*.*',{eager:true}); // vite5 // [!code ++]
const modules = {};
for (const key in modulesFiles) {
  const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2');
  const value = modulesFiles[key];
  if (value.default) {
    // 兼容js
    modules[moduleName] = value.default;
  } else {
    // 兼容ts
    modules[moduleName] = value;
  }
}
// console.log(666, modules);
export default modules;
```

### 2、配置全局

`main.js`

```js
// 配置全局api
import api from '@/api'
app.config.globalProperties.$api = api
```

### 3、测试

`src/api/test/user.js`

```js
import request from '@/utils/request';

export default {
  getUser() {
    return request({
      url: '/userInfo',
      method: 'get',
    });
  },
};
```

### 4、页面

```html
<template>
  <button @click="handleClick">click</button>
  <h1>{{ res }}</h1>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
let res = $ref(null);

async function handleClick() {
  res = await proxy.$api.user.getUser();
}
</script>
```

::: tip

proxy.$api.user.getUser();

这个user是文件名，是js名

:::

并且api方法与按需引入写法不一致
