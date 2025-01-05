"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8937],{20225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>h,frontMatter:()=>u,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"specs/additionalInstruction/single_item","title":"\u274c Single item","description":"Single item","source":"@site/docs/specs/additionalInstruction/single_item.mdx","sourceDirName":"specs/additionalInstruction","slug":"/specs/additionalInstruction/single_item","permalink":"/fhir-dosage-utils/docs/specs/additionalInstruction/single_item","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/additionalInstruction/single_item.mdx","tags":[],"version":"current","frontMatter":{"description":"Single item","title":"\u274c Single item"},"sidebar":"tutorialSidebar","previous":{"title":"\u2795 Multiple items","permalink":"/fhir-dosage-utils/docs/specs/additionalInstruction/multiple_items"},"next":{"title":"\u2753 asNeeded","permalink":"/fhir-dosage-utils/docs/category/-asneeded"}}');var s=n(74848),a=n(28453),o=n(33231);const l=JSON.parse('{"additionalInstruction":[{"text":"Instruction 1"}]}');var r=n(65537),c=n(79329),d=n(50375);const u={description:"Single item",title:"\u274c Single item"},g=void 0,p={},m=[];function f(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.A,{children:[(0,s.jsx)(c.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(d.A,{dosage:l})}),(0,s.jsx)(c.A,{value:"json",label:"Dosage",children:(0,s.jsx)(o.default,{language:"json",children:JSON.stringify(l,null,2)})})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Don't forget you can use ",(0,s.jsx)(t.a,{href:"/api/interface/Config",children:"fromCodeableConceptToString"})," option to fit your needs"]})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},50375:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540),s=n(15721),a=n(52376),o=n(33231),l=n(74848);function r(e){let{dosage:t,config:n}=e;const[r,c]=(0,i.useState)(""),[d,u]=(0,i.useState)(n?.language||"en"),[g,p]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){const e=await s.U.build({...n});p(e)}()}),[n]),(0,i.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(t);c(e)}}()}),[t,g]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(o.default,{language:"markup",children:(m=r,(0,a.decode)(m))})})]});var m}}}]);