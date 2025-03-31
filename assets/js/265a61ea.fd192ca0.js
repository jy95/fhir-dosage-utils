"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5184],{30011:(e,t,i)=>{i.d(t,{A:()=>d});var s=i(96540),n=i(15721),a=i(88420),o=i(33231),r=i(74848);function d(e){let{dosages:t,config:i}=e;const[d,l]=(0,s.useState)(""),[c,u]=(0,s.useState)(i?.language||"en"),[m,p]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await n.U.build({...i});p(e)}()}),[i]),(0,s.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);l(e)}}()}),[t,m]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(c);const e=m.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(o.default,{language:"markup",children:(h=d,(0,a.D4)(h))})})]});var h}},80033:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"examples/medicationrequest/medrx0319","title":"medrx0319","description":"Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code","source":"@site/docs/examples/medicationrequest/medrx0319.mdx","sourceDirName":"examples/medicationrequest","slug":"/examples/medicationrequest/medrx0319","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0319","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0319.mdx","tags":[],"version":"current","frontMatter":{"description":"Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code","title":"medrx0319"},"sidebar":"tutorialSidebar","previous":{"title":"medrx0317","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0317"},"next":{"title":"medrx0321","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0321"}}');var n=i(74848),a=i(28453),o=i(33231);const r=JSON.parse('[{"sequence":1,"text":"4.5 grams in D5W 250 ml. IV every 6 hours.Infuse over 30 min at 8L/min ","timing":{"repeat":{"frequency":1,"period":6,"periodUnit":"h"}},"route":{"coding":[{"system":"http://snomed.info/sct","code":"47625008","display":"Intravenous route (qualifier value)"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":4.5,"unit":"g","system":"http://unitsofmeasure.org","code":"g"},"rateQuantity":{"value":50,"system":"http://unitsofmeasure.org","code":"ml/h"}}]}]');var d=i(65537),l=i(79329),c=i(30011);const u={description:"Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code",title:"medrx0319"},m=void 0,p={},h=[];function x(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0319.html",children:"HL7"}),' - "Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code"']})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosages:r,config:{}})}),(0,n.jsx)(l.A,{value:"json",label:"Dosage",children:(0,n.jsx)(o.default,{language:"json",children:JSON.stringify(r,null,2)})})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);