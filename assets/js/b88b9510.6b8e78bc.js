"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[19113],{84151:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(67294),r=i(86010),o=i(39960),a=i(53438),s=i(13919),l=i(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),p=i(21702);function u(e){let{href:t,children:i}=e;return n.createElement(o.default,{href:t,className:(0,r.default)("card padding--lg",c.cardContainer)},i)}function f(e){let{href:t,icon:i,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.default)("text--truncate",c.cardTitle),title:o},i,o),a&&n.createElement("p",{className:c.cardDescription,title:a},a))}function m(e){let{item:t}=e;const i=(0,a.Wl)(t);return i?n.createElement(f,{href:i,icon:n.createElement(d.G,{icon:p.cC_,className:c.docCardIcon}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const i=(0,s.Z)(t.href)?n.createElement(d.G,{icon:p.FL8,className:c.docCardIcon}):n.createElement(d.G,{icon:p.wlW,className:c.docCardIcon}),r=(0,a.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},72917:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=i(87462),r=(i(67294),i(3905)),o=i(8065),a=i(53438);const s={id:"identity-profiles",title:"Identity Profiles",description:"Identity Profiles",custom_edit_url:null},l=void 0,c={unversionedId:"api/v3/identity-profiles",id:"api/v3/identity-profiles",title:"Identity Profiles",description:"Identity Profiles",source:"@site/docs/api/v3/identity-profiles.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/identity-profiles",permalink:"/docs/api/v3/identity-profiles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"identity-profiles",title:"Identity Profiles",description:"Identity Profiles",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Lifecycle State by ID",permalink:"/docs/api/v3/delete-lifecycle-state"},next:{title:"Identity Profiles List",permalink:"/docs/api/v3/list-identity-profiles"}},d={},p=[],u={toc:p},f="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(f,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement identity profile functionality.\nWith this functionality in place, administrators can view identity profiles and their configurations. "),(0,r.kt)("p",null,"Identity profiles represent the configurations that can be applied to identities as a way of granting them a set of security and access, as well as defining the mappings between their identity attributes and their source attributes.  "),(0,r.kt)("p",null,"In IdentityNow, administrators can use the Identities drop-down menu and select Identity Profiles to view the list of identity profiles.\nThis list shows some details about each identity profile, along with its status.\nThey can select an identity profile to view its settings, its mappings between identity attributes and correlating source account attributes, and its provisioning settings. "),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html"},"Creating Identity Profiles")," for more information about identity profiles."),(0,r.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);