"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2188],{2809:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var s=i(4848),n=i(8453),a=i(1812);const l=JSON.parse('{"timing":{"repeat":{"timeOfDay":["15:00:00"]}}}');var o=i(4865),r=i(9365),c=i(816);const u={description:"Single item",title:"\u274c Single item"},d=void 0,m={id:"specs/timeOfDay/single_item",title:"\u274c Single item",description:"Single item",source:"@site/docs/specs/timeOfDay/single_item.mdx",sourceDirName:"specs/timeOfDay",slug:"/specs/timeOfDay/single_item",permalink:"/fhir-dosage-utils/docs/specs/timeOfDay/single_item",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/timeOfDay/single_item.mdx",tags:[],version:"current",frontMatter:{description:"Single item",title:"\u274c Single item"},sidebar:"tutorialSidebar",previous:{title:"\u2795 Multiple items",permalink:"/fhir-dosage-utils/docs/specs/timeOfDay/multiple_items"},next:{title:"\ud83d\udee0\ufe0f Customizations",permalink:"/fhir-dosage-utils/docs/demo/custom"}},g={},f=[];function p(e){return(0,s.jsxs)(o.A,{children:[(0,s.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,s.jsx)(c.A,{dosage:l})}),(0,s.jsx)(r.A,{value:"json",label:"Dosage",children:(0,s.jsx)(a.default,{language:"json",children:JSON.stringify(l,null,2)})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},816:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(6540),n=i(6300),a=i(2376),l=i(1812),o=i(4848);function r(e){let{dosage:t,config:i,i18nConfig:r}=e;const[c,u]=(0,s.useState)(""),[d,m]=(0,s.useState)(i?.language||"en"),[g,f]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await n.A.build(i,r);f(e)}()}),[i]),(0,s.useEffect)((()=>{!async function(){if(g){const e=g.fromDosageToText(t);u(e)}}()}),[t,g]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:d,onChange:e=>m(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(g){await g.changeLanguage(d);const e=g.fromDosageToText(t);u(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(l.default,{language:"markup",children:(p=c,(0,a.decode)(p))})})]});var p}}}]);