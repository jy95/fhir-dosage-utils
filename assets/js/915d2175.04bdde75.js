"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7829],{4376:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>g,toc:()=>m});var s=i(4848),n=i(8453),a=i(1812);const l=JSON.parse('{"timing":{"repeat":{"dayOfWeek":["fri"]}}}');var o=i(4865),r=i(9365),c=i(816);const d={description:"Single item",title:"\ud83d\udcc5 Single item"},u=void 0,g={id:"specs/dayOfWeek/single_item",title:"\ud83d\udcc5 Single item",description:"Single item",source:"@site/docs/specs/dayOfWeek/single_item.mdx",sourceDirName:"specs/dayOfWeek",slug:"/specs/dayOfWeek/single_item",permalink:"/fhir-dosage-utils/docs/specs/dayOfWeek/single_item",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/dayOfWeek/single_item.mdx",tags:[],version:"current",frontMatter:{description:"Single item",title:"\ud83d\udcc5 Single item"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc5 Multiple items",permalink:"/fhir-dosage-utils/docs/specs/dayOfWeek/multiple_items"},next:{title:"\ud83d\udc8a doseQuantity",permalink:"/fhir-dosage-utils/docs/category/-dosequantity"}},f={},m=[];function p(e){return(0,s.jsxs)(o.A,{children:[(0,s.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosage:l})}),(0,s.jsx)(r.A,{value:"json",label:"Dosage",children:(0,s.jsx)(a.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},816:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(6540),n=i(6300),a=i(2376),l=i(1812),o=i(4848);function r(e){let{dosage:t,config:i,i18nConfig:r}=e;const[c,d]=(0,s.useState)(""),[u,g]=(0,s.useState)(i?.language||"en"),[f,m]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await n.U.build({...i,i18nConfig:r});m(e)}()}),[i]),(0,s.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(t);d(e)}}()}),[t,f]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:u,onChange:e=>g(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(u);const e=f.fromDosageToText(t);d(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(l.default,{language:"markup",children:(p=c,(0,a.decode)(p))})})]});var p}}}]);