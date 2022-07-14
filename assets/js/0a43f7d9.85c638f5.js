"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[6020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},664:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={id:"intro",sidebar_position:1,title:"What is Monaco?",slug:"/"},a={unversionedId:"intro",id:"version-1.6.0/intro",isDocsHomePage:!1,title:"What is Monaco?",description:"Monaco is CLI tool that automates deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.",source:"@site/versioned_docs/version-1.6.0/intro.md",sourceDirName:".",slug:"/",permalink:"/dynatrace-monitoring-as-code/1.6.0/",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.6.0/intro.md",version:"1.6.0",sidebarPosition:1,frontMatter:{id:"intro",sidebar_position:1,title:"What is Monaco?",slug:"/"},sidebar:"version-1.6.0/tutorialSidebar",next:{title:"Install Monaco",permalink:"/dynatrace-monitoring-as-code/1.6.0/installation"}},l=[{value:"Why monaco?",id:"why-monaco",children:[]},{value:"Features",id:"features",children:[]}],s={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Monaco is CLI tool that automates deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments."),(0,r.kt)("h2",{id:"why-monaco"},"Why monaco?"),(0,r.kt)("p",null,"Configuring monitoring and observability is both hard and time consuming to do at scale. Monaco provides self-service capabilities\ntht enable Application teams to set up and configure Monitoring and Alerting without causing manual work for the team responsible for monitoring."),(0,r.kt)("p",null,"With Monaco, developers can define what to monitor and what to be alerted on by merely checking a monitoring configuration file into version control\nalong with the application source code.\nWith the next commit or Pull Request, the code gets built and deployed and the developers automatically get the monitoring dashboards and alerting notifications.\nThis self-service model ensures that teams can focus more time on building business services.\nMonaco eliminates the need to build a custom monitoring solution that fits into a team's development process and mindset."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Templatize configuration for reusability across multiple environments"),(0,r.kt)("li",{parentName:"ul"},"Handle Interdependencies between configurations without tracking unique identifiers"),(0,r.kt)("li",{parentName:"ul"},"The same configuration can easily be applied (and updated) to hundreds of Dynatrace environments, or can be rolled out only to specific environments"),(0,r.kt)("li",{parentName:"ul"},"Provides an easy way to promote application specific configurations from one environment to another, following their deployments from development to hardening to production"),(0,r.kt)("li",{parentName:"ul"},"Supports all the mechanisms and best-practices of Git-based workflows such as pull requests, approvals, and merging"),(0,r.kt)("li",{parentName:"ul"},"Allows configurations to be easily promoted from one environment to another following their deployment from development to hardening to production")),(0,r.kt)("p",null,"To get started, install the tool:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/dynatrace-monitoring-as-code/1.6.0/installation"},"Installation")))}c.isMDXComponent=!0}}]);