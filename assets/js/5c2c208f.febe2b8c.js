"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3970],{13396:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>p,contentTitle:()=>f,default:()=>x,frontMatter:()=>u,metadata:()=>t,toc:()=>g});const t=JSON.parse('{"id":"specs/asNeeded/asNeeded","title":"\ud83d\udccc asNeeded","description":"asNeeded","source":"@site/docs/specs/asNeeded/asNeeded.mdx","sourceDirName":"specs/asNeeded","slug":"/specs/asNeeded/","permalink":"/fhir-dosage-utils/docs/specs/asNeeded/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/asNeeded/asNeeded.mdx","tags":[],"version":"current","frontMatter":{"description":"asNeeded","title":"\ud83d\udccc asNeeded"},"sidebar":"tutorialSidebar","previous":{"title":"\u2753 asNeeded","permalink":"/fhir-dosage-utils/docs/category/-asneeded"},"next":{"title":"\u2705 asNeededBoolean","permalink":"/fhir-dosage-utils/docs/specs/asNeeded/asNeededBoolean"}}');var d=a(74848),n=a(28453),i=a(33231);const o={asNeeded:!0};var c=a(65537),l=a(79329),r=a(50375);const u={description:"asNeeded",title:"\ud83d\udccc asNeeded"},f=void 0,p={},g=[];function h(e){return(0,d.jsxs)(c.A,{children:[(0,d.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,d.jsx)(r.A,{dosage:o})}),(0,d.jsx)(l.A,{value:"json",label:"Dosage",children:(0,d.jsx)(i.default,{language:"json",children:JSON.stringify(o,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h()}},50375:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(96540),d=a(15721),n=a(52376),i=a(33231),o=a(74848);function c(e){let{dosage:s,config:a}=e;const[c,l]=(0,t.useState)(""),[r,u]=(0,t.useState)(a?.language||"en"),[f,p]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await d.U.build({...a});p(e)}()}),[a]),(0,t.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(s);l(e)}}()}),[s,f]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:r,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(r);const e=f.fromDosageToText(s);l(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(i.default,{language:"markup",children:(g=c,(0,n.decode)(g))})})]});var g}}}]);