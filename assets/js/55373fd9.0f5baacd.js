"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5461],{12620:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>u,default:()=>x,frontMatter:()=>r,metadata:()=>p,toc:()=>h});var d=a(74848),t=a(28453),n=a(85819);const o=JSON.parse('{"asNeededBoolean":true}');var l=a(11470),i=a(19365),c=a(816);const r={description:"asNeededBoolean",title:"\u2705 asNeededBoolean"},u=void 0,p={id:"specs/asNeeded/asNeededBoolean",title:"\u2705 asNeededBoolean",description:"asNeededBoolean",source:"@site/docs/specs/asNeeded/asNeededBoolean.mdx",sourceDirName:"specs/asNeeded",slug:"/specs/asNeeded/asNeededBoolean",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededBoolean",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/asNeeded/asNeededBoolean.mdx",tags:[],version:"current",frontMatter:{description:"asNeededBoolean",title:"\u2705 asNeededBoolean"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccc asNeeded",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/"},next:{title:"\ud83d\udccc asNeededCodeableConcept",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededCodeableConcept"}},f={},h=[];function g(e){return(0,d.jsxs)(l.A,{children:[(0,d.jsx)(i.A,{value:"text",label:"Human readable text",default:!0,children:(0,d.jsx)(c.A,{dosage:o})}),(0,d.jsx)(i.A,{value:"json",label:"Dosage",children:(0,d.jsx)(n.default,{language:"json",children:JSON.stringify(o,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(g,{...e})}):g()}},816:(e,s,a)=>{a.d(s,{A:()=>i});var d=a(96540),t=a(76300),n=a(52376),o=a(85819),l=a(74848);function i(e){let{dosage:s,config:a}=e;const[i,c]=(0,d.useState)(""),[r,u]=(0,d.useState)(a?.language||"en"),[p,f]=(0,d.useState)(null);(0,d.useEffect)((()=>{!async function(){const e=await t.U.build({...a});f(e)}()}),[a]),(0,d.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(s);c(e)}}()}),[s,p]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:r,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(r);const e=p.fromDosageToText(s);c(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(o.default,{language:"markup",children:(h=i,(0,n.decode)(h))})})]});var h}}}]);