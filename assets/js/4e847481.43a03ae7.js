"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9646],{15226:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var n=s(74848),i=s(28453),o=s(85819);const d=JSON.parse('[{"sequence":1,"text":"1 tablet every four hours as needed for pain","additionalInstruction":[{"coding":[{"system":"http://snomed.info/sct","code":"418914006","display":"Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)"}]}],"timing":{"repeat":{"frequency":1,"period":4,"periodUnit":"h"}},"asNeededFor":[{"coding":[{"system":"http://snomed.info/sct","code":"203082005","display":"Fibromyalgia (disorder)"}]}],"route":{"coding":[{"system":"http://snomed.info/sct","code":"26643006","display":"Oral Route"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":1,"unit":"TAB","system":"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm","code":"TAB"}}]}]');var r=s(11470),a=s(19365),c=s(18264);const l={description:"Order with as needed (PRN) dosage - Percocet - completed with link to encounter, dispenseRequest and substitution",title:"medrx0307"},u=void 0,m={id:"examples/medicationrequest/medrx0307",title:"medrx0307",description:"Order with as needed (PRN) dosage - Percocet - completed with link to encounter, dispenseRequest and substitution",source:"@site/docs/examples/medicationrequest/medrx0307.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx0307",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0307",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0307.mdx",tags:[],version:"current",frontMatter:{description:"Order with as needed (PRN) dosage - Percocet - completed with link to encounter, dispenseRequest and substitution",title:"medrx0307"},sidebar:"tutorialSidebar",previous:{title:"medrx0305",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0305"},next:{title:"medrx0308",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0308"}},p={},h=[];function x(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0307.html",children:"HL7"}),' - "Order with as needed (PRN) dosage - Percocet - completed with link to encounter, dispenseRequest and substitution"']})}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(a.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosages:d,config:{}})}),(0,n.jsx)(a.A,{value:"json",label:"Dosage",children:(0,n.jsx)(o.default,{language:"json",children:JSON.stringify(d,null,2)})})]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},18264:(e,t,s)=>{s.d(t,{A:()=>a});var n=s(96540),i=s(76300),o=s(52376),d=s(85819),r=s(74848);function a(e){let{dosages:t,config:s}=e;const[a,c]=(0,n.useState)(""),[l,u]=(0,n.useState)(s?.language||"en"),[m,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await i.U.build({...s});p(e)}()}),[s]),(0,n.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);c(e)}}()}),[t,m]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:l,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(l);const e=m.fromMultipleDosageToText(t);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(d.default,{language:"markup",children:(h=a,(0,o.decode)(h))})})]});var h}}}]);