"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3678],{9461:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var o=s(4848),i=s(8453),n=s(1812);const a=JSON.parse('[{"sequence":1,"text":"Insert one suppository into the vagina daily at bedtime","timing":{"repeat":{"boundsPeriod":{"start":"2015-01-16","end":"2015-01-18"},"frequency":1,"period":1,"periodUnit":"d"}},"route":{"coding":[{"system":"http://snomed.info/sct","code":"16857009","display":"Vaginal Route"}]},"method":{"coding":[{"system":"http://snomed.info/sct","code":"421257003","display":"Insert"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":1,"unit":"VAGTAB","system":"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm","code":"VAGTAB"}}]},{"sequence":1,"text":"Apply to vaginal area topically once daily","timing":{"repeat":{"boundsPeriod":{"start":"2015-01-16","end":"2015-01-18"},"frequency":1,"period":1,"periodUnit":"d"}},"route":{"coding":[{"system":"http://snomed.info/sct","code":"6064005","display":"Topical Route"}]},"method":{"coding":[{"system":"http://snomed.info/sct","code":"417924000","display":"Apply - dosing instruction imperative (qualifier value)"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]}}]}]');var r=s(4865),d=s(9365),l=s(8264);const c={description:"Request for a product that contains multiple dosage forms",title:"medrx0339"},u=void 0,m={id:"examples/medicationrequest/medrx0339",title:"medrx0339",description:"Request for a product that contains multiple dosage forms",source:"@site/docs/examples/medicationrequest/medrx0339.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx0339",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0339",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0339.mdx",tags:[],version:"current",frontMatter:{description:"Request for a product that contains multiple dosage forms",title:"medrx0339"},sidebar:"tutorialSidebar",previous:{title:"medrx0331",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0331"},next:{title:"\ud83e\udde9 Contributing",permalink:"/fhir-dosage-utils/docs/contributing"}},p={},g=[];function h(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Source: ",(0,o.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0339.html",children:"HL7"}),' - "Request for a product that contains multiple dosage forms"']})}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(l.A,{dosages:a,config:{}})}),(0,o.jsx)(d.A,{value:"json",label:"Dosage",children:(0,o.jsx)(n.default,{language:"json",children:JSON.stringify(a,null,2)})})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8264:(e,t,s)=>{s.d(t,{A:()=>d});var o=s(6540),i=s(6300),n=s(2376),a=s(1812),r=s(4848);function d(e){let{dosages:t,config:s}=e;const[d,l]=(0,o.useState)(""),[c,u]=(0,o.useState)(s?.language||"en"),[m,p]=(0,o.useState)(null);(0,o.useEffect)((()=>{!async function(){const e=await i.U.build({...s});p(e)}()}),[s]),(0,o.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);l(e)}}()}),[t,m]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(c);const e=m.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(a.default,{language:"markup",children:(g=d,(0,n.decode)(g))})})]});var g}}}]);