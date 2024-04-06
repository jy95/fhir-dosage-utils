"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4892],{5614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var o=n(4848),s=n(8453),a=n(1812),i=n(5286),r=n(4865),d=n(9365),c=n(816);const l={description:"method",title:"\ud83d\udee0\ufe0f method"},u=void 0,h={id:"specs/method/method",title:"\ud83d\udee0\ufe0f method",description:"method",source:"@site/docs/specs/method/method.mdx",sourceDirName:"specs/method",slug:"/specs/method/",permalink:"/fhir-dosage-utils/docs/specs/method/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/specs/method/method.mdx",tags:[],version:"current",frontMatter:{description:"method",title:"\ud83d\udee0\ufe0f method"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0\ufe0f method",permalink:"/fhir-dosage-utils/docs/category/\ufe0f-method"},next:{title:"\ud83d\udd52 offset when",permalink:"/fhir-dosage-utils/docs/category/-offset-when"}},m={},p=[];function f(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.A,{children:[(0,o.jsx)(d.A,{value:"text",label:"Human readable text",default:!0,children:(0,o.jsx)(c.A,{dosage:i})}),(0,o.jsx)(d.A,{value:"json",label:"Dosage",children:(0,o.jsx)(a.default,{language:"json",children:JSON.stringify(i,null,2)})})]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Don't forget you can use ",(0,o.jsx)(t.a,{href:"/api/interface/Params",children:"fromCodeableConceptToString"})," option to fit your needs"]})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},816:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(6540),s=n(6300),a=n(1812),i=n(4848);function r(e){let{dosage:t,config:n}=e;const[r,d]=(0,o.useState)(""),[c,l]=(0,o.useState)(n?.language||"en"),[u,h]=(0,o.useState)(null);(0,o.useEffect)((()=>{!async function(){const e=await s.A.build(n);h(e)}()}),[n]),(0,o.useEffect)((()=>{!async function(){if(u){const e=u.fromDosageToText(t);d(e)}}()}),[t,u]);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsxs)("select",{value:c,onChange:e=>l(e.target.value),style:{marginRight:"10px"},children:[(0,i.jsx)("option",{value:"en",children:"English"}),(0,i.jsx)("option",{value:"fr",children:"French"}),(0,i.jsx)("option",{value:"nl",children:"Dutch"}),(0,i.jsx)("option",{value:"de",children:"German"})]}),(0,i.jsx)("button",{onClick:async()=>{if(u){await u.changeLanguage(c);const e=u.fromDosageToText(t);d(e)}},children:"Confirm"})]}),(0,i.jsx)("p",{style:{marginTop:"10px"},children:(0,i.jsx)(a.default,{language:"markup",children:(m=r,m.replace(/&quot;/g,'"').replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)})).replace(/&#x([0-9A-Fa-f]+);/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))})})]});var m}},5286:e=>{e.exports=JSON.parse('{"method":{"coding":[{"system":"http://hl7.org/fhir/ValueSet/administration-method-codes","code":"738996007","display":"Spray"}]}}')}}]);