"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6751],{6692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>q,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var s=n(4848),i=n(8453),u=n(1812);const c=JSON.parse('[{"sequence":1,"text":"Instructions 1"},{"sequence":2,"text":"Instructions 2"}]');var r=n(4865),a=n(9365),o=n(8264);const l={description:"Sequential instructions, with sequence",title:"\u27a1\ufe0f sequence (Sequential instructions 1)"},d=void 0,p={id:"specs/sequence/sequential_instructions_1",title:"\u27a1\ufe0f sequence (Sequential instructions 1)",description:"Sequential instructions, with sequence",source:"@site/docs/specs/sequence/sequential_instructions_1.mdx",sourceDirName:"specs/sequence",slug:"/specs/sequence/sequential_instructions_1",permalink:"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/sequence/sequential_instructions_1.mdx",tags:[],version:"current",frontMatter:{description:"Sequential instructions, with sequence",title:"\u27a1\ufe0f sequence (Sequential instructions 1)"},sidebar:"tutorialSidebar",previous:{title:"\u27a1\ufe0f sequence (Concurrent instructions)",permalink:"/fhir-dosage-utils/docs/specs/sequence/concurrent_instructions"},next:{title:"\u27a1\ufe0f sequence (Sequential instructions 2)",permalink:"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_2"}},f={},g=[];function h(e){return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(a.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(o.A,{dosages:c,config:{displayOrder:["text"]}})}),(0,s.jsx)(a.A,{value:"json",label:"Dosage",children:(0,s.jsx)(u.default,{language:"json",children:JSON.stringify(c,null,2)})})]})}function q(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},8264:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(6540),i=n(6300),u=n(1812),c=n(4848);function r(e){let{dosages:t,config:n}=e;const[r,a]=(0,s.useState)(""),[o,l]=(0,s.useState)(n?.language||"en"),[d,p]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await i.A.build(n);p(e)}()}),[n]),(0,s.useEffect)((()=>{!async function(){if(d){const e=d.fromMultipleDosageToText(t);a(e)}}()}),[t,d]);return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsxs)("select",{value:o,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,c.jsx)("option",{value:"en",children:"English"}),(0,c.jsx)("option",{value:"fr",children:"French"}),(0,c.jsx)("option",{value:"nl",children:"Dutch"}),(0,c.jsx)("option",{value:"de",children:"German"})]}),(0,c.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(o);const e=d.fromMultipleDosageToText(t);a(e)}},children:"Confirm"})]}),(0,c.jsx)("p",{style:{marginTop:"10px"},children:(0,c.jsx)(u.default,{language:"markup",children:(f=r,f.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var f}}}]);