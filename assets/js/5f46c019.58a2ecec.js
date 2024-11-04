"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9059],{16928:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"specs/route/route","title":"\ud83d\udee3\ufe0f route","description":"route","source":"@site/docs/specs/route/route.mdx","sourceDirName":"specs/route","slug":"/specs/route/","permalink":"/fhir-dosage-utils/docs/specs/route/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/route/route.mdx","tags":[],"version":"current","frontMatter":{"description":"route","title":"\ud83d\udee3\ufe0f route"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udee3\ufe0f route","permalink":"/fhir-dosage-utils/docs/category/\ufe0f-route"},"next":{"title":"\u27a1\ufe0f sequence","permalink":"/fhir-dosage-utils/docs/category/\ufe0f-sequence"}}');var n=s(74848),r=s(28453),a=s(85819);const i=JSON.parse('{"route":{"coding":[{"system":"http://hl7.org/fhir/ValueSet/route-codes","code":"26643006","display":"Oral route"}]}}');var c=s(11470),u=s(19365),l=s(816);const d={description:"route",title:"\ud83d\udee3\ufe0f route"},p=void 0,f={},h=[];function g(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.A,{children:[(0,n.jsx)(u.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(l.A,{dosage:i})}),(0,n.jsx)(u.A,{value:"json",label:"Dosage",children:(0,n.jsx)(a.default,{language:"json",children:JSON.stringify(i,null,2)})})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Don't forget you can use ",(0,n.jsx)(t.a,{href:"/api/interface/Config",children:"fromCodeableConceptToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},816:(e,t,s)=>{s.d(t,{A:()=>c});var o=s(96540),n=s(76300),r=s(52376),a=s(85819),i=s(74848);function c(e){let{dosage:t,config:s}=e;const[c,u]=(0,o.useState)(""),[l,d]=(0,o.useState)(s?.language||"en"),[p,f]=(0,o.useState)(null);(0,o.useEffect)((()=>{!async function(){const e=await n.U.build({...s});f(e)}()}),[s]),(0,o.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(t);u(e)}}()}),[t,p]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:l,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(l);const e=p.fromDosageToText(t);u(e)}},children:"Confirm"})]}),(0,i.jsx)("div",{style:{marginTop:"10px"},children:(0,i.jsx)(a.default,{language:"markup",children:(h=c,(0,r.decode)(h))})})]});var h}}}]);