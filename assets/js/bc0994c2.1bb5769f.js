"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9643],{798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>g,toc:()=>m});var i=n(4848),s=n(8453),a=n(1812),o=n(3180),l=n(4865),r=n(9365),c=n(816);const u={description:"Single item",title:"\u274c Single item"},d=void 0,g={id:"specs/event/single_item",title:"\u274c Single item",description:"Single item",source:"@site/docs/specs/event/single_item.mdx",sourceDirName:"specs/event",slug:"/specs/event/single_item",permalink:"/fhir-dosage-utils/docs/specs/event/single_item",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/event/single_item.mdx",tags:[],version:"current",frontMatter:{description:"Single item",title:"\u274c Single item"},sidebar:"tutorialSidebar",previous:{title:"\u2795 Multiple items",permalink:"/fhir-dosage-utils/docs/specs/event/multiple_items"},next:{title:"\ud83d\udd01 frequencyFrequencyMax",permalink:"/fhir-dosage-utils/docs/category/-frequencyfrequencymax"}},p={},m=[];function f(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.A,{children:[(0,i.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,i.jsx)(c.A,{dosage:o})}),(0,i.jsx)(r.A,{value:"json",label:"Dosage",children:(0,i.jsx)(a.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Don't forget you can use ",(0,i.jsx)(t.a,{href:"/api/interface/Config",children:"dateTimeFormatOptions"})," option to fit your needs"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},816:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(6540),s=n(6300),a=n(2376),o=n(1812),l=n(4848);function r(e){let{dosage:t,config:n}=e;const[r,c]=(0,i.useState)(""),[u,d]=(0,i.useState)(n?.language||"en"),[g,p]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){const e=await s.U.build({...n});p(e)}()}),[n]),(0,i.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(t);c(e)}}()}),[t,g]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsxs)("select",{value:u,onChange:e=>d(e.target.value),style:{marginRight:"10px"},children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"fr",children:"French"}),(0,l.jsx)("option",{value:"nl",children:"Dutch"}),(0,l.jsx)("option",{value:"de",children:"German"})]}),(0,l.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(u);const e=g.fromDosageToText(t);c(e)}},children:"Confirm"})]}),(0,l.jsx)("div",{style:{marginTop:"10px"},children:(0,l.jsx)(o.default,{language:"markup",children:(m=r,(0,a.decode)(m))})})]});var m}},3180:e=>{e.exports=JSON.parse('{"timing":{"event":["2024-01-01"]}}')}}]);