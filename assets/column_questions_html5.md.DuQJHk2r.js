import{_ as e,c as t,a2 as l,o as a}from"./chunks/framework.BEuel-Bv.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/questions/html5.md","filePath":"column/questions/html5.md"}'),i={name:"column/questions/html5.md"};function c(r,o,d,n,s,m){return a(),t("div",null,o[0]||(o[0]=[l('<h2 id="html相关面试题" tabindex="-1">html相关面试题 <a class="header-anchor" href="#html相关面试题" aria-label="Permalink to &quot;html相关面试题&quot;">​</a></h2><h3 id="_1-什么是-dom-和-bom" tabindex="-1">1：什么是 DOM 和 BOM？ <a class="header-anchor" href="#_1-什么是-dom-和-bom" aria-label="Permalink to &quot;1：什么是 DOM 和 BOM？&quot;">​</a></h3><p>DOM（Document Object Model）和 BOM（Browser Object Model）是 JavaScript 中常用的两个概念，用于描述浏览器中的不同对象模型。</p><p><strong>DOM（Document Object Model）</strong>:</p><ul><li>DOM 是表示 HTML 和 XML 文档的标准的对象模型。它将文档中的每个组件（如元素、属性、文本等）都看作是一个对象，开发者可以使用 JavaScript 来操作这些对象，从而动态地改变页面的内容、结构和样式。</li><li>DOM 以树状结构组织文档的内容，其中树的根节点是 <code>document</code> 对象，它代表整个文档。<code>document</code> 对象有各种方法和属性，可以用来访问和修改文档的内容和结构。</li></ul><p><strong>BOM（Browser Object Model）</strong>:</p><ul><li>BOM 是表示浏览器窗口及其各个组件的对象模型。它提供了一组对象，用于访问和控制浏览器窗口及其各个部分，如地址栏、历史记录等。</li><li>BOM 的核心对象是 <code>window</code> 对象，它表示浏览器窗口，并且是 JavaScript 中的全局对象。<code>window</code> 对象提供了许多属性和方法，用于控制浏览器窗口的各个方面，如页面导航、定时器、对话框等。</li><li>BOM 还提供了其他一些对象，如 <code>navigator</code>（提供浏览器相关信息）、<code>location</code>（提供当前文档的 URL 信息）、<code>history</code>（提供浏览器历史记录）、<code>screen</code>（提供屏幕信息）等。</li></ul><h3 id="_2-简单描述从输入网址到页面显示的过程" tabindex="-1">2：简单描述从输入网址到页面显示的过程 <a class="header-anchor" href="#_2-简单描述从输入网址到页面显示的过程" aria-label="Permalink to &quot;2：简单描述从输入网址到页面显示的过程&quot;">​</a></h3><ul><li>DNS解析</li><li>发起TCP连接</li><li>发送HTTP请求</li><li>服务器处理请求并返回HTTP报文</li><li>浏览器解析渲染页面</li><li>连接结束</li></ul><p><strong>DNS解析</strong></p><p>DNS解析其实是一个递归的过程。</p><p>输入<code>www.google.com</code>网址后，首先在本地的域名服务器中查找，没找到去根域名服务器查找，没有再去com顶级域名服务器查找，，如此的类推下去，直到找到IP地址，然后把它记录在本地，供下次使用。</p><p><strong>发起TCP连接</strong></p><p>TCP提供一种可靠的传输，这个过程涉及到三次握手，四次挥手。</p>',14)]))}const h=e(i,[["render",c]]);export{u as __pageData,h as default};