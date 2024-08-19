"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3361],{9446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var a=t(4848),o=t(8453),s=t(1812);const i=JSON.parse('{"doseAndRate":[{"rateRange":{"low":{"value":3,"unit":"pills"}}}]}');var r=t(4865),l=t(9365),c=t(816);const d={description:"Low only",title:"\u2696\ufe0f rateRange (Low only)"},u=void 0,g={id:"specs/rateRange/low_only",title:"\u2696\ufe0f rateRange (Low only)",description:"Low only",source:"@site/docs/specs/rateRange/low_only.mdx",sourceDirName:"specs/rateRange",slug:"/specs/rateRange/low_only",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/rateRange/low_only.mdx",tags:[],version:"current",frontMatter:{description:"Low only",title:"\u2696\ufe0f rateRange (Low only)"},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f rateRange (Low & High)",permalink:"/fhir-dosage-utils/docs/specs/rateRange/low_and_high"},next:{title:"\ud83d\udcc8 rateRatio",permalink:"/fhir-dosage-utils/docs/category/-rateratio"}},p={},h=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.A,{children:[(0,a.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(c.A,{dosage:i})}),(0,a.jsx)(l.A,{value:"json",label:"Dosage",children:(0,a.jsx)(s.default,{language:"json",children:JSON.stringify(i,null,2)})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Don't forget you can use ",(0,a.jsx)(n.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},816:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(6540),o=t(6300),s=t(2376),i=t(1812),r=t(4848);function l(e){let{dosage:n,config:t}=e;const[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(t?.language||"en"),[g,p]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await o.U.build({...t});p(e)}()}),[t]),(0,a.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(n);c(e)}}()}),[n,g]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(n);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(h=l,(0,s.decode)(h))})})]});var h}}}]);