"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[1404],{37963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var i=a(87462),s=(a(67294),a(3905));const n={id:"saved-search-completed",title:"Scheduled Search",pagination_label:"Scheduled Search",sidebar_label:"Scheduled Search",sidebar_class_name:"scheduledSearch",keywords:["event","trigger","saved","scheduled","search","complete","available"],description:"Fires after a scheduled search completes.",slug:"/extensibility/event-triggers/triggers/scheduled-search",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,l={unversionedId:"extensibility/event-triggers/available/saved-search-completed",id:"extensibility/event-triggers/available/saved-search-completed",title:"Scheduled Search",description:"Fires after a scheduled search completes.",source:"@site/docs/extensibility/event-triggers/available/scheduled-search.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/scheduled-search",permalink:"/docs/extensibility/event-triggers/triggers/scheduled-search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/scheduled-search.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"saved-search-completed",title:"Scheduled Search",pagination_label:"Scheduled Search",sidebar_label:"Scheduled Search",sidebar_class_name:"scheduledSearch",keywords:["event","trigger","saved","scheduled","search","complete","available"],description:"Fires after a scheduled search completes.",slug:"/extensibility/event-triggers/triggers/scheduled-search",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Provisioning Completed",permalink:"/docs/extensibility/event-triggers/triggers/provisioning-completed"},next:{title:"Source Created",permalink:"/docs/extensibility/event-triggers/triggers/source-created"}},d={},o=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:o},p="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"event-context"},"Event Context"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Flow",src:a(47774).Z,width:"1144",height:"211"})),(0,s.kt)("p",null,'Users can subscribe to saved searches and receive an email of a report generated from the saved search. For example, a user can save a search query called "Identities with upcoming end dates" and create a subscription to receive a daily report showing identities with an end date within 10 days from the current date. This event trigger can also notify an external HTTP application that a report generated from a saved search subscription is available to be processed.'),(0,s.kt)("p",null,"'Scheduled search' events occur based on the schedules set for saved search subscriptions. For example, if you have a scheduled saved search for Monday, Tuesday, Wednesday, Thursday, Friday at 6:00 GMT, your HTTP endpoint will also receive a notification at those times. This can be set using the ",(0,s.kt)("inlineCode",{parentName:"p"},"schedule")," object in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/v3/create-scheduled-search"},"create scheduled search endpoint"),"."),(0,s.kt)("p",null,"To receive this event when a saved search query does not have any results, set ",(0,s.kt)("inlineCode",{parentName:"p"},"emailEmptyResults")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"TRUE"),". You can also set the expiration date in the ",(0,s.kt)("inlineCode",{parentName:"p"},"expiration")," field within the ",(0,s.kt)("inlineCode",{parentName:"p"},"schedule")," object. Your HTTP endpoint will stop receiving these events when the scheduled search expires."),(0,s.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Perform quality control, such as continuously checking for Separation of Duties (SOD) violations."),(0,s.kt)("li",{parentName:"ul"},"Respond to upcoming joiner-mover-leaver scenarios, such as deprovisioning access before an employee's separation date.")),(0,s.kt)("p",null,"This is an example input from this trigger:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fileName": "Modified.zip",\n  "ownerEmail": "test@sailpoint.com",\n  "ownerName": "Cloud Support",\n  "query": "modified:[now-7y/d TO now]",\n  "searchName": "Modified Activity",\n  "searchResults": {\n    "Account": {\n      "count": 3,\n      "noun": "accounts",\n      "preview": [[]]\n    },\n    "Entitlement": {\n      "count": 2,\n      "noun": "entitlements",\n      "preview": [[]]\n    },\n    "Identity": {\n      "count": 2,\n      "noun": "identities",\n      "preview": [[]]\n    }\n  },\n  "signedS3Url": "https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc"\n}\n')),(0,s.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,s.kt)("a",{parentName:"li",href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}h.isMDXComponent=!0},47774:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/saved-search-path-87e843e3bbdbcffe9c7c6f78258e6afa.png"}}]);