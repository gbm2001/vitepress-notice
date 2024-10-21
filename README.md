## 开发

```bash
# 1.创建项目
mkdir vitepress-notice && cd vitepress-notice

# 2.如果没有安装过pnpm，可以全局安装下
sudo npm install -g pnpm

# 3.用pnpm初始化
pnpm init

# 4.安装命令
pnpm add vitepress -D

# 5.如果使用pnpm初始化的话，需要在package.json加上一下代码
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}

# 6.构建一个基本的项目
pnpm exec vitepress init
```



```bash
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md 入口文件
└─ package.json
```

> nodejs=>18

浏览器访问 [http://localhost:5173](http://localhost:5173/)

## 
