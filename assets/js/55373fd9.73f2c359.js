"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5461],{542:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>u,default:()=>x,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var d=a(4848),n=a(8453),t=a(1812);const o=JSON.parse('{"asNeededBoolean":true}');var l=a(4865),i=a(9365),c=a(816);const r={description:"asNeededBoolean",title:"\u2705 asNeededBoolean"},u=void 0,p={id:"specs/asNeeded/asNeededBoolean",title:"\u2705 asNeededBoolean",description:"asNeededBoolean",source:"@site/docs/specs/asNeeded/asNeededBoolean.mdx",sourceDirName:"specs/asNeeded",slug:"/specs/asNeeded/asNeededBoolean",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededBoolean",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/asNeeded/asNeededBoolean.mdx",tags:[],version:"current",frontMatter:{description:"asNeededBoolean",title:"\u2705 asNeededBoolean"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccc asNeeded",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/"},next:{title:"\ud83d\udccc asNeededCodeableConcept",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededCodeableConcept"}},f={},g=[];function h(e){return(0,d.jsxs)(l.A,{children:[(0,d.jsx)(i.A,{value:"text",label:"Human readable text",default:!0,children:(0,d.jsx)(c.A,{dosage:o})}),(0,d.jsx)(i.A,{value:"json",label:"Dosage",children:(0,d.jsx)(t.default,{language:"json",children:JSON.stringify(o,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h()}},816:(e,s,a)=>{a.d(s,{A:()=>i});var d=a(6540),n=a(6300),t=a(2376),o=a(1812),l=a(4848);function i(e){let{dosage:s,config:a,i18nConfig:i}=e;const[c,r]=(0,d.useState)(""),[u,p]=(0,d.useState)(a?.language||"en"),[f,g]=(0,d.useState)(null);(0,d.useEffect)((()=>{!async function(){const e=await n.A.build(a,i);g(e)}()}),[a]),(0,d.useEffect)((()=>{!async function(){if(f){const e=f.fromDosageToText(s);r(e)}}()}),[s,f]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:u,onChange:e=>p(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(u);const e=f.fromDosageToText(s);r(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(o.default,{language:"markup",children:(h=c,(0,t.decode)(h))})})]});var h}}}]);