"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1110],{5160:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=t(4848),a=t(8453),i=t(4865),o=t(9365);const r={title:"\u26a1 Quick Start",description:"Getting started with fhir-dosage-utils"},l=void 0,d={id:"quick-start",title:"\u26a1 Quick Start",description:"Getting started with fhir-dosage-utils",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/fhir-dosage-utils/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start.mdx",tags:[],version:"current",frontMatter:{title:"\u26a1 Quick Start",description:"Getting started with fhir-dosage-utils"},sidebar:"tutorialSidebar",next:{title:"\ud83d\udca1 Demos",permalink:"/fhir-dosage-utils/docs/demo"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Output examples",id:"output-examples",level:2}];function g(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Getting started with ",(0,n.jsx)(s.code,{children:"fhir-dosage-utils"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(s.p,{children:["Install ",(0,n.jsx)(s.code,{children:"fhir-dosage-utils"})," using your desired package manager :"]}),"\n",(0,n.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,n.jsx)(o.A,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install fhir-dosage-utils\n"})})}),(0,n.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add fhir-dosage-utils\n"})})}),(0,n.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add fhir-dosage-utils\n"})})})]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="main.js"',children:'import FhirDosageUtils from "fhir-dosage-utils";\n\n// See https://jy95.github.io/fhir-dosage-utils/api/interface/Params for more info about config\nconst config = {\n  language: "en",\n};\n\n// A FHIR Dosage example\nconst dosage = {\n  timing: {\n    repeat: {\n      frequency: 1,\n      period: 8,\n      periodUnit: "h",\n    },\n  },\n};\n\n// Prepare utility class\nlet dosageUtils = await FhirDosageUtils.build(config);\n\n// 1. You can turn dosage(s) to text\n// display "1 time every 8 hours"\nconsole.log(dosageUtils.fromDosageToText(dosage));\nconsole.log(dosageUtils.fromMultipleDosageToText([dosage]));\n\n// 2. You can extract part(s) of dosage, to your liking\n// display "every 8 hours"\nconsole.log(\n  dosageUtils.getFields(dosage, "periodPeriodMax" /*, other parameters*/),\n);\n\n// 3. You can detect if Dosage objects contains only "sequential" instructions\n// display "true"\nconsole.log(dosageUtils.containsOnlySequentialInstructions([dosage]));\n\n// 4. Turn this array of Dosage objects into a data structure useful to handle "sequential" and "concurrent" instructions (cf. "sequence" property).\n// Display "[ [dosage] ]"\nconsole.log(dosageUtils.groupBySequence([dosage]));\n\n// ... And many things\n// Read https://jy95.github.io/fhir-dosage-utils/api/class/default for more info\n'})}),"\n",(0,n.jsx)(s.h2,{id:"output-examples",children:"Output examples"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["We have many examples available on ",(0,n.jsx)(s.a,{href:"demo/specs",children:"documentation"})," . Check them to see lib in action \ud83d\ude09"]})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);