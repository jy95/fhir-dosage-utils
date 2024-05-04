"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2683],{5020:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=o(4848),s=o(8453),a=o(1812),i=o(9763),r=o(4865),d=o(9365),u=o(8264);const l={description:"Control the display order used by the algorithm (Useful when you want to turn on / off some specific rules for some reason)",title:"\ud83d\udd22 displayOrder"},c=void 0,m={id:"custom/displayOrder",title:"\ud83d\udd22 displayOrder",description:"Control the display order used by the algorithm (Useful when you want to turn on / off some specific rules for some reason)",source:"@site/docs/custom/displayOrder.mdx",sourceDirName:"custom",slug:"/custom/displayOrder",permalink:"/fhir-dosage-utils/docs/custom/displayOrder",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/displayOrder.mdx",tags:[],version:"current",frontMatter:{description:"Control the display order used by the algorithm (Useful when you want to turn on / off some specific rules for some reason)",title:"\ud83d\udd22 displayOrder"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf89 dateTimeFormatOptions",permalink:"/fhir-dosage-utils/docs/custom/dateTimeFormatOptions"},next:{title:"\u2796 displaySeparator",permalink:"/fhir-dosage-utils/docs/custom/displaySeparator"}},f={},p=[];function g(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(r.A,{children:[(0,n.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,n.jsx)(u.A,{dosages:i,config:{displayOrder:["method","doseQuantity","doseRange","rateRatio","rateQuantity","rateRange","durationDurationMax","frequencyFrequencyMaxPeriodPeriodMax","offsetWhen","dayOfWeek","timeOfDay","asNeeded","boundsDuration","boundsPeriod","boundsRange","countCountMax","event","code","maxDosePerPeriod","maxDosePerAdministration","maxDosePerLifetime","additionalInstruction","patientInstruction","route","site"]}})}),(0,n.jsx)(d.A,{value:"json",label:"Dosage",children:(0,n.jsx)(a.default,{language:"json",children:JSON.stringify(i,null,2)})}),(0,n.jsx)(d.A,{value:"config",label:"Configuration",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n    "displayOrder": ["method", "doseQuantity", "doseRange", "rateRatio", "rateQuantity", "rateRange", "durationDurationMax", "frequencyFrequencyMaxPeriodPeriodMax", "offsetWhen", "dayOfWeek", "timeOfDay", "asNeeded", "boundsDuration", "boundsPeriod", "boundsRange", "countCountMax", "event", "code", "maxDosePerPeriod", "maxDosePerAdministration", "maxDosePerLifetime", "additionalInstruction", "patientInstruction", "route", "site"]\n}\n'})})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},8264:(e,t,o)=>{o.d(t,{A:()=>d});var n=o(6540),s=o(6300),a=o(2376),i=o(1812),r=o(4848);function d(e){let{dosages:t,config:o,i18nConfig:d}=e;const[u,l]=(0,n.useState)(""),[c,m]=(0,n.useState)(o?.language||"en"),[f,p]=(0,n.useState)(null);(0,n.useEffect)((()=>{!async function(){const e=await s.A.build(o,d);p(e)}()}),[o]),(0,n.useEffect)((()=>{!async function(){if(f){const e=f.fromMultipleDosageToText(t);l(e)}}()}),[t,f]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:c,onChange:e=>m(e.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(f){await f.changeLanguage(c);const e=f.fromMultipleDosageToText(t);l(e)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(i.default,{language:"markup",children:(g=u,(0,a.decode)(g))})})]});var g}},9763:e=>{e.exports=JSON.parse('[{"sequence":1,"text":"Administer in 100cc NS as follows: First treatment infuse over 90 minutes, if no reaction then second treatment infuse over 60 minutes, if no reaction then on third and following treatments give over 30 minutes.","timing":{"event":["2023-01-18T00:00:00.000Z"]},"route":{"coding":[{"system":"http://flatiron.com/CodeSystem/Route","code":"IV"}]},"doseAndRate":[{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"ordered","display":"Ordered"}]},"doseQuantity":{"value":5,"unit":"mg/kg"}},{"type":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/dose-rate-type","code":"calculated","display":"Calculated"}]},"doseQuantity":{"value":340,"unit":"mg"}}]}]')}}]);