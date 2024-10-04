"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3421],{48290:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>x,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var r=o(74848),a=o(28453),d=o(85819);const s=JSON.parse('{"timing":{"repeat":{"period":1,"periodMax":3,"periodUnit":"d"}}}');var t=o(11470),n=o(19365),l=o(816);const c={description:"period & periodMax",title:"\u267b\ufe0f period & periodMax"},p=void 0,u={id:"specs/periodPeriodMax/period_and_periodMax",title:"\u267b\ufe0f period & periodMax",description:"period & periodMax",source:"@site/docs/specs/periodPeriodMax/period_and_periodMax.mdx",sourceDirName:"specs/periodPeriodMax",slug:"/specs/periodPeriodMax/period_and_periodMax",permalink:"/fhir-dosage-utils/docs/specs/periodPeriodMax/period_and_periodMax",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/periodPeriodMax/period_and_periodMax.mdx",tags:[],version:"current",frontMatter:{description:"period & periodMax",title:"\u267b\ufe0f period & periodMax"},sidebar:"tutorialSidebar",previous:{title:"\u267b\ufe0f periodMax (only)",permalink:"/fhir-dosage-utils/docs/specs/periodPeriodMax/periodMax_only"},next:{title:"\u267b\ufe0f period (only)",permalink:"/fhir-dosage-utils/docs/specs/periodPeriodMax/period_only"}},x={},f=[];function g(e){return(0,r.jsxs)(t.A,{children:[(0,r.jsx)(n.A,{value:"text",label:"Human readable text",default:!0,children:(0,r.jsx)(l.A,{dosage:s})}),(0,r.jsx)(n.A,{value:"json",label:"Dosage",children:(0,r.jsx)(d.default,{language:"json",children:JSON.stringify(s,null,2)})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(g,{...e})}):g()}},816:(e,i,o)=>{o.d(i,{A:()=>n});var r=o(96540),a=o(76300),d=o(52376),s=o(85819),t=o(74848);function n(e){let{dosage:i,config:o}=e;const[n,l]=(0,r.useState)(""),[c,p]=(0,r.useState)(o?.language||"en"),[u,x]=(0,r.useState)(null);(0,r.useEffect)((()=>{!async function(){const e=await a.U.build({...o});x(e)}()}),[o]),(0,r.useEffect)((()=>{!async function(){if(u){const e=u.fromDosageToText(i);l(e)}}()}),[i,u]);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsxs)("select",{value:c,onChange:e=>p(e.target.value),style:{marginRight:"10px"},children:[(0,t.jsx)("option",{value:"en",children:"English"}),(0,t.jsx)("option",{value:"fr",children:"French"}),(0,t.jsx)("option",{value:"nl",children:"Dutch"}),(0,t.jsx)("option",{value:"de",children:"German"})]}),(0,t.jsx)("button",{onClick:async()=>{if(u){await u.changeLanguage(c);const e=u.fromDosageToText(i);l(e)}},children:"Confirm"})]}),(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)(s.default,{language:"markup",children:(f=n,(0,d.decode)(f))})})]});var f}}}]);