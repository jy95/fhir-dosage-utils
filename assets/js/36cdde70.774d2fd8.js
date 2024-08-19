"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2229],{7801:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var o=i(4848),s=i(8453),n=i(1812);const d=JSON.parse('[{"sequence":1,"text":"one to two tablets every 4-6 hours as needed for rib pain","additionalInstruction":[{"coding":[{"system":"http://snomed.info/sct","code":"418914006","display":"Warning. May cause drowsiness. If affected do not drive or operate machinery. Avoid alcoholic drink (qualifier value)"}]}],"patientInstruction":"Take one to two tablets every four to six hours as needed for rib pain","timing":{"repeat":{"frequency":1,"period":4,"periodMax":6,"periodUnit":"h"}},"asNeededFor":[{"coding":[{"system":"http://snomed.info/sct","code":"297217002","display":"Rib Pain (finding)"}]}],"route":{"coding":[{"system":"http://snomed.info/sct","code":"26643006","display":"Oral Route"}]},"method":{"coding":[{"system":"http://snomed.info/sct","code":"421521009","display":"Swallow - dosing instruction imperative (qualifier value)"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseRange":{"low":{"value":1,"unit":"TAB","system":"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm","code":"TAB"},"high":{"value":2,"unit":"TAB","system":"http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm","code":"TAB"}}}]}]');var a=i(4865),r=i(9365),c=i(8264);const l={description:"Order with as needed (PRN) dosage with pre-condition - Oxycodone - active with reasonCode, note, dispenseRequest and substitution",title:"medrx0301"},u=void 0,m={id:"examples/medicationrequest/medrx0301",title:"medrx0301",description:"Order with as needed (PRN) dosage with pre-condition - Oxycodone - active with reasonCode, note, dispenseRequest and substitution",source:"@site/docs/examples/medicationrequest/medrx0301.mdx",sourceDirName:"examples/medicationrequest",slug:"/examples/medicationrequest/medrx0301",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0301",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/medicationrequest/medrx0301.mdx",tags:[],version:"current",frontMatter:{description:"Order with as needed (PRN) dosage with pre-condition - Oxycodone - active with reasonCode, note, dispenseRequest and substitution",title:"medrx0301"},sidebar:"tutorialSidebar",previous:{title:"medrx004",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx004"},next:{title:"medrx0302",permalink:"/fhir-dosage-utils/docs/examples/medicationrequest/medrx0302"}},p={},h=[];function x(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Source: ",(0,o.jsx)(t.a,{href:"https://www.hl7.org/fhir/medicationrequest0301.html",children:"HL7"}),' - "Order with as needed (PRN) dosage with pre-condition - Oxycodone - active with reasonCode, note, dispenseRequest and substitution"']})}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(c.A,{dosages:d,config:{}})}),(0,o.jsx)(r.A,{value:"json",label:"Dosage",children:(0,o.jsx)(n.default,{language:"json",children:JSON.stringify(d,null,2)})})]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},8264:(e,t,i)=>{i.d(t,{A:()=>r});var o=i(6540),s=i(6300),n=i(2376),d=i(1812),a=i(4848);function r(e){let{dosages:t,config:i}=e;const[r,c]=(0,o.useState)(""),[l,u]=(0,o.useState)(i?.language||"en"),[m,p]=(0,o.useState)(null);(0,o.useEffect)((()=>{!async function(){const e=await s.U.build({...i});p(e)}()}),[i]),(0,o.useEffect)((()=>{!async function(){if(m){const e=m.fromMultipleDosageToText(t);c(e)}}()}),[t,m]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsxs)("select",{value:l,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,a.jsx)("option",{value:"en",children:"English"}),(0,a.jsx)("option",{value:"fr",children:"French"}),(0,a.jsx)("option",{value:"nl",children:"Dutch"}),(0,a.jsx)("option",{value:"de",children:"German"})]}),(0,a.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(l);const e=m.fromMultipleDosageToText(t);c(e)}},children:"Confirm"})]}),(0,a.jsx)("div",{style:{marginTop:"10px"},children:(0,a.jsx)(d.default,{language:"markup",children:(h=r,(0,n.decode)(h))})})]});var h}}}]);