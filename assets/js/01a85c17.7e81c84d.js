"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8209],{44096:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>_,Ki:()=>P,kJ:()=>f,x:()=>l,e7:()=>d,J_:()=>b,Gx:()=>y});var s=a(96540),n=a(89532),i=a(36803),r=a(74848);function l(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var u=a(86025),m=a(44586);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){const{siteConfig:t}=(0,m.default)(),{withBaseUrl:a}=(0,u.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,d=s.image??n.image,u=n.keywords??[],m=`${t.url}${i.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":m,mainEntityOfPage:m,url:m,headline:l,name:l,description:o,datePublished:r,...f?{dateModified:f}:{},...h(i.authors),...p(d,a,l),...u?{keywords:u}:{}}}(e.content,t,a)))}}function b(){const e=l(),{assets:t,metadata:a}=d(),{siteConfig:s}=(0,m.default)(),{withBaseUrl:n}=(0,u.hH)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,x=c.keywords??[],j=f?g(f):void 0,N=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:r,name:r,description:o,datePublished:i,...j?{dateModified:j}:{},...h(a.authors),...p(b,n,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var N=a(56347),v=a(28774),C=a(31682),k=a(99169);function y(e){const{pathname:t}=(0,N.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.ys)(e.permalink,t))}(e,t)))),[e,t])}function P(e){const t=(0,C.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function _(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(v.default,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},28027:(e,t,a)=>{a.d(t,{A:()=>O});var s=a(96540),n=a(34164),i=a(70680),r=a(24581),l=a(21312),o=a(44096),c=a(6342),d=a(51107),u=a(74848);function m(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,u.jsxs)("div",{role:"group",children:[(0,u.jsx)(d.default,{as:"h3",className:a,children:t}),s]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,u.jsx)(u.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,u.jsx)(m,{year:t,yearGroupHeadingClassName:a,children:(0,u.jsx)(s,{items:n})},t)}))})}return(0,u.jsx)(s,{items:t})}const h=(0,s.memo)(g),p="sidebar_re4s",f="sidebarItemTitle_pO2u",b="sidebarItemList_Yudw",x="sidebarItem__DBe",j="sidebarItemLink_mo7H",N="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",C=e=>{let{items:t}=e;return(0,u.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(b,"clean-list"),liClassName:x,linkClassName:j,linkActiveClassName:N})};function k(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,n.A)(f,"margin-bottom--md"),children:t.title}),(0,u.jsx)(h,{items:a,ListComponent:C,yearGroupHeadingClassName:v})]})})}const y=(0,s.memo)(k);var P=a(75600);const _={yearGroupHeading:"yearGroupHeading_QT03"},A=e=>{let{items:t}=e;return(0,u.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,u.jsx)(h,{items:a,ListComponent:A,yearGroupHeadingClassName:_.yearGroupHeading})}function B(e){return(0,u.jsx)(P.GX,{component:w,props:e})}const G=(0,s.memo)(B);function H(e){let{sidebar:t}=e;const a=(0,r.l)();return t?.items.length?"mobile"===a?(0,u.jsx)(G,{sidebar:t}):(0,u.jsx)(y,{sidebar:t}):null}function O(e){const{sidebar:t,toc:a,children:s,...r}=e,l=t&&t.items.length>0;return(0,u.jsx)(i.A,{...r,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(H,{sidebar:t}),(0,u.jsx)("main",{className:(0,n.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,u.jsx)("div",{className:"col col--2",children:a})]})})})}},92463:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});a(96540);var s=a(34164),n=a(26820),i=a(45500),r=a(17559),l=a(28027),o=a(56133),c=a(51107);const d={tag:"tag_Nnez"};var u=a(74848);function m(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(c.default,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:d.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const a=(0,n.Q)(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(m,{letterEntry:e},e.letter)))})}var h=a(41463);function p(e){let{tags:t,sidebar:a}=e;const o=(0,n.b)();return(0,u.jsxs)(i.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagsListPage),children:[(0,u.jsx)(i.be,{title:o}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(l.A,{sidebar:a,children:[(0,u.jsx)(c.default,{as:"h1",children:o}),(0,u.jsx)(g,{tags:t})]})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(34164),n=a(28774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(74848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.default,{href:t,title:o,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},26820:(e,t,a)=>{a.d(t,{Q:()=>i,b:()=>n});var s=a(21312);const n=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function i(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);