"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[2880],{84151:(e,t,r)=>{r.d(t,{Z:()=>h});var o=r(67294),i=r(86010),n=r(39960),s=r(53438),a=r(13919),c=r(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),p=r(21702);function m(e){let{href:t,children:r}=e;return o.createElement(n.default,{href:t,className:(0,i.default)("card padding--lg",l.cardContainer)},r)}function f(e){let{href:t,icon:r,title:n,description:s}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,i.default)("text--truncate",l.cardTitle),title:n},r,n),s&&o.createElement("p",{className:l.cardDescription,title:s},s))}function u(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?o.createElement(f,{href:r,icon:o.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,a.Z)(t.href)?o.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):o.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),i=(0,s.xz)(t.docId??void 0);return o.createElement(f,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(b,{item:t});case"category":return o.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},88967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),i=(r(67294),r(3905)),n=r(8065),s=r(53438);const a={id:"operations",title:"Operations",pagination_label:"Operations",sidebar_label:"Operations",sidebar_class_name:"operations",keywords:["transforms","operations"],description:"A list of transform operations.",slug:"/extensibility/transforms/operations",tags:["Transforms","Transform Operations"]},c=void 0,l={unversionedId:"extensibility/transforms/operations/operations",id:"extensibility/transforms/operations/operations",title:"Operations",description:"A list of transform operations.",source:"@site/docs/extensibility/transforms/operations/index.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations",permalink:"/docs/extensibility/transforms/operations",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/index.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"operations",title:"Operations",pagination_label:"Operations",sidebar_label:"Operations",sidebar_class_name:"operations",keywords:["transforms","operations"],description:"A list of transform operations.",slug:"/extensibility/transforms/operations",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Identity Attribute Context",permalink:"/docs/extensibility/transforms/guides/identity-context-examples"},next:{title:"Account Attribute",permalink:"/docs/extensibility/transforms/operations/account-attribute"}},d={},p=[{value:"Transform Operations",id:"transform-operations",level:2}],m={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document lists each type of operation you can perform in a transform. Sometimes you will hear these transforms referred to as ",(0,i.kt)("strong",{parentName:"p"},"Seaspray"),", the codename for transforms."),(0,i.kt)("h2",{id:"transform-operations"},"Transform Operations"),(0,i.kt)("p",null,"Seaspray ships out of the box with a number of primitive operations. The following sections describe the operations."),(0,i.kt)(n.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);