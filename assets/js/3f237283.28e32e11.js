"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2309],{96666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>g,default:()=>x,frontMatter:()=>u,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"specs/rateRange/low_and_high","title":"\u2696\ufe0f rateRange (Low & High)","description":"Low & High","source":"@site/docs/specs/rateRange/low_and_high.mdx","sourceDirName":"specs/rateRange","slug":"/specs/rateRange/low_and_high","permalink":"/fhir-dosage-utils/docs/specs/rateRange/low_and_high","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateRange/low_and_high.mdx","tags":[],"version":"current","frontMatter":{"description":"Low & High","title":"\u2696\ufe0f rateRange (Low & High)"},"sidebar":"tutorialSidebar","previous":{"title":"\u2696\ufe0f rateRange (High only)","permalink":"/fhir-dosage-utils/docs/specs/rateRange/high_only"},"next":{"title":"\u2696\ufe0f rateRange (Low only)","permalink":"/fhir-dosage-utils/docs/specs/rateRange/low_only"}}');var s=t(74848),i=t(28453),o=t(85819);const r=JSON.parse('{"doseAndRate":[{"rateRange":{"low":{"value":3,"unit":"pills"},"high":{"value":5,"unit":"pills"}}}]}');var l=t(11470),c=t(19365),d=t(816);const u={description:"Low & High",title:"\u2696\ufe0f rateRange (Low & High)"},g=void 0,h={},p=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(d.A,{dosage:r})}),(0,s.jsx)(c.A,{value:"json",label:"Dosage",children:(0,s.jsx)(o.default,{language:"json",children:JSON.stringify(r,null,2)})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Don't forget you can use ",(0,s.jsx)(n.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},816:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(96540),s=t(76300),i=t(52376),o=t(85819),r=t(74848);function l(e){let{dosage:n,config:t}=e;const[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(t?.language||"en"),[g,h]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await s.U.build({...t});h(e)}()}),[t]),(0,a.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(n);c(e)}}()}),[n,g]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(n);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(o.default,{language:"markup",children:(p=l,(0,i.decode)(p))})})]});var p}}}]);