"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3462],{8484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var s=t(4848),i=t(8453),a=t(1812);const l=JSON.parse('{"timing":{"repeat":{"when":["MORN"]}}}');var r=t(4865),o=t(9365),c=t(816);const u={description:"when - single item",title:"\ud83d\udd52 When (Single item)"},d=void 0,h={id:"specs/offsetWhen/when/single_item",title:"\ud83d\udd52 When (Single item)",description:"when - single item",source:"@site/docs/specs/offsetWhen/when/single_item.mdx",sourceDirName:"specs/offsetWhen/when",slug:"/specs/offsetWhen/when/single_item",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when/single_item",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/offsetWhen/when/single_item.mdx",tags:[],version:"current",frontMatter:{description:"when - single item",title:"\ud83d\udd52 When (Single item)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd52 When (Multiple items)",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when/multiple_items"},next:{title:"\ud83d\udd52 offset and when",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when_and_offset"}},f={},g=[];function p(e){return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosage:l})}),(0,s.jsx)(o.A,{value:"json",label:"Dosage",children:(0,s.jsx)(a.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p()}},816:(e,n,t)=>{t.d(n,{A:()=>r});var s=t(6540),i=t(6300),a=t(1812),l=t(4848);function r(e){let{dosage:n,config:t}=e;const[r,o]=(0,s.useState)(""),[c,u]=(0,s.useState)(t?.language||"en"),[d,h]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await i.A.build(t);h(e)}()}),[t]),(0,s.useEffect)((()=>{!async function(){if(d){const e=d.fromDosageToText(n);o(e)}}()}),[n,d]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(c);const e=d.fromDosageToText(n);o(e)}},children:"Confirm"})]}),(0,l.jsx)("p",{style:{marginTop:"10px"},children:(0,l.jsx)(a.default,{language:"markup",children:(f=r,f.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var f}}}]);