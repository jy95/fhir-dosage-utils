"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8035],{50375:(t,n,e)=>{e.d(n,{A:()=>i});var a=e(96540),o=e(15721),s=e(52376),c=e(33231),u=e(74848);function i(t){let{dosage:n,config:e}=t;const[i,r]=(0,a.useState)(""),[l,d]=(0,a.useState)(e?.language||"en"),[x,f]=(0,a.useState)(null);(0,a.useEffect)((()=>{!async function(){const t=await o.U.build({...e});f(t)}()}),[e]),(0,a.useEffect)((()=>{!async function(){if(x){const t=x.fromDosageToText(n);r(t)}}()}),[n,x]);return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsxs)("select",{value:l,onChange:t=>d(t.target.value),style:{marginRight:"10px"},children:[(0,u.jsx)("option",{value:"en",children:"English"}),(0,u.jsx)("option",{value:"fr",children:"French"}),(0,u.jsx)("option",{value:"nl",children:"Dutch"}),(0,u.jsx)("option",{value:"de",children:"German"})]}),(0,u.jsx)("button",{onClick:async()=>{if(x){await x.changeLanguage(l);const t=x.fromDosageToText(n);r(t)}},children:"Confirm"})]}),(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(c.default,{language:"markup",children:(p=i,(0,s.decode)(p))})})]});var p}},81537:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>f,contentTitle:()=>x,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"specs/countCountMax/count_and_countMax","title":"\ud83d\udd22 count and countMax","description":"count and countMax","source":"@site/docs/specs/countCountMax/count_and_countMax.mdx","sourceDirName":"specs/countCountMax","slug":"/specs/countCountMax/count_and_countMax","permalink":"/fhir-dosage-utils/docs/specs/countCountMax/count_and_countMax","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/countCountMax/count_and_countMax.mdx","tags":[],"version":"current","frontMatter":{"description":"count and countMax","title":"\ud83d\udd22 count and countMax"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd22 countMax (only)","permalink":"/fhir-dosage-utils/docs/specs/countCountMax/countMax_only"},"next":{"title":"\ud83d\udcc5 dayOfWeek","permalink":"/fhir-dosage-utils/docs/category/-dayofweek"}}');var o=e(74848),s=e(28453),c=e(33231);const u=JSON.parse('{"timing":{"repeat":{"count":1,"countMax":3}}}');var i=e(65537),r=e(79329),l=e(50375);const d={description:"count and countMax",title:"\ud83d\udd22 count and countMax"},x=void 0,f={},p=[];function g(t){return(0,o.jsxs)(i.A,{children:[(0,o.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(l.A,{dosage:u})}),(0,o.jsx)(r.A,{value:"json",label:"Dosage",children:(0,o.jsx)(c.default,{language:"json",children:JSON.stringify(u,null,2)})})]})}function h(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(g,{...t})}):g()}}}]);