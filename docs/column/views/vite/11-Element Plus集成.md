# 11-Element Plus集成

[ele plus官方入口](https://element-plus.gitee.io/zh-CN/)

> <img src=".\11-Element Plus集成.assets\image-20240119173237707.png" alt="image-20240119173237707" style="zoom: 67%;" />



::: tip 兼容性

<img src=".\11-Element Plus集成.assets\image-20240119173634846.png" alt="image-20240119173634846" style="zoom:80%;" />

:::



## 一、安装

```shell
npm install element-plus --save
```

```shell
npm install @element-plus/icons-vue --save
```



## 二、main.js

```
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

## 三、测试

```html
  <h1>hello</h1>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <el-icon :size="100" color="red">
    <Edit />
  </el-icon>
```

<img src=".\11-Element Plus集成.assets\image-20240119174753071.png" alt="image-20240119174753071" style="zoom:80%;" />



## 四、其他操作

引入elementUI plus之后，修改mixin.js的代码，把方法注释放开

> <img src=".\11-Element Plus集成.assets\image-20240119174956386.png" alt="image-20240119174956386" style="zoom:80%;" />