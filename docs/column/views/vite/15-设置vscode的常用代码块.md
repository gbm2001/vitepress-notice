# 15-设置vscode的常用代码块

vscode=》左下角齿轮=》用户代码片段

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123143151931.png" alt="image-20240123143151931" style="zoom:80%;" />

点击打开vue.json

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123143241438.png" alt="image-20240123143241438" style="zoom:80%;" />

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123143446215.png" alt="image-20240123143446215" style="zoom:80%;" />

这是案例，

- Print to console：这是提示语句
- prefix：`指令`，输入这个，按下回车就可以出来
- body就是内容了
- description是说明内容

[快速生成传送门](https://snippet-generator.app/?description=vue+create+demo&tabtrigger=vinit&snippet=%3Ctemplate%3E%0A++%3Cdiv+class%3D%22container%22%3E%0A+++++++%0A++%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0A%09export+default+%7B%0A%09++++name%3A+%22vinit%22%2C%0A++++++++++++components%3A%7B%0A++++++++++++++++%0A++++++++++++%7D%2C%0A%09++++data%28%29%7B%0A%09++++++++return%7B%0A+++++++++++++++++++%0A%09%09%7D%0A%09++++%7D%2C%0A%09++++created%28%29+%7B%0A+++++++++++++++++%0A%09++++%7D%2C%0A%09++++methods%3A%7B%0A++++++++++++++++%0A%09++++%7D%2C%0A%09%7D%0A%3C%2Fscript%3E%0A%3Cstyle+scoped+lang%3D%22less%22%3E%0A++.container%7B%0A++++++%0A++%7D%0A%3C%2Fstyle%3E&mode=vscode)

打开我这个网站

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123143714701.png" alt="image-20240123143714701"  />

这是我vue2的默认代码



把页面上的vue3快速生成粘贴进去，这个是实时变化的。

```html
<template>
  <div class="app-container">
    <h1>快速生成</h1>
  </div>
</template>

<script setup>
const num = ref(0);
</script>

<style lang="scss" scoped>
.app-container {

}
</style>

```

因为我有vinit是vue2的，所以我这里取名，vinit3

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123144046783.png" alt="image-20240123144046783" style="zoom:80%;" />

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123144140807.png" alt="image-20240123144140807" style="zoom:80%;" />

```json
	"vue3 create demo": {
		"prefix": "vinit3",
		"body": [
		  "<template>",
		  "  <div class=\"app-container\">",
		  "    <h1>快速生成</h1>",
		  "  </div>",
		  "</template>",
		  "",
		  "<script setup>",
		  "const num = ref(0);",
		  "</script>",
		  "",
		  "<style lang=\"scss\" scoped>",
		  ".app-container {",
		  "",
		  "}",
		  "</style>",
		  ""
		],
		"description": "vue3 create demo"
	  }
```

### 测试

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\image-20240123144440349.png" alt="image-20240123144440349" style="zoom:80%;" />

<img src=".\15-%E8%AE%BE%E7%BD%AEvscode%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81%E5%9D%97.assets\code-snapshot.png" alt="code-snapshot" style="zoom: 50%;" />