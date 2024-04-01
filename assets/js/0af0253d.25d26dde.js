"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[97620],{80949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=a(87462),s=(a(67294),a(3905));const r={id:"powershell-sdk-patch",title:"Updating resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","update"],description:"Learn how to update resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/update",tags:["SDK"]},n=void 0,l={unversionedId:"tools/sdk/powershell/powershell-sdk-patch",id:"tools/sdk/powershell/powershell-sdk-patch",title:"Updating resources with the PowerShell SDK",description:"Learn how to update resources using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/updating-resources.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/update",permalink:"/docs/tools/sdk/powershell/update",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/updating-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:3,frontMatter:{id:"powershell-sdk-patch",title:"Updating resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","update"],description:"Learn how to update resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/update",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/create"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/delete"}},p={},d=[],i={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,o.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the SDK to update resources. These cmdlets will typically start with the ",(0,s.kt)("inlineCode",{parentName:"p"},"Update")," keyword."),(0,s.kt)("p",null,"To see a list of available create cmdlets, run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},'Get-Command -Module PSSailpoint | where-object {$_.name -like "*Update-*" } | Sort-Object Name | Get-Help | Format-Table Name, Synopsis\n')),(0,s.kt)("p",null,"The SDK returns this output (all beta endpoints are designated by the Beta prefix): "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"Name                        Synopsis\n----                        --------\nUpdate-AccessProfile        Patch a specified Access Profile\nUpdate-Account              Update Account\nUpdate-AuthOrgNetworkConfig Update security network configuration.\nUpdate-AuthUser             Auth User Update\nUpdate-BetaAccessProfile    Patch a specified Access Profile\nUpdate-BetaAccount          Update Account\nUpdate-BetaCampaign         Update a Campaign\nUpdate-BetaCampaignTemplate Update a Campaign Template\nUpdate-BetaCommonAccessSta\u2026 Bulk update common access status\nUpdate-BetaConnectorRule    Update a Connector Rule\nUpdate-BetaEntitlement      Patch an entitlement\nUpdate-BetaEntitlementsInB\u2026 Bulk update an entitlement list\nUpdate-BetaEntitlementsPot\u2026 Edit entitlements for a potential rol\u2026\nUpdate-BetaFormDefinition   Patch a form definition.\nUpdate-BetaFormInstance     Patch a form instance.\nUpdate-BetaIdentityProfile  Update the Identity Profile\nUpdate-BetaLifecycleStates  Update Lifecycle State\n...\n")),(0,s.kt)("p",null,"Here is an example update WorkGroup script which will update the description for the previously created Workgroup from ",(0,s.kt)("a",{parentName:"p",href:"/docs/tools/sdk/powershell/create"},"Create a Resource"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},'$WorkGroup = Get-BetaWorkgroups -Filters \'name eq "DB Access Governance Group"\'\n\n$WorkGroupUpdate = [PSCustomObject]@{\n    op = "replace"\n    path = "/description"\n    value =  "This is an updated description for the workgroup."\n}\n\nUpdate-BetaWorkgroup -Id $WorkGroup.id -JsonPatchOperation $WorkGroupUpdate\n')),(0,s.kt)("p",null,"The updated WorkGroup will be returned by the SDK:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"Name                           Value\n----                           -----\ndescription                    This is an updated description for the workgroup.\nowner                          {[displayName, Brian Mendoza], [emailAddress, ], [type, IDENTITY], [id, 0003c25c365e492381d4e557b6159f9b]\u2026}\nmemberCount                    0\nconnectionCount                0\nid                             a241d625-d948-4c41-839e-869b790837a1\nname                           DB Access Governance Group\ncreated                        12/1/2023 5:39:23 PM\nmodified                       12/1/2023 5:39:23 PM\n")))}u.isMDXComponent=!0}}]);