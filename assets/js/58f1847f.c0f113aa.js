"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[268],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(n),u=r,g=k["".concat(d,".").concat(u)]||k[u]||N[u]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5883:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},l={unversionedId:"configuration/configTypes_tokenPermissions",id:"version-1.8.1/configuration/configTypes_tokenPermissions",isDocsHomePage:!1,title:"Configuration types and token permissions",description:"These are the supported configuration types, their API endpoints and the token permissions required for interacting with any of endpoint.",source:"@site/versioned_docs/version-1.8.1/configuration/configTypes_tokenPermissions.md",sourceDirName:"configuration",slug:"/configuration/configTypes_tokenPermissions",permalink:"/dynatrace-monitoring-as-code/configuration/configTypes_tokenPermissions",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.8.1/configuration/configTypes_tokenPermissions.md",version:"1.8.1",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Delete configuration",permalink:"/dynatrace-monitoring-as-code/configuration/delete_config"},next:{title:"Add a new API",permalink:"/dynatrace-monitoring-as-code/Guides/add_new_api"}},o=[],d={toc:o};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These are the supported configuration types, their API endpoints and the token permissions required for interacting with any of endpoint."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"Token Permission(s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alerting-profile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/alertingProfiles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-metrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/metricEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-disks"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/diskEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowed-beacon-origins ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/allowedBeaconOriginsForCors")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-applications ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/applications")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-aws ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/aws")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-database-services ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/databaseServices")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-hosts ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/hosts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-metrics"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/metricEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-services ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/services")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anomaly-detection-vmware ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/anomalyDetection/applications")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app-detection-rule"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/applicationDetectionRules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app-detection-rule-host ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/applicationDetectionRules/hostDetection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"application ",(0,r.kt)("strong",{parentName:"td"},"deprecated in 2.0.0!")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/applications/web")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"application-web ",(0,r.kt)("strong",{parentName:"td"},"replaces application")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/applications/web")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"application-mobile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/applications/mobile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto-tag"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/autoTags")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws-credentials"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/aws/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"azure-credentials"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/azure/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated-metrics-application-mobile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/calculatedMetrics/mobile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated-metrics-application-web"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/calculatedMetrics/rum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated-metrics-log"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/calculatedMetrics/log")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated-metrics-service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/calculatedMetrics/service")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculated-metrics-synthetic"),(0,r.kt)("td",{parentName:"tr",align:null},"_/api/config/v1/calculatedMetrics/synthetic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditional-naming-host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/conditionalNaming/host")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditional-naming-processgroup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/conditionalNaming/processGroup")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditional-naming-service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/conditionalNaming/service")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-resources ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/contentResources")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"credential-vault"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Credential Vault Entries")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Credential Vault Entries"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom-service-java"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/java")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom-service-dotnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/dotnet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom-service-go"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/go")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom-service-nodejs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/nodejs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom-service-php"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/customServices/php")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/dashboards")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data-privacy ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/dataPrivacy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DataPrivacy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/extensions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension-elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/extensions/dynatrace.python.elasticsearch/global")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failure-detection-parametersets"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/failureDetection/parameterSelection/parameterSets")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failure-detection-rules"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/failureDetection/parameterSelection/rules")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frequent-issue-detection ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/frequentIssueDetection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"geo-ip-address-mappings ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/geographicRegions/ipAddressMappings")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"geo-ip-detection-headers ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/geographicRegions/ipDetectionHeaders")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hosts-auto-update ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/hosts/autoupdate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubernetes-credentials"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/kubernetes/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maintenance-window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/maintenanceWindows")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuratio"),"  & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"management-zone"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/managementZones")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/notifications")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reports"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/reports")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request-attributes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/requestAttributes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Capture request data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request-naming-service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/requestNaming")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/v2/slo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read SLO")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write SLOs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-detection-full-web-request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/detectionRules/FULL_WEB_REQUEST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-detection-full-web-service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/detectionRules/FULL_WEB_SERVICE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-detection-opaque-web-request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-detection-opaque-web-service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service-resource-naming ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"SINGLE CONFIGURATION ENDPOINT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/config/v1/service/resourceNaming")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Read Configuration")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Write Configuration"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"synthetic-location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/v1/synthetic/locations")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Access problem and event feed, metrics, and topology")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"Create and read synthetic monitors, locations, and nodes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"synthetic-monitor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/api/v1/synthetic/monitors")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Create and read synthetic monitors, locations, and nodes"))))),(0,r.kt)("p",null,"For reference, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.dynatrace.com/support/help/dynatrace-api/basics/dynatrace-api-authentication"},"this")," page for a detailed\ndescription to each token permission."),(0,r.kt)("p",null,"If your desired API is not in the table above, please consider adding it by following the instructions in ",(0,r.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/Guides/add_new_api"},"How to add new APIs"),"."))}p.isMDXComponent=!0}}]);