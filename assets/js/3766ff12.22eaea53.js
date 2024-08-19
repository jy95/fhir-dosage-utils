"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8952],{7357:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var n=s(4848),o=s(8453),i=s(1812);const r=JSON.parse('[{"sequence":1,"text":"Take 1-2 tablets once daily at bedtime as needed for restless legs","additionalInstruction":[{"text":"Take at bedtime"}],"timing":{"repeat":{"frequency":1,"period":1,"periodUnit":"d"}},"asNeededFor":[{"coding":[{"system":"http://snomed.info/sct","code":"32914008","display":"Restless Legs"}]}],"route":{"coding":[{"system":"http://snomed.info/sct","code":"26643006","display":"Oral Route"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseRange":{"low":{"value":1,"unit":"TAB","system":"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm","code":"TAB"},"high":{"value":2,"unit":"TAB","system":"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm","code":"TAB"}}}]}]');var a=s(4865),d=s(9365),l=s(8264);const c={description:"Request for Over the Counter Medication - Tylenol PM - with dosage range as needed with pre-condition for use",title:"medrx0310"},u=void 0,m={id:"examples/medicationrequest/medrx0310",title:"medrx0310",description:"Request for Over the Counter Medication - Tylenol PM - with dosage range as needed with pre-condition for use",source:"@site/docs/examples/medicationrequest/medrx0310.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx0310",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0310",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0310.mdx",tags:[],version:"current",frontMatter:{description:"Request for Over the Counter Medication - Tylenol PM - with dosage range as needed with pre-condition for use",title:"medrx0310"},sidebar:"tutorialSidebar",previous:{title:"medrx0308",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0308"},next:{title:"medrx0313",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0313"}},h={},p=[];function g(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0310.html",children:"HL7"}),' - "Request for Over the Counter Medication - Tylenol PM - with dosage range as needed with pre-condition for use"']})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(l.A,{dosages:r,config:{}})}),(0,n.jsx)(d.A,{value:"json",label:"Dosage",children:(0,n.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},8264:(e,t,s)=>{s.d(t,{A:()=>d});var n=s(6540),o=s(6300),i=s(2376),r=s(1812),a=s(4848);function d(e){let{dosages:t,config:s}=e;const[d,l]=(0,n.useState)(""),[c,u]=(0,n.useState)(s?.language||"en"),[m,h]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await o.U.build({...s});h(e)}()}),[s]),(0,n.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);l(e)}}()}),[t,m]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,a.jsx)("option",{value:"en",children:"English"}),(0,a.jsx)("option",{value:"fr",children:"French"}),(0,a.jsx)("option",{value:"nl",children:"Dutch"}),(0,a.jsx)("option",{value:"de",children:"German"})]}),(0,a.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(c);const e=m.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,a.jsx)("div",{style:{marginTop:"10px"},children:(0,a.jsx)(r.default,{language:"markup",children:(p=d,(0,i.decode)(p))})})]});var p}}}]);