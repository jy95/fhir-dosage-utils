"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3709],{27693:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>f});var n=i(74848),s=i(28453),a=i(85819);const o=JSON.parse('{"additionalInstruction":[{"text":"Instruction 1"},{"text":"Instruction 2"}]}');var l=i(11470),r=i(19365),c=i(816);const d={description:"Multiple items",title:"\u2795 Multiple items"},u=void 0,p={id:"specs/additionalInstruction/multiple_items",title:"\u2795 Multiple items",description:"Multiple items",source:"@site/docs/specs/additionalInstruction/multiple_items.mdx",sourceDirName:"specs/additionalInstruction",slug:"/specs/additionalInstruction/multiple_items",permalink:"/fhir-dosage-utils/docs/specs/additionalInstruction/multiple_items",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/additionalInstruction/multiple_items.mdx",tags:[],version:"current",frontMatter:{description:"Multiple items",title:"\u2795 Multiple items"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd additionalInstruction",permalink:"/fhir-dosage-utils/docs/category/-additionalinstruction"},next:{title:"\u274c Single item",permalink:"/fhir-dosage-utils/docs/specs/additionalInstruction/single_item"}},m={},f=[];function g(t){const e={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.A,{children:[(0,n.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(c.A,{dosage:o})}),(0,n.jsx)(r.A,{value:"json",label:"Dosage",children:(0,n.jsx)(a.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["Don't forget you can use ",(0,n.jsx)(e.a,{href:"/api/interface/Config",children:"fromCodeableConceptToString"})," option to fit your needs"]})})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(g,{...t})}):g(t)}},816:(t,e,i)=>{i.d(e,{A:()=>r});var n=i(96540),s=i(76300),a=i(52376),o=i(85819),l=i(74848);function r(t){let{dosage:e,config:i}=t;const[r,c]=(0,n.useState)(""),[d,u]=(0,n.useState)(i?.language||"en"),[p,m]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const t=await s.U.build({...i});m(t)}()}),[i]),(0,n.useEffect)((()=>{!async function(){if(p){const t=p.fromDosageToText(e);c(t)}}()}),[e,p]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:d,onChange:t=>u(t.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(d);const t=p.fromDosageToText(e);c(t)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(o.default,{language:"markup",children:(f=r,(0,a.decode)(f))})})]});var f}}}]);