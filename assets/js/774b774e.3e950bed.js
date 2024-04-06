"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5648],{553:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>y,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>f,toc:()=>p});var t=r(4848),a=r(8453),s=r(1812);const c=JSON.parse('{"timing":{"repeat":{"frequency":3}}}');var u=r(4865),i=r(9365),o=r(816);const l={description:"frequency only",title:"\ud83d\udd01 frequency"},d=void 0,f={id:"specs/frequencyFrequencyMax/frequency_only",title:"\ud83d\udd01 frequency",description:"frequency only",source:"@site/docs/specs/frequencyFrequencyMax/frequency_only.mdx",sourceDirName:"specs/frequencyFrequencyMax",slug:"/specs/frequencyFrequencyMax/frequency_only",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/frequencyFrequencyMax/frequency_only.mdx",tags:[],version:"current",frontMatter:{description:"frequency only",title:"\ud83d\udd01 frequency"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd01 frequency and frequencyMax",permalink:"/fhir-dosage-utils/docs/specs/frequencyFrequencyMax/frequency_and_frequencyMax"},next:{title:"\ud83d\udc89 maxDosePerAdministration",permalink:"/fhir-dosage-utils/docs/category/-maxdoseperadministration"}},y={},p=[];function x(e){return(0,t.jsxs)(u.A,{children:[(0,t.jsx)(i.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(o.A,{dosage:c})}),(0,t.jsx)(i.A,{value:"json",label:"Dosage",children:(0,t.jsx)(s.default,{language:"json",children:JSON.stringify(c,null,2)})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x()}},816:(e,n,r)=>{r.d(n,{A:()=>u});var t=r(6540),a=r(6300),s=r(1812),c=r(4848);function u(e){let{dosage:n,config:r}=e;const[u,i]=(0,t.useState)(""),[o,l]=(0,t.useState)(r?.language||"en"),[d,f]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await a.A.build(r);f(e)}()}),[r]),(0,t.useEffect)((()=>{!async function(){if(d){const e=d.fromDosageToText(n);i(e)}}()}),[n,d]);return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsxs)("select",{value:o,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,c.jsx)("option",{value:"en",children:"English"}),(0,c.jsx)("option",{value:"fr",children:"French"}),(0,c.jsx)("option",{value:"nl",children:"Dutch"}),(0,c.jsx)("option",{value:"de",children:"German"})]}),(0,c.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(o);const e=d.fromDosageToText(n);i(e)}},children:"Confirm"})]}),(0,c.jsx)("p",{style:{marginTop:"10px"},children:(0,c.jsx)(s.default,{language:"markup",children:(y=u,y.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var y}}}]);