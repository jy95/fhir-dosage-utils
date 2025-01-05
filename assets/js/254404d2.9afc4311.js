"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7762],{6070:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"specs/boundsPeriod/start_and_end","title":"\u23f3 boundsPeriod (start & end)","description":"Start & end","source":"@site/docs/specs/boundsPeriod/start_and_end.mdx","sourceDirName":"specs/boundsPeriod","slug":"/specs/boundsPeriod/start_and_end","permalink":"/fhir-dosage-utils/docs/specs/boundsPeriod/start_and_end","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/boundsPeriod/start_and_end.mdx","tags":[],"version":"current","frontMatter":{"description":"Start & end","title":"\u23f3 boundsPeriod (start & end)"},"sidebar":"tutorialSidebar","previous":{"title":"\u23f3 boundsPeriod (end only)","permalink":"/fhir-dosage-utils/docs/specs/boundsPeriod/end_only"},"next":{"title":"\u23f3 boundsPeriod (start only)","permalink":"/fhir-dosage-utils/docs/specs/boundsPeriod/start_only"}}');var a=t(74848),d=t(28453),o=t(33231);const r=JSON.parse('{"timing":{"repeat":{"boundsPeriod":{"start":"2011-05-23","end":"2011-05-27"}}}}');var i=t(65537),l=t(79329),c=t(50375);const u={description:"Start & end",title:"\u23f3 boundsPeriod (start & end)"},p=void 0,f={},g=[];function h(e){return(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,a.jsx)(c.A,{dosage:r})}),(0,a.jsx)(l.A,{value:"json",label:"Dosage",children:(0,a.jsx)(o.default,{language:"json",children:JSON.stringify(r,null,2)})})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h()}},50375:(e,s,t)=>{t.d(s,{A:()=>i});var n=t(96540),a=t(15721),d=t(52376),o=t(33231),r=t(74848);function i(e){let{dosage:s,config:t}=e;const[i,l]=(0,n.useState)(""),[c,u]=(0,n.useState)(t?.language||"en"),[p,f]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await a.U.build({...t});f(e)}()}),[t]),(0,n.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(s);l(e)}}()}),[s,p]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(c);const e=p.fromDosageToText(s);l(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(o.default,{language:"markup",children:(g=i,(0,d.decode)(g))})})]});var g}}}]);