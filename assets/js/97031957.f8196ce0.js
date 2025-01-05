"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4222],{83013:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"specs/frequencyFrequencyMax/frequency_and_frequencyMax","title":"\ud83d\udd01 frequency and frequencyMax","description":"frequency and frequencyMax","source":"@site/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax.mdx","sourceDirName":"specs/frequencyFrequencyMax","slug":"/specs/frequencyFrequencyMax/frequency_and_frequencyMax","permalink":"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax.mdx","tags":[],"version":"current","frontMatter":{"description":"frequency and frequencyMax","title":"\ud83d\udd01 frequency and frequencyMax"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd01 frequencyMax","permalink":"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequencyMax_only"},"next":{"title":"\ud83d\udd01 frequency","permalink":"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_only"}}');var c=a(74848),s=a(28453),t=a(33231);const u=JSON.parse('{"timing":{"repeat":{"frequency":1,"frequencyMax":3}}}');var i=a(65537),l=a(79329),o=a(50375);const d={description:"frequency and frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax"},f=void 0,y={},x=[];function q(e){return(0,c.jsxs)(i.A,{children:[(0,c.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,c.jsx)(o.A,{dosage:u})}),(0,c.jsx)(l.A,{value:"json",label:"Dosage",children:(0,c.jsx)(t.default,{language:"json",children:JSON.stringify(u,null,2)})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(q,{...e})}):q()}},50375:(e,n,a)=>{a.d(n,{A:()=>i});var r=a(96540),c=a(15721),s=a(52376),t=a(33231),u=a(74848);function i(e){let{dosage:n,config:a}=e;const[i,l]=(0,r.useState)(""),[o,d]=(0,r.useState)(a?.language||"en"),[f,y]=(0,r.useState)(null);(0,r.useEffect)((()=>{!async function(){const e=await c.U.build({...a});y(e)}()}),[a]),(0,r.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(n);l(e)}}()}),[n,f]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsxs)("select",{value:o,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,u.jsx)("option",{value:"en",children:"English"}),(0,u.jsx)("option",{value:"fr",children:"French"}),(0,u.jsx)("option",{value:"nl",children:"Dutch"}),(0,u.jsx)("option",{value:"de",children:"German"})]}),(0,u.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(o);const e=f.fromDosageToText(n);l(e)}},children:"Confirm"})]}),(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(t.default,{language:"markup",children:(x=i,(0,s.decode)(x))})})]});var x}}}]);