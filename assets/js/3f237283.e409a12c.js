"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2309],{566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>g,toc:()=>p});var a=t(4848),s=t(8453),i=t(1812);const o=JSON.parse('{"doseAndRate":[{"rateRange":{"low":{"value":3,"unit":"pills"},"high":{"value":5,"unit":"pills"}}}]}');var r=t(4865),l=t(9365),c=t(816);const d={description:"Low & High",title:"\u2696\ufe0f rateRange (Low & High)"},u=void 0,g={id:"specs/rateRange/low_and_high",title:"\u2696\ufe0f rateRange (Low & High)",description:"Low & High",source:"@site/docs/specs/rateRange/low_and_high.mdx",sourceDirName:"specs/rateRange",slug:"/specs/rateRange/low_and_high",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_and_high",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateRange/low_and_high.mdx",tags:[],version:"current",frontMatter:{description:"Low & High",title:"\u2696\ufe0f rateRange (Low & High)"},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f rateRange (High only)",permalink:"/fhir-dosage-utils/docs/specs/rateRange/high_only"},next:{title:"\u2696\ufe0f rateRange (Low only)",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_only"}},h={},p=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(c.A,{dosage:o})}),(0,a.jsx)(l.A,{value:"json",label:"Dosage",children:(0,a.jsx)(i.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Don't forget you can use ",(0,a.jsx)(n.a,{href:"/api/interface/Params",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},816:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(6540),s=t(6300),i=t(1812),o=t(4848);function r(e){let{dosage:n,config:t}=e;const[r,l]=(0,a.useState)(""),[c,d]=(0,a.useState)(t?.language||"en"),[u,g]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await s.A.build(t);g(e)}()}),[t]),(0,a.useEffect)((()=>{!async function(){if(u){const e=u.fromDosageToText(n);l(e)}}()}),[n,u]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:c,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(u){await u.changeLanguage(c);const e=u.fromDosageToText(n);l(e)}},children:"Confirm"})]}),(0,o.jsx)("p",{style:{marginTop:"10px"},children:(0,o.jsx)(i.default,{language:"markup",children:(h=r,h.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var h}}}]);