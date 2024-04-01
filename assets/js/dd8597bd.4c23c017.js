"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52200],{13073:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(87462),s=(n(67294),n(3905));const o={id:"change-password",title:"Change Password",pagination_label:"Change Password",sidebar_label:"Change Password",keywords:["connectivity","connectors","change password"],description:"Change password for an account on the source.",slug:"/connectivity/saas-connectivity/commands/change-password",tags:["Connectivity","Connector Command"]},i=void 0,c={unversionedId:"connectivity/saas-connectivity/connector-commands/change-password",id:"connectivity/saas-connectivity/connector-commands/change-password",title:"Change Password",description:"Change password for an account on the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/change-password.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/change-password",permalink:"/docs/connectivity/saas-connectivity/commands/change-password",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/change-password.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"change-password",title:"Change Password",pagination_label:"Change Password",sidebar_label:"Change Password",keywords:["connectivity","connectors","change password"],description:"Change password for an account on the source.",slug:"/connectivity/saas-connectivity/commands/change-password",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Update",permalink:"/docs/connectivity/saas-connectivity/commands/account-update"},next:{title:"Entitlement List",permalink:"/docs/connectivity/saas-connectivity/commands/entitlement-list"}},r={},d=[{value:"Example StdChangePasswordInput",id:"example-stdchangepasswordinput",level:3},{value:"Example StdChangePasswordOutput",id:"example-stdchangepasswordoutput",level:3},{value:"Description",id:"description",level:2},{value:"The Provisioning Plan",id:"the-provisioning-plan",level:2},{value:"Testing in Identity Security Cloud",id:"testing-in-identity-security-cloud",level:2}],p={toc:d},l="wrapper";function u(t){let{components:e,...n}=t;return(0,s.kt)(l,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,s.kt)("td",{parentName:"tr",align:"center"},"StdChangePasswordInput")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,s.kt)("td",{parentName:"tr",align:"center"},"StdChangePasswordOutput")))),(0,s.kt)("h3",{id:"example-stdchangepasswordinput"},"Example StdChangePasswordInput"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n},\n"password": "newPassword"\n')),(0,s.kt)("h3",{id:"example-stdchangepasswordoutput"},"Example StdChangePasswordOutput"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"The change password command is triggered in ISC when a user changes their password through ISC. When this occurs, if your source has change password enabled, then you can change the user password on the source system through ISC. "),(0,s.kt)("h2",{id:"the-provisioning-plan"},"The Provisioning Plan"),(0,s.kt)("p",null,"The change password command sends the password change event to your connector whenever a user changes their password through the Password Manager. Handling this even is as simple as implementing a method on the source system that updates a users password"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},".stdChangePassword(async (context: Context, input: StdChangePasswordInput, res: Response<StdChangePasswordOutput>) => {\n    res.send(await myClient.changePassword(input.identity))\n})\n")),(0,s.kt)("h2",{id:"testing-in-identity-security-cloud"},"Testing in Identity Security Cloud"),(0,s.kt)("p",null,"In order to test in Identity Security Cloud, the source application must be configured so that it is able to accept password change requests through the Password Manager. Once this setup is complete, you can log in as a user whose identity exists in the configured application and change their password in the Password Manager."))}u.isMDXComponent=!0}}]);