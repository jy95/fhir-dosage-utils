"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4056],{1877:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var s=i(4848),a=i(8453),n=i(1812);const l=JSON.parse('{"timing":{"repeat":{"timeOfDay":["15:00:00","12:12:12"]}}}');var r=i(4865),o=i(9365),c=i(816);const u={description:"Multiple items",title:"\u2795 Multiple items"},d=void 0,m={id:"specs/timeOfDay/multiple_items",title:"\u2795 Multiple items",description:"Multiple items",source:"@site/docs/specs/timeOfDay/multiple_items.mdx",sourceDirName:"specs/timeOfDay",slug:"/specs/timeOfDay/multiple_items",permalink:"/fhir-dosage-utils/docs/specs/timeOfDay/multiple_items",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/timeOfDay/multiple_items.mdx",tags:[],version:"current",frontMatter:{description:"Multiple items",title:"\u2795 Multiple items"},sidebar:"tutorialSidebar",previous:{title:"\u231a timeOfDay",permalink:"/fhir-dosage-utils/docs/category/-timeofday"},next:{title:"\u274c Single item",permalink:"/fhir-dosage-utils/docs/specs/timeOfDay/single_item"}},p={},f=[];function g(e){return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosage:l})}),(0,s.jsx)(o.A,{value:"json",label:"Dosage",children:(0,s.jsx)(n.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},816:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(6540),a=i(6300),n=i(2376),l=i(1812),r=i(4848);function o(e){let{dosage:t,config:i,i18nConfig:o}=e;const[c,u]=(0,s.useState)(""),[d,m]=(0,s.useState)(i?.language||"en"),[p,f]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await a.A.build(i,o);f(e)}()}),[i]),(0,s.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(t);u(e)}}()}),[t,p]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>m(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(d);const e=p.fromDosageToText(t);u(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(l.default,{language:"markup",children:(g=c,(0,n.decode)(g))})})]});var g}}}]);