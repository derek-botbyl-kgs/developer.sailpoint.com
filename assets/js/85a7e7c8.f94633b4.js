"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8327],{84151:(e,t,c)=>{c.d(t,{Z:()=>C});var i=c(67294),o=c(86010),n=c(39960),a=c(53438),r=c(13919),s=c(95999);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var l=c(99603),m=c(21702);function p(e){let{href:t,children:c}=e;return i.createElement(n.default,{href:t,className:(0,o.default)("card padding--lg",d.cardContainer)},c)}function u(e){let{href:t,icon:c,title:n,description:a}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,o.default)("text--truncate",d.cardTitle),title:n},c,n),a&&i.createElement("p",{className:d.cardDescription,title:a},a))}function f(e){let{item:t}=e;const c=(0,a.Wl)(t);return c?i.createElement(u,{href:c,icon:i.createElement(l.G,{icon:m.cC_,className:d.docCardIcon}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const c=(0,r.Z)(t.href)?i.createElement(l.G,{icon:m.FL8,className:d.docCardIcon}):i.createElement(l.G,{icon:m.wlW,className:d.docCardIcon}),o=(0,a.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:c,title:t.label,description:t.description??o?.description})}function C(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},45030:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var i=c(87462),o=(c(67294),c(3905)),n=c(8065),a=c(53438);const r={id:"iai-common-access",title:"IAI Common Access",description:"IAI Common Access",custom_edit_url:null},s=void 0,d={unversionedId:"api/beta/iai-common-access",id:"api/beta/iai-common-access",title:"IAI Common Access",description:"IAI Common Access",source:"@site/docs/api/beta/iai-common-access.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/iai-common-access",permalink:"/docs/api/beta/iai-common-access",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iai-common-access",title:"IAI Common Access",description:"IAI Common Access",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Notification of Viewed Access Request Recommendations in Bulk",permalink:"/docs/api/beta/add-access-request-recommendations-viewed-items"},next:{title:"Get a paginated list of common access",permalink:"/docs/api/beta/get-common-access"}},l={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...c}=e;return(0,o.kt)(u,(0,i.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);