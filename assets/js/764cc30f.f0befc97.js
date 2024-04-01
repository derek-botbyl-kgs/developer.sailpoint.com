"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53921],{1703:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},o="Transforms",l={unversionedId:"tools/cli/cli-transforms",id:"tools/cli/cli-transforms",title:"CLI Transforms",description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",source:"@site/docs/tools/cli/transforms.md",sourceDirName:"tools/cli",slug:"/tools/cli/transforms",permalink:"/docs/tools/cli/transforms",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/transforms.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:6,frontMatter:{id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-SPConfig",permalink:"/docs/tools/cli/spconfig"},next:{title:"CLI VA",permalink:"/docs/tools/cli/va"}},i={},m=[{value:"Commands",id:"commands",level:2},{value:"List transforms",id:"list-transforms",level:2},{value:"Download transforms",id:"download-transforms",level:2},{value:"Create transform",id:"create-transform",level:2},{value:"Update transform",id:"update-transform",level:2},{value:"Delete transform",id:"delete-transform",level:2}],d={toc:m},f="wrapper";function p(t){let{components:e,...s}=t;return(0,r.kt)(f,(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transforms"},"Transforms"),(0,r.kt)("p",null,"Learn about the CLI commands you can use to create, manage, and test transforms in this guide. "),(0,r.kt)("p",null,"In Identity Security Cloud (ISC), you can use transforms to manipulate attribute data without writing any code. For more information about transforms, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/extensibility/transforms"},"Transforms"),". "),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"transforms")," command, it's it easy to create, manage, and test transforms in the CLI. "),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"To create, manage, and test transforms with the CLI, you can use these commands: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transforms"},"Transforms"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commands"},"Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#list-transforms"},"List transforms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#download-transforms"},"Download transforms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-transform"},"Create transform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-transform"},"Update transform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delete-transform"},"Delete transform"))))),(0,r.kt)("h2",{id:"list-transforms"},"List transforms"),(0,r.kt)("p",null,"To get a list of the transforms available in your tenant, run this command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform list\n")),(0,r.kt)("p",null,"This command produces a table of available transforms. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transform List",src:a(12869).Z,width:"1200",height:"500"})),(0,r.kt)("h2",{id:"download-transforms"},"Download transforms"),(0,r.kt)("p",null,"To download all the transforms in your tenant and save them as ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," files on your computer, run the following command. By default, this command will save the files in the current working directory. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag to specify a path to an output directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform download -d transform_files\n")),(0,r.kt)("p",null,"By default, this command will save the files in the current working directory. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag to specify a path to an output directory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transform Download",src:a(90014).Z,width:"1200",height:"500"})),(0,r.kt)("p",null,"This command will overwrite any existing files with the same name, so be careful when you run this in a directory that has transforms that have been modified but not yet saved. "),(0,r.kt)("h2",{id:"create-transform"},"Create transform"),(0,r.kt)("p",null,"To create a new transform from a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file, run the following command. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform create -f transform.json\n")),(0,r.kt)("h2",{id:"update-transform"},"Update transform"),(0,r.kt)("p",null,"To update a transform from a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file, run the following command. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform update -f transform.json\n")),(0,r.kt)("p",null,"A common workflow is to first download the transforms, then make edits to the transform file, and then use the update command to save those edits in ISC."),(0,r.kt)("h2",{id:"delete-transform"},"Delete transform"),(0,r.kt)("p",null,"To delete a transform, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform delete <transform-id>\n")),(0,r.kt)("p",null,"To delete multiple transforms, use this syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform delete <transform-id> <transform-id> <transform-id>\n")),(0,r.kt)("p",null,"You can use this command in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command to find the ID of the transform you want to delete. "),(0,r.kt)("p",null,"This is an example of how you can find a transform ID and delete it: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform list\n+--------------------------------------+--------------------------+\n|                  ID                  |           NAME           |\n+--------------------------------------+--------------------------+\n| 03d5187b-ab96-402c-b5a1-40b74285d77a | WIFI Group               |\n| 06d589cf-4d7d-4b40-8617-c221092ceb2c | Remove Diacritical Marks |\n| 1f3a97cf-e58b-4fad-b2f2-0dcc19fb1627 | NETID                    |\n+--------------------------------------+--------------------------+\nsail transform delete 03d5187b-ab96-402c-b5a1-40b74285d77a\n")))}p.isMDXComponent=!0},90014:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/transform-download-23453d19230ad2708a3389a3a026179f.gif"},12869:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/transform-list-033f4d95c861fda8172582e306ec55e0.gif"}}]);