import{_ as a,c as e,a2 as s,o}from"./chunks/framework.Ha0aP7Un.js";const i="/vitepress-notes/assets/image-20240517173240152.Cb1JKWUj.png",l="/vitepress-notes/assets/image-20240517173309020.By6D2egy.png",r="/vitepress-notes/assets/image-20240517173323910.BiKSkfJw.png",n="/vitepress-notes/assets/image-20240517173454549.C_haor0t.png",d="/vitepress-notes/assets/image-20240517173513139.jIwQXVcx.png",g="/vitepress-notes/assets/image-20240517173827534.C3G1XdD9.png",p="/vitepress-notes/assets/image-20240517173838455.QgJxD2-z.png",c="/vitepress-notes/assets/image-20240517173853431.DMa7Ur2r.png",m="/vitepress-notes/assets/image-20240517174759543.DXCduTZg.png",h="/vitepress-notes/assets/image-20240517174819253.C-cLuFrp.png",b="/vitepress-notes/assets/image-20240517174840634.M7ewoYmt.png",y="/vitepress-notes/assets/image-20240517175022604.Ckmqfl_h.png",_="/vitepress-notes/assets/image-20240517175045801.b7IdX2FD.png",x="/vitepress-notes/assets/image-20240517174921245.5068GV5U.png",f="/vitepress-notes/assets/image-20240517174936611.-K7VHI4t.png",u="/vitepress-notes/assets/image-20240517175301897.BrYsnWtc.png",v="/vitepress-notes/assets/image-20240517175330267.tdM-fs05.png",k="/vitepress-notes/assets/image-20240517175345266.Bwi-8f83.png",z="/vitepress-notes/assets/image-20240517174310608.83O0upH-.png",q="/vitepress-notes/assets/image-20240517174332065.BXjsvwRW.png",w="/vitepress-notes/assets/image-20240517174344555.B-GrJdlr.png",G=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/views/project/在星沙.md","filePath":"column/views/project/在星沙.md"}'),P={name:"column/views/project/在星沙.md"};function B(D,t,j,C,I,J){return o(),e("div",null,t[0]||(t[0]=[s('<h2 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h2><p>该项目是嵌入在手机端<strong>在星沙</strong>app中，因此项目是对接了手机端sdk文件的，用来获取登录用户信息，用户信息通过vuex存储</p><blockquote><p>无纸化办公系统的1.0版本，最开始是一个<strong>会议系统</strong>，功能为发起会议，修改会议，参加会议回复等。</p></blockquote><p>后台为原始会议系统的后台里面加模块，项目是layui</p><p>后面新增模块</p><ol><li>公文</li><li>请假</li><li>任务</li></ol><p>三个模块</p><p>项目始于22年9月，周期2个月，但是后续修改、维护，加要求，持续了两个月</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>项目定位是oa系统，模仿钉钉的无纸化办公批文系统。由于是1.0，所以只有手机端</p></div><h3 id="公文模块" tabindex="-1">公文模块 <a class="header-anchor" href="#公文模块" aria-label="Permalink to &quot;公文模块&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>发起公文和任务，内容都是一模一样的，但是领导的需求就是，需要两个不同的类型，但是内容表单字段都一致，所以共用了公文的处理页面，详情页面</p></div><blockquote><p>vue2 + vantUI</p></blockquote><p>功能点</p><ol><li>可以签收，签收后再办理</li><li>已提交的可以修改意见</li><li>自定义选人</li><li>抄送处理和正常处理无区别，但是抄送不影响正常任务</li></ol><table tabindex="0"><thead><tr><th><img src="'+i+'" alt="image-20240517173240152" data-fancybox="gallery" loading="lazy"></th><th><img src="'+l+'" alt="image-20240517173309020" data-fancybox="gallery" loading="lazy"></th><th><img src="'+r+'" alt="image-20240517173323910" data-fancybox="gallery" loading="lazy"></th></tr></thead><tbody><tr><td><img src="'+n+'" alt="image-20240517173454549" data-fancybox="gallery" loading="lazy"></td><td><img src="'+d+'" alt="image-20240517173513139" data-fancybox="gallery" loading="lazy"></td><td></td></tr></tbody></table><h3 id="请假模块" tabindex="-1">请假模块 <a class="header-anchor" href="#请假模块" aria-label="Permalink to &quot;请假模块&quot;">​</a></h3><p>请假比公文简单，因为请假只有，提交或者，不通过</p><table tabindex="0"><thead><tr><th><img src="'+g+'" alt="image-20240517173827534" data-fancybox="gallery" loading="lazy"></th><th><img src="'+p+'" alt="image-20240517173838455" data-fancybox="gallery" loading="lazy"></th><th><img src="'+c+'" alt="image-20240517173853431" data-fancybox="gallery" loading="lazy"></th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><h3 id="会议模块" tabindex="-1">会议模块 <a class="header-anchor" href="#会议模块" aria-label="Permalink to &quot;会议模块&quot;">​</a></h3><p>这个会议，可以创建，然后再修改，并且有会议签到，有统计参会人数</p><table tabindex="0"><thead><tr><th>创建会议</th><th>最新会议</th><th>会议详情</th></tr></thead><tbody><tr><td><img src="'+m+'" alt="image-20240517174759543" data-fancybox="gallery" loading="lazy"></td><td><img src="'+h+'" alt="image-20240517174819253" data-fancybox="gallery" loading="lazy"></td><td><img src="'+b+'" alt="image-20240517174840634" data-fancybox="gallery" loading="lazy"></td></tr></tbody></table><table tabindex="0"><thead><tr><th>会议主页</th><th>我的会议</th><th></th></tr></thead><tbody><tr><td><img src="'+y+'" alt="image-20240517175022604" data-fancybox="gallery" loading="lazy"></td><td><img src="'+_+'" alt="image-20240517175045801" data-fancybox="gallery" loading="lazy"></td><td></td></tr></tbody></table><table tabindex="0"><thead><tr><th>会议签到</th><th>领取参会资料</th><th></th></tr></thead><tbody><tr><td><img src="'+x+'" alt="image-20240517174921245" data-fancybox="gallery" loading="lazy"></td><td><img src="'+f+'" alt="image-20240517174936611" data-fancybox="gallery" loading="lazy"></td><td></td></tr></tbody></table><h4 id="日程模块" tabindex="-1">日程模块 <a class="header-anchor" href="#日程模块" aria-label="Permalink to &quot;日程模块&quot;">​</a></h4><table tabindex="0"><thead><tr><th>日程列表</th><th>日程详情</th><th>日程所在会议内容</th></tr></thead><tbody><tr><td><img src="'+u+'" alt="image-20240517175301897" data-fancybox="gallery" loading="lazy"></td><td><img src="'+v+'" alt="image-20240517175330267" data-fancybox="gallery" loading="lazy"></td><td><img src="'+k+'" alt="image-20240517175345266" data-fancybox="gallery" loading="lazy"></td></tr></tbody></table><h3 id="其他页面" tabindex="-1">其他页面 <a class="header-anchor" href="#其他页面" aria-label="Permalink to &quot;其他页面&quot;">​</a></h3><p><strong>我的</strong></p><blockquote><p>所有自己发起的都在这里显示</p></blockquote><p><strong>文件</strong></p><blockquote><p>列表，文件在这里也算<strong>1个模块</strong></p><p>文件是可以，通过二维码分享的，然后app扫码获取文件，再导入进来，成为个人收藏文件，也可以个人上传文件</p></blockquote><table tabindex="0"><thead><tr><th><img src="'+z+'" alt="image-20240517174310608" data-fancybox="gallery" loading="lazy"></th><th><img src="'+q+'" alt="image-20240517174332065" data-fancybox="gallery" loading="lazy"></th><th><img src="'+w+'" alt="image-20240517174344555" data-fancybox="gallery" loading="lazy"></th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>',31)]))}const N=a(P,[["render",B]]);export{G as __pageData,N as default};
