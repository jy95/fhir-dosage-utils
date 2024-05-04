"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3462],{8484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>h,toc:()=>g});var s=t(4848),i=t(8453),a=t(1812);const l=JSON.parse('{"timing":{"repeat":{"when":["MORN"]}}}');var o=t(4865),r=t(9365),c=t(816);const u={description:"when - single item",title:"\ud83d\udd52 When (Single item)"},d=void 0,h={id:"specs/offsetWhen/when/single_item",title:"\ud83d\udd52 When (Single item)",description:"when - single item",source:"@site/docs/specs/offsetWhen/when/single_item.mdx",sourceDirName:"specs/offsetWhen/when",slug:"/specs/offsetWhen/when/single_item",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when/single_item",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/offsetWhen/when/single_item.mdx",tags:[],version:"current",frontMatter:{description:"when - single item",title:"\ud83d\udd52 When (Single item)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd52 When (Multiple items)",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when/multiple_items"},next:{title:"\ud83d\udd52 offset and when",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when_and_offset"}},f={},g=[];function p(e){return(0,s.jsxs)(o.A,{children:[(0,s.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosage:l})}),(0,s.jsx)(r.A,{value:"json",label:"Dosage",children:(0,s.jsx)(a.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p()}},816:(e,n,t)=>{t.d(n,{A:()=>r});var s=t(6540),i=t(6300),a=t(2376),l=t(1812),o=t(4848);function r(e){let{dosage:n,config:t,i18nConfig:r}=e;const[c,u]=(0,s.useState)(""),[d,h]=(0,s.useState)(t?.language||"en"),[f,g]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await i.A.build(t,r);g(e)}()}),[t]),(0,s.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(n);u(e)}}()}),[n,f]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:d,onChange:e=>h(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(d);const e=f.fromDosageToText(n);u(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(l.default,{language:"markup",children:(p=c,(0,a.decode)(p))})})]});var p}}}]);