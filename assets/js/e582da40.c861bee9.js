"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[24538],{78331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const s={id:"decompose-diacritical-marks",title:"Decompose Diacritial Marks",pagination_label:"Decompose Diacritial Marks",sidebar_label:"Decompose Diacritial Marks",sidebar_class_name:"decomposeDiacriticalMarks",keywords:["transforms","operations","decompose","diacritical","marks"],description:"Clean or standardize symbols used within language.",slug:"/extensibility/transforms/operations/decompose-diacritical-marks",tags:["Transforms","Transform Operations"]},n=void 0,o={unversionedId:"extensibility/transforms/operations/decompose-diacritical-marks",id:"extensibility/transforms/operations/decompose-diacritical-marks",title:"Decompose Diacritial Marks",description:"Clean or standardize symbols used within language.",source:"@site/docs/extensibility/transforms/operations/decompose-diacritical-marks.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/decompose-diacritical-marks",permalink:"/docs/extensibility/transforms/operations/decompose-diacritical-marks",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/decompose-diacritical-marks.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"decompose-diacritical-marks",title:"Decompose Diacritial Marks",pagination_label:"Decompose Diacritial Marks",sidebar_label:"Decompose Diacritial Marks",sidebar_class_name:"decomposeDiacriticalMarks",keywords:["transforms","operations","decompose","diacritical","marks"],description:"Clean or standardize symbols used within language.",slug:"/extensibility/transforms/operations/decompose-diacritical-marks",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Date Math",permalink:"/docs/extensibility/transforms/operations/date-math"},next:{title:"E.164 Phone",permalink:"/docs/extensibility/transforms/operations/e164-phone"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"Testing",id:"testing",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Use the decompose diacritical marks transform to clean or standardize symbols used within language to inform the reader how to say or pronounce a letter. These symbols are often incompatible with downstream applications and must be standardized to another character set such as ASCII."),(0,i.kt)("p",null,"The following are examples of diacritical marks:"),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u0100"),(0,i.kt)("li",{parentName:"ul"},"\u0108"),(0,i.kt)("li",{parentName:"ul"},"\u0147"),(0,i.kt)("li",{parentName:"ul"},"\u0174"))),(0,i.kt)("p",null,"The decomposeDiacriticalMarks transform uses the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/text/Normalizer.html"},"Normalizer library")," to decompose the diacritical marks.  It specifically uses the Normalization Form KD (NFKD), as described in Sections 3.6, 3.10, and 3.11 of the Unicode Standard, also summarized under ",(0,i.kt)("a",{parentName:"p",href:"https://www.unicode.org/reports/tr15/tr15-23.html#Decomposition"},"Annex 4: Decomposition"),"."),(0,i.kt)("p",null,"After decomposition, the transform uses a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"Regex Replace")," to replace all diacritical marks by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"InCombiningDiacriticalMarks")," property of Unicode (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},'replaceAll("[\\\\p{InCombiningDiacriticalMarks}]", "")'),")."),(0,i.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,i.kt)("p",null,"The transform for decompose diacritical marks requires only the transform's ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "decomposeDiacriticalMarks",\n  "name": "Decompose Diacritical Marks Transform"\n}\n')),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Required Attributes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"decomposeDiacriticalMarks"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "\u0100ric"\nOutput: "Aric"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "decomposeDiacriticalMarks",\n  "name": "Test Decompose Diacritical Marks Transform"\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,'This transform takes the user\'s "LastName" attribute from the "HR Source" and replaces any diacritical marks with ASCII-compatible values.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Dub\xe7ek"\nOutput: "Dubcek"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "LastName"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "decomposeDiacriticalMarks",\n  "name": "Decompose Diacritical Marks Transform"\n}\n')),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"To run some tests in code, use this java code to compare the results of what the transform does to what your code does: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.text.Normalizer;\nimport java.util.regex.Pattern;\n\n// Decomposes characters from their diacritical marks\ninput = Normalizer.normalize(input, Normalizer.Form.NFKD);\n\n// Removes the marks\ninput = input.replaceAll("[\\\\p{InCombiningDiacriticalMarks}]", "");\n')))}d.isMDXComponent=!0}}]);