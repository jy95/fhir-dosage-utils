"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2485],{4539:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var i=e(4848),o=e(8453),a=e(1812);const s=JSON.parse('{"doseAndRate":[{"doseQuantity":{"value":"25","system":"http://unitsofmeasure.org","code":"ug"}}]}');var r=e(4865),u=e(9365),l=e(816);const c={description:'Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")',title:"\ud83d\udccf fromFHIRQuantityUnitToString"},d=void 0,g={id:"custom/fromFHIRQuantityUnitToString",title:"\ud83d\udccf fromFHIRQuantityUnitToString",description:'Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")',source:"@site/docs/custom/fromFHIRQuantityUnitToString.mdx",sourceDirName:"custom",slug:"/custom/fromFHIRQuantityUnitToString",permalink:"/fhir-dosage-utils/docs/custom/fromFHIRQuantityUnitToString",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/custom/fromFHIRQuantityUnitToString.mdx",tags:[],version:"current",frontMatter:{description:'Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")',title:"\ud83d\udccf fromFHIRQuantityUnitToString"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0c fromExtensionsToString",permalink:"/fhir-dosage-utils/docs/custom/fromExtensionsToString"},next:{title:"\ud83c\udf10 i18nConfig",permalink:"/fhir-dosage-utils/docs/custom/i18nConfig"}},m={},f=[];function h(t){const n={code:"code",pre:"pre",...(0,o.R)(),...t.components};return(0,i.jsxs)(r.A,{children:[(0,i.jsx)(u.A,{value:"text",label:"Human readable text",default:!0,children:(0,i.jsx)(l.A,{dosage:s,config:{fromFHIRQuantityUnitToString:({quantity:t,language:n})=>`[${n} translation of "${t.code||t.unit}" (${t.system||""})]`}})}),(0,i.jsx)(u.A,{value:"json",label:"Dosage",children:(0,i.jsx)(a.default,{language:"json",children:JSON.stringify(s,null,2)})}),(0,i.jsx)(u.A,{value:"config",label:"Configuration",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n    fromFHIRQuantityUnitToString: ({ quantity, language }) => {\n        let unit = quantity.code || quantity.unit;\n        let system = quantity.system || "";\n\n        return `[${language} translation of "${unit}" (${system})]`;\n    };\n}\n'})})})]})}function x(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},816:(t,n,e)=>{e.d(n,{A:()=>u});var i=e(6540),o=e(6300),a=e(2376),s=e(1812),r=e(4848);function u(t){let{dosage:n,config:e,i18nConfig:u}=t;const[l,c]=(0,i.useState)(""),[d,g]=(0,i.useState)(e?.language||"en"),[m,f]=(0,i.useState)(null);(0,i.useEffect)((()=>{!async function(){const t=await o.A.build(e,u);f(t)}()}),[e]),(0,i.useEffect)((()=>{!async function(){if(m){const t=m.fromDosageToText(n);c(t)}}()}),[n,m]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsxs)("select",{value:d,onChange:t=>g(t.target.value),style:{marginRight:"10px"},children:[(0,r.jsx)("option",{value:"en",children:"English"}),(0,r.jsx)("option",{value:"fr",children:"French"}),(0,r.jsx)("option",{value:"nl",children:"Dutch"}),(0,r.jsx)("option",{value:"de",children:"German"})]}),(0,r.jsx)("button",{onClick:async()=>{if(m){await m.changeLanguage(d);const t=m.fromDosageToText(n);c(t)}},children:"Confirm"})]}),(0,r.jsx)("div",{style:{marginTop:"10px"},children:(0,r.jsx)(s.default,{language:"markup",children:(h=l,(0,a.decode)(h))})})]});var h}}}]);