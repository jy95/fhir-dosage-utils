"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4222],{3416:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var a=r(4848),c=r(8453),t=r(1812);const s=JSON.parse('{"timing":{"repeat":{"frequency":1,"frequencyMax":3}}}');var u=r(4865),i=r(9365),o=r(816);const l={description:"frequency and frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax"},f=void 0,d={id:"specs/frequencyFrequencyMax/frequency_and_frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax",description:"frequency and frequencyMax",source:"@site/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax.mdx",sourceDirName:"specs/frequencyFrequencyMax",slug:"/specs/frequencyFrequencyMax/frequency_and_frequencyMax",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax.mdx",tags:[],version:"current",frontMatter:{description:"frequency and frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd01 frequencyMax",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequencyMax_only"},next:{title:"\ud83d\udd01 frequency",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_only"}},y={},x=[];function q(e){return(0,a.jsxs)(u.A,{children:[(0,a.jsx)(i.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(o.A,{dosage:s})}),(0,a.jsx)(i.A,{value:"json",label:"Dosage",children:(0,a.jsx)(t.default,{language:"json",children:JSON.stringify(s,null,2)})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(q,{...e})}):q()}},816:(e,n,r)=>{r.d(n,{A:()=>u});var a=r(6540),c=r(6300),t=r(1812),s=r(4848);function u(e){let{dosage:n,config:r}=e;const[u,i]=(0,a.useState)(""),[o,l]=(0,a.useState)(r?.language||"en"),[f,d]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await c.A.build(r);d(e)}()}),[r]),(0,a.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(n);i(e)}}()}),[n,f]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsxs)("select",{value:o,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,s.jsx)("option",{value:"en",children:"English"}),(0,s.jsx)("option",{value:"fr",children:"French"}),(0,s.jsx)("option",{value:"nl",children:"Dutch"}),(0,s.jsx)("option",{value:"de",children:"German"})]}),(0,s.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(o);const e=f.fromDosageToText(n);i(e)}},children:"Confirm"})]}),(0,s.jsx)("p",{style:{marginTop:"10px"},children:(0,s.jsx)(t.default,{language:"markup",children:(y=u,y.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var y}}}]);