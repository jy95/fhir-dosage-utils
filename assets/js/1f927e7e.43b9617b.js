"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4471],{6558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>f,metadata:()=>u,toc:()=>g});var s=n(4848),a=n(8453),o=n(1812);const i=JSON.parse('{"timing":{"repeat":{"offset":15,"when":["MORN"]}}}');var r=n(4865),c=n(9365),l=n(816);const f={description:"offset and when together",title:"\ud83d\udd52 offset and when"},d=void 0,u={id:"specs/offsetWhen/when_and_offset",title:"\ud83d\udd52 offset and when",description:"offset and when together",source:"@site/docs/specs/offsetWhen/when_and_offset.mdx",sourceDirName:"specs/offsetWhen",slug:"/specs/offsetWhen/when_and_offset",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when_and_offset",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/offsetWhen/when_and_offset.mdx",tags:[],version:"current",frontMatter:{description:"offset and when together",title:"\ud83d\udd52 offset and when"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd52 When (Single item)",permalink:"/fhir-dosage-utils/docs/specs/offsetWhen/when/single_item"},next:{title:"\ud83d\udccb patientInstruction",permalink:"/fhir-dosage-utils/docs/category/-patientinstruction"}},h={},g=[];function p(e){return(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(l.A,{dosage:i})}),(0,s.jsx)(c.A,{value:"json",label:"Dosage",children:(0,s.jsx)(o.default,{language:"json",children:JSON.stringify(i,null,2)})})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},816:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(6540),a=n(6300),o=n(2376),i=n(1812),r=n(4848);function c(e){let{dosage:t,config:n,i18nConfig:c}=e;const[l,f]=(0,s.useState)(""),[d,u]=(0,s.useState)(n?.language||"en"),[h,g]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await a.A.build(n,c);g(e)}()}),[n]),(0,s.useEffect)((()=>{!async function(){if(h){const e=h.fromDosageToText(t);f(e)}}()}),[t,h]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(h){await h.changeLanguage(d);const e=h.fromDosageToText(t);f(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(p=l,(0,o.decode)(p))})})]});var p}}}]);