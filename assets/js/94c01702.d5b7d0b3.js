"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[94923],{84151:(e,t,r)=>{r.d(t,{Z:()=>C});var o=r(67294),n=r(86010),i=r(39960),a=r(53438),c=r(13919),l=r(95999);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),m=r(21702);function u(e){let{href:t,children:r}=e;return o.createElement(i.default,{href:t,className:(0,n.default)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:a}=e;return o.createElement(u,{href:t},o.createElement("h2",{className:(0,n.default)("text--truncate",s.cardTitle),title:i},r,i),a&&o.createElement("p",{className:s.cardDescription,title:a},a))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?o.createElement(p,{href:r,icon:o.createElement(d.G,{icon:m.cC_,className:s.docCardIcon}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?o.createElement(d.G,{icon:m.FL8,className:s.docCardIcon}):o.createElement(d.G,{icon:m.wlW,className:s.docCardIcon}),n=(0,a.xz)(t.docId??void 0);return o.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function C(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},93758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var o=r(87462),n=(r(67294),r(3905)),i=r(8065),a=r(53438);const c={id:"mfa-controller",title:"MFA Controller",description:"MFA Controller",custom_edit_url:null},l=void 0,s={unversionedId:"api/beta/mfa-controller",id:"api/beta/mfa-controller",title:"MFA Controller",description:"MFA Controller",source:"@site/docs/api/beta/mfa-controller.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/mfa-controller",permalink:"/docs/api/beta/mfa-controller",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mfa-controller",title:"MFA Controller",description:"MFA Controller",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete MFA method configuration",permalink:"/docs/api/beta/delete-mfa-config"},next:{title:"Verifying authentication via Okta method",permalink:"/docs/api/beta/send-okta-verify-request"}},d={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This API used for multifactor authentication functionality belong to gov-multi-auth service. This controller allow you to verify authentication by specified method"),(0,n.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);