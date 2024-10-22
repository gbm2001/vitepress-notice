import{_ as n,c as a,a2 as i,o as e}from"./chunks/framework.Ha0aP7Un.js";const p="/vitepress-notes/assets/image-20240119111149895.BYg6jv2c.png",l="/vitepress-notes/assets/image-20240119111738653-1705634276962.uYNP9txd.png",t="/vitepress-notes/assets/image-20240119111940021.D6SfHQL9.png",m=JSON.parse('{"title":"eslint代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"column/views/vite/04-eslint规范.md","filePath":"column/views/vite/04-eslint规范.md"}'),r={name:"column/views/vite/04-eslint规范.md"};function c(h,s,d,o,u,b){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="eslint代码规范" tabindex="-1">eslint代码规范 <a class="header-anchor" href="#eslint代码规范" aria-label="Permalink to &quot;eslint代码规范&quot;">​</a></h1><h2 id="一、安装" tabindex="-1">一、安装 <a class="header-anchor" href="#一、安装" aria-label="Permalink to &quot;一、安装&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>eslint =&gt; ESLint的核心代码</span></span>
<span class="line"><span>prettier =&gt; prettier插件的核心代码</span></span>
<span class="line"><span>eslint-plugin-vue =&gt; 为 Vue 使用 ESlint 的插件</span></span>
<span class="line"><span>eslint-config-prettier =&gt; 解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效</span></span>
<span class="line"><span>eslint-plugin-prettier =&gt; 将prettier作为ESLint规范来使用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-plugin-vue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-config-prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eslint-plugin-prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二、配置编码规范检查" tabindex="-1">二、配置编码规范检查 <a class="header-anchor" href="#二、配置编码规范检查" aria-label="Permalink to &quot;二、配置编码规范检查&quot;">​</a></h2><h3 id="_1、-eslintrc-cjs" tabindex="-1">1、.eslintrc.cjs <a class="header-anchor" href="#_1、-eslintrc-cjs" aria-label="Permalink to &quot;1、.eslintrc.cjs&quot;">​</a></h3><p>在根目录创建</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  root: true,</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    browser: true,</span></span>
<span class="line"><span>    es2021: true,</span></span>
<span class="line"><span>    node: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/vue3-recommended&#39;, &#39;prettier&#39;],</span></span>
<span class="line"><span>  overrides: [],</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [&#39;vue&#39;, &#39;prettier&#39;],</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &#39;prettier/prettier&#39;: &#39;error&#39;,</span></span>
<span class="line"><span>    &#39;vue/multi-word-component-names&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;vue/no-v-model-argument&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="规则配置" tabindex="-1">规则配置 <a class="header-anchor" href="#规则配置" aria-label="Permalink to &quot;规则配置&quot;">​</a></h3><p>规则中文解释 <a href="http://eslint.cn/docs/rules/" target="_blank" rel="noreferrer">http://eslint.cn/docs/rules/****</a></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rules: {</span></span>
<span class="line"><span>  &#39;规则名&#39;: &#39;规则值&#39;</span></span>
<span class="line"><span>  // eg:</span></span>
<span class="line"><span>  &#39;no-undef&#39;: &#39;off&#39;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>规则值:</p><ul><li>&quot;off&quot;或者0 =&gt; 关闭检测规则</li><li>&quot;warn&quot;或者1 =&gt; 打开并把打开的检测规则作为警告（不影响退出代码）</li><li>&quot;error&quot;或者2 =&gt; 打开并把检测规则作为一个错误（退出代码触发时为1）</li></ul><h4 id="_2、-eslintignore忽略检查" tabindex="-1">2、.eslintignore忽略检查 <a class="header-anchor" href="#_2、-eslintignore忽略检查" aria-label="Permalink to &quot;2、.eslintignore忽略检查&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>*.md</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>public</span></span>
<span class="line"><span>*.js</span></span>
<span class="line"><span>*.cjs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="三、配置vite项目启动时检查" tabindex="-1">三、配置vite项目启动时检查 <a class="header-anchor" href="#三、配置vite项目启动时检查" aria-label="Permalink to &quot;三、配置vite项目启动时检查&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -D vite-plugin-eslint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>vite.config.js</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@vitejs/plugin-vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> eslint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite-plugin-eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line diff add"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    eslint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ lintOnStart: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, cache: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 项目运行时进行eslint检查</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="四、安装eslint插件" tabindex="-1">四、安装ESLint插件 <a class="header-anchor" href="#四、安装eslint插件" aria-label="Permalink to &quot;四、安装ESLint插件&quot;">​</a></h2><img src="`+p+'" alt="image-20240119111149895" style="zoom:80%;"><h2 id="五、检查是否有效" tabindex="-1">五、检查是否有效 <a class="header-anchor" href="#五、检查是否有效" aria-label="Permalink to &quot;五、检查是否有效&quot;">​</a></h2><p>去App.vue中，看看是不是会这样，由于回车导致报错</p><img src="'+l+'" alt="image-20240119111738653"><img src="'+t+'" alt="image-20240119111940021" style="zoom:80%;">',25)]))}const g=n(r,[["render",c]]);export{m as __pageData,g as default};
