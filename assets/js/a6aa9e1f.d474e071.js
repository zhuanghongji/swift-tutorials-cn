"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3089],{53026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var l=n(67294),r=n(86010),a=n(39962),i=n(35463),c=n(23702),m=n(92506),s=n(97325),o=n(23672);function u(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&l.createElement(o.Z,{permalink:n,title:l.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&l.createElement(o.Z,{permalink:r,title:l.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var d=n(33647),g=n(79107),E=n(69348);function p(e){let{items:t,component:n=E.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(g.n,{key:t.metadata.permalink,content:t},l.createElement(n,null,l.createElement(t,null)))})))}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.Z)(),{blogDescription:r,blogTitle:c,permalink:m}=t,s="/"===m?n:c;return l.createElement(l.Fragment,null,l.createElement(i.d,{title:s,description:r}),l.createElement(d.Z,{tag:"blog_posts_list"}))}function f(e){const{metadata:t,items:n,sidebar:r}=e;return l.createElement(m.Z,{sidebar:r},l.createElement(p,{items:n}),l.createElement(u,{metadata:t}))}function y(e){return l.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},l.createElement(h,e),l.createElement(f,e))}},7068:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(67294),r=n(94777);const a={VPBadge:"VPBadge_Sq5m",info:"info_LQ55",tip:"tip_g6TU",warning:"warning_fPFP",danger:"danger_FgOZ"};const i=function(e){let{type:t="tip",text:n}=e;return l.createElement("span",{className:`${a.VPBadge} ${a[t]}`},n)};var c=n(69325);var m=n(15944);const s="container_CwFT";function o(e){let{headDisabled:t=!1,data:n,size:r=160}=e;return l.createElement("table",null,t?null:l.createElement("thead",null,n.map(((e,t)=>{const{title:n="",src:r}=e;return l.createElement("td",{key:`${t}_${n}`},n)}))),l.createElement("tbody",null,n.map(((e,t)=>{const{title:n="",src:a}=e;return l.createElement("td",{key:`${t}_${n}`},l.createElement(m.Z,{style:{width:r},img:a}))}))))}const u="container_NYLk";const d={...r.Z,Badge:i,DocCaution:function(e){let{status:t="translated"}=e;return l.createElement("div",null,l.createElement(c.Z,{type:"caution"},l.createElement("p",null,"\u8be5\u6587\u6863\u521a\u5b8c\u6210 Google \u7ffb\u8bd1\uff0c\u9700\u8fdb\u4e00\u6b65\u6821\u5bf9\u548c\u8865\u5145\u3002")))},OriginalLink:function(e){let{title:t,value:n}=e;return l.createElement("div",null,l.createElement(c.Z,{type:"note",title:t},l.createElement("p",null,"\u539f\u6587\uff1a",l.createElement("a",{href:n},n))),l.createElement("br",null))},ExperimentBlock:function(e){let{children:t}=e;return l.createElement("div",null,l.createElement(c.Z,{type:"note",title:"Experiment"},l.createElement("details",null,l.Children.map(t,((e,t)=>0!==t?e:l.isValidElement(e)&&e.props.children?l.createElement(l.Fragment,null,l.createElement("summary",null,e.props.children),l.createElement("br",null)):l.createElement("summary",null,e))))),l.createElement("br",null))},Figure:function(e){let{src:t,num:n,desc:r,size:a,edge:i}=e,c=720;return"number"==typeof a&&(c=a),l.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}},i?l.createElement("div",{style:{width:c,padding:"1rem",backgroundColor:"white"===i?"white":"black"}},l.createElement(m.Z,{style:{width:"100%"},img:t})):l.createElement(m.Z,{style:{width:c},img:t}),n&&r?l.createElement("p",{style:{marginTop:"0.5rem",fontSize:"1.0rem"}},l.createElement("em",null,`\u56fe ${n} ${r}`)):l.createElement("p",null))},Screenshot:function(e){let{src:t,size:n}=e,r=160;return"number"==typeof n?r=n:"m"===n&&(r=480),l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},l.createElement(m.Z,{style:{width:r},img:t})),l.createElement("br",null))},Screenshots:function(e){let{data:t,size:n=160}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},t.map(((e,t)=>l.createElement(m.Z,{key:`${t}`,style:{width:n,marginLeft:0===t?0:14},img:e})))),l.createElement("br",null))},ScreenshotBlock:function(e){let{children:t,mini:n=!1,src:r,srcRight:a,srcBottom:i,size:c,minSize:o=!1}=e,u=180;return void 0!==c?u=c:(a||o)&&(u=160),n&&(u*=.8),l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex"}},l.createElement("div",{className:s},t),l.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:14}},l.createElement(m.Z,{style:{width:u},img:r}),i?l.createElement(m.Z,{style:{width:u,marginTop:14},img:i}):null),a?l.createElement("div",{style:{marginLeft:14}},l.createElement(m.Z,{style:{width:u},img:a})):null),l.createElement("br",null))},ScreenshotBlockVertical:function(e){let{children:t,src:n,srcRight:r,srcRightmost:a,size:i,minSize:c=!1}=e,s=240;return void 0!==i?s=i:(r||c)&&(s=180),l.createElement(l.Fragment,null,t,l.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.createElement(m.Z,{style:{width:s},img:n}),r?l.createElement(m.Z,{style:{width:s,marginLeft:14},img:r}):null,a?l.createElement(m.Z,{style:{width:s,marginLeft:14},img:a}):null),l.createElement("br",null))},ScreenshotTable:o,ScreenshotTableList:function(e){let{data:t,size:n=160}=e;return(0,l.useMemo)((()=>{const e=[];let n=[];for(const l of t)4===n.length&&(e.push(n),n=[]),n.push(l);return n&&n.length>0&&e.push(n),e}),[t]).map(((e,t)=>{const r=e[0]?.title??"--";return l.createElement(o,{key:`${t}_${r}`,data:e,size:n})}))},ToContinueBookmark:function(){return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement("div",{className:u},"\u5f85\u7ee7\u7eed\u7684\u6807\u7b7e"),l.createElement("br",null))},Wisdom:function(e){let{words:t,author:n}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",borderRadius:"0.5rem",backgroundColor:"#333333"}},l.createElement("p",null,t),`\u2014 ${n}`),l.createElement("br",null))}}}}]);