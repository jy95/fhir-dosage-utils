"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3253],{4861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var o=a(4848),r=a(8453),s=a(1812),n=a(9763),i=a(4865),l=a(9365),d=a(8264);const c={description:'Override separator between each part of "Dosage"',title:"\u2796 displaySeparator"},u=void 0,p={id:"custom/displaySeparator",title:"\u2796 displaySeparator",description:'Override separator between each part of "Dosage"',source:"@site/docs/custom/displaySeparator.mdx",sourceDirName:"custom",slug:"/custom/displaySeparator",permalink:"/fhir-dosage-utils/docs/custom/displaySeparator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/displaySeparator.mdx",tags:[],version:"current",frontMatter:{description:'Override separator between each part of "Dosage"',title:"\u2796 displaySeparator"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd22 displayOrder",permalink:"/fhir-dosage-utils/docs/custom/displayOrder"},next:{title:"\ud83d\udcbb fromCodeableConceptToString",permalink:"/fhir-dosage-utils/docs/custom/fromCodeableConceptToString"}},g={},m=[];function f(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(i.A,{children:[(0,o.jsx)(l.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(d.A,{dosages:n,config:{displaySeparator:" | "}})}),(0,o.jsx)(l.A,{value:"json",label:"Dosage",children:(0,o.jsx)(s.default,{language:"json",children:JSON.stringify(n,null,2)})}),(0,o.jsx)(l.A,{value:"config",label:"Configuration",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'{\n    displaySeparator: " | "\n}\n'})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},8264:(e,t,a)=>{a.d(t,{A:()=>i});var o=a(6540),r=a(6300),s=a(1812),n=a(4848);function i(e){let{dosages:t,config:a,i18nConfig:i}=e;const[l,d]=(0,o.useState)(""),[c,u]=(0,o.useState)(a?.language||"en"),[p,g]=(0,o.useState)(null);(0,o.useEffect)((()=>{!async function(){const e=await r.A.build(a,i);g(e)}()}),[a]),(0,o.useEffect)((()=>{!async function(){if(p){const e=p.fromMultipleDosageToText(t);d(e)}}()}),[t,p]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,n.jsx)("option",{value:"en",children:"English"}),(0,n.jsx)("option",{value:"fr",children:"French"}),(0,n.jsx)("option",{value:"nl",children:"Dutch"}),(0,n.jsx)("option",{value:"de",children:"German"})]}),(0,n.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(c);const e=p.fromMultipleDosageToText(t);d(e)}},children:"Confirm"})]}),(0,n.jsx)("div",{style:{marginTop:"10px"},children:(0,n.jsx)(s.default,{language:"markup",children:(m=l,m.replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var m}},9763:e=>{e.exports=JSON.parse('[{"sequence":1,"text":"Administer in 100cc NS as follows: First treatment infuse over 90 minutes, if no reaction then second treatment infuse over 60 minutes, if no reaction then on third and following treatments give over 30 minutes.","timing":{"event":["2023-01-18T00:00:00.000Z"]},"route":{"coding":[{"system":"http://flatiron.com/CodeSystem/Route","code":"IV"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":5,"unit":"mg/kg"}},{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"calculated","display":"Calculated"}]},"doseQuantity":{"value":340,"unit":"mg"}}]}]')}}]);