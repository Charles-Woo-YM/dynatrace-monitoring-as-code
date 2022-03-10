"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[4781],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5731:function(e,n,t){t.r(n),t.d(n,{default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={sidebar_position:3},s={unversionedId:"configuration/configuration_structure",id:"configuration/configuration_structure",isDocsHomePage:!1,title:"Configuration structure",description:"Configuration files are ordered by project in the projects folder. Project folders can only contain:",source:"@site/docs/configuration/configuration_structure.md",sourceDirName:"configuration",slug:"/configuration/configuration_structure",permalink:"/dynatrace-monitoring-as-code/next/configuration/configuration_structure",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/configuration/configuration_structure.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Environments file",permalink:"/dynatrace-monitoring-as-code/next/configuration/environments_file"},next:{title:"Configuration YAML structure",permalink:"/dynatrace-monitoring-as-code/next/configuration/yaml_config"}},c=[{value:"Config JSON Templates",id:"config-json-templates",children:[{value:"Dashboard JSON",id:"dashboard-json",children:[]},{value:"Calculated log metrics JSON",id:"calculated-log-metrics-json",children:[]},{value:"Conditional naming JSON",id:"conditional-naming-json",children:[]},{value:"Configuration types / APIs",id:"configuration-types--apis",children:[]}]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Configuration files are ordered by ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," in the projects folder. Project folders can only contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"configurations"),(0,r.kt)("li",{parentName:"ul"},"other project(s)")),(0,r.kt)("p",null,"This means it is possible to group projects into folders, but combining projects and configurations in the same folder is not supported."),(0,r.kt)("p",null,"There are no restriction for the depth of a projects tree."),(0,r.kt)("p",null,"To get an idea of the possible combinations take a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd/monaco/test-resources/integration-multi-project"),"."),(0,r.kt)("h2",{id:"config-json-templates"},"Config JSON Templates"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," files that can be uploaded with this tool are the JSON objects that the respective Dynatrace APIs accept/return."),(0,r.kt)("p",null,"Adding a new config is generally done via the Dynatrace UI - unless you know the config JSON structures well enough to prefer writing them."),(0,r.kt)("p",null,"Configs can then be downloaded via the respective GET endpoint defined in the Dynatrace Configuration API, and should be cleaned up for auto-deployment."),(0,r.kt)("p",null,"Checked in configuration should ",(0,r.kt)("strong",{parentName:"p"},"not")," include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The entity's ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," but only its ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),". The entity may be created or updated if one of the same name exists.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," must be defined as ",(0,r.kt)("a",{parentName:"li",href:"#configuration-yaml-structure"},"a variable"),"."))),(0,r.kt)("li",{parentName:"ul"},"Hardcoded values for environment information such as references to other auto-deployed entities, tags, management-zones, etc.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These should all be referenced as variables as ",(0,r.kt)("a",{parentName:"li",href:"#referencing-other-configurations"},"described below"),"."))),(0,r.kt)("li",{parentName:"ul"},"Empty/null values that are optional to the creation of an object.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Most API GET endpoints return more data than needed to create an object. Many of those fields are empty or null, and can be omitted."),(0,r.kt)("li",{parentName:"ul"},"E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"tileFilter"),"s on dashboards")))),(0,r.kt)("p",null,"The tool handles these files as templates, so you can use the following variable format inside the config JSON: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{ .variable }}\n")),(0,r.kt)("p",null,"Variables present in the template need to be defined in the respective config ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," - ",(0,r.kt)("a",{parentName:"p",href:"../configuration/yaml_config"},"see 'Configuration YAML Structure'"),"."),(0,r.kt)("h3",{id:"dashboard-json"},"Dashboard JSON"),(0,r.kt)("p",null,"When you create a dashboard in the Dynatrace UI it will be private by default. All the dashboards deployed for Monaco need to be shared publicly with other users."),(0,r.kt)("p",null,"You can change this in the dashboard settings, or by just changing your checked in ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file."),(0,r.kt)("p",null,"We recommend the following values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboardMetadata"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' "dashboardMetadata": {\n    "name": "{{ .name }}",\n    "shared": true,\n    "sharingDetails": {\n      "linkShared": true,\n      "published": true\n    },\n    "dashboardFilter": {\n      "timeframe": "",\n      "managementZone": {\n        "id": "{{ .managementZoneId }}",\n        "name": "{{ .managementZoneName }}"\n      }\n    }\n  }\n')),(0,r.kt)("p",null,"This config does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference the name of the Dashboard as a ",(0,r.kt)("a",{parentName:"li",href:"../configuration/yaml_config"},"variable")),(0,r.kt)("li",{parentName:"ul"},"Share the dashboard with other users"),(0,r.kt)("li",{parentName:"ul"},"Set a management zone filter on the complete dashboard, again as a variable, most likely ",(0,r.kt)("a",{parentName:"li",href:"../configuration/yaml_config#referencing-other-configurations"},"referenced from another config"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Filtering the whole dashboard by management zone makes sure no private data is accidentally picked up on tiles, and removes the possible need to define filters for individual tiles")))),(0,r.kt)("p",null,"From Dynatrace version 208 onwards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A dashboard configuration must have a property ownner. The property owner in dashboardMetadata is mandatory and must contain a not null value."),(0,r.kt)("li",{parentName:"ul"},"The property sharingDetails in dashboardMetadata is not present anymore.")),(0,r.kt)("h3",{id:"calculated-log-metrics-json"},"Calculated log metrics JSON"),(0,r.kt)("p",null,"There is a know drawback to Monaco's workaround to the slightly off-standard API for Calculated Log Metrics, which needs you to follow specific naming conventions for your configuration: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you create custom log metrics, your configuration's ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," needs to be the ",(0,r.kt)("inlineCode",{parentName:"p"},"metricKey")," of the log metric. ")),(0,r.kt)("p",null,"Additionally it is possible that a configuration upload fails when a metric configuration is newly created and an additional configuration depends on the new log metric. To work around this, set both ",(0,r.kt)("inlineCode",{parentName:"p"},"metricKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"displayName")," to the same value. "),(0,r.kt)("p",null,"You will thus need to reference at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"metricKey")," of the log metric as ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .name }}")," in the JSON file, as you can see below: "),(0,r.kt)("p",null,"In the configuration YAML,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nsome-log-metric-config:\n  - name: "cal.log:this-is-some-metric"\n')),(0,r.kt)("p",null,"and in the corresponding JSON: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metricKey": "{{ .name }}",\n  "active": true,\n  "displayName": "{{ .name }}",\n  ...\n}\n')),(0,r.kt)("h3",{id:"conditional-naming-json"},"Conditional naming JSON"),(0,r.kt)("p",null,"As there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," parameter in conditional naming API you should map ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .name }}")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"displayName"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "PROCESS_GROUP",\n  "nameFormat": "Test naming PG for {Host:DetectedName}",\n  "displayName": "{{ .name }}",\n  ...\n}\n')),(0,r.kt)("p",null,"This also applies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "HOST",\n  "nameFormat": "Test - {Host:DetectedName}",\n  "displayName": "{{ .name }}",\n  ...\n}\n')),(0,r.kt)("p",null,"And it also applies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVICE")," type. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "SERVICE",\n  "nameFormat": "{ProcessGroup:KubernetesNamespace} - {Service:DetectedName}",\n  "displayName": "{{ .name }}",\n  ...\n}\n')),(0,r.kt)("h3",{id:"configuration-types--apis"},"Configuration types / APIs"),(0,r.kt)("p",null,"Each type of folder must contain one ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration yaml")," and one or more JSON files containing the actual configuration sent to the Dynatrace API.\nThe folder name is case-sensitive and needs to be written exactly as in its definition in ",(0,r.kt)("a",{parentName:"p",href:"../configuration/configTypes_tokenPermissions"},"Supported configuration types"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"projects/\n        {projectname}/\n                     {configuration type}/\n                                         config.yaml\n                                         config1.json\n                                         config2.json\n")))}p.isMDXComponent=!0}}]);