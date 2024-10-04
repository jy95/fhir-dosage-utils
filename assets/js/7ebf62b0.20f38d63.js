"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[417],{75660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var s=n(74848),a=n(28453),i=n(85819);const o=JSON.parse('{"doseAndRate":[{"doseQuantity":{"value":3,"unit":"pills"}}]}');var d=n(11470),r=n(19365),u=n(816);const c={description:"doseQuantity",title:"\ud83d\udc8a doseQuantity"},l=void 0,p={id:"specs/doseQuantity/doseQuantity",title:"\ud83d\udc8a doseQuantity",description:"doseQuantity",source:"@site/docs/specs/doseQuantity/doseQuantity.mdx",sourceDirName:"specs/doseQuantity",slug:"/specs/doseQuantity/",permalink:"/fhir-dosage-utils/docs/specs/doseQuantity/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/doseQuantity/doseQuantity.mdx",tags:[],version:"current",frontMatter:{description:"doseQuantity",title:"\ud83d\udc8a doseQuantity"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc8a doseQuantity",permalink:"/fhir-dosage-utils/docs/category/-dosequantity"},next:{title:"\ud83d\udccf doseRange",permalink:"/fhir-dosage-utils/docs/category/-doserange"}},f={},g=[];function h(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.A,{children:[(0,s.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(u.A,{dosage:o})}),(0,s.jsx)(r.A,{value:"json",label:"Dosage",children:(0,s.jsx)(i.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Don't forget you can use ",(0,s.jsx)(t.a,{href:"/api/interface/Config",children:"fromFHIRQuantityUnitToString"})," option to fit your needs"]})})]})}function y(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},816:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(96540),a=n(76300),i=n(52376),o=n(85819),d=n(74848);function r(e){let{dosage:t,config:n}=e;const[r,u]=(0,s.useState)(""),[c,l]=(0,s.useState)(n?.language||"en"),[p,f]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await a.U.build({...n});f(e)}()}),[n]),(0,s.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(t);u(e)}}()}),[t,p]);return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsxs)("select",{value:c,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,d.jsx)("option",{value:"en",children:"English"}),(0,d.jsx)("option",{value:"fr",children:"French"}),(0,d.jsx)("option",{value:"nl",children:"Dutch"}),(0,d.jsx)("option",{value:"de",children:"German"})]}),(0,d.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(c);const e=p.fromDosageToText(t);u(e)}},children:"Confirm"})]}),(0,d.jsx)("div",{style:{marginTop:"10px"},children:(0,d.jsx)(o.default,{language:"markup",children:(g=r,(0,i.decode)(g))})})]});var g}}}]);