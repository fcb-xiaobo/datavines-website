"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[44],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(v,l(l({ref:n},u),{},{components:t})):i.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={id:"livy-engine",title:"Livy \u5f15\u64ce"},l=void 0,o={unversionedId:"features/engine/livy-engine",id:"features/engine/livy-engine",title:"Livy \u5f15\u64ce",description:"\u539f\u7406\u89e3\u91ca",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/03-engine/03-livy-engine.md",sourceDirName:"04-features/03-engine",slug:"/features/engine/livy-engine",permalink:"/datavines-website/docs/features/engine/livy-engine",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/03-engine/03-livy-engine.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"livy-engine",title:"Livy \u5f15\u64ce"},sidebar:"tutorialSidebar",previous:{title:"Spark \u5f15\u64ce",permalink:"/datavines-website/docs/features/engine/spark-engine"},next:{title:"SLAs\u4ecb\u7ecd",permalink:"/datavines-website/docs/features/slas/slas-intro"}},p={},s=[{value:"\u539f\u7406\u89e3\u91ca",id:"\u539f\u7406\u89e3\u91ca",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:s};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u539f\u7406\u89e3\u91ca"},"\u539f\u7406\u89e3\u91ca"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Livy")," \u5f15\u64ce\u662f\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Livy")," \u5f00\u53d1\u7684\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u4f5c\u4e1a\u6267\u884c\u5f15\u64ce\uff0c\u4f7f\u5f97",(0,r.kt)("inlineCode",{parentName:"p"},"Datavines"),"\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," \u5e94\u7528\u63d0\u4ea4\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Livy")," \u4e0a\u53bb\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5728\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u4f5c\u4e1a\u548c\u6570\u636e\u6bd4\u5bf9\u4f5c\u4e1a\u4e2d\u7684\u5f15\u64ce\u914d\u7f6e\u4e2d\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Livy")," \u5f15\u64ce\uff0c\u586b\u597d\u5404\u79cd ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," \u76f8\u5173\u7684\u57fa\u7840\u914d\u7f6e\u4fe1\u606f\n",(0,r.kt)("img",{alt:"\u6570\u636e\u8d28\u91cf\u68c0\u67e5\u89c4\u5219\u5f15\u64ce\u914d\u7f6e",src:t(4645).Z,width:"1798",height:"506"})),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Livy"),"\u5f15\u64ce\uff0c\u9700\u8981\u5b8c\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Livy"),"\u76f8\u5173\u7684\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u53c2\u6570\u4e2d\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"livy"),"\u5f00\u5934\u7684\u76f8\u5173\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"/lib/datavines-engine-spark-core-1.0.0-SNAPSHOT.jar"),"\u4e0a\u4f20\u5230\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"livy.task.jar.lib.path"),"\u6307\u5b9a\u7684\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4f5c\u4e1a\u4efb\u52a1\u76f8\u5173",(0,r.kt)("inlineCode",{parentName:"li"},"jar")," (",(0,r.kt)("inlineCode",{parentName:"li"},"plugins"),"\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"jar"),") \u4e0a\u4f20\u5230\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"livy.task.jar.lib.path"),"\u6307\u5b9a\u7684\u4f4d\u7f6e\uff0c\u5982\u679c\u9700\u8981\u989d\u5916\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"jar"),"\uff0c\u8bf7\u81ea\u884c\u4e0a\u4f20"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4f5c\u4e1a\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"jar"),"\u5177\u4f53\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"--jar xx.jar,zz.jar"),"\uff0c\u82e5\u4e0d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"li"},"--jar"),"\u4f1a\u9ed8\u8ba4\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"li"},"livy.task.jars"),"\u914d\u7f6e\u6765\u6267\u884c,\u9700\u8981\u5c06\u76f8\u5173\u6587\u4ef6\u4e0a\u4f20")))}c.isMDXComponent=!0},4645:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/metric_job_engine-8b07bd335fea10f19e4b6a31f228ae44.png"}}]);