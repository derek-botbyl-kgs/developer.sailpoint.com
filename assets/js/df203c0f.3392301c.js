"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42869],{6619:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(67294),r=l(86010),n=l(39960),s=l(88824),o=l(10833),c=l(35281),i=l(95999),u=l(5060),g=l(83510);function m(e){let{doc:t}=e;return a.createElement("article",{className:"margin-vert--lg"},a.createElement(n.default,{to:t.permalink},a.createElement("h2",null,t.title)),t.description&&a.createElement("p",null,t.description))}function d(e){let{tag:t}=e;const l=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,i.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),d=(0,i.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:l(t.count),tagName:t.label});return a.createElement(o.FG,{className:(0,r.default)(c.k.wrapper.docsPages,c.k.page.docsTagDocListPage)},a.createElement(o.d,{title:d}),a.createElement(g.Z,{tag:"doc_tag_doc_list"}),a.createElement(u.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,d),a.createElement(n.default,{href:t.allTagsPath},a.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>a.createElement(m,{key:e.id,doc:e})))))))))}},88824:(e,t,l)=>{l.d(t,{c:()=>u});var a=l(67294),r=l(52263),n=l(25108);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return n.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=i();return{selectMessage:(t,l)=>function(e,t,l){const a=e.split("|");if(1===a.length)return a[0];a.length>l.pluralForms.length&&n.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=l.select(t),s=l.pluralForms.indexOf(r);return a[Math.min(s,a.length-1)]}(l,t,e)}}}}]);