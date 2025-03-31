"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3253],{30011:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(96540),o=a(15721),r=a(88420),n=a(33231),i=a(74848);function l(e){let{dosages:t,config:a}=e;const[l,d]=(0,s.useState)(""),[c,u]=(0,s.useState)(a?.language||"en"),[p,g]=(0,s.useState)(null);(0,s.useEffect)((()=>{!async function(){const e=await o.U.build({...a});g(e)}()}),[a]),(0,s.useEffect)((()=>{!async function(){if(p){const e=p.fromMultipleDosageToText(t);d(e)}}()}),[t,p]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:c,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(c);const e=p.fromMultipleDosageToText(t);d(e)}},children:"Confirm"})]}),(0,i.jsx)("div",{style:{marginTop:"10px"},children:(0,i.jsx)(n.default,{language:"markup",children:(m=l,(0,r.D4)(m))})})]});var m}},41140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"custom/displaySeparator","title":"\u2796 displaySeparator","description":"Override separator between each part of \\"Dosage\\"","source":"@site/docs/custom/displaySeparator.mdx","sourceDirName":"custom","slug":"/custom/displaySeparator","permalink":"/fhir-dosage-utils/docs/custom/displaySeparator","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/displaySeparator.mdx","tags":[],"version":"current","frontMatter":{"description":"Override separator between each part of \\"Dosage\\"","title":"\u2796 displaySeparator"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd22 displayOrder","permalink":"/fhir-dosage-utils/docs/custom/displayOrder"},"next":{"title":"\ud83d\udcbb fromCodeableConceptToString","permalink":"/fhir-dosage-utils/docs/custom/fromCodeableConceptToString"}}');var o=a(74848),r=a(28453),n=a(33231),i=a(69763),l=a(65537),d=a(79329),c=a(30011);const u={description:'Override separator between each part of "Dosage"',title:"\u2796 displaySeparator"},p=void 0,g={},m=[];function f(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(l.A,{children:[(0,o.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(c.A,{dosages:i,config:{displaySeparator:" | "}})}),(0,o.jsx)(d.A,{value:"json",label:"Dosage",children:(0,o.jsx)(n.default,{language:"json",children:JSON.stringify(i,null,2)})}),(0,o.jsx)(d.A,{value:"config",label:"Configuration",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'{\n    displaySeparator: " | "\n}\n'})})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},69763:e=>{e.exports=JSON.parse('[{"sequence":1,"text":"Administer in 100cc NS as follows: First treatment infuse over 90 minutes, if no reaction then second treatment infuse over 60 minutes, if no reaction then on third and following treatments give over 30 minutes.","timing":{"event":["2023-01-18T00:00:00.000Z"]},"route":{"coding":[{"system":"http://flatiron.com/CodeSystem/Route","code":"IV"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":5,"unit":"mg/kg"}},{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"calculated","display":"Calculated"}]},"doseQuantity":{"value":340,"unit":"mg"}}]}]')}}]);