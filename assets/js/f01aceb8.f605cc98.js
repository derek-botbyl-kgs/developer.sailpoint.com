"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92388],{84151:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(67294),a=i(86010),r=i(39960),c=i(53438),o=i(13919),l=i(95999);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i(99603),d=i(21702);function u(e){let{href:t,children:i}=e;return n.createElement(r.default,{href:t,className:(0,a.default)("card padding--lg",s.cardContainer)},i)}function m(e){let{href:t,icon:i,title:r,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.default)("text--truncate",s.cardTitle),title:r},i,r),c&&n.createElement("p",{className:s.cardDescription,title:c},c))}function f(e){let{item:t}=e;const i=(0,c.Wl)(t);return i?n.createElement(m,{href:i,icon:n.createElement(p.G,{icon:d.cC_,className:s.docCardIcon}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,o.Z)(t.href)?n.createElement(p.G,{icon:d.FL8,className:s.docCardIcon}):n.createElement(p.G,{icon:d.wlW,className:s.docCardIcon}),a=(0,c.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:i,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},36723:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(87462),a=(i(67294),i(3905)),r=i(8065),c=i(53438);const o={id:"applications",title:"Applications",description:"Applications",custom_edit_url:null},l=void 0,s={unversionedId:"api/iiq/applications",id:"api/iiq/applications",title:"Applications",description:"Applications",source:"@site/docs/api/iiq/applications.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/applications",permalink:"/docs/api/iiq/applications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"applications",title:"Applications",description:"Applications",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"Returns an Alert resource based on id.",permalink:"/docs/api/iiq/get-alert-by-id"},next:{title:"Returns all Application resources.",permalink:"/docs/api/iiq/get-applications"}},p={},d=[],u={toc:d},m="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Alert object, a generic real time event processing object."),(0,a.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);