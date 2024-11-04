"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[585],{65701:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"specs/boundsRange/low_and_high","title":"\ud83d\udcd0 boundsDuration (Low & High)","description":"Low & High","source":"@site/docs/specs/boundsRange/low_and_high.mdx","sourceDirName":"specs/boundsRange","slug":"/specs/boundsRange/low_and_high","permalink":"/fhir-dosage-utils/docs/specs/boundsRange/low_and_high","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/boundsRange/low_and_high.mdx","tags":[],"version":"current","frontMatter":{"description":"Low & High","title":"\ud83d\udcd0 boundsDuration (Low & High)"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udcd0 boundsDuration (High only)","permalink":"/fhir-dosage-utils/docs/specs/boundsRange/high_only"},"next":{"title":"\ud83d\udcd0 boundsDuration (Low only)","permalink":"/fhir-dosage-utils/docs/specs/boundsRange/low_only"}}');var o=s(74848),a=s(28453),i=s(85819);const r=JSON.parse('{"timing":{"repeat":{"boundsRange":{"low":{"system":"http://hl7.org/fhir/ValueSet/duration-units","value":3,"code":"d"},"high":{"system":"http://hl7.org/fhir/ValueSet/duration-units","value":5,"code":"d"}}}}}');var l=s(11470),d=s(19365),u=s(816);const c={description:"Low & High",title:"\ud83d\udcd0 boundsDuration (Low & High)"},h=void 0,g={},p=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.A,{children:[(0,o.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(u.A,{dosage:r})}),(0,o.jsx)(d.A,{value:"json",label:"Dosage",children:(0,o.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})})]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Don't forget you can use ",(0,o.jsx)(n.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},816:(e,n,s)=>{s.d(n,{A:()=>l});var t=s(96540),o=s(76300),a=s(52376),i=s(85819),r=s(74848);function l(e){let{dosage:n,config:s}=e;const[l,d]=(0,t.useState)(""),[u,c]=(0,t.useState)(s?.language||"en"),[h,g]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await o.U.build({...s});g(e)}()}),[s]),(0,t.useEffect)((()=>{!async function(){if(h){const e=h.fromDosageToText(n);d(e)}}()}),[n,h]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:u,onChange:e=>c(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(h){await h.changeLanguage(u);const e=h.fromDosageToText(n);d(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(p=l,(0,a.decode)(p))})})]});var p}}}]);