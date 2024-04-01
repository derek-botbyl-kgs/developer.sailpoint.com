"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[25151],{84151:(t,e,i)=>{i.d(e,{Z:()=>C});var n=i(67294),a=i(86010),o=i(39960),r=i(53438),c=i(13919),s=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),u=i(21702);function p(t){let{href:e,children:i}=t;return n.createElement(o.default,{href:e,className:(0,a.default)("card padding--lg",l.cardContainer)},i)}function m(t){let{href:e,icon:i,title:o,description:r}=t;return n.createElement(p,{href:e},n.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:o},i,o),r&&n.createElement("p",{className:l.cardDescription,title:r},r))}function h(t){let{item:e}=t;const i=(0,r.Wl)(e);return i?n.createElement(m,{href:i,icon:n.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:e.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const i=(0,c.Z)(e.href)?n.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):n.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),a=(0,r.xz)(e.docId??void 0);return n.createElement(m,{href:e.href,icon:i,title:e.label,description:e.description??a?.description})}function C(t){let{item:e}=t;switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}},60918:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),o=i(8065),r=i(53438);const c={id:"o-auth-clients",title:"OAuth Clients",description:"OAuth Clients",custom_edit_url:null},s=void 0,l={unversionedId:"api/beta/o-auth-clients",id:"api/beta/o-auth-clients",title:"OAuth Clients",description:"OAuth Clients",source:"@site/docs/api/beta/o-auth-clients.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/o-auth-clients",permalink:"/docs/api/beta/o-auth-clients",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"o-auth-clients",title:"OAuth Clients",description:"OAuth Clients",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Verify domain address via DKIM",permalink:"/docs/api/beta/create-domain-dkim"},next:{title:"List OAuth Clients",permalink:"/docs/api/beta/list-oauth-clients"}},d={},u=[],p={toc:u},m="wrapper";function h(t){let{components:e,...i}=t;return(0,a.kt)(m,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement OAuth client functionality.\nWith this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the IdentityNow REST API.\nRefer to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/authentication"},"Authentication")," for more information about OAuth and how it works with the IdentityNow REST API."),(0,a.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);