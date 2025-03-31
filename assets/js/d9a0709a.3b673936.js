"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8154],{30011:(e,t,i)=>{i.d(t,{A:()=>d});var a=i(96540),s=i(15721),n=i(88420),r=i(33231),o=i(74848);function d(e){let{dosages:t,config:i}=e;const[d,l]=(0,a.useState)(""),[c,u]=(0,a.useState)(i?.language||"en"),[m,x]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await s.U.build({...i});x(e)}()}),[i]),(0,a.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);l(e)}}()}),[t,m]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(c);const e=m.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(r.default,{language:"markup",children:(p=d,(0,n.D4)(p))})})]});var p}},95163:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"examples/medicationrequest/medrx002","title":"medrx002","description":"Order for a medication that includes the dosage of a prescription in text","source":"@site/docs/examples/medicationrequest/medrx002.mdx","sourceDirName":"examples/medicationrequest","slug":"/examples/medicationrequest/medrx002","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx002","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx002.mdx","tags":[],"version":"current","frontMatter":{"description":"Order for a medication that includes the dosage of a prescription in text","title":"medrx002"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83c\udf0c MedicationRequest","permalink":"/fhir-dosage-utils/docs/demo/examples/medicationrequest"},"next":{"title":"medrx003","permalink":"/fhir-dosage-utils/docs/examples/medicationrequest/medrx003"}}');var s=i(74848),n=i(28453),r=i(33231);const o=JSON.parse('[{"sequence":1,"text":"Take one tablet daily as directed"}]');var d=i(65537),l=i(79329),c=i(30011);const u={description:"Order for a medication that includes the dosage of a prescription in text",title:"medrx002"},m=void 0,x={},p=[];function h(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Source: ",(0,s.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequestexample2.html",children:"HL7"}),' - "Order for a medication that includes the dosage of a prescription in text"']})}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosages:o,config:{displayOrder:["text"]}})}),(0,s.jsx)(l.A,{value:"json",label:"Dosage",children:(0,s.jsx)(r.default,{language:"json",children:JSON.stringify(o,null,2)})})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);