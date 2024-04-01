"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88771],{6775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={id:"rule-utility",title:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",pagination_label:"Identity Security Cloud Rule Utility",sidebar_label:"Identity Security Cloud Rule Utility",sidebar_position:4,sidebar_class_name:"ruleUtility",keywords:["rule","utility"],description:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",slug:"/extensibility/rules/rule-utility",tags:["Rules"]},o=void 0,s={unversionedId:"extensibility/rules/rule-utility",id:"extensibility/rules/rule-utility",title:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",description:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",source:"@site/docs/extensibility/rules/idn_rule_utility.md",sourceDirName:"extensibility/rules",slug:"/extensibility/rules/rule-utility",permalink:"/docs/extensibility/rules/rule-utility",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/idn_rule_utility.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711983599,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:4,frontMatter:{id:"rule-utility",title:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",pagination_label:"Identity Security Cloud Rule Utility",sidebar_label:"Identity Security Cloud Rule Utility",sidebar_position:4,sidebar_class_name:"ruleUtility",keywords:["rule","utility"],description:"Using ISCRuleUtil as a Wrapper for Common Rule Operations",slug:"/extensibility/rules/rule-utility",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Web Services Before Operation Rule",permalink:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule"},next:{title:"Java Docs",permalink:"/docs/extensibility/rules/java-docs"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Configuration of Search Attributes within Identity Security Cloud",id:"configuration-of-search-attributes-within-identity-security-cloud",level:2},{value:"Create the New Search Attribute in Identity Security Cloud",id:"create-the-new-search-attribute-in-identity-security-cloud",level:3},{value:"Create Rules that Can Be Used to Query the Newly Created Attribute values",id:"create-rules-that-can-be-used-to-query-the-newly-created-attribute-values",level:2},{value:"Implement Rules within the Create Profile Section of Each Source for an Acount is Being Provisioned For",id:"implement-rules-within-the-create-profile-section-of-each-source-for-an-acount-is-being-provisioned-for",level:2},{value:"IdnRuleUtil.java Descriptors",id:"idnruleutiljava-descriptors",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Get an Entitlement Description",id:"get-an-entitlement-description",level:3},{value:"Check whether an accountID is Unique",id:"check-whether-an-accountid-is-unique",level:3},{value:"Get the Name of the Identity Matching a Specific Account Search Result",id:"get-the-name-of-the-identity-matching-a-specific-account-search-result",level:3},{value:"Get Multiple Attributes from the First Account Retreived From a Source",id:"get-multiple-attributes-from-the-first-account-retreived-from-a-source",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Use this guide to learn how to configure searchable account attributes within Identity Security Cloud and then leverage them within the ISCRuleUtil wrapper class when searching accounts for attributes such as uniqueness checks. There are also methods in the ISCRuleUtil wrapper class you can use without the additional searchable attributes."),(0,i.kt)("p",null,"Search attributes allow you to search across accounts and sources to determine whether a specific attribute value is being used in your Identity Security Cloud environment."),(0,i.kt)("p",null,"There are three critical components involves with working with searchable attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-of-search-attributes-within-identitynow"},"Configuration of search attributes within Identity Security Cloud"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Seed data for accounts already aggregated into the system."),(0,i.kt)("li",{parentName:"ul"},"Ensure attribute promotion happens for new/changed accounts that are aggregated."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-rules-that-can-be-used-to-query-the-newly-created-attribute-values"},"Create rules that can be used to query the newly created attribute values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#implement-rules-within-the-create-profile-section-of-each-source-for-which-an-account-is-being-provisioned"},"Implement rules within the Create Profile section of each source an account is being provisioned for"))),(0,i.kt)("h2",{id:"configuration-of-search-attributes-within-identity-security-cloud"},"Configuration of Search Attributes within Identity Security Cloud"),(0,i.kt)("p",null,"When you are planning to implement search attributes, it is important that you consider the way new accounts' values will be generated and which attributes should be used as references."),(0,i.kt)("p",null,"You need the following information to create search attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IDs for sources that will be searched.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Attribute name for each source that will be searched (such as mail, email, emailAddress).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unique name for the new attribute that will become common to all accounts in the account search configuration (e.g., newMail, newEmail, newEmailAddress).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Display name for the new attribute configuration."))),(0,i.kt)("p",null,"The following example shows how to create a new attribute with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/beta/create-search-attribute-config"},"Search Attributes API"),":"),(0,i.kt)("p",null,"Your company has two sources. The first is Active Directory, and the second is Workday. When the system aggregates new accounts, the company wants to query Identity Security Cloud to see whether an email address already exists. If the email address is not in use, you can assign it to the new account. If it is in use, you can iterate on the email address value (add a 1 for example). You can then query Identity Security Cloud once more to see whether your incremented email address is in use. You can repeat this procedure until you have determined that an email address is unique."),(0,i.kt)("p",null,"The following information is necessary to create your search attribute:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IDs for sources that will be searched:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Active Directory: ",(0,i.kt)("inlineCode",{parentName:"li"},"4028112837fe14c70177fe1955e9032c")),(0,i.kt)("li",{parentName:"ul"},"Workday: ",(0,i.kt)("inlineCode",{parentName:"li"},"4028812877fa18c72177fs195baa0341")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Attribute name on each source that will be searched (such as mail, email, emailAddress):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Active Directory: ",(0,i.kt)("inlineCode",{parentName:"li"},"mail")),(0,i.kt)("li",{parentName:"ul"},"Workday: ",(0,i.kt)("inlineCode",{parentName:"li"},"emailAddress")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unique name for the new attribute that will become common to all accounts in the account search configuration (e.g., newMail, newEmail, newEmailAddress):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promotedEmailAddress")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Display name for the new attribute configuration:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promoted Email Address"))))),(0,i.kt)("h3",{id:"create-the-new-search-attribute-in-identity-security-cloud"},"Create the New Search Attribute in Identity Security Cloud"),(0,i.kt)("p",null,"To call the APIs for search attributes, you need a personal access token and the name of your tenant to provide with the request. To retrieve a personal access token, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/authentication#personal-access-tokens"},"Personal Access Tokens"),". To get the name of your tenant, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/getting-started#find-your-tenant-name"},"Finding Your Organization Tenant Name")),(0,i.kt)("p",null,"Doing so creates an account search configuration for the two sources/attributes specified. All new/changed accounts that are aggregated have this new attribute(\u201cpromotedEmailAddress\u201d) created in the account schema and the value of the attribute(\u201cmail\u201d or \u201cemailAddress\u201d), depending on the source, is promoted to that new attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request POST \'https://{tenant}.api.identitynow.com/beta/accounts/search-attribute-config\' \\\n--header \'Authorization: Bearer {token}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "name": "promotedEmailAddress",\n  "displayName": "Promoted Email Address",\n  "applicationAttributes":\n    {\n      "4028112837fe14c70177fe1955e9032c": "mail",\n      "4028812877fa18c72177fs195baa0341": "emailAddress"\n    }\n}\'\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Aggregation only processes new and/or changed accounts for many sources. If an account is unchanged, an aggregation will not seed the new attribute or its value for this account. Therefore, it is mandatory that a non-optimized aggregation be performed when an account search configuration is created/modified for each source involved in that configuration.")),(0,i.kt)("p",null,"If this source has already been aggregated before the account search configuration was created, a non-optimized aggregation must now be performed to seed the new attribute data for all existing accounts."),(0,i.kt)("p",null,"At this point, the configuration exists to promote attributes on any new/changed account that comes into Identity Security Cloud. These attributes and their associated values are stored for use in custom rules. Each account that exists on either of these sources will now have a new attribute called \u201cpromotedEmailAddress\u201d. ",(0,i.kt)("em",{parentName:"p"},"The value of this attribute will be the value of ",(0,i.kt)("inlineCode",{parentName:"em"},"mail")," if it is the Active Directory Source or ",(0,i.kt)("inlineCode",{parentName:"em"},"emailAddress")," if it is the Workday source.")),(0,i.kt)("h2",{id:"create-rules-that-can-be-used-to-query-the-newly-created-attribute-values"},"Create Rules that Can Be Used to Query the Newly Created Attribute values"),(0,i.kt)("p",null,"To access the promoted attribute data mentioned in the above section, you can use library methods that have been implemented to allow access to that data. There are two methods that have been implemented:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Count the accounts that match the searchable attribute and value.\n *\n * @param sourceIds The list of application IDs that represent the sources of the data.\n * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n * @param operation The operation to use when matching, it will either be Operation.Equal OR Operation.StartsWith\n * @param values The value of that searchable attribute to math.  The value parameter is required.\n *\n * @return The number of accounts that match the parameters provided.\n */\npublic int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Get the identity name for the account matching the specified criteria.\n *\n * @param sourceIds The list of application IDs that represent the sources of the data.\n * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.\n * @param values The value of that searchable attribute to math.  The value parameter is required.\n *\n * @return The name of the identity that matched the account that match the parameters provided.\n */\npublic String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)\n")),(0,i.kt)("p",null,"Each of these utility library methods are loaded into the context that is available from within your custom rule. It can be accessed by appending the prefix \u201cidn.\u201d to the method call."),(0,i.kt)("p",null,"Example: You want to use the promoted attribute data to determine an email address's uniqueness before using it to provision a new account to one of the sources involved in the account search configuration. You can call these methods to determine that uniqueness."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import sailpoint.object.*;\nimport java.util.*;\nimport sailpoint.rule.*;\nimport org.apache.commons.lang.StringUtils;\n\n     List SOURCE_IDS = new ArrayList(Arrays.asList(new String[]{"4028112837fe14c70177fe1955e9032c","4028812877fa18c72177fs195baa0341"}));\n     String PROMOTED_ATTR_NAME = "promotedEmailAddress";\n     String SEARCH_OP = "StartsWith"; //Can also use "Equals"\n     List SEARCH_VALUES = new ArrayList(Arrays.asList(new String[]{"jc@sailpoint.com"}));\n\n    //return matching accounts\n     return idn.attrSearchCountAccounts(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));\n\n     //In the event that the earlier call returns non-zero values, it is certain\n     //that an email value is already in use.  If it is required to\n     //know which identity owns the account with this value, you can call this method:\n     //idn.attrSearchGetIdentityName(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that there are two method calls within the earlier example rule.")),(0,i.kt)("p",null,"Calling the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"idn.attrSearchCountAccounts()"))," method with both example source IDs causes a search of all accounts for a value \u201cpromotedEmailAddress=",(0,i.kt)("a",{parentName:"p",href:"mailto:jc@sailpoint.com"},"jc@sailpoint.com"),"\u201d. The search returns the count of accounts containing that attribute value pair."),(0,i.kt)("p",null,"If ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"idn.attrSearchCountAccounts()"))," returns non-zero, it may be useful to determine which identity owns the account(s) containing that value. The ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"idn.attrSearchGetIdentityName()"))," method will return that identity name."),(0,i.kt)("h2",{id:"implement-rules-within-the-create-profile-section-of-each-source-for-an-acount-is-being-provisioned-for"},"Implement Rules within the Create Profile Section of Each Source for an Acount is Being Provisioned For"),(0,i.kt)("p",null,"Create Profile can be found at ",(0,i.kt)("strong",{parentName:"p"},"Admin")," > ",(0,i.kt)("strong",{parentName:"p"},"Connections")," > ",(0,i.kt)("strong",{parentName:"p"},"Source")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"SourceName")," > ",(0,i.kt)("strong",{parentName:"p"},"Accounts")," > ",(0,i.kt)("strong",{parentName:"p"},"Create Profile")),(0,i.kt)("p",null,"You can invoke rules in different ways, but one of the most common implementations involves binding it to the Create Profile. This results in the rule's being used to generate/check the values used during new account provisioning."),(0,i.kt)("p",null,"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"Generator")," is selected for the ",(0,i.kt)("inlineCode",{parentName:"p"},"distinguishedName")," attribute, a rule that invokes the provided library methods can be selected. This is an example of such a scenario:"),(0,i.kt)("p",null,"Through a lifecycle state change, an account needs to be provisioned to an Active Directory source."),(0,i.kt)("p",null,"When the provisioning plan is created, the rule that generates the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"distinguishedName")," is called. The rule invokes the library methods mentioned earlier to determine the uniqueness of the attribute. In this case it may do the following:"),(0,i.kt)("p",null,"Call ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"idn.attrSearchCountAccounts()"))," to determine whether any other accounts are using first.last as a distinguishedName. If a count of 1 or more is returned, the call can be retried with first.last+1. The call is repeated until a zero is returned. At that point, the value is unique and can be used. The value is returned to the calling rule."),(0,i.kt)("p",null,"In some cases where a non zero value is returned, it may be useful to know which identity owns the account that value belongs to. To find out this information, call ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"idn.attrSearchGetIdentityName()"))," to determine the identity in question."),(0,i.kt)("h2",{id:"idnruleutiljava-descriptors"},"IdnRuleUtil.java Descriptors"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'Both the normal SailPoint context passed into the Beanshell rule evaluation and the new IdnRuleUtil referenced here include an "Identity" class:'),(0,i.kt)("p",{parentName:"admonition"},"The SailPoint context Identity class is provided via ",(0,i.kt)("inlineCode",{parentName:"p"},"sailpoint.object.Identity")," The IdnRuleUtil Identity class is provided via ",(0,i.kt)("inlineCode",{parentName:"p"},"sailpoint.rule.Identity")," When referencing an Identity class, you must be explicit as to which Identity class you are using to avoid a namespace conflict. For example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'sailpoint.object.Identity identity = plan.getIdentity();\nString sAMAccountName = identity.getAttribute("adUsername");\n\nsailpoint.rule.Identity foundIdentity = idn.getIdentityById("uid");\nString email = foundIdentity.getAttribute("email");\n')),(0,i.kt)("p",null,"The below section provides a full accounting of the methods available to rule writers using the IdnRuleUtil class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Utility class containing methods customers can use within rules to perform common tasks.\n * IdnRuleUtil is available in rules as "idn" variable, e.g. "idn.countAccounts("someAppId")".\n * This utility class allows you to abstract out the use of SailPointContext in rules so you can one day not pass a\n * context to the rule at all.\n */\n\nimport sailpoint.object.Application;\nimport sailpoint.object.Attributes;\nimport sailpoint.object.Filter;\nimport sailpoint.object.Link;\nimport sailpoint.object.LinkExternalAttribute;\nimport sailpoint.object.ManagedAttribute;\nimport sailpoint.object.QueryOptions;\nimport sailpoint.rule.Account;\nimport sailpoint.rule.ManagedAttributeDetails;\nimport sailpoint.rule.RuleObjectFactory;\nimport sailpoint.tools.GeneralException;\nimport sailpoint.tools.Util;\n\nclass IdnRuleUtil {\n    /**\n     * Determines whether an account currently exists on an application using the native identity.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @return True if the account exists, false otherwise.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    boolean accountExistsByNativeIdentity(String applicationName, String nativeIdentity)\n\n\n\n    /**\n     * Determines if an account currently exists on an application using the display name.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param displayName The account\'s display name.\n     * @return True if the account exists, false otherwise.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    boolean accountExistsByDisplayName(String applicationName, String displayName)\n\n\n\n    /**\n     * Gets an account on an application using the native identity.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @return The account or null if not found. If more than one is found, the first\n     *         account in the exists is returned.\n     * @throws GeneralException wrapping underlying DB related errors\n     */\n    Account getAccountByNativeIdentity(String applicationName, String nativeIdentity)\n\n\n\n    /**\n     * Gets an account on an application using the display name.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param displayName The account\'s display name.\n     * @return The account or null if not found. If more than one is found, the first\n     *         account in the exists is returned.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    Account getAccountByDisplayName(String applicationName, String displayName)\n\n\n\n    /**\n    * Get the first account for the application and identityName and return the first account\'s native identity.\n    *\n    * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n    * @param identityName The identity name.\n    * @return The first link\'s nativeIdentity.\n    *\n    * @throws GeneralException wrapping underlying DB related errors.\n    */\n    public String getFirstAccountNativeIdentity(String applicationName, String identityName)\n\n    /**\n     * Counts the number of accounts on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @return The total number of accounts.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    int countAccounts(String applicationName)\n\n\n\n    /**\n     * Gets the value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    Object getRawAccountAttribute(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     */\n    Object getRawAccountAttribute(Account account, String attribute)\n\n\n\n    /**\n     * Gets the string value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n     String getAccountAttribute(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the string value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or null if the attribute does not exist.\n     */\n     String getAccountAttribute(Account account, String attribute)\n\n\n\n    /**\n     * Gets the boolean value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or false if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    boolean getAccountAttributeBool(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the boolean value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or false if the attribute does not exist.\n     */\n    boolean getAccountAttributeBool(Account account, String attribute)\n\n\n\n    /**\n     * Count the accounts that match the searchable attribute and value.\n     *\n     * @param sourceIds The list of application IDs that represent the sources of the data.\n     * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n     * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.\n     * @param values The list of values of the searchable attribute to match. The values parameter is required.\n     *\n     * @return The number of accounts matching the parameters provided.\n     * @throws IllegalStateException wrapping underlying errors\n     */\n    int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)\n\n\n\n    /**\n     * Get the identity name for the account matching the specified criteria.\n     *\n     * @param sourceIds The list of application IDs that represent the sources of the data\n     * @param attributeName  The name of the searchable account attribute. The name parameter is required.\n     * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.\n     * @param values The list of values of the searchable attribute to match. The values parameter is required.\n     *\n     * @return The name of the Identity that matched the account, matching the parameters provided.\n     * @throws IllegalStateException wrapping underlying errors\n     */\n    String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)\n\n\n\n    /**\n     * Gets the int value of an attribute from an account on an application.\n     *\n     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()\n     * @param nativeIdentity The account\'s native identity.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or zero if the attribute does not exist.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    int getAccountAttributeInt(String applicationName, String nativeIdentity, String attribute)\n\n\n\n    /**\n     * Gets the int value of an attribute from an account on an application.\n     *\n     * @param account The account on the application.\n     * @param attribute The name of the attribute to retrieve.\n     * @return The attribute value or zero if the attribute does not exist.\n     */\n    int getAccountAttributeInt(Account account, String attribute)\n\n\n\n    /**\n     * Finds the ManagedAttribute description by provided sourceId/name/value/type.\n     *\n     * @param sourceId The sourceId used to query the ManagedAttribute.\n     * @param name The name of the attribute used to query the ManagedAttribute.\n     * @param value The value of the attribute used to query the ManagedAttribute.\n     * @param type The type of attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).\n     *             Defaults to Entitlement (if null provided).\n     * @return ManagedAttribute\'s description if found or else null.\n     * @throws GeneralException wrapping underlying DB related errors.\n     */\n    String getManagedAttributeDescription(String sourceId, String name, String value, ManagedAttribute.Type type)\n\n\n\n    /**\n    * Finds the ManagedAttribute by sourceId/name/value/type and returns its details in ManagedAttributeDetails model.\n    *\n    * @param sourceId The sourceId used to query the ManagedAttribute.\n    * @param name The name of the attribute used to query the ManagedAttribute.\n    * @param value The value of the attribute used to query the ManagedAttribute.\n    * @param type The type of attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).\n    * Defaults to Entitlement (if null provided).\n    * @return ManagedAttributeDetails if found or else null.\n    * @throws GeneralException wrapping underlying DB related errors.\n    */\n    public ManagedAttributeDetails getManagedAttributeDetails(String sourceId, String name, String value, ManagedAttribute.Type type)\n\n\n\n   /**\n    * Fetch an identity by the internal ID.\n    *\n    * @param id The ID to use when fetching an identity object\n    * @return A DTO representing the Identity. It will throw if the identity is not found.\n    */\n    public sailpoint.rule.Identity getIdentityById(String id) ...\n\n\n\n    /**\n    * Find and return the users that match the incoming attributeName, operation, value ordered by\n    * the specified sortAttribute.\n    *\n    * @param attributeName The attribute to be searched. It must be searchable and non-null.\n    * @param operation The operation to be used when searching. It only allows Equals and StartsWith.\n    * @param value The value to match. It must be non-null.\n    * @param sortAttribute The attribute to be used when sorting.\n    * Default ordering is on uid if it is not specified and this also must be searchable.\n    * Sort is always be in ascending order.\n    *\n    * @return The list of users matching the passed in parameters. The max number of returned values is limited to 50.\n    *\n    * @throws IllegalStateException when attribute provided is not searchable,\n    * when the operation is not StartsWith or Equals,\n    * the sortAttribute is not searchable,\n    * or if there are issues during the search.\n    *\n    * @see #EQUALS_FILTER\n    * @see #STARTS_WITH_FILTER\n    */\n    public List<sailpoint.rule.Identity> findIdentitiesBySearchableIdentityAttribute(String attributeName, String operation,\nString value, String sortAttribute)\n\n\n\n    /**\n    * Count and return the number of users matching the incoming attributeName, operation and value.\n    *\n    * @param attributeName The attribute to be searched. It must be searchable and non-null.\n    * @param operation The operation to be used when searching. It only allows Equals and StartsWith.\n    * @param value The value to match. It must be non-null.\n    *\n    * @return The number of identities matching the parameters.\n    *\n    * @throws IllegalStateException when attribute provided is not searchable,\n    * when the operation is not StartsWith or Equals,\n    * or if there are issues during the count operation.\n    *\n    * @see #EQUALS_FILTE\n    * @see #STARTS_WITH_FILTER\n    */\n    public int countIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, String value)\n}\n\n    /**\n    * Use this method to call LDAP type connectors to look for \n    * unique values. This method calls the connector with a specific search filter\n    * based on the attributeName and value passed into the method.\n    * Any returned value is considered non-unique.\n    * \n    * @param identityNameOrId The name or ID of the identity you are using\n    * @param applicationNameOrId The name or ID of the source you are targeting\n    * @param attributeName The name of the attribute you want to validate\n    * @param attributeValue The value of the attribute you want to validate\n    * \n    * @return true if the value is unique AND false otherwise. If the application or identity can\'t be found, an\n    * IllegalStateException will be thrown.\n    * \n    */\n    public boolean isUniqueLDAPValue(String identityNameOrId, String applicationNameOrId, String attributeName, String attributeValue)\n')),(0,i.kt)("h2",{id:"example-usage"},"Example Usage"),(0,i.kt)("h3",{id:"get-an-entitlement-description"},"Get an Entitlement Description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\n/*\n  * In Before Provisioning rules (where this will likely be used), the source being provisioned to\n  * is passed in by the "application" variable. You can use this to get sourceId using application.getId().\n  * e.g. String sourceId = application.getId();\n*/\nString entitlementDescription = idn.getManagedAttributeDescription(sourceId, attributeName, attributeValue, Type.Entitlement);\n')),(0,i.kt)("h3",{id:"check-whether-an-accountid-is-unique"},"Check whether an accountID is Unique"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\n/*\n  * In Attribute Generator rules (where this will likely be used), the source being provisioned to\n  * is passed in by the "application" variable. You can use this to get applicationName using application.getName().\n  * e.g. String applicationName = application.getName();\n*/\nboolean exists = idn.accountExistsByNativeIdentity(applicationName, nativeIdentity);\n')),(0,i.kt)("h3",{id:"get-the-name-of-the-identity-matching-a-specific-account-search-result"},"Get the Name of the Identity Matching a Specific Account Search Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\nString identityName = idn.attrSearchGetIdentityName(sourceIdsAsList, attributeName, Operation.Equal, valuesToMatchAsList);\n')),(0,i.kt)("h3",{id:"get-multiple-attributes-from-the-first-account-retreived-from-a-source"},"Get Multiple Attributes from the First Account Retreived From a Source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.\n//Account objects are used with the import statement import sailpoint.rule.Account;\nAccount acct = idn.getFirstAccount("HR [source]", identity.getName());\nMap acctAttrs = acct.getAttributes();\nString firstName = acctAttrs.get("First Name");\nString lastName = acctAttrs.get("Last Name");\n')))}h.isMDXComponent=!0}}]);