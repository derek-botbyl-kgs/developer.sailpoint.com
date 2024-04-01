"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36971],{46779:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=n(87462),c=(n(67294),n(3905));const i={id:"test-connection-customizer",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Intercept the test connection command.",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",tags:["Connectivity","Connector Command"]},a=void 0,s={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection-customizer",title:"Test Connection",description:"Intercept the test connection command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/test-connection",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/test-connection.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"test-connection-customizer",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Intercept the test connection command.",slug:"/connectivity/saas-connectivity/customizers/commands/test-connection",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-read"},next:{title:"Full Example",permalink:"/docs/connectivity/saas-connectivity/customizers/example"}},r={},m=[{value:"Overview",id:"overview",level:2},{value:"Example StdTestConnectionOutput",id:"example-stdtestconnectionoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before test-connection command",id:"before-test-connection-command",level:3},{value:"After test-connection command",id:"after-test-connection-command",level:3}],l={toc:m},d="wrapper";function p(t){let{components:e,...n}=t;return(0,c.kt)(d,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"overview"},"Overview"),(0,c.kt)("p",null,"Use these commands to intercept the ",(0,c.kt)("a",{parentName:"p",href:"../../commands/test-connection"},"Test-Connection")," command."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,c.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,c.kt)("td",{parentName:"tr",align:"center"},"undefined")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdTestConnectionOutput")))),(0,c.kt)("h3",{id:"example-stdtestconnectionoutput"},"Example StdTestConnectionOutput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n}\n")),(0,c.kt)("h2",{id:"implementation"},"Implementation"),(0,c.kt)("h3",{id:"before-test-connection-command"},"Before test-connection command"),(0,c.kt)("p",null,"Use this logic to implement the command: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdTestConnection(async (context: Context, input: undefined) => {\n        logger.info('Running before test connection')\n    })\n")),(0,c.kt)("p",null,"There is no input, so you cannot mutate any data. However, you can make web request calls or perform any type of logging or logic before calling the connector."),(0,c.kt)("h3",{id:"after-test-connection-command"},"After test-connection command"),(0,c.kt)("p",null,"Use this logic to implement the command: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"    .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n        logger.info('Running after test connection')\n        return output\n    })\n")),(0,c.kt)("p",null,"The output datatype is always an empty object handed down from the connector."))}p.isMDXComponent=!0}}]);