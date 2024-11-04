"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3140],{23884:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>x,frontMatter:()=>m,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"custom/dateTimeFormatOptions","title":"\ud83c\udf89 dateTimeFormatOptions","description":"To control the formatting of dateTime objects","source":"@site/docs/custom/dateTimeFormatOptions.mdx","sourceDirName":"custom","slug":"/custom/dateTimeFormatOptions","permalink":"/fhir-dosage-utils/docs/custom/dateTimeFormatOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/dateTimeFormatOptions.mdx","tags":[],"version":"current","frontMatter":{"description":"To control the formatting of dateTime objects","title":"\ud83c\udf89 dateTimeFormatOptions"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udee0\ufe0f Customizations","permalink":"/fhir-dosage-utils/docs/demo/custom"},"next":{"title":"\ud83d\udd22 displayOrder","permalink":"/fhir-dosage-utils/docs/custom/displayOrder"}}');var s=o(74848),n=o(28453),i=o(85819),r=o(13180);const l=JSON.parse('{"dateTimeFormatOptions":{"weekday":"long","year":"numeric","month":"long","day":"numeric"}}');var c=o(11470),d=o(19365),u=o(816);const m={description:"To control the formatting of dateTime objects",title:"\ud83c\udf89 dateTimeFormatOptions"},f=void 0,g={},p=[];function h(e){return(0,s.jsxs)(c.A,{children:[(0,s.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(u.A,{dosage:r,config:l})}),(0,s.jsx)(d.A,{value:"json",label:"Dosage",children:(0,s.jsx)(i.default,{language:"json",children:JSON.stringify(r,null,2)})}),(0,s.jsx)(d.A,{value:"config",label:"Configuration",children:(0,s.jsx)(i.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},816:(e,t,o)=>{o.d(t,{A:()=>l});var a=o(96540),s=o(76300),n=o(52376),i=o(85819),r=o(74848);function l(e){let{dosage:t,config:o}=e;const[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(o?.language||"en"),[m,f]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const e=await s.U.build({...o});f(e)}()}),[o]),(0,a.useEffect)((()=>{!async function(){if(m){const e=m.fromDosageToText(t);c(e)}}()}),[t,m]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(d);const e=m.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(g=l,(0,n.decode)(g))})})]});var g}},13180:e=>{e.exports=JSON.parse('{"timing":{"event":["2024-01-01"]}}')}}]);