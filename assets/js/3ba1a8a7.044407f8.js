"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92872],{84151:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(67294),o=n(86010),r=n(39960),c=n(53438),a=n(13919),s=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=n(99603),p=n(21702);function u(e){let{href:t,children:n}=e;return i.createElement(r.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:r,description:c}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:r},n,r),c&&i.createElement("p",{className:l.cardDescription,title:c},c))}function f(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?i.createElement(m,{href:n,icon:i.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,a.Z)(t.href)?i.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):i.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),o=(0,c.xz)(t.docId??void 0);return i.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},3665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),r=n(8065),c=n(53438);const a={id:"sp-config",title:"SP-Config",description:"SP-Config",custom_edit_url:null},s=void 0,l={unversionedId:"api/beta/sp-config",id:"api/beta/sp-config",title:"SP-Config",description:"SP-Config",source:"@site/docs/api/beta/sp-config.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/sp-config",permalink:"/docs/api/beta/sp-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sp-config",title:"SP-Config",description:"SP-Config",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update Source Entitlement Request Configuration",permalink:"/docs/api/beta/update-source-entitlement-request-config"},next:{title:"Initiates configuration objects export job",permalink:"/docs/api/beta/export-sp-config"}},d={},p=[],u={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Import and export configuration for some objects between tenants."),(0,o.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);