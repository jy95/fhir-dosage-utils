"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[743],{27732:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>g,frontMatter:()=>u,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"examples/medicationrequest/medrx003","title":"medrx003","description":"Request that uses both calculated and ordered dosage","source":"@site/docs/examples/medicationrequest/medrx003.mdx","sourceDirName":"examples/medicationrequest","slug":"/examples/medicationrequest/medrx003","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx003","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx003.mdx","tags":[],"version":"current","frontMatter":{"description":"Request that uses both calculated and ordered dosage","title":"medrx003"},"sidebar":"tutorialSidebar","previous":{"title":"medrx002","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx002"},"next":{"title":"medrx004","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx004"}}');var n=s(74848),o=s(28453),d=s(85819);const r=JSON.parse('[{"sequence":1,"text":"1800 mg (1000 mg/m2) orally twice daily from days 1-14 of cycle","doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"calculated","display":"Calculated"}]},"doseQuantity":{"value":1800,"unit":"mg/m2","system":"http://unitsofmeasure.org","code":"mg/m2"}},{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"ordered"}]},"doseQuantity":{"value":1000,"unit":"mg","system":"http://unitsofmeasure.org","code":"mg"}}]}]');var i=s(11470),l=s(19365),c=s(18264);const u={description:"Request that uses both calculated and ordered dosage",title:"medrx003"},m=void 0,p={},h=[];function x(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequestexample3.html",children:"HL7"}),' - "Request that uses both calculated and ordered dosage"']})}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosages:r,config:{}})}),(0,n.jsx)(l.A,{value:"json",label:"Dosage",children:(0,n.jsx)(d.default,{language:"json",children:JSON.stringify(r,null,2)})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},18264:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(96540),n=s(76300),o=s(52376),d=s(85819),r=s(74848);function i(e){let{dosages:t,config:s}=e;const[i,l]=(0,a.useState)(""),[c,u]=(0,a.useState)(s?.language||"en"),[m,p]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await n.U.build({...s});p(e)}()}),[s]),(0,a.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);l(e)}}()}),[t,m]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(c);const e=m.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(d.default,{language:"markup",children:(h=i,(0,o.decode)(h))})})]});var h}}}]);