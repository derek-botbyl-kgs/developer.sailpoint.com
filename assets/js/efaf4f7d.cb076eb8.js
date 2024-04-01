"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29410],{38093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={id:"cli-advanced",title:"CLI - Advanced",pagination_label:"CLI - Advanced",sidebar_label:"CLI - Advanced",sidebar_position:1,sidebar_class_name:"cliAdvanced",keywords:["connectivity","connectors","cli"],description:"Using the CLI to properly test and debug your connector in Identity Security Cloud",slug:"/connectivity/saas-connectivity/in-depth/cli-advanced",tags:["Connectivity"]},c=void 0,s={unversionedId:"connectivity/saas-connectivity/in-depth/cli-advanced",id:"connectivity/saas-connectivity/in-depth/cli-advanced",title:"CLI - Advanced",description:"Using the CLI to properly test and debug your connector in Identity Security Cloud",source:"@site/docs/connectivity/saas-connectivity/in-depth/cli-advanced.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/cli-advanced",permalink:"/docs/connectivity/saas-connectivity/in-depth/cli-advanced",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/cli-advanced.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:1,frontMatter:{id:"cli-advanced",title:"CLI - Advanced",pagination_label:"CLI - Advanced",sidebar_label:"CLI - Advanced",sidebar_position:1,sidebar_class_name:"cliAdvanced",keywords:["connectivity","connectors","cli"],description:"Using the CLI to properly test and debug your connector in Identity Security Cloud",slug:"/connectivity/saas-connectivity/in-depth/cli-advanced",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"API Calls",permalink:"/docs/connectivity/saas-connectivity/in-depth/api-calls"},next:{title:"Connector Timeouts",permalink:"/docs/connectivity/saas-connectivity/in-depth/connector-timeouts"}},d={},l=[{value:"Use provided CLI invoke calls",id:"use-provided-cli-invoke-calls",level:2},{value:"Use sail conn invoke raw",id:"use-sail-conn-invoke-raw",level:2}],r={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the CLI to invoke a number of calls in Identity Security Cloud, including calls that aren't specifically defined by the CLI. This section includes examples that show how you can invoke those calls: "),(0,o.kt)("h2",{id:"use-provided-cli-invoke-calls"},"Use provided CLI invoke calls"),(0,o.kt)("p",null,"To find commands supported by the CLI, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sail conn invoke -h")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Available Commands:\n  account-create          Invoke a std:account:create command\n  account-delete          Invoke a std:account:delete command\n  account-discover-schema Invoke a std:account:discover-schema command\n  account-list            Invoke a std:account:list command\n  account-read            Invoke a std:account:read command\n  account-update          Invoke a std:account:update command\n  change-password         Invoke a change-password command\n  entitlement-list        Invoke a std:entitlement:list command\n  entitlement-read        Invoke a std:entitlement:read command\n  raw                     Invoke a raw command\n  source-data-discover    Invoke a std:source-data:discover command\n  source-data-read        Invoke a std:source-data:read command\n  test-connection         Invoke a std:test-connection command\n")),(0,o.kt)("p",null,"To understand the required parameters to invoke a command from the CLI, you can use the help command to get a list of required parameters. For example, to read an account using the CLI, first call ",(0,o.kt)("inlineCode",{parentName:"p"},"sail conn invoke account-read -h"),". The CLI will respond with the required input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Usage:\n  sail connectors invoke account-read [id/lookupId] [uniqueId] [flags]\n\nFlags:\n  -h, --help            help for account-read\n      --schema string   Optional - Custom account schema\n\nGlobal Flags:\n      --config-json string     Config JSON to use for commands\n  -p, --config-path string     Path to config to use for commands\n  -e, --conn-endpoint string   Override connectors endpoint (default "/beta/platform-connectors")\n      --debug                  Enable debug logging\n      --env string             Environment to use for SailPoint CLI commands\n  -c, --id string              Connector ID or Alias\n  -v, --version string         Optional. Run against a specific version if provided. Otherwise run against the latest tag.\n')),(0,o.kt)("p",null,"In this case, you need to provide the connector ID, the config path that contains the necessary configuration for the connector, and the ID for the account. "),(0,o.kt)("p",null,"The config file will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{    \n    "apiKey": "<API_KEY>",\n    "airtableBase": "<BASE_ID>"\n}\n')),(0,o.kt)("p",null,"The command to invoke account-read will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn invoke account-read philip.ellis -c 4b12cf79-b2ac-44ac-842b-b5a6268548f5 -p config.json\n")),(0,o.kt)("h2",{id:"use-sail-conn-invoke-raw"},"Use sail conn invoke raw"),(0,o.kt)("p",null,"Even if a command isn't supported by the CLI, you can still invoke it. The ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke raw")," command allows you to specify the entire JSON object used to invoke the command. "),(0,o.kt)("p",null,"You can use the Postman collection as a way to build the JSON object needed to invoke the command. For example, if you want to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-disable")," command, you can create a JSON object with the required fields. If you look at this example, you will see that it closely resembles the same information that is sent when debugging the command using Postman:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "type": "std:account:disable",\n    "input": {\n        "key": {"simple": { "id": "philip.ellis"}}\n    }\n}\n')),(0,o.kt)("p",null,"Running the ",(0,o.kt)("inlineCode",{parentName:"p"},"raw")," command is similar to running the other commands, except now you pass the JSON file created earlier with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sail conn invoke raw -c 4b12cf79-b2ac-44ac-842b-b5a6268548f5 -f account-disable.json -p config.json\n")))}u.isMDXComponent=!0}}]);