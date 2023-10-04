"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[2036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"column-variance",title:"\u65b9\u5dee\u68c0\u67e5"},i=void 0,c={unversionedId:"features/metric/single-table-metric/column-variance",id:"features/metric/single-table-metric/column-variance",title:"\u65b9\u5dee\u68c0\u67e5",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/02-metric/01-single-table-metric/22-column-variance.md",sourceDirName:"04-features/02-metric/01-single-table-metric",slug:"/features/metric/single-table-metric/column-variance",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-variance",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-features/02-metric/01-single-table-metric/22-column-variance.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{id:"column-variance",title:"\u65b9\u5dee\u68c0\u67e5"},sidebar:"tutorialSidebar",previous:{title:"\u503c\u8303\u56f4\u68c0\u67e5",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-value-between"},next:{title:"\u53ca\u65f6\u6027\u68c0\u67e5",permalink:"/datavines-website/docs/features/metric/single-table-metric/column-freshness"}},o={},u=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u4ecb\u7ecd",id:"\u53c2\u6570\u4ecb\u7ecd",level:2},{value:"Options",id:"options",level:3},{value:"database string",id:"database-string",level:4},{value:"table string",id:"table-string",level:4},{value:"column string",id:"column-string",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50",level:3},{value:"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684 <code>SQL</code> \u8bed\u53e5",id:"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684-sql-\u8bed\u53e5",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u521b\u5efa\u89c4\u5219\u4f5c\u4e1a\uff0c\u9009\u62e9\u6570\u636e\u8d28\u91cf\u4f5c\u4e1a"),(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4f5c\u4e1a\u9875\u9762\u9009\u62e9 \u65b9\u5dee\u68c0\u67e5 \u89c4\u5219"),(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u8981\u68c0\u67e5\u7684\u6570\u636e\u6e90\u4fe1\u606f")),(0,a.kt)("h2",{id:"\u53c2\u6570\u4ecb\u7ecd"},"\u53c2\u6570\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#database-string"},"database")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#table-string"},"table")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"#column-string"},"column")),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,a.kt)("h4",{id:"database-string"},"database ","[string]"),(0,a.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u540d"),(0,a.kt)("h4",{id:"table-string"},"table ","[string]"),(0,a.kt)("p",null,"\u6e90\u8868\u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d"),(0,a.kt)("h4",{id:"column-string"},"column ","[string]"),(0,a.kt)("p",null,"\u8981\u68c0\u67e5\u7684\u5217"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"},"\u914d\u7f6e\u6587\u4ef6\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "metricType": "column_avg",\n    "metricParameter": {\n        "database": "datavines",\n        "table": "dv_catalog_entity_instance",\n        "column": "type"\n    }\n}\n')),(0,a.kt)("h3",{id:"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684-sql-\u8bed\u53e5"},"\u68c0\u67e5\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684 ",(0,a.kt)("inlineCode",{parentName:"h3"},"SQL")," \u8bed\u53e5"),(0,a.kt)("p",null,"\u68c0\u67e5\u8fc7\u7a0b\u4f1a\u7528\u5230\u7684\u4e00\u4e9b\u81ea\u52a8\u751f\u6210\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u533a\u5206\u5404\u4e2a\u68c0\u67e5\u89c4\u5219\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"uniqueKey",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u6839\u636e\u6bcf\u4e2a\u89c4\u5219\u7684\u914d\u7f6e\u4fe1\u606f\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u952e\u503c")))),(0,a.kt)("p",null,"\u8ba1\u7b97\u5b9e\u9645\u503c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SQL")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select variance(${column}) as actual_value_${uniqueKey} from ${table} where ${filter}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("p",null,"..."),(0,a.kt)("h3",{id:"\u601d\u8def"},"\u601d\u8def"),(0,a.kt)("p",null,"..."),(0,a.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.kt)("p",null,"..."))}p.isMDXComponent=!0}}]);