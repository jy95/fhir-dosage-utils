"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1250],{50375:(a,t,e)=>{e.d(t,{A:()=>u});var n=e(96540),i=e(15721),o=e(52376),r=e(33231),s=e(74848);function u(a){let{dosage:t,config:e}=a;const[u,d]=(0,n.useState)(""),[l,c]=(0,n.useState)(e?.language||"en"),[x,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const a=await i.U.build({...e});p(a)}()}),[e]),(0,n.useEffect)((()=>{!async function(){if(x){const a=x.fromDosageToText(t);d(a)}}()}),[t,x]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsxs)("select",{value:l,onChange:a=>c(a.target.value),style:{marginRight:"10px"},children:[(0,s.jsx)("option",{value:"en",children:"English"}),(0,s.jsx)("option",{value:"fr",children:"French"}),(0,s.jsx)("option",{value:"nl",children:"Dutch"}),(0,s.jsx)("option",{value:"de",children:"German"})]}),(0,s.jsx)("button",{onClick:async()=>{if(x){await x.changeLanguage(l);const a=x.fromDosageToText(t);d(a)}},children:"Confirm"})]}),(0,s.jsx)("div",{style:{marginTop:"10px"},children:(0,s.jsx)(r.default,{language:"markup",children:(f=u,(0,o.decode)(f))})})]});var f}},60337:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>x,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"specs/durationDurationMax/durationMax_only","title":"\u23f0 durationMax","description":"durationMax only","source":"@site/docs/specs/durationDurationMax/durationMax_only.mdx","sourceDirName":"specs/durationDurationMax","slug":"/specs/durationDurationMax/durationMax_only","permalink":"/fhir-dosage-utils/docs/specs/durationDurationMax/durationMax_only","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/durationDurationMax/durationMax_only.mdx","tags":[],"version":"current","frontMatter":{"description":"durationMax only","title":"\u23f0 durationMax"},"sidebar":"tutorialSidebar","previous":{"title":"\u23f0 durationDurationMax","permalink":"/fhir-dosage-utils/docs/category/-durationdurationmax"},"next":{"title":"\u23f0 duration and durationMax","permalink":"/fhir-dosage-utils/docs/specs/durationDurationMax/duration_and_durationMax"}}');var i=e(74848),o=e(28453),r=e(33231);const s=JSON.parse('{"timing":{"repeat":{"durationMax":5,"durationUnit":"d"}}}');var u=e(65537),d=e(79329),l=e(50375);const c={description:"durationMax only",title:"\u23f0 durationMax"},x=void 0,p={},f=[];function g(a){return(0,i.jsxs)(u.A,{children:[(0,i.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,i.jsx)(l.A,{dosage:s})}),(0,i.jsx)(d.A,{value:"json",label:"Dosage",children:(0,i.jsx)(r.default,{language:"json",children:JSON.stringify(s,null,2)})})]})}function h(a={}){const{wrapper:t}={...(0,o.R)(),...a.components};return t?(0,i.jsx)(t,{...a,children:(0,i.jsx)(g,{...a})}):g()}}}]);