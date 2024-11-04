"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7829],{21827:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>h,frontMatter:()=>u,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"specs/dayOfWeek/single_item","title":"\ud83d\udcc5 Single item","description":"Single item","source":"@site/docs/specs/dayOfWeek/single_item.mdx","sourceDirName":"specs/dayOfWeek","slug":"/specs/dayOfWeek/single_item","permalink":"/fhir-dosage-utils/docs/specs/dayOfWeek/single_item","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/dayOfWeek/single_item.mdx","tags":[],"version":"current","frontMatter":{"description":"Single item","title":"\ud83d\udcc5 Single item"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcc5 Multiple items","permalink":"/fhir-dosage-utils/docs/specs/dayOfWeek/multiple_items"},"next":{"title":"\ud83d\udc8a doseQuantity","permalink":"/fhir-dosage-utils/docs/category/-dosequantity"}}');var n=s(74848),a=s(28453),l=s(85819);const r=JSON.parse('{"timing":{"repeat":{"dayOfWeek":["fri"]}}}');var o=s(11470),c=s(19365),d=s(816);const u={description:"Single item",title:"\ud83d\udcc5 Single item"},f=void 0,g={},p=[];function m(e){return(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(d.A,{dosage:r})}),(0,n.jsx)(c.A,{value:"json",label:"Dosage",children:(0,n.jsx)(l.default,{language:"json",children:JSON.stringify(r,null,2)})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},816:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(96540),n=s(76300),a=s(52376),l=s(85819),r=s(74848);function o(e){let{dosage:t,config:s}=e;const[o,c]=(0,i.useState)(""),[d,u]=(0,i.useState)(s?.language||"en"),[f,g]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){const e=await n.U.build({...s});g(e)}()}),[s]),(0,i.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(t);c(e)}}()}),[t,f]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(d);const e=f.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(l.default,{language:"markup",children:(p=o,(0,a.decode)(p))})})]});var p}}}]);