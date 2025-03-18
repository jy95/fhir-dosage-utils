"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5276],{50375:(e,n,a)=>{a.d(n,{A:()=>i});var r=a(96540),s=a(15721),c=a(52376),t=a(33231),u=a(74848);function i(e){let{dosage:n,config:a}=e;const[i,o]=(0,r.useState)(""),[l,d]=(0,r.useState)(a?.language||"en"),[f,y]=(0,r.useState)(null);(0,r.useEffect)((()=>{!async function(){const e=await s.U.build({...a});y(e)}()}),[a]),(0,r.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(n);o(e)}}()}),[n,f]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsxs)("select",{value:l,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,u.jsx)("option",{value:"en",children:"English"}),(0,u.jsx)("option",{value:"fr",children:"French"}),(0,u.jsx)("option",{value:"nl",children:"Dutch"}),(0,u.jsx)("option",{value:"de",children:"German"})]}),(0,u.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(l);const e=f.fromDosageToText(n);o(e)}},children:"Confirm"})]}),(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(t.default,{language:"markup",children:(x=i,(0,c.decode)(x))})})]});var x}},69819:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>q,frontMatter:()=>d,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"specs/frequencyFrequencyMax/frequencyMax_only","title":"\ud83d\udd01 frequencyMax","description":"frequencyMax only","source":"@site/docs/specs/frequencyFrequencyMax/frequencyMax_only.mdx","sourceDirName":"specs/frequencyFrequencyMax","slug":"/specs/frequencyFrequencyMax/frequencyMax_only","permalink":"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequencyMax_only","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/frequencyFrequencyMax/frequencyMax_only.mdx","tags":[],"version":"current","frontMatter":{"description":"frequencyMax only","title":"\ud83d\udd01 frequencyMax"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd01 frequencyFrequencyMax","permalink":"/fhir-dosage-utils/docs/category/-frequencyfrequencymax"},"next":{"title":"\ud83d\udd01 frequency and frequencyMax","permalink":"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax"}}');var s=a(74848),c=a(28453),t=a(33231);const u=JSON.parse('{"timing":{"repeat":{"frequencyMax":5}}}');var i=a(65537),o=a(79329),l=a(50375);const d={description:"frequencyMax only",title:"\ud83d\udd01 frequencyMax"},f=void 0,y={},x=[];function p(e){return(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(l.A,{dosage:u})}),(0,s.jsx)(o.A,{value:"json",label:"Dosage",children:(0,s.jsx)(t.default,{language:"json",children:JSON.stringify(u,null,2)})})]})}function q(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p()}}}]);