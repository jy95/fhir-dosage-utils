"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9832],{5311:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=s(4848),i=s(8453),u=s(1812);const a=JSON.parse('[{"text":"Instructions 1"},{"text":"Instructions 2"}]');var c=s(4865),r=s(9365),o=s(8264);const l={description:"Sequential instructions, without sequence",title:"\u27a1\ufe0f sequence (Sequential instructions 2)"},d=void 0,p={id:"specs/sequence/sequential_instructions_2",title:"\u27a1\ufe0f sequence (Sequential instructions 2)",description:"Sequential instructions, without sequence",source:"@site/docs/specs/sequence/sequential_instructions_2.mdx",sourceDirName:"specs/sequence",slug:"/specs/sequence/sequential_instructions_2",permalink:"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/sequence/sequential_instructions_2.mdx",tags:[],version:"current",frontMatter:{description:"Sequential instructions, without sequence",title:"\u27a1\ufe0f sequence (Sequential instructions 2)"},sidebar:"tutorialSidebar",previous:{title:"\u27a1\ufe0f sequence (Sequential instructions 1)",permalink:"/fhir-dosage-utils/docs/specs/sequence/sequential_instructions_1"},next:{title:"\ud83d\udccd site",permalink:"/fhir-dosage-utils/docs/category/-site"}},f={},g=[];function h(e){return(0,n.jsxs)(c.A,{children:[(0,n.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(o.A,{dosages:a,config:{displayOrder:["text"]}})}),(0,n.jsx)(r.A,{value:"json",label:"Dosage",children:(0,n.jsx)(u.default,{language:"json",children:JSON.stringify(a,null,2)})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h()}},8264:(e,t,s)=>{s.d(t,{A:()=>c});var n=s(6540),i=s(6300),u=s(1812),a=s(4848);function c(e){let{dosages:t,config:s}=e;const[c,r]=(0,n.useState)(""),[o,l]=(0,n.useState)(s?.language||"en"),[d,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await i.A.build(s);p(e)}()}),[s]),(0,n.useEffect)((()=>{!async function(){if(d){const e=d.fromMultipleDosageToText(t);r(e)}}()}),[t,d]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsxs)("select",{value:o,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,a.jsx)("option",{value:"en",children:"English"}),(0,a.jsx)("option",{value:"fr",children:"French"}),(0,a.jsx)("option",{value:"nl",children:"Dutch"}),(0,a.jsx)("option",{value:"de",children:"German"})]}),(0,a.jsx)("button",{onClick:async()=>{if(d){await d.changeLanguage(o);const e=d.fromMultipleDosageToText(t);r(e)}},children:"Confirm"})]}),(0,a.jsx)("p",{style:{marginTop:"10px"},children:(0,a.jsx)(u.default,{language:"markup",children:(f=c,f.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var f}}}]);