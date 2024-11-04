"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9832],{77015:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"specs/sequence/sequential_instructions_2","title":"\u27a1\ufe0f sequence (Sequential instructions 2)","description":"Sequential instructions, without sequence","source":"@site/docs/specs/sequence/sequential_instructions_2.mdx","sourceDirName":"specs/sequence","slug":"/specs/sequence/sequential_instructions_2","permalink":"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/sequence/sequential_instructions_2.mdx","tags":[],"version":"current","frontMatter":{"description":"Sequential instructions, without sequence","title":"\u27a1\ufe0f sequence (Sequential instructions 2)"},"sidebar":"tutorialSidebar","previous":{"title":"\u27a1\ufe0f sequence (Sequential instructions 1)","permalink":"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_1"},"next":{"title":"\ud83d\udccd site","permalink":"/fhir-dosage-utils/docs/category/-site"}}');var i=t(74848),u=t(28453),a=t(85819);const c=JSON.parse('[{"text":"Instructions 1"},{"text":"Instructions 2"}]');var o=t(11470),r=t(19365),l=t(18264);const d={description:"Sequential instructions, without sequence",title:"\u27a1\ufe0f sequence (Sequential instructions 2)"},p=void 0,f={},h=[];function g(e){return(0,i.jsxs)(o.A,{children:[(0,i.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,i.jsx)(l.A,{dosages:c,config:{displayOrder:["text"]}})}),(0,i.jsx)(r.A,{value:"json",label:"Dosage",children:(0,i.jsx)(a.default,{language:"json",children:JSON.stringify(c,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,u.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(g,{...e})}):g()}},18264:(e,s,t)=>{t.d(s,{A:()=>o});var n=t(96540),i=t(76300),u=t(52376),a=t(85819),c=t(74848);function o(e){let{dosages:s,config:t}=e;const[o,r]=(0,n.useState)(""),[l,d]=(0,n.useState)(t?.language||"en"),[p,f]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await i.U.build({...t});f(e)}()}),[t]),(0,n.useEffect)((()=>{!async function(){if(p){const e=p.fromMultipleDosageToText(s);r(e)}}()}),[s,p]);return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsxs)("select",{value:l,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,c.jsx)("option",{value:"en",children:"English"}),(0,c.jsx)("option",{value:"fr",children:"French"}),(0,c.jsx)("option",{value:"nl",children:"Dutch"}),(0,c.jsx)("option",{value:"de",children:"German"})]}),(0,c.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(l);const e=p.fromMultipleDosageToText(s);r(e)}},children:"Confirm"})]}),(0,c.jsx)("div",{style:{marginTop:"10px"},children:(0,c.jsx)(a.default,{language:"markup",children:(h=o,(0,u.decode)(h))})})]});var h}}}]);