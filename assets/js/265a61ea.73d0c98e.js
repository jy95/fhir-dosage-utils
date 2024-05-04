"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5184],{904:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var s=i(4848),n=i(8453),a=i(1812);const o=JSON.parse('[{"sequence":1,"text":"4.5 grams in D5W 250 ml. IV every 6 hours.Infuse over 30 min at 8L/min ","timing":{"repeat":{"frequency":1,"period":6,"periodUnit":"h"}},"route":{"coding":[{"system":"http://snomed.info/sct","code":"47625008","display":"Intravenous route (qualifier value)"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":4.5,"unit":"g","system":"http://unitsofmeasure.org","code":"g"},"rateQuantity":{"value":50,"system":"http://unitsofmeasure.org","code":"ml/h"}}]}]');var r=i(4865),d=i(9365),l=i(8264);const c={description:"Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code",title:"medrx0319"},u=void 0,m={id:"examples/medicationrequest/medrx0319",title:"medrx0319",description:"Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code",source:"@site/docs/examples/medicationrequest/medrx0319.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx0319",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0319",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0319.mdx",tags:[],version:"current",frontMatter:{description:"Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code",title:"medrx0319"},sidebar:"tutorialSidebar",previous:{title:"medrx0317",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0317"},next:{title:"medrx0321",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0321"}},p={},h=[];function x(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Source: ",(0,s.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0319.html",children:"HL7"}),' - "Request for Intravenous Antibiotic with a Dosage Rate - Piperacillin - completed with reason code"']})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(l.A,{dosages:o,config:{}})}),(0,s.jsx)(d.A,{value:"json",label:"Dosage",children:(0,s.jsx)(a.default,{language:"json",children:JSON.stringify(o,null,2)})})]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8264:(e,t,i)=>{i.d(t,{A:()=>d});var s=i(6540),n=i(6300),a=i(2376),o=i(1812),r=i(4848);function d(e){let{dosages:t,config:i,i18nConfig:d}=e;const[l,c]=(0,s.useState)(""),[u,m]=(0,s.useState)(i?.language||"en"),[p,h]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await n.A.build(i,d);h(e)}()}),[i]),(0,s.useEffect)((()=>{!async function(){if(p){const e=p.fromMultipleDosageToText(t);c(e)}}()}),[t,p]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:u,onChange:e=>m(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(u);const e=p.fromMultipleDosageToText(t);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(o.default,{language:"markup",children:(x=l,(0,a.decode)(x))})})]});var x}}}]);