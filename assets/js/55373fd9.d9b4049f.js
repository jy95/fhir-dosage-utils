"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5461],{93505:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"specs/asNeeded/asNeededBoolean","title":"\u2705 asNeededBoolean","description":"asNeededBoolean","source":"@site/docs/specs/asNeeded/asNeededBoolean.mdx","sourceDirName":"specs/asNeeded","slug":"/specs/asNeeded/asNeededBoolean","permalink":"/fhir-dosage-utils/docs/specs/asNeeded/asNeededBoolean","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/asNeeded/asNeededBoolean.mdx","tags":[],"version":"current","frontMatter":{"description":"asNeededBoolean","title":"\u2705 asNeededBoolean"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udccc asNeeded","permalink":"/fhir-dosage-utils/docs/specs/asNeeded/"},"next":{"title":"\ud83d\udccc asNeededCodeableConcept","permalink":"/fhir-dosage-utils/docs/specs/asNeeded/asNeededCodeableConcept"}}');var d=a(74848),n=a(28453),o=a(85819);const l=JSON.parse('{"asNeededBoolean":true}');var i=a(11470),c=a(19365),r=a(816);const u={description:"asNeededBoolean",title:"\u2705 asNeededBoolean"},p=void 0,f={},h=[];function g(e){return(0,d.jsxs)(i.A,{children:[(0,d.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,d.jsx)(r.A,{dosage:l})}),(0,d.jsx)(c.A,{value:"json",label:"Dosage",children:(0,d.jsx)(o.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(g,{...e})}):g()}},816:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(96540),d=a(76300),n=a(52376),o=a(85819),l=a(74848);function i(e){let{dosage:s,config:a}=e;const[i,c]=(0,t.useState)(""),[r,u]=(0,t.useState)(a?.language||"en"),[p,f]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await d.U.build({...a});f(e)}()}),[a]),(0,t.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(s);c(e)}}()}),[s,p]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:r,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(r);const e=p.fromDosageToText(s);c(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(o.default,{language:"markup",children:(h=i,(0,n.decode)(h))})})]});var h}}}]);