# 03-代码格式化(prettier)



::: tip

可以在你保存代码的时候，统一风格，或者去除多余空格。等等

:::



例如我喜欢的几个点

- 把所有的字符串变量都作为单引号 ''

因为在变量里面如果有标签赋值的话，可以避免

**正例：** ✔

```js
let str = 'foo';
let testDiv = '<div id="test"></div>'; 
```

**反例：** ❌

```js
let str = 'foo'; 
let testDiv = "<div id='test'></div>";
```



- 给所有的后缀补上 ;分号



## 一、下载插件

在vscode的插件列表搜索

```
Prettier
```

<img src=".\03-代码格式化(prettier).assets\image-20240119100934473.png" alt="image-20240119100934473"  />

点击下载安装，然后重启编辑器





### 创建文件，在根目录下

就是跟你的vite.config.js同级别

文件名

```json
.prettierrc.json
```

复制粘贴到里面

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "vueIndentScriptAndStyle": false,
  "proseWrap": "preserve"
}
```



## 二、保存时自动格式化代码规范

打开vscode，进入设置，搜索 format on save。勾选



<img src=".\03-代码格式化(prettier).assets\image-20240119103213962.png" alt="image-20240119103213962" style="zoom:80%;" />



使用prettier格式化代码

<img src=".\03-代码格式化(prettier).assets\image-20240119103510327.png" alt="image-20240119103510327" style="zoom:80%;" />

<img src=".\03-代码格式化(prettier).assets\image-20240119103546522.png" alt="image-20240119103546522" style="zoom: 80%;" />

> *`到这里就大功告成了`*





## 三、个别属性翻译

- **printWidth**

在.editorconfig文件中设置max_line_length将配置Prettier的打印宽度，除非被覆盖。

(如果在设置Markdown格式时不希望换行，可以设置散文换行选项禁用它。)

- **tabWidth**

在.editorconfig文件中设置indent_size或tab_width将配置pretier的制表符宽度，除非被覆盖。

- **useTabs**

在.editorconfig文件中设置indent_style将配置Prettier的制表符使用，除非被覆盖。

(制表符将用于缩进，但Prettier使用空格来对齐，例如在三元格式中。这种行为被称为智能标签。)

- **semi**

> 在语句末尾打印分号。
>

有效的选项:

true -在每个语句的末尾添加分号。

false -仅在可能引入ASI故障的行开头添加分号。

- **singleQuote**

使用单引号而不是双引号。

JSX引号忽略这个选项——参见JSX -single-quote。

如果引号的数量超过其他引号，较少使用的引号将用于格式化字符串-例如:“我是双引号”结果为“我是双引号”，“这个例子”是单引号”结果为“这个例子”是单引号”。

- **quoteProps**

当对象中的属性被引用时更改。

"as-needed"——只在需要的地方给对象属性加上引号。

"consistent" -如果对象中至少有一个属性需要引号，则引用所有属性。

"preserve" -尊重对象属性中引号的输入使用。

- **jsxSingleQuote**

在JSX中使用单引号而不是双引号。

- **trailingComma**

默认值在v3.0.0中从es5更改为all

在多行逗号分隔的语法结构中，尽可能打印尾随逗号。(例如，单行数组后面永远不会有逗号。)

有效的选项:

"all" -在任何可能的地方后面加逗号(包括函数参数和调用)。要运行以这种方式格式化的JavaScript代码，需要一个支持ES2017 (Node.js 8+或现代浏览器)或底层编译的引擎。这也支持TypeScript类型参数中的尾随逗号(自2018年1月发布的TypeScript 2.7起支持)。

"es5" -后面的逗号在es5中是有效的(对象，数组等)。TypeScript和Flow中类型参数后面的逗号。

"none" -没有尾随逗号。

- **bracketSpacing**

打印对象字面量中括号之间的空格。

有效的选项:

```
true -例如:{ foo: bar }。

false—例如:{foo: bar}。
```



- **jsxBracketSameLine**

把&gt;多行JSX元素在最后一行的末尾，而不是单独在下一行(不适用于自关闭元素)。

`true` - Example:

```html
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}>
  Click Here
</button>

```

`false` - Example:

```html
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}
>
  Click Here
</button>
```



- **arrowParens**

首次在v1.9.0中可用，默认值在v2.0.0中从avoid更改为always

在唯一的箭头函数参数周围包含圆括号。

`"always"` - 总是包括父节点. Example: `(x) => x`

`"avoid"` - 尽可能省略父节点. Example: `x => x`



- **requirePragma**

Prettier可以将自己限制为只格式化在文件顶部包含特殊注释(称为pragma)的文件。这在逐步将大型未格式化的代码库转换为Prettier时非常有用。

当提供——require-pragma时，带有以下第一个注释的文件将被格式化:



- **insertPragma**
- **vueIndentScriptAndStyle**
- **proseWrap**

可以翻看文档，文档内都是英文的，需要自己翻译

[Prettier中文网](https://www.prettier.cn/docs/options.html)



## 四、更多的编程开发规范

[阿里代码规范传送门](https://developer.aliyun.com/article/850913#slide-0)