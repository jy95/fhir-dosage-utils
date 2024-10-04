"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1932],{9088:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var i=s(74848),n=s(28453),a=s(85819);const l=JSON.parse('{"timing":{"event":["2018","1973-06","1905-08-23"]}}');var o=s(11470),r=s(19365),c=s(816);const u={description:"Multiple items",title:"\u2795 Multiple items"},d=void 0,p={id:"specs/event/multiple_items",title:"\u2795 Multiple items",description:"Multiple items",source:"@site/docs/specs/event/multiple_items.mdx",sourceDirName:"specs/event",slug:"/specs/event/multiple_items",permalink:"/fhir-dosage-utils/docs/specs/event/multiple_items",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/event/multiple_items.mdx",tags:[],version:"current",frontMatter:{description:"Multiple items",title:"\u2795 Multiple items"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf89 event",permalink:"/fhir-dosage-utils/docs/category/-event"},next:{title:"\u274c Single item",permalink:"/fhir-dosage-utils/docs/specs/event/single_item"}},m={},f=[];function g(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.A,{children:[(0,i.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,i.jsx)(c.A,{dosage:l})}),(0,i.jsx)(r.A,{value:"json",label:"Dosage",children:(0,i.jsx)(a.default,{language:"json",children:JSON.stringify(l,null,2)})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Don't forget you can use ",(0,i.jsx)(t.a,{href:"/api/interface/Config",children:"dateTimeFormatOptions"})," option to fit your needs"]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},816:(e,t,s)=>{s.d(t,{A:()=>r});var i=s(96540),n=s(76300),a=s(52376),l=s(85819),o=s(74848);function r(e){let{dosage:t,config:s}=e;const[r,c]=(0,i.useState)(""),[u,d]=(0,i.useState)(s?.language||"en"),[p,m]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){const e=await n.U.build({...s});m(e)}()}),[s]),(0,i.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(t);c(e)}}()}),[t,p]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:u,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(u);const e=p.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(l.default,{language:"markup",children:(f=r,(0,a.decode)(f))})})]});var f}}}]);