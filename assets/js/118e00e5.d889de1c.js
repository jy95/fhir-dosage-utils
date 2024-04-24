"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2914],{6977:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>C,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var t=s(4848),n=s(8453),d=s(1812);const o=JSON.parse('{"asNeededCodeableConcept":{"text":"when feeling bad"}}');var i=s(4865),r=s(9365),c=s(816);const l={description:"asNeededCodeableConcept",title:"\ud83d\udccc asNeededCodeableConcept"},u=void 0,p={id:"specs/asNeeded/asNeededCodeableConcept",title:"\ud83d\udccc asNeededCodeableConcept",description:"asNeededCodeableConcept",source:"@site/docs/specs/asNeeded/asNeededCodeableConcept.mdx",sourceDirName:"specs/asNeeded",slug:"/specs/asNeeded/asNeededCodeableConcept",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededCodeableConcept",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/asNeeded/asNeededCodeableConcept.mdx",tags:[],version:"current",frontMatter:{description:"asNeededCodeableConcept",title:"\ud83d\udccc asNeededCodeableConcept"},sidebar:"tutorialSidebar",previous:{title:"\u2705 asNeededBoolean",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededBoolean"},next:{title:"\ud83e\uddec asNeededFor",permalink:"/fhir-dosage-utils/docs/specs/asNeeded/asNeededFor"}},f={},g=[];function h(e){const a={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.A,{children:[(0,t.jsx)(r.A,{value:"text",label:"Human readable text",default:!0,children:(0,t.jsx)(c.A,{dosage:o})}),(0,t.jsx)(r.A,{value:"json",label:"Dosage",children:(0,t.jsx)(d.default,{language:"json",children:JSON.stringify(o,null,2)})})]}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:["Don't forget you can use ",(0,t.jsx)(a.a,{href:"/api/interface/Params",children:"fromCodeableConceptToString"})," option to fit your needs"]})})]})}function C(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},816:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(6540),n=s(6300),d=s(1812),o=s(4848);function i(e){let{dosage:a,config:s,i18nConfig:i}=e;const[r,c]=(0,t.useState)(""),[l,u]=(0,t.useState)(s?.language||"en"),[p,f]=(0,t.useState)(null);(0,t.useEffect)((()=>{!async function(){const e=await n.A.build(s,i);f(e)}()}),[s]),(0,t.useEffect)((()=>{!async function(){if(p){const e=p.fromDosageToText(a);c(e)}}()}),[a,p]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsxs)("select",{value:l,onChange:e=>u(e.target.value),style:{marginRight:"10px"},children:[(0,o.jsx)("option",{value:"en",children:"English"}),(0,o.jsx)("option",{value:"fr",children:"French"}),(0,o.jsx)("option",{value:"nl",children:"Dutch"}),(0,o.jsx)("option",{value:"de",children:"German"})]}),(0,o.jsx)("button",{onClick:async()=>{if(p){await p.changeLanguage(l);const e=p.fromDosageToText(a);c(e)}},children:"Confirm"})]}),(0,o.jsx)("div",{style:{marginTop:"10px"},children:(0,o.jsx)(d.default,{language:"markup",children:(g=r,g.replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#(\d+);/g,(function(e,a){return String.fromCharCode(a)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,a){return String.fromCharCode(parseInt(a,16))})))})})]});var g}}}]);