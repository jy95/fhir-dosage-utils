"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3361],{21668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>g,default:()=>x,frontMatter:()=>u,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"specs/rateRange/low_only","title":"\u2696\ufe0f rateRange (Low only)","description":"Low only","source":"@site/docs/specs/rateRange/low_only.mdx","sourceDirName":"specs/rateRange","slug":"/specs/rateRange/low_only","permalink":"/fhir-dosage-utils/docs/specs/rateRange/low_only","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateRange/low_only.mdx","tags":[],"version":"current","frontMatter":{"description":"Low only","title":"\u2696\ufe0f rateRange (Low only)"},"sidebar":"tutorialSidebar","previous":{"title":"\u2696\ufe0f rateRange (Low & High)","permalink":"/fhir-dosage-utils/docs/specs/rateRange/low_and_high"},"next":{"title":"\ud83d\udcc8 rateRatio","permalink":"/fhir-dosage-utils/docs/category/-rateratio"}}');var s=t(74848),o=t(28453),i=t(33231);const r=JSON.parse('{"doseAndRate":[{"rateRange":{"low":{"value":3,"unit":"pills"}}}]}');var l=t(65537),c=t(79329),d=t(50375);const u={description:"Low only",title:"\u2696\ufe0f rateRange (Low only)"},g=void 0,p={},f=[];function h(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(d.A,{dosage:r})}),(0,s.jsx)(c.A,{value:"json",label:"Dosage",children:(0,s.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Don't forget you can use ",(0,s.jsx)(n.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50375:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(96540),s=t(15721),o=t(52376),i=t(33231),r=t(74848);function l(e){let{dosage:n,config:t}=e;const[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(t?.language||"en"),[g,p]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await s.U.build({...t});p(e)}()}),[t]),(0,a.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(n);c(e)}}()}),[n,g]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(n);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(f=l,(0,o.decode)(f))})})]});var f}}}]);