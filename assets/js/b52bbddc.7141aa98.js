"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3361],{5950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>g,toc:()=>f});var a=n(4848),o=n(8453),r=n(1812);const s=JSON.parse('{"doseAndRate":[{"rateRange":{"low":{"value":3,"unit":"pills"}}}]}');var i=n(4865),l=n(9365),c=n(816);const d={description:"Low only",title:"\u2696\ufe0f rateRange (Low only)"},u=void 0,g={id:"specs/rateRange/low_only",title:"\u2696\ufe0f rateRange (Low only)",description:"Low only",source:"@site/docs/specs/rateRange/low_only.mdx",sourceDirName:"specs/rateRange",slug:"/specs/rateRange/low_only",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateRange/low_only.mdx",tags:[],version:"current",frontMatter:{description:"Low only",title:"\u2696\ufe0f rateRange (Low only)"},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f rateRange (Low & High)",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_and_high"},next:{title:"\ud83d\udcc8 rateRatio",permalink:"/fhir-dosage-utils/docs/category/-rateratio"}},p={},f=[];function h(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(c.A,{dosage:s})}),(0,a.jsx)(l.A,{value:"json",label:"Dosage",children:(0,a.jsx)(r.default,{language:"json",children:JSON.stringify(s,null,2)})})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Don't forget you can use ",(0,a.jsx)(t.a,{href:"/api/interface/Params",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},816:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540),o=n(6300),r=n(1812),s=n(4848);function i(e){let{dosage:t,config:n,i18nConfig:i}=e;const[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(n?.language||"en"),[g,p]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await o.A.build(n,i);p(e)}()}),[n]),(0,a.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(t);c(e)}}()}),[t,g]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,s.jsx)("option",{value:"en",children:"English"}),(0,s.jsx)("option",{value:"fr",children:"French"}),(0,s.jsx)("option",{value:"nl",children:"Dutch"}),(0,s.jsx)("option",{value:"de",children:"German"})]}),(0,s.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,s.jsx)("div",{style:{marginTop:"10px"},children:(0,s.jsx)(r.default,{language:"markup",children:(f=l,f.replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&lt;=/g,"<=").replace(/&gt;=/g,">=").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var f}}}]);