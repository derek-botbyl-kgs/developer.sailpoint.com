"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[9689],{34295:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const r={id:"before-provisioning-rule",title:"Before Provisioning Rule",pagination_label:"Before Provisioning Rule",sidebar_label:"Before Provisioning Rule",sidebar_class_name:"beforeProvisioningRule",keywords:["cloud","rules","before provisioning"],description:"This rule runs before provisioning to a source.",slug:"/extensibility/rules/cloud-rules/before-provisioning-rule",tags:["Rules"]},l=void 0,a={unversionedId:"extensibility/rules/cloud-rules/before-provisioning-rule",id:"extensibility/rules/cloud-rules/before-provisioning-rule",title:"Before Provisioning Rule",description:"This rule runs before provisioning to a source.",source:"@site/docs/extensibility/rules/cloud-rules/before_provisioning_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/before-provisioning-rule",permalink:"/docs/extensibility/rules/cloud-rules/before-provisioning-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/before_provisioning_rule.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"before-provisioning-rule",title:"Before Provisioning Rule",pagination_label:"Before Provisioning Rule",sidebar_label:"Before Provisioning Rule",sidebar_class_name:"beforeProvisioningRule",keywords:["cloud","rules","before provisioning"],description:"This rule runs before provisioning to a source.",slug:"/extensibility/rules/cloud-rules/before-provisioning-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Account Profile Attribute Generator (from Template)",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator-template"},next:{title:"BuildMap Rule",permalink:"/docs/extensibility/rules/cloud-rules/buildmap-rule"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Before Provisioning Rule that Changes Disables and Enables to a Modify",id:"example---before-provisioning-rule-that-changes-disables-and-enables-to-a-modify",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use this rule to modify a provisioning plan as provisioning is sent out. Do not use this rule to create new attributes. Use an account creation profile (provisioning policy) instead."),(0,o.kt)("p",null,"These are some examples of when to use this rule:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Disable account and remove groups during provisioning when the lifecycle state of an identity is set to terminated"),(0,o.kt)("li",{parentName:"ul"},"Remove or add permissions when certain attribute criteria are met"),(0,o.kt)("li",{parentName:"ul"},"Move users to a specific organizational unit (OU) in Active Directory based upon attribute criteria")),(0,o.kt)("h2",{id:"execution"},"Execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rule Execution",src:i(44490).Z,width:"1594",height:"635"})),(0,o.kt)("h2",{id:"input"},"Input"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"log"),(0,o.kt)("td",{parentName:"tr",align:null},"org.apache.log4j.Logger"),(0,o.kt)("td",{parentName:"tr",align:null},"Logger to log statements. ",(0,o.kt)("em",{parentName:"td"},"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"idn"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.server.IdnRuleUtil"),(0,o.kt)("td",{parentName:"tr",align:null},"Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,o.kt)("a",{parentName:"td",href:"/docs/extensibility/rules/rule-utility"},"IdnRuleUtil"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"plan"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.ProvisioningPlan"),(0,o.kt)("td",{parentName:"tr",align:null},"A set of provisioning instructions which are sent to the source connectors.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"application"),(0,o.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,o.kt)("td",{parentName:"tr",align:null},"Read-only reference to application object that represents the source to which provisioning is being done.")))),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"There is no output for a Before Provisioning rule."),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BeforeProvisioning">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,o.kt)("h2",{id:"example---before-provisioning-rule-that-changes-disables-and-enables-to-a-modify"},"Example - Before Provisioning Rule that Changes Disables and Enables to a Modify"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BeforeProvisioning">\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\n  <Source><![CDATA[\nimport sailpoint.object.*;\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\nimport sailpoint.object.ProvisioningPlan;\nimport sailpoint.object.ProvisioningPlan.Operation;\n\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\n  }\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\n  }\n}\n\n  ]]></Source>\n</Rule>\n')))}c.isMDXComponent=!0},44490:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);