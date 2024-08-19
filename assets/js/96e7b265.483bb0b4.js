"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3301],{220:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>g,toc:()=>p});var t=s(4848),o=s(8453),a=s(1812);const i=JSON.parse('{"doseAndRate":[{"doseRange":{"low":{"value":3,"unit":"pills"},"high":{"value":5,"unit":"pills"}}}]}');var l=s(4865),d=s(9365),r=s(816);const c={description:"Low & High",title:"\ud83d\udccf doseRange (Low & High)"},u=void 0,g={id:"specs/doseRange/low_and_high",title:"\ud83d\udccf doseRange (Low & High)",description:"Low & High",source:"@site/docs/specs/doseRange/low_and_high.mdx",sourceDirName:"specs/doseRange",slug:"/specs/doseRange/low_and_high",permalink:"/fhir-dosage-utils/docs/specs/doseRange/low_and_high",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/doseRange/low_and_high.mdx",tags:[],version:"current",frontMatter:{description:"Low & High",title:"\ud83d\udccf doseRange (Low & High)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccf doseRange (High only)",permalink:"/fhir-dosage-utils/docs/specs/doseRange/high_only"},next:{title:"\ud83d\udccf doseRange (Low only)",permalink:"/fhir-dosage-utils/docs/specs/doseRange/low_only"}},h={},p=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.A,{children:[(0,t.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(r.A,{dosage:i})}),(0,t.jsx)(d.A,{value:"json",label:"Dosage",children:(0,t.jsx)(a.default,{language:"json",children:JSON.stringify(i,null,2)})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Don't forget you can use ",(0,t.jsx)(n.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},816:(e,n,s)=>{s.d(n,{A:()=>d});var t=s(6540),o=s(6300),a=s(2376),i=s(1812),l=s(4848);function d(e){let{dosage:n,config:s}=e;const[d,r]=(0,t.useState)(""),[c,u]=(0,t.useState)(s?.language||"en"),[g,h]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await o.U.build({...s});h(e)}()}),[s]),(0,t.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(n);r(e)}}()}),[n,g]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(c);const e=g.fromDosageToText(n);r(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(i.default,{language:"markup",children:(p=d,(0,a.decode)(p))})})]});var p}}}]);