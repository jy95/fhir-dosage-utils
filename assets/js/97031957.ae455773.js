"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4222],{73461:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>y,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>f,toc:()=>x});var r=a(74848),c=a(28453),s=a(85819);const t=JSON.parse('{"timing":{"repeat":{"frequency":1,"frequencyMax":3}}}');var u=a(11470),i=a(19365),o=a(816);const l={description:"frequency and frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax"},d=void 0,f={id:"specs/frequencyFrequencyMax/frequency_and_frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax",description:"frequency and frequencyMax",source:"@site/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax.mdx",sourceDirName:"specs/frequencyFrequencyMax",slug:"/specs/frequencyFrequencyMax/frequency_and_frequencyMax",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax.mdx",tags:[],version:"current",frontMatter:{description:"frequency and frequencyMax",title:"\ud83d\udd01 frequency and frequencyMax"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd01 frequencyMax",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequencyMax_only"},next:{title:"\ud83d\udd01 frequency",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_only"}},y={},x=[];function q(e){return(0,r.jsxs)(u.A,{children:[(0,r.jsx)(i.A,{value:"text",label:"Human readable text",default:!0,children:(0,r.jsx)(o.A,{dosage:t})}),(0,r.jsx)(i.A,{value:"json",label:"Dosage",children:(0,r.jsx)(s.default,{language:"json",children:JSON.stringify(t,null,2)})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(q,{...e})}):q()}},816:(e,n,a)=>{a.d(n,{A:()=>i});var r=a(96540),c=a(76300),s=a(52376),t=a(85819),u=a(74848);function i(e){let{dosage:n,config:a}=e;const[i,o]=(0,r.useState)(""),[l,d]=(0,r.useState)(a?.language||"en"),[f,y]=(0,r.useState)(null);(0,r.useEffect)((()=>{!async function(){const e=await c.U.build({...a});y(e)}()}),[a]),(0,r.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(n);o(e)}}()}),[n,f]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsxs)("select",{value:l,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,u.jsx)("option",{value:"en",children:"English"}),(0,u.jsx)("option",{value:"fr",children:"French"}),(0,u.jsx)("option",{value:"nl",children:"Dutch"}),(0,u.jsx)("option",{value:"de",children:"German"})]}),(0,u.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(l);const e=f.fromDosageToText(n);o(e)}},children:"Confirm"})]}),(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(t.default,{language:"markup",children:(x=i,(0,s.decode)(x))})})]});var x}}}]);