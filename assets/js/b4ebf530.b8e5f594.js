"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[9179],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6118:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:5},l={unversionedId:"commands/Logging",id:"commands/Logging",isDocsHomePage:!1,title:"Logging",description:"Sometimes it is useful for debugging to see HTTP traffic between Monaco and the Dynatrace API. This is possible by specifying a log file via the MONACOREQUESTLOG and MONACORESPONSELOG env variables.",source:"@site/docs/commands/Logging.md",sourceDirName:"commands",slug:"/commands/Logging",permalink:"/dynatrace-monitoring-as-code/next/commands/Logging",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/commands/Logging.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Download configuration",permalink:"/dynatrace-monitoring-as-code/next/commands/downloading-configuration"},next:{title:"Deploy configuration",permalink:"/dynatrace-monitoring-as-code/next/configuration/deploy_configuration"}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes it is useful for debugging to see HTTP traffic between Monaco and the Dynatrace API. This is possible by specifying a log file via the ",(0,i.kt)("inlineCode",{parentName:"p"},"MONACO_REQUEST_LOG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MONACO_RESPONSE_LOG")," env variables."),(0,i.kt)("p",null,"The specified file can be relative or absolute. If relative, then it will be located relative to the current working dir."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If the file already exists, it will get ",(0,i.kt)("strong",{parentName:"p"},"truncated!"))),(0,i.kt)("p",null,"To specify the log file, set the environment variable and Monaco will start writing all send requests to the file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," MONACO_REQUEST_LOG=request.log MONACO_RESPONSE_LOG=response.log monaco -e environment project\n")),(0,i.kt)("p",null,"The content of multipart post requests is currently not logged. This is a known limitation."))}p.isMDXComponent=!0}}]);