"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4088],{95622:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>m,contentTitle:()=>x,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"specs/maxDosePerPeriod/r4","title":"\u23f3 maxDosePerPeriod (R4)","description":"maxDosePerPeriod (R4)","source":"@site/docs/specs/maxDosePerPeriod/r4.mdx","sourceDirName":"specs/maxDosePerPeriod","slug":"/specs/maxDosePerPeriod/r4","permalink":"/fhir-dosage-utils/docs/specs/maxDosePerPeriod/r4","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/maxDosePerPeriod/r4.mdx","tags":[],"version":"current","frontMatter":{"description":"maxDosePerPeriod (R4)","title":"\u23f3 maxDosePerPeriod (R4)"},"sidebar":"tutorialSidebar","previous":{"title":"\u23f3 maxDosePerPeriod","permalink":"/fhir-dosage-utils/docs/category/-maxdoseperperiod"},"next":{"title":"\u23f3 maxDosePerPeriod (R5)","permalink":"/fhir-dosage-utils/docs/specs/maxDosePerPeriod/r5"}}');var t=o(74848),a=o(28453),n=o(33231);const i=JSON.parse('{"maxDosePerPeriod":{"numerator":{"value":3,"unit":"pills"},"denominator":{"value":5,"unit":"hours"}}}');var d=o(65537),c=o(79329),l=o(50375);const u={description:"maxDosePerPeriod (R4)",title:"\u23f3 maxDosePerPeriod (R4)"},x=void 0,m={},p=[];function f(e){const s={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.A,{children:[(0,t.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(l.A,{dosage:i})}),(0,t.jsx)(c.A,{value:"json",label:"Dosage",children:(0,t.jsx)(n.default,{language:"json",children:JSON.stringify(i,null,2)})})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Don't forget you can use ",(0,t.jsx)(s.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},50375:(e,s,o)=>{o.d(s,{A:()=>d});var r=o(96540),t=o(15721),a=o(52376),n=o(33231),i=o(74848);function d(e){let{dosage:s,config:o}=e;const[d,c]=(0,r.useState)(""),[l,u]=(0,r.useState)(o?.language||"en"),[x,m]=(0,r.useState)(null);(0,r.useEffect)((()=>{!async function(){const e=await t.U.build({...o});m(e)}()}),[o]),(0,r.useEffect)((()=>{!async function(){if(x){const e=x.fromDosageToText(s);c(e)}}()}),[s,x]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:l,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(x){await x.changeLanguage(l);const e=x.fromDosageToText(s);c(e)}},children:"Confirm"})]}),(0,i.jsx)("div",{style:{marginTop:"10px"},children:(0,i.jsx)(n.default,{language:"markup",children:(p=d,(0,a.decode)(p))})})]});var p}}}]);