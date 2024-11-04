"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1659],{43138:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"specs/dayOfWeek/multiple_items","title":"\ud83d\udcc5 Multiple items","description":"Multiple items","source":"@site/docs/specs/dayOfWeek/multiple_items.mdx","sourceDirName":"specs/dayOfWeek","slug":"/specs/dayOfWeek/multiple_items","permalink":"/fhir-dosage-utils/docs/specs/dayOfWeek/multiple_items","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/dayOfWeek/multiple_items.mdx","tags":[],"version":"current","frontMatter":{"description":"Multiple items","title":"\ud83d\udcc5 Multiple items"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcc5 dayOfWeek","permalink":"/fhir-dosage-utils/docs/category/-dayofweek"},"next":{"title":"\ud83d\udcc5 Single item","permalink":"/fhir-dosage-utils/docs/specs/dayOfWeek/single_item"}}');var a=s(74848),l=s(28453),n=s(85819);const r=JSON.parse('{"timing":{"repeat":{"dayOfWeek":["mon","fri"]}}}');var o=s(11470),c=s(19365),u=s(816);const d={description:"Multiple items",title:"\ud83d\udcc5 Multiple items"},p=void 0,f={},m=[];function g(e){return(0,a.jsxs)(o.A,{children:[(0,a.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(u.A,{dosage:r})}),(0,a.jsx)(c.A,{value:"json",label:"Dosage",children:(0,a.jsx)(n.default,{language:"json",children:JSON.stringify(r,null,2)})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g()}},816:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(96540),a=s(76300),l=s(52376),n=s(85819),r=s(74848);function o(e){let{dosage:t,config:s}=e;const[o,c]=(0,i.useState)(""),[u,d]=(0,i.useState)(s?.language||"en"),[p,f]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){const e=await a.U.build({...s});f(e)}()}),[s]),(0,i.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(t);c(e)}}()}),[t,p]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:u,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(u);const e=p.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(n.default,{language:"markup",children:(m=o,(0,l.decode)(m))})})]});var m}}}]);