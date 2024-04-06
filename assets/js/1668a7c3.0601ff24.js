"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3790],{7141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>f,contentTitle:()=>c,default:()=>x,frontMatter:()=>u,metadata:()=>p,toc:()=>g});var t=s(4848),o=s(8453),r=s(1812);const d=JSON.parse('{"timing":{"repeat":{"boundsPeriod":{"end":"2011-05-27"}}}}');var i=s(4865),a=s(9365),l=s(816);const u={description:"end only",title:"\u23f3 boundsPeriod (end only)"},c=void 0,p={id:"specs/boundsPeriod/end_only",title:"\u23f3 boundsPeriod (end only)",description:"end only",source:"@site/docs/specs/boundsPeriod/end_only.mdx",sourceDirName:"specs/boundsPeriod",slug:"/specs/boundsPeriod/end_only",permalink:"/fhir-dosage-utils/docs/specs/boundsPeriod/end_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/boundsPeriod/end_only.mdx",tags:[],version:"current",frontMatter:{description:"end only",title:"\u23f3 boundsPeriod (end only)"},sidebar:"tutorialSidebar",previous:{title:"\u23f3 boundsPeriod",permalink:"/fhir-dosage-utils/docs/category/-boundsperiod"},next:{title:"\u23f3 boundsPeriod (start & end)",permalink:"/fhir-dosage-utils/docs/specs/boundsPeriod/start_and_end"}},f={},g=[];function h(e){return(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(l.A,{dosage:d})}),(0,t.jsx)(a.A,{value:"json",label:"Dosage",children:(0,t.jsx)(r.default,{language:"json",children:JSON.stringify(d,null,2)})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h()}},816:(e,n,s)=>{s.d(n,{A:()=>i});var t=s(6540),o=s(6300),r=s(1812),d=s(4848);function i(e){let{dosage:n,config:s}=e;const[i,a]=(0,t.useState)(""),[l,u]=(0,t.useState)(s?.language||"en"),[c,p]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await o.A.build(s);p(e)}()}),[s]),(0,t.useEffect)((()=>{!async function(){if(c){const e=c.fromDosageToText(n);a(e)}}()}),[n,c]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsxs)("select",{value:l,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,d.jsx)("option",{value:"en",children:"English"}),(0,d.jsx)("option",{value:"fr",children:"French"}),(0,d.jsx)("option",{value:"nl",children:"Dutch"}),(0,d.jsx)("option",{value:"de",children:"German"})]}),(0,d.jsx)("button",{onClick:async()=>{if(c){await c.changeLanguage(l);const e=c.fromDosageToText(n);a(e)}},children:"Confirm"})]}),(0,d.jsx)("p",{style:{marginTop:"10px"},children:(0,d.jsx)(r.default,{language:"markup",children:(f=i,f.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(n)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,n){return String.fromCharCode(parseInt(n,16))})))})})]});var f}}}]);