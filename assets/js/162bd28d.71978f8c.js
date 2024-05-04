"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1740],{9300:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>g,toc:()=>p});var s=t(4848),o=t(8453),i=t(1812);const a=JSON.parse('{"timing":{"repeat":{"boundsRange":{"high":{"system":"http://hl7.org/fhir/ValueSet/duration-units","value":5,"code":"d"}}}}}');var r=t(4865),l=t(9365),u=t(816);const d={description:"High only",title:"\ud83d\udcd0 boundsDuration (High only)"},c=void 0,g={id:"specs/boundsRange/high_only",title:"\ud83d\udcd0 boundsDuration (High only)",description:"High only",source:"@site/docs/specs/boundsRange/high_only.mdx",sourceDirName:"specs/boundsRange",slug:"/specs/boundsRange/high_only",permalink:"/fhir-dosage-utils/docs/specs/boundsRange/high_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/boundsRange/high_only.mdx",tags:[],version:"current",frontMatter:{description:"High only",title:"\ud83d\udcd0 boundsDuration (High only)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd0 boundsRange",permalink:"/fhir-dosage-utils/docs/category/-boundsrange"},next:{title:"\ud83d\udcd0 boundsDuration (Low & High)",permalink:"/fhir-dosage-utils/docs/specs/boundsRange/low_and_high"}},h={},p=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.A,{children:[(0,s.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(u.A,{dosage:a})}),(0,s.jsx)(l.A,{value:"json",label:"Dosage",children:(0,s.jsx)(i.default,{language:"json",children:JSON.stringify(a,null,2)})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Don't forget you can use ",(0,s.jsx)(n.a,{href:"/api/interface/Params",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},816:(e,n,t)=>{t.d(n,{A:()=>l});var s=t(6540),o=t(6300),i=t(2376),a=t(1812),r=t(4848);function l(e){let{dosage:n,config:t,i18nConfig:l}=e;const[u,d]=(0,s.useState)(""),[c,g]=(0,s.useState)(t?.language||"en"),[h,p]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await o.A.build(t,l);p(e)}()}),[t]),(0,s.useEffect)((()=>{!async function(){if(h){const e=h.fromDosageToText(n);d(e)}}()}),[n,h]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>g(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(h){await h.changeLanguage(c);const e=h.fromDosageToText(n);d(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(a.default,{language:"markup",children:(f=u,(0,i.decode)(f))})})]});var f}}}]);