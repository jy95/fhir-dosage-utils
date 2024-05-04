"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8154],{5056:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=i(4848),a=i(8453),s=i(1812);const r=JSON.parse('[{"sequence":1,"text":"Take one tablet daily as directed"}]');var o=i(4865),d=i(9365),c=i(8264);const l={description:"Order for a medication that includes the dosage of a prescription in text",title:"medrx002"},u=void 0,m={id:"examples/medicationrequest/medrx002",title:"medrx002",description:"Order for a medication that includes the dosage of a prescription in text",source:"@site/docs/examples/medicationrequest/medrx002.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx002",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx002",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx002.mdx",tags:[],version:"current",frontMatter:{description:"Order for a medication that includes the dosage of a prescription in text",title:"medrx002"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0c MedicationRequest",permalink:"/fhir-dosage-utils/docs/demo/examples/medicationrequest"},next:{title:"medrx003",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx003"}},x={},p=[];function h(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Source: ",(0,n.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequestexample2.html",children:"HL7"}),' - "Order for a medication that includes the dosage of a prescription in text"']})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosages:r,config:{displayOrder:["text"]}})}),(0,n.jsx)(d.A,{value:"json",label:"Dosage",children:(0,n.jsx)(s.default,{language:"json",children:JSON.stringify(r,null,2)})})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8264:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(6540),a=i(6300),s=i(2376),r=i(1812),o=i(4848);function d(e){let{dosages:t,config:i,i18nConfig:d}=e;const[c,l]=(0,n.useState)(""),[u,m]=(0,n.useState)(i?.language||"en"),[x,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await a.A.build(i,d);p(e)}()}),[i]),(0,n.useEffect)((()=>{!async function(){if(x){const e=x.fromMultipleDosageToText(t);l(e)}}()}),[t,x]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:u,onChange:e=>m(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(x){await x.changeLanguage(u);const e=x.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(r.default,{language:"markup",children:(h=c,(0,s.decode)(h))})})]});var h}}}]);