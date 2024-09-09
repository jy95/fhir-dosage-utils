"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4813],{7713:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(1312),n=a(9022),i=a(4848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(n.A,{permalink:a,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(n.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,a)=>{a.d(t,{A:()=>R});a(6540);var s=a(4164),n=a(4096),i=a(4848);function r(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var l=a(8774);const o={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,n.e7)(),{permalink:d,title:c}=a,u=r?"h1":"h2";return(0,i.jsx)(u,{className:(0,s.A)(o.title,t),children:r?c:(0,i.jsx)(l.default,{to:d,children:c})})}var c=a(1312),u=a(5846),h=a(6266);const m={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,c.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:r,readingTime:l}=a,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,s.A)(m.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(d=r,o.format(new Date(d)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(g,{readingTime:l})]})]});var d}var f=a(6913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,n.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,i.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(f.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(j,{}),(0,i.jsx)(A,{})]})}var T=a(440),U=a(7910);function N(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,n.e7)();return(0,i.jsx)("div",{id:r?T.LU:void 0,className:(0,s.A)("markdown",a),children:(0,i.jsx)(U.default,{children:t})})}var w=a(7559),y=a(4336),P=a(2053);function k(){return(0,i.jsx)("b",{children:(0,i.jsx)(c.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function B(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(l.default,{"aria-label":(0,c.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(k,{})})}function _(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,u=!t&&o,h=a.length>0;if(!(h||u||l))return null;if(t){const e=!!(l||c||d);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,i.jsx)("div",{className:(0,s.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(P.A,{tags:a})})}),e&&(0,i.jsx)(y.A,{className:(0,s.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:c,lastUpdatedBy:d})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,i.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,i.jsx)(P.A,{tags:a})}),u&&(0,i.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":h}),children:(0,i.jsx)(B,{blogPostTitle:r,to:e.permalink})})]})}function R(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,s.A)(l,a),children:[(0,i.jsx)(v,{}),(0,i.jsx)(N,{children:t}),(0,i.jsx)(_,{})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(4096),n=a(2907),i=a(4848);function r(e){let{items:t,component:a=n.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.in,{content:t,children:(0,i.jsx)(a,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(6540);var s=a(4164),n=a(1312),i=a(5500),r=a(7559),l=a(6461),o=a(8774),d=a(8027),c=a(7713),u=a(1463),h=a(3892),m=a(2234),g=a(1107),p=a(4848);function x(e){let{tag:t}=e;const a=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:a,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:a,sidebar:s,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(d.A,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(g.default,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.default,{href:t.allTagsPath,children:(0,p.jsx)(n.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(h.A,{items:a}),(0,p.jsx)(c.A,{metadata:i})]})}function f(e){return(0,p.jsxs)(i.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},2234:(e,t,a)=>{a.d(t,{A:()=>d});a(6540);var s=a(4164),n=a(4084),i=a(7559),r=a(3472),l=a(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(n.Rc,{}),className:(0,s.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(n.Uh,{})})}function d(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.AE,{}),(0,l.jsx)(o,{...e})]})}},4336:(e,t,a)=>{a.d(t,{A:()=>x});a(6540);var s=a(4164),n=a(1312),i=a(7559),r=a(8774);const l={iconEdit:"iconEdit_Z9Sw"};var o=a(4848);function d(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(l.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,o.jsxs)(r.default,{to:t,className:i.G.common.editThisPage,children:[(0,o.jsx)(d,{}),(0,o.jsx)(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=a(6266);function h(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,o.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(h,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(m,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function x(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:i}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(c,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",p.lastUpdated),children:(n||i)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:i})})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),n=a(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(n.default,{href:t,title:o,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},2053:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),n=a(1312),i=a(6133);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(4848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},6461:(e,t,a)=>{a.d(t,{ZD:()=>r,uz:()=>l});a(6540);var s=a(1312),n=a(5846);a(4848);function i(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},4084:(e,t,a)=>{a.d(t,{AE:()=>o,Rc:()=>r,TT:()=>c,Uh:()=>l,Yh:()=>d});a(6540);var s=a(1312),n=a(5260),i=a(4848);function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(n.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},6266:(e,t,a)=>{a.d(t,{i:()=>n});var s=a(4586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.default)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);