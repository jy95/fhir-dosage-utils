"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6193],{2272:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=t(4848),n=t(8453),a=t(1812);const f=JSON.parse('{"timing":{"repeat":{"offset":1440}}}');var i=t(4865),r=t(9365),c=t(816);const l={description:"offset, expressing day(s)",title:"\ud83d\udd52 offset (Days)"},d=void 0,u={id:"specs/offsetWhen/offset/offset_days",title:"\ud83d\udd52 offset (Days)",description:"offset, expressing day(s)",source:"@site/docs/specs/offsetWhen/offset/offset_days.mdx",sourceDirName:"specs/offsetWhen/offset",slug:"/specs/offsetWhen/offset/offset_days",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/offset/offset_days",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/offsetWhen/offset/offset_days.mdx",tags:[],version:"current",frontMatter:{description:"offset, expressing day(s)",title:"\ud83d\udd52 offset (Days)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd52 offset",permalink:"/fhir-dosage-utils/docs/category/-offset"},next:{title:"\ud83d\udd52 offset (Hours)",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/offset/offset_hours"}},h={},p=[];function g(e){return(0,o.jsxs)(i.A,{children:[(0,o.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(c.A,{dosage:f})}),(0,o.jsx)(r.A,{value:"json",label:"Dosage",children:(0,o.jsx)(a.default,{language:"json",children:JSON.stringify(f,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(g,{...e})}):g()}},816:(e,s,t)=>{t.d(s,{A:()=>r});var o=t(6540),n=t(6300),a=t(2376),f=t(1812),i=t(4848);function r(e){let{dosage:s,config:t}=e;const[r,c]=(0,o.useState)(""),[l,d]=(0,o.useState)(t?.language||"en"),[u,h]=(0,o.useState)(null);(0,o.useEffect)((()=>{!async function(){const e=await n.U.build({...t});h(e)}()}),[t]),(0,o.useEffect)((()=>{!async function(){if(u){const e=u.fromDosageToText(s);c(e)}}()}),[s,u]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:l,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(u){await u.changeLanguage(l);const e=u.fromDosageToText(s);c(e)}},children:"Confirm"})]}),(0,i.jsx)("div",{style:{marginTop:"10px"},children:(0,i.jsx)(f.default,{language:"markup",children:(p=r,(0,a.decode)(p))})})]});var p}}}]);