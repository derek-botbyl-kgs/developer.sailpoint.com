"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20592],{51182:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var i=l(87462),a=(l(67294),l(3905));const n={id:"buildmap-rule",title:"BuildMap Rule",pagination_label:"BuildMap Rule",sidebar_label:"BuildMap Rule",sidebar_class_name:"buildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/extensibility/rules/cloud-rules/buildmap-rule",tags:["Rules"]},r="BuildMap Rule",u={unversionedId:"extensibility/rules/cloud-rules/buildmap-rule",id:"extensibility/rules/cloud-rules/buildmap-rule",title:"BuildMap Rule",description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",source:"@site/docs/extensibility/rules/cloud-rules/build_map_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/buildmap-rule",permalink:"/docs/extensibility/rules/cloud-rules/buildmap-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/build_map_rule.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"buildmap-rule",title:"BuildMap Rule",pagination_label:"BuildMap Rule",sidebar_label:"BuildMap Rule",sidebar_class_name:"buildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/extensibility/rules/cloud-rules/buildmap-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Before Provisioning Rule",permalink:"/docs/extensibility/rules/cloud-rules/before-provisioning-rule"},next:{title:"Correlation Rule",permalink:"/docs/extensibility/rules/cloud-rules/correlation-rule"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buildmap-rule"},"BuildMap Rule"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data. Use this rule to create a new value by combining two columns together. For example, if one column was ",(0,a.kt)("inlineCode",{parentName:"p"},"access")," and another ",(0,a.kt)("inlineCode",{parentName:"p"},"permissions")," you could combine these together to create an entitlement ",(0,a.kt)("inlineCode",{parentName:"p"},"admin-read"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This rule runs in the cloud, but it's really a connector rule because it executes against the DelimitedFileConnector.")),(0,a.kt)("h2",{id:"execution"},"Execution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the Identity Security Cloud cloud, and has read-only access to the records from the Delimited File being imported. However, it doesn't have access to on-premise sources or connectors."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rule Execution",src:l(44490).Z,width:"1594",height:"635"})),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cols"),(0,a.kt)("td",{parentName:"tr",align:null},"java.util.List"),(0,a.kt)("td",{parentName:"tr",align:null},"Ordered list of the column names from the file\u2019s header records or specified columns list.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"record"),(0,a.kt)("td",{parentName:"tr",align:null},"java.util.List"),(0,a.kt)("td",{parentName:"tr",align:null},"Ordered list of the values for the current record, parsed based on the specified delimiter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"application"),(0,a.kt)("td",{parentName:"tr",align:null},"System.Collections.Hashtable"),(0,a.kt)("td",{parentName:"tr",align:null},"Map of the application configuration.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"schema"),(0,a.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the schema object for the delimited file source being read.")))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>This basic rule performs the combines 2 values into a single attribute.</Description>\n  <Source><![CDATA[\n\n     import sailpoint.connector.DelimitedFileConnector;\n\n     Map map = DelimitedFileConnector.defaultBuildMap( cols, record );\n     String access = (String) map.get( "access" );\n     String permission = (String) map.get( "permission" );\n\n     if ( access != null && permission != null ) {\n          map.remove("access");\n          map.remove("permission");\n          map.put("access", access + " - " + permission);\n     }\n     return map;\n\n  ]]></Source>\n</Rule>\n')))}m.isMDXComponent=!0},44490:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);