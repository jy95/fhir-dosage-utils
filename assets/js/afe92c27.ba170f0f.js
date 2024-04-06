"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4088],{2390:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>x});var t=s(4848),o=s(8453),a=s(1812);const n=JSON.parse('{"maxDosePerPeriod":{"numerator":{"value":3,"unit":"pills"},"denominator":{"value":5,"unit":"hours"}}}');var i=s(4865),d=s(9365),c=s(816);const l={description:"maxDosePerPeriod (R4)",title:"\u23f3 maxDosePerPeriod (R4)"},u=void 0,m={id:"specs/maxDosePerPeriod/r4",title:"\u23f3 maxDosePerPeriod (R4)",description:"maxDosePerPeriod (R4)",source:"@site/docs/specs/maxDosePerPeriod/r4.mdx",sourceDirName:"specs/maxDosePerPeriod",slug:"/specs/maxDosePerPeriod/r4",permalink:"/fhir-dosage-utils/docs/specs/maxDosePerPeriod/r4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/maxDosePerPeriod/r4.mdx",tags:[],version:"current",frontMatter:{description:"maxDosePerPeriod (R4)",title:"\u23f3 maxDosePerPeriod (R4)"},sidebar:"tutorialSidebar",previous:{title:"\u23f3 maxDosePerPeriod",permalink:"/fhir-dosage-utils/docs/category/-maxdoseperperiod"},next:{title:"\u23f3 maxDosePerPeriod (R5)",permalink:"/fhir-dosage-utils/docs/specs/maxDosePerPeriod/r5"}},p={},x=[];function f(e){const r={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.A,{children:[(0,t.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(c.A,{dosage:n})}),(0,t.jsx)(d.A,{value:"json",label:"Dosage",children:(0,t.jsx)(a.default,{language:"json",children:JSON.stringify(n,null,2)})})]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Don't forget you can use ",(0,t.jsx)(r.a,{href:"/api/interface/Params",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function g(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},816:(e,r,s)=>{s.d(r,{A:()=>i});var t=s(6540),o=s(6300),a=s(1812),n=s(4848);function i(e){let{dosage:r,config:s}=e;const[i,d]=(0,t.useState)(""),[c,l]=(0,t.useState)(s?.language||"en"),[u,m]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await o.A.build(s);m(e)}()}),[s]),(0,t.useEffect)((()=>{!async function(){if(u){const e=u.fromDosageToText(r);d(e)}}()}),[r,u]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsxs)("select",{value:c,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,n.jsx)("option",{value:"en",children:"English"}),(0,n.jsx)("option",{value:"fr",children:"French"}),(0,n.jsx)("option",{value:"nl",children:"Dutch"}),(0,n.jsx)("option",{value:"de",children:"German"})]}),(0,n.jsx)("button",{onClick:async()=>{if(u){await u.changeLanguage(c);const e=u.fromDosageToText(r);d(e)}},children:"Confirm"})]}),(0,n.jsx)("p",{style:{marginTop:"10px"},children:(0,n.jsx)(a.default,{language:"markup",children:(p=i,p.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,r){return String.fromCharCode(r)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,r){return String.fromCharCode(parseInt(r,16))})))})})]});var p}}}]);