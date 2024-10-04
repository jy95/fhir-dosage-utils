"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8945],{34690:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var t=o(74848),s=o(28453),a=o(85819);const i=JSON.parse('{"timing":{"repeat":{"boundsRange":{"low":{"value":5,"unit":"days"}}}}}');var l=o(11470),r=o(19365),c=o(816);const d={description:"Low only",title:"\ud83d\udcd0 boundsDuration (Low only)"},u=void 0,g={id:"specs/boundsRange/low_only",title:"\ud83d\udcd0 boundsDuration (Low only)",description:"Low only",source:"@site/docs/specs/boundsRange/low_only.mdx",sourceDirName:"specs/boundsRange",slug:"/specs/boundsRange/low_only",permalink:"/fhir-dosage-utils/docs/specs/boundsRange/low_only",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/boundsRange/low_only.mdx",tags:[],version:"current",frontMatter:{description:"Low only",title:"\ud83d\udcd0 boundsDuration (Low only)"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd0 boundsDuration (Low & High)",permalink:"/fhir-dosage-utils/docs/specs/boundsRange/low_and_high"},next:{title:"\ud83d\udcbb code",permalink:"/fhir-dosage-utils/docs/category/-code"}},p={},h=[];function f(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.A,{children:[(0,t.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(c.A,{dosage:i})}),(0,t.jsx)(r.A,{value:"json",label:"Dosage",children:(0,t.jsx)(a.default,{language:"json",children:JSON.stringify(i,null,2)})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Don't forget you can use ",(0,t.jsx)(n.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},816:(e,n,o)=>{o.d(n,{A:()=>r});var t=o(96540),s=o(76300),a=o(52376),i=o(85819),l=o(74848);function r(e){let{dosage:n,config:o}=e;const[r,c]=(0,t.useState)(""),[d,u]=(0,t.useState)(o?.language||"en"),[g,p]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await s.U.build({...o});p(e)}()}),[o]),(0,t.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(n);c(e)}}()}),[n,g]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:d,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(n);c(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(i.default,{language:"markup",children:(h=r,(0,a.decode)(h))})})]});var h}}}]);