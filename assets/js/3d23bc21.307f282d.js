"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85],{8566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var s=t(4848),c=t(8453),i=t(1812);const r=JSON.parse('[{"sequence":1,"text":"Instructions 1"},{"sequence":2,"text":"Instructions 2A"},{"sequence":2,"text":"Instructions 2B"}]');var u=t(4865),o=t(9365),a=t(8264);const l={description:"Concurrent instructions",title:"\u27a1\ufe0f sequence (Concurrent instructions)"},d=void 0,p={id:"specs/sequence/concurrent_instructions",title:"\u27a1\ufe0f sequence (Concurrent instructions)",description:"Concurrent instructions",source:"@site/docs/specs/sequence/concurrent_instructions.mdx",sourceDirName:"specs/sequence",slug:"/specs/sequence/concurrent_instructions",permalink:"/fhir-dosage-utils/docs/specs/sequence/concurrent_instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/sequence/concurrent_instructions.mdx",tags:[],version:"current",frontMatter:{description:"Concurrent instructions",title:"\u27a1\ufe0f sequence (Concurrent instructions)"},sidebar:"tutorialSidebar",previous:{title:"\u27a1\ufe0f sequence",permalink:"/fhir-dosage-utils/docs/category/\ufe0f-sequence"},next:{title:"\u27a1\ufe0f sequence (Sequential instructions 1)",permalink:"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_1"}},f={},g=[];function x(e){return(0,s.jsxs)(u.A,{children:[(0,s.jsx)(o.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(a.A,{dosages:r,config:{displayOrder:["text"]}})}),(0,s.jsx)(o.A,{value:"json",label:"Dosage",children:(0,s.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x()}},8264:(e,n,t)=>{t.d(n,{A:()=>o});var s=t(6540),c=t(6300),i=t(2376),r=t(1812),u=t(4848);function o(e){let{dosages:n,config:t,i18nConfig:o}=e;const[a,l]=(0,s.useState)(""),[d,p]=(0,s.useState)(t?.language||"en"),[f,g]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await c.A.build(t,o);g(e)}()}),[t]),(0,s.useEffect)((()=>{!async function(){if(f){const e=f.fromMultipleDosageToText(n);l(e)}}()}),[n,f]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsxs)("select",{value:d,onChange:e=>p(e.target.value),style:{marginRight:"10px"},children:[(0,u.jsx)("option",{value:"en",children:"English"}),(0,u.jsx)("option",{value:"fr",children:"French"}),(0,u.jsx)("option",{value:"nl",children:"Dutch"}),(0,u.jsx)("option",{value:"de",children:"German"})]}),(0,u.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(d);const e=f.fromMultipleDosageToText(n);l(e)}},children:"Confirm"})]}),(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(r.default,{language:"markup",children:(x=a,(0,i.decode)(x))})})]});var x}}}]);