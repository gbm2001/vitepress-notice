# 10-filters全局过滤器

::: info

说通俗，就是main.js引入方法，挂载全局，然后单页面使用

:::

当后端返回的数据格式不是前端想要的时候，可以将返回的数据处理成自己需要的格式



## filters.js

utils下创建，接上回案例，继续用那个性别判断

```js
export const filters = {
  // 获取性别值
  sexName: (sex) => {
    // 拿到mixin混入的属性值
    const { proxy } = getCurrentInstance();
    let result = proxy.sexList.find((obj) => obj.value == sex);
    return result ? result.name : '数据丢失';
  },
};
```

## main.js

```js
// 全局过滤器
import { filters } from '@/utils/filters.js';
app.config.globalProperties.$filters = filters;
```



## App.vue

```html
<h1>{{ $filters.sexName(1) }}</h1>
```

打印 男

因为传入1

<img src=".\10-filters全局过滤器.assets\image-20240119172053949.png" alt="image-20240119172053949" style="zoom:80%;" />



## 我的理解

### vue2

这看起来有没有很像**vue2**的prototype

`main.js`

```js
mport { parseTime } from '@/utils/ruoyi';

Vue.prototype.parseTime = parseTime;
```

`test.vue`

```html
 {{ parseTime(item.createTime, '{y}-{m}-{d}') }}
```

<img src=".\10-filters全局过滤器.assets\image-20240119172419781.png" alt="image-20240119172419781" style="zoom:80%;" />

若依的utils封装的很不错，写法很超前，很值得看源码学习

vue3没有filters了，虽然有watch和computed，但是这个全局filters值得学习。



### vue3

看看若依的vue3是如何使用这个日期时间过滤的

<img src=".\10-filters全局过滤器.assets\image-20240119172845442.png" alt="image-20240119172845442" style="zoom:150%;" />

```js
app.config.globalProperties.parseTime = parseTime
```

[ruoyi  v3.8.7 Vue3+Ele Plus+Vite官方入口](https://github.com/yangzongzhuan/RuoYi-Vue3)