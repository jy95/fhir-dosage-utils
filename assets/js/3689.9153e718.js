"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3689],{11865:(n,e,t)=>{t.d(e,{A:()=>l});t(96540);var i=t(34164),a=t(56289),s=t(74848);function l(n){const{permalink:e,title:t,subLabel:l,isNext:r}=n;return(0,s.jsxs)(a.default,{className:(0,i.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},56701:(n,e,t)=>{t.d(e,{A:()=>x});var i=t(96540),a=t(34164),s=t(25246),l=t(9136),r=t(33535);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var o=t(74848);function d(n){return!!n&&("SUMMARY"===n.tagName||d(n.parentElement))}function u(n,e){return!!n&&(n===e||u(n.parentElement,e))}function h(n){let{summary:e,children:t,...h}=n;(0,s.default)().collectAnchor(h.id);const m=(0,l.A)(),f=(0,i.useRef)(null),{collapsed:x,setCollapsed:j}=(0,r.u)({initialState:!h.open}),[p,v]=(0,i.useState)(h.open),g=i.isValidElement(e)?e:(0,o.jsx)("summary",{children:e??"Details"});return(0,o.jsxs)("details",{...h,ref:f,open:p,"data-collapsed":x,className:(0,a.A)(c.details,m&&c.isBrowser,h.className),onMouseDown:n=>{d(n.target)&&n.detail>1&&n.preventDefault()},onClick:n=>{n.stopPropagation();const e=n.target;d(e)&&u(e,f.current)&&(n.preventDefault(),x?(j(!1),v(!0)):j(!0))},children:[g,(0,o.jsx)(r.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:n=>{j(n),v(!n)},children:(0,o.jsx)("div",{className:c.collapsibleContent,children:t})})]})}const m={details:"details_b_Ee"},f="alert alert--info";function x(n){let{...e}=n;return(0,o.jsx)(h,{...e,className:(0,a.A)(f,m.details,e.className)})}},57985:(n,e,t)=>{t.r(e),t.d(e,{default:()=>l});t(96540);var i=t(28453),a=t(78540),s=t(74848);function l(n){let{children:e}=n;return(0,s.jsx)(i.x,{components:a.default,children:e})}},60506:(n,e,t)=>{t.d(e,{c:()=>s});var i=t(96540),a=t(74848);function s(n){const{mdxAdmonitionTitle:e,rest:t}=function(n){const e=i.Children.toArray(n),t=e.find((n=>i.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),s=e.filter((n=>n!==t)),l=t?.props.children;return{mdxAdmonitionTitle:l,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(n.children),s=n.title??e;return{...n,...s&&{title:s},children:t}}},78540:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var i=t(96540),a=t(27143),s=t(33231),l=t(74848);function r(n){return(0,l.jsx)("code",{...n})}var c=t(56289);var o=t(56701);function d(n){const e=i.Children.toArray(n.children),t=e.find((n=>i.isValidElement(n)&&"summary"===n.type)),a=(0,l.jsx)(l.Fragment,{children:e.filter((n=>n!==t))});return(0,l.jsx)(o.A,{...n,summary:t,children:a})}var u=t(9303);function h(n){return(0,l.jsx)(u.default,{...n})}var m=t(34164);const f="containsTaskList_mC6p";function x(n){if(void 0!==n)return(0,m.A)(n,n?.includes("contains-task-list")&&f)}var j=t(25246);const p="img_ev3q";var v=t(79709);const g={Head:a.A,details:d,Details:d,code:function(n){return function(n){return void 0!==n.children&&i.Children.toArray(n.children).every((n=>"string"==typeof n&&!n.includes("\n")))}(n)?(0,l.jsx)(r,{...n}):(0,l.jsx)(s.default,{...n})},a:function(n){return(0,l.jsx)(c.default,{...n})},pre:function(n){return(0,l.jsx)(l.Fragment,{children:n.children})},ul:function(n){return(0,l.jsx)("ul",{...n,className:x(n.className)})},li:function(n){return(0,j.default)().collectAnchor(n.id),(0,l.jsx)("li",{...n})},img:function(n){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...n,className:(e=n.className,(0,m.A)(e,p))});var e},h1:n=>(0,l.jsx)(h,{as:"h1",...n}),h2:n=>(0,l.jsx)(h,{as:"h2",...n}),h3:n=>(0,l.jsx)(h,{as:"h3",...n}),h4:n=>(0,l.jsx)(h,{as:"h4",...n}),h5:n=>(0,l.jsx)(h,{as:"h5",...n}),h6:n=>(0,l.jsx)(h,{as:"h6",...n}),admonition:v.A,mermaid:()=>null}},79709:(n,e,t)=>{t.d(e,{A:()=>B});t(96540);var i=t(60506),a=t(34164),s=t(50539),l=t(204);const r="admonition_xJq3",c="admonitionHeading_Gvgb",o="admonitionIcon_Rf37",d="admonitionContent_BuS1";var u=t(74848);function h(n){let{type:e,className:t,children:i}=n;return(0,u.jsx)("div",{className:(0,a.A)(l.G.common.admonition,l.G.common.admonitionType(e),r,t),children:i})}function m(n){let{icon:e,title:t}=n;return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("span",{className:o,children:e}),t]})}function f(n){let{children:e}=n;return e?(0,u.jsx)("div",{className:d,children:e}):null}function x(n){const{type:e,icon:t,title:i,children:a,className:s}=n;return(0,u.jsxs)(h,{type:e,className:s,children:[i||t?(0,u.jsx)(m,{title:i,icon:t}):null,(0,u.jsx)(f,{children:a})]})}function j(n){return(0,u.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,u.jsx)(j,{}),title:(0,u.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(n){return(0,u.jsx)(x,{...p,...n,className:(0,a.A)("alert alert--secondary",n.className),children:n.children})}function g(n){return(0,u.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const N={icon:(0,u.jsx)(g,{}),title:(0,u.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function A(n){return(0,u.jsx)(x,{...N,...n,className:(0,a.A)("alert alert--success",n.className),children:n.children})}function y(n){return(0,u.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,u.jsx)(y,{}),title:(0,u.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function _(n){return(0,u.jsx)(x,{...b,...n,className:(0,a.A)("alert alert--info",n.className),children:n.children})}function C(n){return(0,u.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,u.jsx)(C,{}),title:(0,u.jsx)(s.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function z(n){return(0,u.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const M={icon:(0,u.jsx)(z,{}),title:(0,u.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,u.jsx)(C,{}),title:(0,u.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const k={...{note:v,tip:A,info:_,warning:function(n){return(0,u.jsx)(x,{...w,...n,className:(0,a.A)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,u.jsx)(x,{...M,...n,className:(0,a.A)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,u.jsx)(v,{title:"secondary",...n}),important:n=>(0,u.jsx)(_,{title:"important",...n}),success:n=>(0,u.jsx)(A,{title:"success",...n}),caution:function(n){return(0,u.jsx)(x,{...T,...n,className:(0,a.A)("alert alert--warning",n.className),children:n.children})}}};function B(n){const e=(0,i.c)(n),t=(a=e.type,k[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),k.info));var a;return(0,u.jsx)(t,{...e})}}}]);