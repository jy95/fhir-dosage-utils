"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[513],{50375:(t,e,a)=>{a.d(e,{A:()=>u});var n=a(96540),s=a(15721),i=a(52376),r=a(33231),o=a(74848);function u(t){let{dosage:e,config:a}=t;const[u,c]=(0,n.useState)(""),[l,d]=(0,n.useState)(a?.language||"en"),[p,f]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const t=await s.U.build({...a});f(t)}()}),[a]),(0,n.useEffect)((()=>{!async function(){if(p){const t=p.fromDosageToText(e);c(t)}}()}),[e,p]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:l,onChange:t=>d(t.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(l);const t=p.fromDosageToText(e);c(t)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(r.default,{language:"markup",children:(g=u,(0,i.decode)(g))})})]});var g}},57122:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"specs/rateQuantity/rateQuantity","title":"\u23f2\ufe0f rateQuantity","description":"rateQuantity","source":"@site/docs/specs/rateQuantity/rateQuantity.mdx","sourceDirName":"specs/rateQuantity","slug":"/specs/rateQuantity/","permalink":"/fhir-dosage-utils/docs/specs/rateQuantity/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateQuantity/rateQuantity.mdx","tags":[],"version":"current","frontMatter":{"description":"rateQuantity","title":"\u23f2\ufe0f rateQuantity"},"sidebar":"tutorialSidebar","previous":{"title":"\u23f2\ufe0f rateQuantity","permalink":"/fhir-dosage-utils/docs/category/\ufe0f-ratequantity"},"next":{"title":"\u2696\ufe0f rateRange","permalink":"/fhir-dosage-utils/docs/category/\ufe0f-raterange"}}');var s=a(74848),i=a(28453),r=a(33231);const o=JSON.parse('{"doseAndRate":[{"rateQuantity":{"value":3,"unit":"pills"}}]}');var u=a(65537),c=a(79329),l=a(50375);const d={description:"rateQuantity",title:"\u23f2\ufe0f rateQuantity"},p=void 0,f={},g=[];function h(t){const e={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u.A,{children:[(0,s.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(l.A,{dosage:o})}),(0,s.jsx)(c.A,{value:"json",label:"Dosage",children:(0,s.jsx)(r.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["Don't forget you can use ",(0,s.jsx)(e.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function y(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}}}]);