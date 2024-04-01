"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[2222],{84151:(t,e,i)=>{i.d(e,{Z:()=>w});var n=i(67294),o=i(86010),a=i(39960),r=i(53438),s=i(13919),c=i(95999);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var l=i(99603),u=i(21702);function p(t){let{href:e,children:i}=t;return n.createElement(a.default,{href:e,className:(0,o.default)("card padding--lg",d.cardContainer)},i)}function f(t){let{href:e,icon:i,title:a,description:r}=t;return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.default)("text--truncate",d.cardTitle),title:a},i,a),r&&n.createElement("p",{className:d.cardDescription,title:r},r))}function m(t){let{item:e}=t;const i=(0,r.Wl)(e);return i?n.createElement(f,{href:i,icon:n.createElement(l.G,{icon:u.cC_,className:d.docCardIcon}),title:e.label,description:e.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g(t){let{item:e}=t;const i=(0,s.Z)(e.href)?n.createElement(l.G,{icon:u.FL8,className:d.docCardIcon}):n.createElement(l.G,{icon:u.wlW,className:d.docCardIcon}),o=(0,r.xz)(e.docId??void 0);return n.createElement(f,{href:e.href,icon:i,title:e.label,description:e.description??o?.description})}function w(t){let{item:e}=t;switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}},51961:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=i(87462),o=(i(67294),i(3905)),a=i(8065),r=i(53438);const s={id:"password-configuration",title:"Password Configuration",description:"Password Configuration",custom_edit_url:null},c=void 0,d={unversionedId:"api/beta/password-configuration",id:"api/beta/password-configuration",title:"Password Configuration",description:"Password Configuration",source:"@site/docs/api/beta/password-configuration.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/password-configuration",permalink:"/docs/api/beta/password-configuration",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-configuration",title:"Password Configuration",description:"Password Configuration",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get list of time zones",permalink:"/docs/api/beta/get-valid-time-zones"},next:{title:"Get Password Org Config",permalink:"/docs/api/beta/get-password-org-config"}},l={},u=[],p={toc:u},f="wrapper";function m(t){let{components:e,...i}=t;return(0,o.kt)(f,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this API to implement organization password configuration functionality.\nWith this functionality in place, organization administrators can create organization-specific password configurations."),(0,o.kt)("p",null,"These configurations include details like custom password instructions, as well as digit token length and duration."),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html"},"Configuring User Authentication for Password Resets")," for more information about organization password configuration functionality."),(0,o.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);