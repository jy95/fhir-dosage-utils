"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5251],{50375:(e,s,t)=>{t.d(s,{A:()=>d});var n=t(96540),o=t(15721),a=t(88420),r=t(33231),i=t(74848);function d(e){let{dosage:s,config:t}=e;const[d,l]=(0,n.useState)(""),[u,c]=(0,n.useState)(t?.language||"en"),[p,f]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await o.U.build({...t});f(e)}()}),[t]),(0,n.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(s);l(e)}}()}),[s,p]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:u,onChange:e=>c(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(u);const e=p.fromDosageToText(s);l(e)}},children:"Confirm"})]}),(0,i.jsx)("div",{style:{marginTop:"10px"},children:(0,i.jsx)(r.default,{language:"markup",children:(g=d,(0,a.D4)(g))})})]});var g}},81107:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>c,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"specs/boundsPeriod/start_only","title":"\u23f3 boundsPeriod (start only)","description":"start only","source":"@site/docs/specs/boundsPeriod/start_only.mdx","sourceDirName":"specs/boundsPeriod","slug":"/specs/boundsPeriod/start_only","permalink":"/fhir-dosage-utils/docs/specs/boundsPeriod/start_only","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/boundsPeriod/start_only.mdx","tags":[],"version":"current","frontMatter":{"description":"start only","title":"\u23f3 boundsPeriod (start only)"},"sidebar":"tutorialSidebar","previous":{"title":"\u23f3 boundsPeriod (start & end)","permalink":"/fhir-dosage-utils/docs/specs/boundsPeriod/start_and_end"},"next":{"title":"\ud83d\udcd0 boundsRange","permalink":"/fhir-dosage-utils/docs/category/-boundsrange"}}');var o=t(74848),a=t(28453),r=t(33231);const i=JSON.parse('{"timing":{"repeat":{"boundsPeriod":{"start":"2015-02-07T13:28:17"}}}}');var d=t(65537),l=t(79329),u=t(50375);const c={description:"start only",title:"\u23f3 boundsPeriod (start only)"},p=void 0,f={},g=[];function h(e){return(0,o.jsxs)(d.A,{children:[(0,o.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(u.A,{dosage:i})}),(0,o.jsx)(l.A,{value:"json",label:"Dosage",children:(0,o.jsx)(r.default,{language:"json",children:JSON.stringify(i,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h()}}}]);