"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[6103],{324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var l=n(67294),r=n(86010),a=n(35463),i=n(23702),c=n(79107),o=n(92506),m=n(69348),s=n(87462),u=n(97325),d=n(23672);function g(e){const{nextItem:t,prevItem:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&l.createElement(d.Z,(0,s.Z)({},n,{subLabel:l.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&l.createElement(d.Z,(0,s.Z)({},t,{subLabel:l.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function p(){const{assets:e,metadata:t}=(0,c.C)(),{title:n,description:r,date:i,tags:o,authors:m,frontMatter:s}=t,{keywords:u}=s,d=e.image??s.image;return l.createElement(a.d,{title:n,description:r,keywords:u,image:d},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:i}),m.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&l.createElement("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")}))}var E=n(87086);function f(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:a}=(0,c.C)(),{nextItem:i,prevItem:s,frontMatter:u}=r,{hide_table_of_contents:d,toc_min_heading_level:p,toc_max_heading_level:f}=u;return l.createElement(o.Z,{sidebar:t,toc:!d&&a.length>0?l.createElement(E.Z,{toc:a,minHeadingLevel:p,maxHeadingLevel:f}):void 0},l.createElement(m.Z,null,n),(i||s)&&l.createElement(g,{nextItem:i,prevItem:s}))}function h(e){const t=e.content;return l.createElement(c.n,{content:e.content,isBlogPostPage:!0},l.createElement(a.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},l.createElement(p,null),l.createElement(f,{sidebar:e.sidebar},l.createElement(t,null))))}},87086:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(87462),r=n(67294),a=n(86010),i=n(2728);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},o="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function s(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,a.Z)(c.tableOfContents,"thin-scrollbar",t)},r.createElement(i.Z,(0,l.Z)({},n,{linkClassName:o,linkActiveClassName:m})))}},2728:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(87462),r=n(67294),a=n(20107);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):l.push(r)})),l}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function m(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>o(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let r=t;r<=n;r+=1)l.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:n.current}),s=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:l,isChild:a}=e;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const g=r.memo(d);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:s,maxHeadingLevel:d,...p}=e;const E=(0,a.L)(),f=s??E.tableOfContents.minHeadingLevel,h=d??E.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,r.useMemo)((()=>c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:f,maxHeadingLevel:h});return u((0,r.useMemo)((()=>{if(o&&m)return{linkClassName:o,linkActiveClassName:m,minHeadingLevel:f,maxHeadingLevel:h}}),[o,m,f,h])),r.createElement(g,(0,l.Z)({toc:v,className:n,linkClassName:o},p))}},47737:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(67294),r=n(94777);var a=n(69325);var i=n(15944);const c="container_CwFT";function o(e){let{headDisabled:t=!1,data:n,size:r=160}=e;return l.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%"}},l.createElement("center",null,l.createElement("table",null,t?null:l.createElement("thead",null,n.map(((e,t)=>{const{title:n="",src:r}=e;return l.createElement("td",{key:`${t}_${n}`},n)}))),l.createElement("tbody",null,n.map(((e,t)=>{const{title:n="",src:a}=e;return l.createElement("td",{key:`${t}_${n}`},l.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.createElement("div",{style:{width:r}},l.createElement(i.Z,{style:{width:r},img:a}))))}))))))}const m="\nAUv2 API\nAUv3 API\n\u63cf\u8ff0\n\nAudioUnitInitialize(_:)\naudioUnit.allocateRenderResources()\n\u5206\u914d\u97f3\u9891\u5355\u5143\u6240\u9700\u7684\u8d44\u6e90\u3002\n\nAudioUnitUninitialize(_:)\naudioUnit.deallocateRenderResources()\n\u91ca\u653e\u97f3\u9891\u5355\u5143\u7684\u6e32\u67d3\u8d44\u6e90\u3002\n\nAudioUnitRender(_:_:_:_:_:_:)\naudioUnit.renderBlock\n\u5728\u5b9e\u65f6\u4e0a\u4e0b\u6587\u4e2d\u6e32\u67d3\u97f3\u9891\u6837\u672c\u3002\n\nAudioUnitReset(_:_:_:)\naudioUnit.reset()\n\u91cd\u7f6e\u97f3\u9891\u5355\u5143\u7684\u72b6\u6001\u3002\n\nAudioUnitScheduleParameters(_:_:_:)\naudioUnit.scheduleParameterBlock\n\u5b89\u6392\u5bf9\u97f3\u9891\u5355\u5143\u53c2\u6570\u503c\u7684\u66f4\u6539\u3002\n\nAudioUnitGetProperty(_:_:_:_:_:_:)\tAudioUnitSetProperty(_:_:_:_:_:_:)\naudioUnit.propertyName\n\u4fee\u6539\u97f3\u9891\u5355\u5143\u5c5e\u6027\u503c\u3002\n\nAudioUnitGetParameter(_:_:_:_:_:)\tAudioUnitSetParameter(_:_:_:_:_:_:)\naudioUnit.parameterTree\n\u8bbf\u95ee\u7528\u4e8e\u83b7\u53d6\u548c\u8bbe\u7f6e\u53c2\u6570\u503c\u7684\u53c2\u6570\u6811\u5bf9\u8c61\u3002\n";const s="container_NYLk";const u={...r.Z,OriginalPDF:function(e){let{title:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1.5rem",paddingBottom:"0.5rem",borderRadius:"0.5rem",backgroundColor:"#333333"}},l.createElement("p",null,"\u539f\u6587\uff1a",l.createElement("a",{href:"https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf"},"Metal Shading Language Specification - Version 3.1")),l.createElement("blockquote",null,t)),l.createElement("br",null))},OriginalSource:function(e){let{title:t,url:n,summary:r}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1.5rem",paddingBottom:"0.5rem",borderRadius:"0.5rem",backgroundColor:"#333333"}},l.createElement("p",null,"\u539f\u6587\uff1a",l.createElement("a",{href:n},t)),r?l.createElement("blockquote",null,r.endsWith("\u3002")?r:`${r}\u3002`):null),l.createElement("br",null))},ReferenceSources:function(e){let{data:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"1.5rem",paddingBottom:"0.5rem",borderRadius:"0.5rem",backgroundColor:"#333333"}},"\u53c2\u8003\u5185\u5bb9\uff1a",l.createElement("br",null),l.createElement("ul",null,t.map(((e,t)=>{let{name:n,url:r}=e;return l.createElement("li",{key:`${n}_${r}_${t}`},l.createElement("a",{href:r},n))})))),l.createElement("br",null))},ExperimentBlock:function(e){let{children:t}=e;return l.createElement("div",null,l.createElement(a.Z,{type:"note",title:"Experiment"},l.createElement("details",null,l.Children.map(t,((e,t)=>0!==t?e:l.isValidElement(e)&&e.props.children?l.createElement(l.Fragment,null,l.createElement("summary",null,e.props.children),l.createElement("br",null)):l.createElement("summary",null,e))))),l.createElement("br",null))},Figure:function(e){let{src:t,num:n,desc:r,size:a,edge:c}=e,o=720;return"number"==typeof a&&(o=a),l.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}},c?l.createElement("div",{style:{width:o,padding:"1rem",backgroundColor:"white"===c?"white":"black"}},l.createElement(i.Z,{style:{width:"100%"},img:t})):l.createElement(i.Z,{style:{width:o},img:t}),n&&r?l.createElement("p",{style:{marginTop:"0.5rem",fontSize:"1.0rem"}},l.createElement("em",null,`\u56fe ${n} ${r}`)):l.createElement("p",null))},Screenshot:function(e){let{src:t,size:n}=e,r=160;return"number"==typeof n?r=n:"m"===n&&(r=480),l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},l.createElement(i.Z,{style:{width:r},img:t})),l.createElement("br",null))},Screenshots:function(e){let{data:t,size:n=160}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},t.map(((e,t)=>l.createElement(i.Z,{key:`${t}`,style:{width:n,marginLeft:0===t?0:14},img:e})))),l.createElement("br",null))},ScreenshotBlock:function(e){let{children:t,mini:n=!1,src:r,srcRight:a,srcBottom:o,size:m,minSize:s=!1}=e,u=180;return void 0!==m?u=m:(a||s)&&(u=160),n&&(u*=.8),l.createElement(l.Fragment,null,l.createElement("div",{style:{display:"flex"}},l.createElement("div",{className:c},t),l.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:14}},l.createElement(i.Z,{style:{width:u},img:r}),o?l.createElement(i.Z,{style:{width:u,marginTop:14},img:o}):null),a?l.createElement("div",{style:{marginLeft:14}},l.createElement(i.Z,{style:{width:u},img:a})):null),l.createElement("br",null))},ScreenshotBlockVertical:function(e){let{children:t,src:n,srcRight:r,srcRightmost:a,size:c,minSize:o=!1}=e,m=240;return void 0!==c?m=c:(r||o)&&(m=180),l.createElement(l.Fragment,null,t,l.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.createElement(i.Z,{style:{width:m},img:n}),r?l.createElement(i.Z,{style:{width:m,marginLeft:14},img:r}):null,a?l.createElement(i.Z,{style:{width:m,marginLeft:14},img:a}):null),l.createElement("br",null))},ScreenshotTable:o,ScreenshotTableList:function(e){let{data:t,size:n=160}=e;return(0,l.useMemo)((()=>{const e=[];let n=[];for(const l of t)4===n.length&&(e.push(n),n=[]),n.push(l);return n&&n.length>0&&e.push(n),e}),[t]).map(((e,t)=>{const r=e[0]?.title??"--";return l.createElement(o,{key:`${t}_${r}`,data:e,size:n})}))},TableView:function(e){let{num:t,title:n,headers:r,datasList:a,size:i="90%"}=e;return l.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}},t&&n?l.createElement("div",null,l.createElement("strong",null,`Table ${t} - ${n}`)):null,l.createElement("br",null),l.createElement("center",{style:{maxWidth:i}},l.createElement("table",null,l.createElement("thead",null,r.map(((e,t)=>l.createElement("th",{key:`${t}_${e}`},e)))),l.createElement("tbody",null,a.map(((e,t)=>l.createElement("tr",{key:t},e.map(((e,t)=>l.createElement("td",{key:`${t}_${e}`,style:{whiteSpace:"pre-line",minWidth:"10rem",color:0===t?"#BDBDBD":"white"}},e))))))))),l.createElement("br",null))},TableViewDataGenerator:function(){const e=(0,l.useMemo)((()=>{const e=[];let t=[];return m.split("\n").map((e=>e.trim().replace(/\t/g,"\n"))).filter((e=>!!e)).forEach((n=>{3===t.length&&(e.push(t),t=[]),t.push(n)})),e.push(t),e}),[]),t=(0,l.useMemo)((()=>{const t=[];return e.forEach((e=>{t.push(`${JSON.stringify(e)},`)})),t.join("\n")}),[e]);return l.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}},l.createElement("br",null),l.createElement("p",{style:{whiteSpace:"pre-line"}},t),l.createElement("br",null))},TableWrapper:function(e){let{num:t,title:n,children:r}=e;return l.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}},l.createElement("center",null,r),t&&n?l.createElement("div",null,l.createElement("strong",null,`Table ${t} - ${n}`)):null,l.createElement("br",null))},ToBePolishedAfterTranslation:function(e){let{status:t="translated"}=e;return l.createElement("div",null,l.createElement(a.Z,{type:"caution"},l.createElement("p",null,"\u8be5\u6587\u6863\u76ee\u524d\u4ec5\u5b8c\u6210 Google \u7ffb\u8bd1\uff0c\u9700\u8fdb\u4e00\u6b65\u6821\u5bf9\u548c\u6da6\u8272\u3002")))},ToContinueBookmark:function(){return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement("div",{className:s},"\u5f85\u7ee7\u7eed\u7684\u6807\u7b7e"),l.createElement("br",null))},Todo:function(e){let{desc:t}=e;return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement("div",{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",borderRadius:"0.5rem",backgroundColor:"#333333"}},`TODO: ${t}`),l.createElement("br",null))},Wisdom:function(e){let{words:t,author:n}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",borderRadius:"0.5rem",backgroundColor:"#333333"}},l.createElement("p",null,t),`\u2014 ${n}`),l.createElement("br",null))}}}}]);